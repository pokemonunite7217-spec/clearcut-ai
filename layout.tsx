import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'ClearCut AI — Remove Backgrounds Instantly',
  description: 'AI-powered background remover. Remove image backgrounds in seconds with HD quality results. Free, fast, and professional.',
  keywords: ['background remover', 'AI background removal', 'remove background', 'transparent PNG', 'image editor'],
  openGraph: {
    title: 'ClearCut AI — Remove Backgrounds Instantly',
    description: 'AI-powered background remover. Remove image backgrounds in seconds with HD quality results.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'hsl(222, 47%, 8%)',
              color: 'hsl(210, 40%, 95%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '12px',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              backdropFilter: 'blur(20px)',
            },
            success: {
              iconTheme: {
                primary: '#22d3ee',
                secondary: 'hsl(222, 47%, 4%)',
              },
            },
            error: {
              iconTheme: {
                primary: '#f87171',
                secondary: 'hsl(222, 47%, 4%)',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
