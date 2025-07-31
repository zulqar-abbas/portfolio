"use client"

import { getProfileData } from '../../lib/data'
import { getTechIcon, getTechIconColor } from '../../lib/techIcons'
import Navbar from '../../components/Navbar'
import { 
  FaRocket, 
  FaBrain, 
  FaChartLine, 
  FaBell, 
  FaFileAlt, 
  FaPalette,
  FaExternalLinkAlt,
  FaGithub,
  FaFilter,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaLightbulb,
  FaLaptop
} from 'react-icons/fa'
import { useState } from 'react'

export default function Projects() {
  const profile = getProfileData()
  const [activeFilter, setActiveFilter] = useState('All')

  // Sample projects based on experience
  const regularProjects = [
    {
      title: "Autolabs - Automotive Management Platform",
      description: "Led development of a comprehensive automotive dealership management system at Conrad Labs (Autolabs). Built microservices architecture, implemented global search with 13M+ records, real-time notifications, and AI-powered customer service with 90% accuracy improvement. Achieved 30% productivity boost and 15% customer engagement increase.",
      technologies: ["TypeScript", "React", "NodeJS", "AWS", "PostgreSQL", "OpenAI", "AppSync", "OpenSearch"],
      category: "Full-Stack",
      icon: FaRocket,
      gradient: "from-blue-600 to-indigo-600",
      github: "https://github.com/zulqar-abbas",
      link: "https://autolabs.io",
      image: "/images/projects/autolabs.png",
      isFlagship: true
    },
    {
      title: "Marcus Technologies - Enterprise Platform",
      description: "Spearheaded development of enterprise-grade applications at Conrad Labs (Marcus Technologies). Built REST APIs with Spring Boot, created reusable UIKit modules reducing development time by 20%, and transformed legacy Angular applications into modern SPAs. Implemented automated email processes and managed agile development workflows.",
      technologies: ["Spring Boot", "Java 11", "Angular 12", "TypeScript", "MySQL", "ElasticSearch", "Hibernate"],
      category: "Full-Stack",
      icon: FaRocket,
      gradient: "from-green-600 to-teal-600",
      github: "https://github.com/zulqar-abbas",
      link: "https://marcusfoodco.com",
      image: "/images/projects/marcus.png",
      isFlagship: true
    },
    {
      title: "Propforce - Real Estate Platform",
      description: "Developed a comprehensive real estate management platform for Propforce. Built REST APIs serving 100k+ users, implemented scheduling services with business rules, and achieved 25% reduction in deal cancellations. Dramatically improved server response time by 50% through system optimization.",
      technologies: ["NodeJS", "ExpressJS", "MongoDB", "Redis", "Angular", "TypeScript", "Sequelize"],
      category: "Full-Stack",
      icon: FaRocket,
      gradient: "from-purple-600 to-pink-600",
      github: "https://github.com/zulqar-abbas",
      link: "https://propforce.com",
      image: "/images/projects/propforce.jpeg",
      isFlagship: true
    },
    {
      title: "Global Search Platform",
      description: "Built a comprehensive search platform using Amazon OpenSearch Service and AWS ECS, handling 13 million records per index with 30% faster search times and 30% productivity boost.",
      technologies: ["TypeScript", "React", "AWS", "NodeJS", "OpenSearch"],
      category: "Full-Stack",
      icon: FaRocket,
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/zulqar-abbas"
    },
    {
      title: "Campaign Nurturing System",
      description: "Implemented a sophisticated campaign nurturing feature that boosted customer engagement by 15% through personalized automation workflows.",
      technologies: ["React", "NodeJS", "PostgreSQL", "AWS", "Redis"],
      category: "Marketing",
      icon: FaChartLine,
      gradient: "from-green-500 to-emerald-500",
      github: "https://github.com/zulqar-abbas"
    },
    {
      title: "Platform Notification Module",
      description: "Built a real-time notification system using AWS AppSync, improving user activity and engagement within the application.",
      technologies: ["AWS", "GraphQL", "React", "TypeScript", "DynamoDB"],
      category: "Real-time",
      icon: FaBell,
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/zulqar-abbas"
    },
    {
      title: "ROI Reporting System",
      description: "Created an automated Lambda function for generating and sending ROI reports to customers, resulting in significant revenue increase.",
      technologies: ["AWS", "NodeJS", "PostgreSQL", "TypeScript", "Lambda"],
      category: "Analytics",
      icon: FaFileAlt,
      gradient: "from-yellow-500 to-orange-500",
      github: "https://github.com/zulqar-abbas"
    },
    {
      title: "Global UIKit Module",
      description: "Developed a reusable UIKit module that reduced front-end development time by 20% across multiple projects.",
      technologies: ["Angular", "TypeScript", "SCSS", "Jest", "Storybook"],
      category: "UI/UX",
      icon: FaPalette,
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/zulqar-abbas"
    }
  ]

  // AI projects from profile data
  const aiProjects = profile.ai_llm_projects.map(project => ({
    title: project.title,
    description: project.description,
    technologies: project.tools,
    category: "AI/ML",
    icon: FaBrain,
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/zulqar-abbas",
    isAI: true
  }))

  // Combine all projects
  const allProjects = [...regularProjects, ...aiProjects]

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter)

  const categories = ["All", "Full-Stack", "AI/ML", "Marketing", "Real-time", "Analytics", "UI/UX"]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="stagger-children">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my work across different domains, from full-stack applications to AI-powered solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 w-full justify-center">
              <FaFilter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                  activeFilter === category 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                    : 'badge-gradient'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredProjects.map((project, index) => {
              const ProjectIcon = project.icon
              
              return (
                <div key={index} className={`card-modern overflow-hidden hover-lift group ${project.isFlagship ? 'ring-2 ring-blue-500 shadow-xl transform hover:scale-105' : ''}`}>
                  {/* Project Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    {project.isFlagship && project.image ? (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-black/10"></div>
                    )}
                    {!project.isFlagship && (
                      <ProjectIcon className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="badge-gradient text-xs">
                        {project.category}
                      </span>
                      {project.isAI && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
                          <FaLightbulb className="w-3 h-3 mr-1" />
                          AI
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 ${project.isFlagship ? 'text-lg' : ''}`}>
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <FaCode className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => {
                          const TechIcon = getTechIcon(tech)
                          const iconColor = getTechIconColor(tech)
                          
                          return (
                            <span
                              key={techIndex}
                              className="badge-gradient inline-flex items-center gap-1 text-xs"
                            >
                              <TechIcon className={`w-3 h-3 ${iconColor}`} />
                              {tech}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-3">
                      {project.isFlagship && project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn-gradient text-center py-2 px-4 text-sm font-medium inline-flex items-center justify-center"
                        >
                          <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn-secondary text-center py-2 px-4 text-sm font-medium inline-flex items-center justify-center"
                        >
                          <FaGithub className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFilter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No projects match the selected filter. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Skills Used in Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies I Use
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These are the main technologies I work with in my projects
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 stagger-children">
            {profile.skills.map((skill, index) => {
              const TechIcon = getTechIcon(skill)
              const iconColor = getTechIconColor(skill)
              
              return (
                <div
                  key={index}
                  className="card-modern p-6 hover-lift group text-center cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:shadow-blue-500/25">
                    <TechIcon className={`w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-white transition-all duration-300 ${iconColor.replace('text-', 'group-hover:text-')}`} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I&apos;m always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-gradient inline-flex items-center"
            >
              <FaEnvelope className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            <a
              href="/ZulqarnainAbbas_Resume.pdf"
              download
              className="btn-secondary inline-flex items-center"
            >
              <FaDownload className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

    </div>
  )
} 