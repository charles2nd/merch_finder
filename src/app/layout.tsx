import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Merch Finder & Customizer',
  description: 'AI-powered merchandise discovery and customization platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}