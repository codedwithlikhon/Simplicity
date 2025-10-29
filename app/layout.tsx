import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Chatbot } from '@/components/chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simplicity - AI Coding Agent',
  description: 'Simplicity helps you move faster by working asynchronously on tasks in your GitHub repo. Fix bugs, update dependencies, migrate code, and add new features.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Chatbot />
      </body>
    </html>
  )
}