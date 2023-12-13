import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | MATHÉO DELAUNAY',
  description: 'Portfolio of me Mathéo DELAUNAY',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
