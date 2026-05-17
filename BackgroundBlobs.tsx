'use client'

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large violet blob top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07] animate-blob"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Cyan blob top-right */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.06] animate-blob animation-delay-2000"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Violet blob bottom-right */}
      <div
        className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] rounded-full opacity-[0.05] animate-blob animation-delay-4000"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(222, 47%, 4%) 100%)',
        }}
      />
    </div>
  )
}
