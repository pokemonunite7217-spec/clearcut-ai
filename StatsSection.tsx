'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '10M+', label: 'Images Processed' },
  { value: '< 5s', label: 'Average Speed' },
  { value: '99.2%', label: 'Accuracy Rate' },
  { value: '100%', label: 'Privacy Guarantee' },
]

export default function StatsSection() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass gradient-border rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-800 gradient-text-static mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/35">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
