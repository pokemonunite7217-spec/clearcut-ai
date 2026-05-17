'use client'

import { motion } from 'framer-motion'
import { X, Sparkles, FileImage } from 'lucide-react'
import { ImageFile } from '@/types'
import { formatFileSize } from '@/lib/utils'

interface ImagePreviewProps {
  image: ImageFile
  onRemove: () => void
  onProcess: () => void
  isProcessing: boolean
}

export default function ImagePreview({ image, onRemove, onProcess, isProcessing }: ImagePreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto space-y-5"
    >
      {/* Image preview card */}
      <div className="glass-strong gradient-border rounded-3xl overflow-hidden">
        <div className="relative aspect-video flex items-center justify-center bg-[hsl(222,47%,5%)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.preview}
            alt="Selected image"
            className="max-w-full max-h-full object-contain"
          />
          {/* Remove button */}
          <button
            onClick={onRemove}
            disabled={isProcessing}
            className="absolute top-3 right-3 p-1.5 rounded-xl bg-black/60 backdrop-blur text-white/60 hover:text-white hover:bg-black/80 transition-all disabled:opacity-50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* File info */}
        <div className="px-5 py-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <FileImage className="w-4 h-4 text-white/30 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm text-white/70 truncate font-medium">{image.name}</p>
              <p className="text-xs text-white/30 mt-0.5">{formatFileSize(image.size)}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-cyan-400/60 bg-cyan-400/10 px-3 py-1.5 rounded-full flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Ready
          </div>
        </div>
      </div>

      {/* Process button */}
      <motion.button
        onClick={onProcess}
        disabled={isProcessing}
        whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(139, 92, 246, 0.4)' }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 text-white font-medium py-4 rounded-2xl text-base disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        <Sparkles className="w-5 h-5" />
        Remove Background with AI
      </motion.button>
    </motion.div>
  )
}
