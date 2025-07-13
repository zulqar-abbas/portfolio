import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-4 gradient-text">Zulqarnain Abbas</h3>
            <p className="text-gray-300 mb-2">Fullstack Developer</p>
            <p className="text-gray-300 mb-4">Lahore, Pakistan</p>
            <a 
              href="mailto:zulqarnainabbas001@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-105 inline-block"
            >
              zulqarnainabbas001@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/zulqar-abbas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/zulqarabbas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-gray-400">
            © {currentYear} Zulqarnain Abbas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 