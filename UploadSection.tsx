'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useBackgroundRemoval } from '@/hooks/useBackgroundRemoval'
import UploadBox from './UploadBox'
import ImagePreview from './ImagePreview'
import ProcessingLoader from './ProcessingLoader'
import ResultPreview from './ResultPreview'
import { AlertCircle, RefreshCw } from 'lucide-react'

export default function UploadSection() {
  const {
    state,
    selectedImage,
    result,
    error,
    handleImageSelected,
    processImage,
    reset,
  } = useBackgroundRemoval()

  const isProcessing = state === 'uploading' || state === 'processing'

  return (
    <section id="upload" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-mono text-white/30 tracking-widest uppercase">
            ↓ Start Here
          </p>
        </motion.div>

        {/* State machine rendering */}
        <AnimatePresence mode="wait">
          {/* Idle - no image selected */}
          {state === 'idle' && !selectedImage && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <UploadBox onImageSelected={handleImageSelected} />
            </motion.div>
          )}

          {/* Image selected - show preview */}
          {state === 'idle' && selectedImage && !result && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ImagePreview
                image={selectedImage}
                onRemove={reset}
                onProcess={processImage}
                isProcessing={false}
              />
            </motion.div>
          )}

          {/* Processing state */}
          {isProcessing && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <ProcessingLoader />
            </motion.div>
          )}

          {/* Error state */}
          {state === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="glass rounded-3xl p-10 border border-red-500/20">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-5">
                  <AlertCircle className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="font-display text-xl font-600 text-white mb-3">
                  Processing Failed
                </h3>
                <p className="text-sm text-white/40 mb-8 leading-relaxed">
                  {error || 'Something went wrong. Please try again with a different image.'}
                </p>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 mx-auto text-sm glass text-white/60 hover:text-white px-6 py-3 rounded-xl transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
              </div>
            </motion.div>
          )}

          {/* Result */}
          {state === 'done' && result && selectedImage && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ResultPreview
                result={result}
                originalName={selectedImage.name}
                onReset={reset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
