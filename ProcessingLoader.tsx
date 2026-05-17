'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const steps = [
  'Uploading your image...',
  'Analyzing foreground elements...',
  'Detecting edges with AI...',
  'Removing background pixels...',
  'Polishing transparent edges...',
  'Preparing HD output...',
]

export default function ProcessingLoader() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))
    }, 1200)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev
        return prev + Math.random() * 8
      })
    }, 400)

    return () => {
      clearInterval(stepInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="glass-strong gradient-border rounded-3xl p-10 flex flex-col items-center text-center">
        {/* Animated icon */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-24 h-24 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.8), transparent)',
              filter: 'blur(1px)',
            }}
          />
          {/* Inner rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-1 w-22 h-22 rounded-full"
            style={{
              background: 'conic-gradient(from 180deg, transparent, rgba(6, 182, 212, 0.6), transparent)',
              filter: 'blur(1px)',
            }}
          />
          {/* Center icon */}
          <div className="relative w-24 h-24 rounded-full bg-[hsl(222,47%,6%)] border border-white/10 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-9 h-9 text-violet-400" />
            </motion.div>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-600 text-white mb-2">
          Removing Background
        </h3>
        <p className="text-sm text-white/40 mb-8">
          Our AI is working its magic on your image
        </p>

        {/* Progress bar */}
        <div className="w-full mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-white/40 font-mono">Processing</span>
            <span className="text-xs text-white/40 font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Step indicator */}
        <div className="w-full space-y-2">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: i <= currentStep ? 1 : 0.2,
                x: 0,
              }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-left"
            >
              <div className={`
                w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500
                ${i < currentStep ? 'bg-cyan-400' : i === currentStep ? 'bg-violet-400 animate-pulse' : 'bg-white/10'}
              `} />
              <span className={`
                text-xs transition-colors duration-300
                ${i < currentStep ? 'text-white/50 line-through decoration-white/20' : i === currentStep ? 'text-white/80' : 'text-white/20'}
              `}>
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
