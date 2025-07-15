"use client"

import { useState, useEffect } from 'react'

const TypewriterTitle = () => {
  const titles = [
    'Fullstack Engineer',
    'Software Engineer', 
    'AI Engineer',
    'Backend Engineer'
  ]
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100) // Increased from 150

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    
    if (!isDeleting) {
      // Typing effect
      if (currentText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true)
          setTypingSpeed(70) // Faster deletion (increased from 100)
        }, 1500) // Reduced wait time from 2000
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting effect
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Move to next title
        setIsDeleting(false)
        setTypingSpeed(100) // Reset typing speed
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
      }
    }
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed, titles])

  return (
    <span className="gradient-text font-bold text-2xl sm:text-3xl lg:text-4xl">
      {currentText}
      <span className="animate-pulse font-bold">|</span>
    </span>
  )
}

export default TypewriterTitle 