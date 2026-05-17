'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Layers, Download, Cpu, Eye } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Advanced AI Model',
    description: 'Powered by state-of-the-art deep learning trained on millions of images for pixel-perfect results.',
    color: 'from-violet-500/20 to-violet-600/10',
    iconColor: 'text-violet-400',
    glow: 'rgba(139, 92, 246, 0.15)',
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Get results in under 5 seconds. Our optimized pipeline ensures lightning-fast background removal.',
    color: 'from-cyan-500/20 to-cyan-600/10',
    iconColor: 'text-cyan-400',
    glow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    icon: Layers,
    title: 'HD Quality Output',
    description: 'Download full-resolution transparent PNG files perfect for professional use, print, or web.',
    color: 'from-pink-500/20 to-pink-600/10',
    iconColor: 'text-pink-400',
    glow: 'rgba(236, 72, 153, 0.15)',
  },
  {
    icon: Eye,
    title: 'Smart Edge Detection',
    description: 'Accurately handles complex subjects like hair, fur, and fine details that other tools miss.',
    color: 'from-amber-500/20 to-amber-600/10',
    iconColor: 'text-amber-400',
    glow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your images are processed securely and immediately discarded. We never store your photos.',
    color: 'from-emerald-500/20 to-emerald-600/10',
    iconColor: 'text-emerald-400',
    glow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Download as transparent PNG, copy to clipboard, or use the comparison slider to preview.',
    color: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-400',
    glow: 'rgba(59, 130, 246, 0.15)',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400/70 tracking-widest uppercase mb-4">
            Why ClearCut AI
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight mb-5">
            Everything you need for{' '}
            <span className="gradient-text-static">perfect cutouts</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Professional-grade background removal powered by the most accurate AI available.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  boxShadow: `0 20px 60px ${feature.glow}`,
                }}
                className="group relative glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Icon */}
                <div className={`relative inline-flex p-3 rounded-xl bg-white/5 mb-5 group-hover:bg-white/8 transition-colors`}>
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="relative font-display font-600 text-lg text-white/90 mb-3">
                  {feature.title}
                </h3>
                <p className="relative text-sm text-white/45 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
