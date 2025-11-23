import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ICEEM - Innovation & Excellence',
  description: 'Your trusted partner for innovative business solutions',
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
