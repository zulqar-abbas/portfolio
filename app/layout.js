import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zulqarnain Abbas - Fullstack Developer',
  description: 'Experienced Full-Stack Developer with a strong track record in designing and developing scalable software solutions.',
  keywords: 'Fullstack Developer, React, Node.js, TypeScript, AWS, Portfolio',
  authors: [{ name: 'Zulqarnain Abbas' }],
  creator: 'Zulqarnain Abbas',
  openGraph: {
    title: 'Zulqarnain Abbas - Fullstack Developer',
    description: 'Experienced Full-Stack Developer with a strong track record in designing and developing scalable software solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
