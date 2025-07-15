'use client'

import { useState, useRef } from 'react'
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Zulqarnain Abbas'
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      
      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        throw new Error('Failed to send email')
      }

    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact me directly via email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           formData.subject.trim() && 
           formData.message.trim() &&
           formData.email.includes('@')
  }

  return (
    <div className="card-modern p-8 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Send Me a Message
      </h2>
      
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-fade-in-up">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-green-800 dark:text-green-200 font-semibold">Message Sent Successfully!</h3>
              <p className="text-green-700 dark:text-green-300 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-fade-in-up">
          <div className="flex items-center gap-3">
            <FaExclamationTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
            <div>
              <h3 className="text-red-800 dark:text-red-200 font-semibold">Failed to Send Message</h3>
              <p className="text-red-700 dark:text-red-300 text-sm">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-modern"
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-modern"
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input-modern"
            placeholder="What's this about?"
            disabled={isSubmitting}
          />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="input-modern resize-none"
            placeholder="Tell me about your project or opportunity..."
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !validateForm()}
          className="w-full btn-gradient disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up flex items-center justify-center gap-2"
          style={{ animationDelay: '0.5s' }}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="w-5 h-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <FaPaperPlane className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* Additional Contact Info */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Prefer to email directly? Contact me at{' '}
          <a 
            href="mailto:zulqarnainabbas001@gmail.com" 
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            zulqarnainabbas001@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
} 