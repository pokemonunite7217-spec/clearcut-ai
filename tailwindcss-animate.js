// Simple tailwindcss-animate stub for environments without the package
// This provides the basic animation utilities
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.animate-in': { animationName: 'enter', animationDuration: '150ms', '--tw-enter-opacity': 'initial', '--tw-enter-scale': 'initial', '--tw-enter-rotate': 'initial', '--tw-enter-translate-x': 'initial', '--tw-enter-translate-y': 'initial' },
    '.animate-out': { animationName: 'exit', animationDuration: '150ms' },
    '.fade-in': { '--tw-enter-opacity': '0' },
    '.fade-out': { '--tw-exit-opacity': '0' },
    '.zoom-in': { '--tw-enter-scale': '0.95' },
    '.zoom-out': { '--tw-exit-scale': '0.95' },
    '.slide-in-from-top': { '--tw-enter-translate-y': '-100%' },
    '.slide-in-from-bottom': { '--tw-enter-translate-y': '100%' },
  })
})
