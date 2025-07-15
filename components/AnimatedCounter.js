"use client"

import { useState, useEffect, useRef } from 'react'

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const steps = 60
    const stepDuration = duration / steps
    const increment = Math.ceil(target / steps)

    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < target) {
          return Math.min(prev + increment, target)
        }
        return prev
      })
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  )
}

export default AnimatedCounter 