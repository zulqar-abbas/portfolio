"use client"

import { useState, useRef, useEffect } from 'react'
import { 
  FaComments, 
  FaTimes, 
  FaPaperPlane, 
  FaSpinner, 
  FaRobot,
  FaUser,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa'

const Chatbot = ({ profileData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: `Hi! I'm Zulqarnain's AI assistant. I can help you learn about his experience, skills, projects, and more. What would you like to know?`,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Knowledge base from profile data
  const knowledgeBase = {
    personal: {
      name: profileData.name,
      title: profileData.title,
      location: profileData.location,
      email: profileData.email,
      summary: profileData.summary
    },
    experience: profileData.experience,
    skills: profileData.skills,
    aiProjects: profileData.ai_llm_projects,
    contact: profileData.contact
  }

  // RAG function to find relevant information
  const retrieveRelevantInfo = (query) => {
    const lowerQuery = query.toLowerCase()
    const relevantInfo = []

    // Check personal info
    if (lowerQuery.includes('name') || lowerQuery.includes('who') || lowerQuery.includes('introduce')) {
      relevantInfo.push(`Name: ${knowledgeBase.personal.name}`)
      relevantInfo.push(`Title: ${knowledgeBase.personal.title}`)
      relevantInfo.push(`Location: ${knowledgeBase.personal.location}`)
    }

    // Check experience
    if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job') || lowerQuery.includes('company')) {
      knowledgeBase.experience.forEach((job, index) => {
        relevantInfo.push(`Experience ${index + 1}: ${job.position} at ${job.company} (${job.duration})`)
        relevantInfo.push(`Technologies: ${job.technologies.join(', ')}`)
        job.responsibilities.forEach(resp => {
          relevantInfo.push(`- ${resp}`)
        })
      })
    }

    // Check skills
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech') || lowerQuery.includes('programming')) {
      relevantInfo.push(`Skills: ${knowledgeBase.skills.join(', ')}`)
    }

    // Check AI projects
    if (lowerQuery.includes('ai') || lowerQuery.includes('llm') || lowerQuery.includes('project') || lowerQuery.includes('openai') || lowerQuery.includes('langchain')) {
      knowledgeBase.aiProjects.forEach((project, index) => {
        relevantInfo.push(`AI Project ${index + 1}: ${project.title}`)
        relevantInfo.push(`Description: ${project.description}`)
        relevantInfo.push(`Tools: ${project.tools.join(', ')}`)
      })
    }

    // Check contact info
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach') || lowerQuery.includes('get in touch')) {
      relevantInfo.push(`Email: ${knowledgeBase.personal.email}`)
      relevantInfo.push(`LinkedIn: ${knowledgeBase.contact.linkedin}`)
      relevantInfo.push(`GitHub: ${knowledgeBase.contact.github}`)
    }

    // Check years of experience
    if (lowerQuery.includes('year') || lowerQuery.includes('how long') || lowerQuery.includes('experience')) {
      relevantInfo.push(`Years of Experience: 6+ years`)
    }

    return relevantInfo
  }

  // Generate response using RAG
  const generateResponse = (query) => {
    const relevantInfo = retrieveRelevantInfo(query)
    
    if (relevantInfo.length === 0) {
      return "I don\'t have specific information about that. Could you ask me about Zulqarnain\'s experience, skills, projects, or contact information?"
    }

    // Create a contextual response
    let response = "Based on Zulqarnain\'s information:\n\n"
    response += relevantInfo.join('\n\n')
    
    // Add a helpful follow-up
    response += "\n\nIs there anything specific about this information you\'d like me to elaborate on?"
    
    return response
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: generateResponse(inputValue.trim()),
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      >
        <FaComments className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaRobot className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">Zulqarnain's AI Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything about his experience</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                {isMinimized ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.type === 'bot' && (
                          <FaRobot className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500" />
                        )}
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        {message.type === 'user' && (
                          <FaUser className="w-4 h-4 mt-1 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <FaSpinner className="w-4 h-4 animate-spin text-blue-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Zulqarnain's experience..."
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Chatbot 