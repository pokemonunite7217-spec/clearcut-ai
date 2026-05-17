import Navbar from '@/components/Navbar'
import BackgroundBlobs from '@/components/BackgroundBlobs'
import HeroSection from '@/components/HeroSection'
import UploadSection from '@/components/UploadSection'
import StatsSection from '@/components/StatsSection'
import FeatureCards from '@/components/FeatureCards'
import HowItWorks from '@/components/HowItWorks'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global background effects */}
      <BackgroundBlobs />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <HeroSection />

        {/* Main upload tool */}
        <UploadSection />

        {/* Stats */}
        <StatsSection />

        {/* Features */}
        <FeatureCards />

        {/* How it works */}
        <HowItWorks />

        {/* FAQ */}
        <FAQSection />

        {/* CTA Banner */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative glass-strong gradient-border rounded-3xl p-12 overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 rounded-3xl" />
              <div className="relative">
                <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight mb-4">
                  Ready to remove{' '}
                  <span className="gradient-text">backgrounds?</span>
                </h2>
                <p className="text-white/40 mb-8 text-lg">
                  Join thousands of designers, marketers, and creators using ClearCut AI.
                </p>
                <button
                  onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium px-10 py-4 rounded-2xl text-base hover:opacity-90 transition-opacity"
                >
                  Start for Free — No Signup Needed
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
