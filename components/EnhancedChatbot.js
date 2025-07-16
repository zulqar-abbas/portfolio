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
  FaChevronUp,
  FaLightbulb,
  FaCode,
  FaBriefcase,
  FaGraduationCap
} from 'react-icons/fa'

const EnhancedChatbot = ({ profileData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: `Hi! I'm Zulqarnain's AI assistant. I can help you learn about his experience, skills, projects, and more. 

Try asking me:
• "Tell me about his experience"
• "What are his skills?"
• "Show me his AI projects"
• "How can I contact him?"
• "What companies has he worked for?"`,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Enhanced knowledge base with structured data
  const knowledgeBase = {
    personal: {
      name: profileData.name,
      title: profileData.title,
      location: profileData.location,
      email: profileData.email,
      summary: profileData.summary,
      yearsExperience: 6
    },
    experience: profileData.experience,
    skills: profileData.skills,
    aiProjects: profileData.ai_llm_projects,
    contact: profileData.contact
  }

  // Enhanced query understanding with multiple patterns
  const understandQuery = (query) => {
    const lowerQuery = query.toLowerCase()
    const patterns = {
      personal: ['name', 'who', 'introduce', 'about', 'background'],
      experience: ['experience', 'work', 'job', 'company', 'career', 'employment', 'position', 'role'],
      skills: ['skill', 'technology', 'tech', 'programming', 'language', 'framework', 'tool'],
      aiProjects: ['ai', 'llm', 'openai', 'langchain', 'machine learning', 'artificial intelligence', 'project'],
      contact: ['contact', 'email', 'reach', 'get in touch', 'connect', 'linkedin', 'github'],
      years: ['year', 'how long', 'experience', 'seniority'],
      specific: ['conrad labs', 'autolabs', 'dubizzle', 'empg', 'marcus technologies']
    }

    const matchedPatterns = []
    Object.entries(patterns).forEach(([category, keywords]) => {
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        matchedPatterns.push(category)
      }
    })

    return matchedPatterns
  }

  // Enhanced information retrieval
  const retrieveRelevantInfo = (query) => {
    const patterns = understandQuery(query)
    const relevantInfo = []

    patterns.forEach(pattern => {
      switch (pattern) {
        case 'personal':
          relevantInfo.push({
            category: 'Personal Information',
            data: [
              `**Name:** ${knowledgeBase.personal.name}`,
              `**Title:** ${knowledgeBase.personal.title}`,
              `**Location:** ${knowledgeBase.personal.location}`,
              `**Summary:** ${knowledgeBase.personal.summary}`
            ]
          })
          break

        case 'experience':
          relevantInfo.push({
            category: 'Work Experience',
            data: knowledgeBase.experience.map((job, index) => [
              `**${job.position}** at ${job.company}`,
              `**Duration:** ${job.duration}`,
              `**Location:** ${job.location}`,
              `**Technologies:** ${job.technologies.join(', ')}`,
              `**Key Achievements:**`,
              ...job.responsibilities.map(resp => `• ${resp}`)
            ].join('\n'))
          })
          break

        case 'skills':
          const skillCategories = {
            'Programming Languages': ['TypeScript', 'JavaScript', 'Java', 'Python'],
            'Frontend': ['React', 'NextJS', 'Angular'],
            'Backend': ['NodeJS', 'ExpressJS', 'Spring Boot'],
            'Databases': ['MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
            'Cloud & DevOps': ['AWS', 'Docker'],
            'AI & ML': ['OpenAI', 'Langchain'],
            'Testing & Tools': ['Jest', 'Git', 'Postman', 'Jira']
          }

          const categorizedSkills = Object.entries(skillCategories).map(([category, skills]) => {
            const matchingSkills = skills.filter(skill => 
              knowledgeBase.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
            )
            return matchingSkills.length > 0 ? `**${category}:** ${matchingSkills.join(', ')}` : null
          }).filter(Boolean)

          relevantInfo.push({
            category: 'Skills & Technologies',
            data: categorizedSkills
          })
          break

        case 'aiProjects':
          relevantInfo.push({
            category: 'AI & LLM Projects',
            data: knowledgeBase.aiProjects.map((project, index) => [
              `**${project.title}**`,
              `**Description:** ${project.description}`,
              `**Tools:** ${project.tools.join(', ')}`
            ].join('\n'))
          })
          break

        case 'contact':
          relevantInfo.push({
            category: 'Contact Information',
            data: [
              `**Email:** ${knowledgeBase.personal.email}`,
              `**LinkedIn:** ${knowledgeBase.contact.linkedin}`,
              `**GitHub:** ${knowledgeBase.contact.github}`
            ]
          })
          break

        case 'years':
          relevantInfo.push({
            category: 'Experience Duration',
            data: [`**Total Experience:** ${knowledgeBase.personal.yearsExperience}+ years`]
          })
          break

        case 'specific':
          // Handle specific company queries
          const companyQuery = query.toLowerCase()
          const relevantJobs = knowledgeBase.experience.filter(job => 
            job.company.toLowerCase().includes(companyQuery) || 
            job.company.toLowerCase().includes('conrad') ||
            job.company.toLowerCase().includes('autolabs') ||
            job.company.toLowerCase().includes('dubizzle') ||
            job.company.toLowerCase().includes('empg')
          )
          
          if (relevantJobs.length > 0) {
            relevantInfo.push({
              category: 'Specific Company Experience',
              data: relevantJobs.map(job => [
                `**${job.position}** at ${job.company}`,
                `**Duration:** ${job.duration}`,
                `**Technologies:** ${job.technologies.join(', ')}`,
                `**Key Achievements:**`,
                ...job.responsibilities.map(resp => `• ${resp}`)
              ].join('\n'))
            })
          }
          break
      }
    })

    return relevantInfo
  }

  // Enhanced response generation
  const generateResponse = (query) => {
    const relevantInfo = retrieveRelevantInfo(query)
    
    if (relevantInfo.length === 0) {
      return `I don\'t have specific information about that. Here are some things you can ask me about:

• **Experience:** "Tell me about his work experience" or "What companies has he worked for?"
• **Skills:** "What are his technical skills?" or "What technologies does he know?"
• **AI Projects:** "Show me his AI projects" or "What LLM work has he done?"
• **Contact:** "How can I contact him?" or "What\'s his email?"
• **Background:** "Tell me about his background" or "Who is Zulqarnain?"`
    }

    let response = "Here's what I found:\n\n"
    
    relevantInfo.forEach((info, index) => {
      response += `**${info.category}**\n`
      if (Array.isArray(info.data)) {
        response += info.data.join('\n\n')
      } else {
        response += info.data
      }
      if (index < relevantInfo.length - 1) response += '\n\n'
    })
    
    response += "\n\nIs there anything specific about this information you'd like me to elaborate on?"
    
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
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        title="Chat with AI Assistant"
      >
        <FaComments className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaRobot className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">Zulqarnain\'s AI Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything about his experience</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                title={isMinimized ? "Expand" : "Minimize"}
              >
                {isMinimized ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                title="Close"
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
                      className={`max-w-[85%] p-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.type === 'bot' && (
                          <FaRobot className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500" />
                        )}
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
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
                    placeholder="Ask me about Zulqarnain\'s experience..."
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Send message"
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

export default EnhancedChatbot 