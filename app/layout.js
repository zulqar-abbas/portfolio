import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
    template: '%s | Zulqarnain Abbas'
  },
  description: 'Fullstack developer and AI engineer specializing in React, Node.js, Python, and machine learning. Building modern web applications and AI solutions.',
  keywords: [
    'fullstack developer',
    'AI engineer',
    'machine learning',
    'React developer',
    'Node.js developer',
    'Python developer',
    'web development',
    'software engineer',
    'portfolio',
    'Zulqarnain Abbas'
  ],
  authors: [{ name: 'Zulqarnain Abbas' }],
  creator: 'Zulqarnain Abbas',
  publisher: 'Zulqarnain Abbas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zulqarnainabbas.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zulqarnainabbas.com', // Replace with your actual domain
    title: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
    description: 'Fullstack developer and AI engineer specializing in React, Node.js, Python, and machine learning. Building modern web applications and AI solutions.',
    siteName: 'Zulqarnain Abbas Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
    description: 'Fullstack developer and AI engineer specializing in React, Node.js, Python, and machine learning.',
    images: ['/og-image.jpg'], // Same as OpenGraph image
    creator: '@zulqarnainabbas', // Replace with your Twitter handle
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
    google: 'your-google-verification-code', // Replace with your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zulqarnain Abbas",
              "jobTitle": "Fullstack Developer & AI Engineer",
              "description": "Fullstack developer and AI engineer specializing in React, Node.js, Python, and machine learning.",
              "url": "https://zulqarnainabbas.com", // Replace with your actual domain
              "image": "https://zulqarnainabbas.com/profile-image.jpg", // Replace with your actual profile image
              "email": "zulqarnainabbas001@gmail.com",
              "sameAs": [
                "https://github.com/zulqarnainabbas", // Replace with your actual GitHub
                "https://linkedin.com/in/zulqarnainabbas", // Replace with your actual LinkedIn
                "https://twitter.com/zulqarnainabbas" // Replace with your actual Twitter
              ],
              "knowsAbout": [
                "Fullstack Development",
                "React.js",
                "Node.js",
                "Python",
                "Machine Learning",
                "Artificial Intelligence",
                "Web Development",
                "Software Engineering"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Meta tags for better SEO */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
