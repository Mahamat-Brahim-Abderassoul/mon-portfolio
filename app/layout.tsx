import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  // title: 'v0 App',
  title: 'Mahamat Brahim Abderassoul Portfolio',
  description: 'Created with v0',
  // generator: 'v0.dev',
  generator: 'MAHAMAT BRAHIM ABDERASSOUL',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
