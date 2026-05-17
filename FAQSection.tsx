'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Is ClearCut AI free to use?',
    answer: 'Yes! You can remove backgrounds from images for free. Our tool processes your images using the Remove.bg API which provides high-quality results without any cost for basic usage.',
  },
  {
    question: 'What image formats are supported?',
    answer: 'ClearCut AI supports PNG, JPG, JPEG, and WEBP image formats. Images must be under 10MB in size for optimal processing.',
  },
  {
    question: 'How accurate is the background removal?',
    answer: 'Our AI delivers industry-leading accuracy for most subjects including people, products, animals, and objects. It handles complex edges like hair, fur, and transparent materials with precision.',
  },
  {
    question: 'Is my image data private?',
    answer: 'Absolutely. Your images are sent directly to our secure processing API and are immediately discarded after processing. We never store, share, or use your images for any purpose.',
  },
  {
    question: 'What resolution is the output?',
    answer: 'The output PNG is delivered at full resolution, matching your original image dimensions. There is no quality loss or compression — you get the complete HD result.',
  },
  {
    question: 'Can I use the output images commercially?',
    answer: 'Yes. The processed images are yours to use however you wish — for commercial projects, social media, product listings, marketing materials, and more.',
  },
  {
    question: 'How long does processing take?',
    answer: 'Processing typically takes 2-5 seconds depending on the image complexity and size. Our AI pipeline is optimized for speed without sacrificing accuracy.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400/70 tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight mb-5">
            Common <span className="gradient-text-static">Questions</span>
          </h2>
          <p className="text-white/40 text-lg">
            Everything you need to know about ClearCut AI.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div
                className={`
                  glass rounded-2xl overflow-hidden border transition-all duration-300
                  ${openIndex === i ? 'border-violet-500/20' : 'border-white/5 hover:border-white/10'}
                `}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-medium text-sm sm:text-base transition-colors ${openIndex === i ? 'text-white' : 'text-white/70'}`}>
                    {faq.question}
                  </span>
                  <div className={`
                    flex-shrink-0 ml-4 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300
                    ${openIndex === i
                      ? 'bg-violet-500/20 text-violet-400'
                      : 'bg-white/5 text-white/40'
                    }
                  `}>
                    {openIndex === i ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
