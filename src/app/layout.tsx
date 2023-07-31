import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

const inter = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moratz Programming',
  description: 'My name is Vitor Morato de Lima and I currently work in the Quality Assurance role, however I am studying and developing my skills with this project to reach a significant level. So I invite you to my journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
