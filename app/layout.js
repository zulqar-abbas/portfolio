import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import EnhancedChatbot from '../components/EnhancedChatbot'
import { getProfileData } from '../lib/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
    template: '%s | Zulqarnain Abbas'
  },
  description: 'Fullstack Developer and AI Engineer with 6+ years of experience building scalable applications and AI solutions. Specialized in React, Node.js, AWS, and modern web technologies.',
  keywords: ['Fullstack Developer', 'AI Engineer', 'React', 'Node.js', 'AWS', 'OpenAI', 'Langchain', 'Portfolio'],
  authors: [{ name: 'Zulqarnain Abbas' }],
  creator: 'Zulqarnain Abbas',
  publisher: 'Zulqarnain Abbas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zulqarnain-abbas.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zulqarnain-abbas.netlify.app',
    title: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
    description: 'Fullstack Developer and AI Engineer with 6+ years of experience building scalable applications and AI solutions.',
    siteName: 'Zulqarnain Abbas Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
    description: 'Fullstack Developer and AI Engineer with 6+ years of experience building scalable applications and AI solutions.',
    images: ['/og-image.jpg'],
    creator: '@zulqarnain_abbas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  const profileData = getProfileData()

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <ScrollToTop />
        <EnhancedChatbot profileData={profileData} />
      </body>
    </html>
  )
}
