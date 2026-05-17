import { NextRequest, NextResponse } from 'next/server'
import FormData from 'form-data'
import axios from 'axios'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.REMOVE_BG_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    // Parse the incoming multipart form data
    const incomingFormData = await request.formData()
    const imageFile = incomingFormData.get('image') as File | null

    if (!imageFile) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      )
    }

    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    if (!validTypes.includes(imageFile.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload PNG, JPG, or WEBP.' },
        { status: 400 }
      )
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024
    if (imageFile.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 10MB.' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Build form data for remove.bg API
    const formData = new FormData()
    formData.append('image_file', buffer, {
      filename: imageFile.name || 'image.png',
      contentType: imageFile.type,
    })
    formData.append('size', 'auto')

    // Call remove.bg API
    const response = await axios.post(
      'https://api.remove.bg/v1.0/removebg',
      formData,
      {
        headers: {
          'X-Api-Key': apiKey,
          ...formData.getHeaders(),
        },
        responseType: 'arraybuffer',
        timeout: 50000,
      }
    )

    // Check for API errors
    if (response.status !== 200) {
      const errorText = Buffer.from(response.data).toString()
      return NextResponse.json(
        { error: `Remove.bg API error: ${errorText}` },
        { status: response.status }
      )
    }

    // Return the processed image
    return new NextResponse(response.data, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'inline; filename="removed-bg.png"',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error: unknown) {
    console.error('Remove.bg API error:', error)

    if (axios.isAxiosError(error)) {
      if (error.response) {
        const errorData = error.response.data
        let errorMessage = 'API request failed'

        if (errorData instanceof Buffer || errorData instanceof ArrayBuffer) {
          try {
            const text = Buffer.from(errorData).toString()
            const parsed = JSON.parse(text)
            errorMessage = parsed.errors?.[0]?.title || errorMessage
          } catch {
            errorMessage = 'API request failed'
          }
        }

        return NextResponse.json(
          { error: errorMessage },
          { status: error.response.status }
        )
      }

      if (error.code === 'ECONNABORTED') {
        return NextResponse.json(
          { error: 'Request timeout. Please try again.' },
          { status: 408 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}
