'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
              Scroll to top
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
          
          {/* Button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-white/50 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group animate-bounce"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5 mx-auto group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Subtle indicator text */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              TOP
            </div>
          </button>
        </div>
      )}
    </>
  )
} 