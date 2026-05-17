'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield, Download } from 'lucide-react'

const badges = [
  { icon: Zap, text: 'Instant results' },
  { icon: Shield, text: 'HD Quality' },
  { icon: Download, text: 'Free PNG download' },
]

export default function HeroSection() {
  const scrollToUpload = () => {
    document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-white/60"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse_slow" />
          <span>Powered by Remove.bg AI technology</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-800 tracking-tight leading-[0.9] mb-6"
        >
          Remove Image
          <br />
          <span className="gradient-text">Backgrounds</span>
          <br />
          <span className="text-white/70">Instantly.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          AI-powered background remover delivering{' '}
          <span className="text-white/70">HD quality results</span> in seconds.
          No design skills needed. Just upload and download.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.button
            onClick={scrollToUpload}
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="relative group flex items-center gap-2.5 bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 text-white font-medium px-8 py-4 rounded-2xl text-base overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <Sparkles className="w-4 h-4" />
            Remove Background Free
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 glass text-white/70 hover:text-white font-medium px-7 py-4 rounded-2xl text-base transition-colors duration-200"
          >
            See how it works
            <span className="text-white/30">→</span>
          </motion.button>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {badges.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 text-sm text-white/45 glass rounded-full px-4 py-2"
            >
              <Icon className="w-3.5 h-3.5 text-cyan-400" />
              {text}
            </motion.div>
          ))}
        </motion.div>

        {/* Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
          <div className="relative glass-strong rounded-3xl p-1 gradient-border">
            <div className="rounded-[20px] overflow-hidden bg-[hsl(222,47%,6%)] aspect-[16/7] flex items-center justify-center">
              <div className="flex gap-6 items-center px-8 w-full">
                {/* Before */}
                <div className="flex-1 rounded-xl overflow-hidden aspect-square max-w-[200px] mx-auto relative">
                  <div className="absolute top-2 left-2 z-10">
                    <span className="text-xs font-mono bg-black/50 backdrop-blur text-white/60 px-2 py-0.5 rounded-full">before</span>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="w-16 h-20 bg-gradient-to-b from-violet-400/30 to-violet-600/30 rounded-xl" />
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-px bg-gradient-to-r from-violet-500 to-cyan-500" />
                    <div className="text-cyan-400">→</div>
                  </div>
                  <span className="text-xs text-white/30 font-mono">AI</span>
                </div>

                {/* After */}
                <div className="flex-1 rounded-xl overflow-hidden aspect-square max-w-[200px] mx-auto relative">
                  <div className="absolute top-2 left-2 z-10">
                    <span className="text-xs font-mono bg-black/50 backdrop-blur text-white/60 px-2 py-0.5 rounded-full">after</span>
                  </div>
                  <div className="w-full h-full checkerboard flex items-center justify-center">
                    <div className="w-16 h-20 bg-gradient-to-b from-violet-400/80 to-violet-600/80 rounded-xl shadow-2xl shadow-violet-500/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
