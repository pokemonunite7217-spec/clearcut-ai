import { useState, useCallback } from 'react'
import axios from 'axios'
import { ProcessingState, ImageFile, RemoveBgResult } from '@/types'
import toast from 'react-hot-toast'

export function useBackgroundRemoval() {
  const [state, setState] = useState<ProcessingState>('idle')
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null)
  const [result, setResult] = useState<RemoveBgResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageSelected = useCallback((image: ImageFile) => {
    setSelectedImage(image)
    setResult(null)
    setError(null)
    setState('idle')
  }, [])

  const processImage = useCallback(async () => {
    if (!selectedImage) {
      toast.error('Please select an image first')
      return
    }

    setState('uploading')
    setError(null)

    try {
      const formData = new FormData()
      formData.append('image', selectedImage.file)

      setState('processing')

      const response = await axios.post('/api/remove-bg', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        responseType: 'blob',
        timeout: 60000,
      })

      const processedBlob = new Blob([response.data], { type: 'image/png' })
      const processedUrl = URL.createObjectURL(processedBlob)

      setResult({
        originalUrl: selectedImage.preview,
        processedUrl,
        processedBlob,
      })

      setState('done')
      toast.success('Background removed successfully!')
    } catch (err: unknown) {
      let message = 'Failed to remove background. Please try again.'

      if (axios.isAxiosError(err)) {
        if (err.response?.data instanceof Blob) {
          try {
            const text = await err.response.data.text()
            const parsed = JSON.parse(text)
            message = parsed.error || message
          } catch {
            message = `Error ${err.response.status}: ${err.response.statusText}`
          }
        } else if (err.response?.data?.error) {
          message = err.response.data.error
        } else if (err.code === 'ECONNABORTED') {
          message = 'Request timed out. Please try with a smaller image.'
        }
      }

      setError(message)
      setState('error')
      toast.error(message)
    }
  }, [selectedImage])

  const reset = useCallback(() => {
    if (selectedImage?.preview) URL.revokeObjectURL(selectedImage.preview)
    if (result?.processedUrl) URL.revokeObjectURL(result.processedUrl)
    setSelectedImage(null)
    setResult(null)
    setError(null)
    setState('idle')
  }, [selectedImage, result])

  return {
    state,
    selectedImage,
    result,
    error,
    handleImageSelected,
    processImage,
    reset,
  }
}
