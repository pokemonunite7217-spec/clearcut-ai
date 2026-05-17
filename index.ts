export type ProcessingState = 'idle' | 'uploading' | 'processing' | 'done' | 'error'

export interface ImageFile {
  file: File
  preview: string
  name: string
  size: number
}

export interface RemoveBgResult {
  originalUrl: string
  processedUrl: string
  processedBlob: Blob
}

export interface ApiError {
  message: string
  code?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}
