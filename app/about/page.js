import { getProfileData } from '../../lib/data'
import { getTechIcon, getTechIconColor } from '../../lib/techIcons'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { 
  FaCode, 
  FaPalette, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaTools 
} from 'react-icons/fa'

export default function About() {
  const profile = getProfileData()

  // Organized skill categories
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['TypeScript', 'JavaScript', 'Java', 'Python'],
      description: 'Core languages I use for development',
      icon: FaCode,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'NextJS', 'Angular'],
      description: 'Modern UI frameworks and libraries',
      icon: FaPalette,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend Development',
      skills: ['NodeJS', 'ExpressJS', 'Spring Boot'],
      description: 'Server-side technologies',
      icon: FaServer,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Databases & Storage',
      skills: ['MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
      description: 'Data management solutions',
      icon: FaDatabase,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker'],
      description: 'Cloud platforms and deployment',
      icon: FaCloud,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Testing & Tools',
      skills: ['Jest', 'Git', 'Postman', 'Jira'],
      description: 'Quality assurance and development tools',
      icon: FaTools,
      gradient: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 dark:from-blue-900/10 dark:to-green-900/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="stagger-children">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I&apos;m a passionate Full-Stack Developer with expertise in modern web technologies and a drive to create impactful solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="/ZulqarnainAbbas_Resume.pdf"
                download
                className="btn-primary flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            <div className="card-modern p-8 text-center hover-lift">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Location</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{profile.location}</p>
            </div>

            <div className="card-modern p-8 text-center hover-lift">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float" style={{ animationDelay: '0.5s' }}>
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact</h3>
              <a 
                href={`mailto:${profile.email}`}
                className="text-green-600 dark:text-green-400 hover:underline text-lg font-medium"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I work with to build amazing applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon
              
              return (
                <div key={index} className="card-modern p-6 hover-lift group">
                  {/* Category Header */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6 text-sm">
                    {category.description}
                  </p>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => {
                      const TechIcon = getTechIcon(skill)
                      const iconColor = getTechIconColor(skill)
                      
                      return (
                        <div
                          key={skill}
                          className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 group-hover:scale-105"
                        >
                          <TechIcon className={`w-4 h-4 ${iconColor} flex-shrink-0`} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                            {skill}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I specialize in building scalable, modern web applications across the full stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            <div className="text-center card-gradient p-8 hover-lift">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building responsive, user-friendly interfaces with React, Next.js, and modern CSS frameworks. Creating seamless user experiences that work across all devices.
              </p>
            </div>

            <div className="text-center card-gradient p-8 hover-lift">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float" style={{ animationDelay: '0.5s' }}>
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating robust APIs and server-side logic with Node.js, Express, and Java Spring Boot. Building scalable architectures that handle complex business logic.
              </p>
            </div>

            <div className="text-center card-gradient p-8 hover-lift">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float" style={{ animationDelay: '1s' }}>
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cloud & DevOps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deploying and managing applications on AWS with Docker, CI/CD, and infrastructure as code. Ensuring reliable, scalable, and secure deployments.
              </p>
            </div>

            <div className="text-center card-gradient p-8 hover-lift">
              <div className="bg-orange-100 dark:bg-orange-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float" style={{ animationDelay: '1.5s' }}>
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Testing & Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Writing comprehensive tests and maintaining code quality with Jest, Mocha, and best practices. Ensuring robust, maintainable, and bug-free applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/10 dark:to-green-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            I&apos;m always excited to take on new challenges and collaborate on interesting projects. Let&apos;s create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-gradient"
            >
              Let&apos;s Start a Project
            </a>
            <a
              href="/projects"
              className="btn-secondary"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 