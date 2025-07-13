import { getProfileData } from '../../lib/data'
import { getTechIcon, getTechIconColor } from '../../lib/techIcons'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { 
  FaBriefcase, 
  FaBuilding, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaCode,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaRocket,
  FaUsers,
  FaCheckCircle
} from 'react-icons/fa'

export default function Experience() {
  const profile = getProfileData()

  // Core competencies with icons
  const competencies = [
    {
      title: 'Full-Stack Development',
      description: 'Building complete web applications from frontend to backend, with expertise in React, Node.js, and modern development practices.',
      icon: FaCode,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications on AWS, implementing CI/CD pipelines, and using Docker for containerization.',
      icon: FaCloud,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database Design',
      description: 'Working with both SQL and NoSQL databases, designing efficient schemas, and optimizing queries for performance.',
      icon: FaDatabase,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'API Development',
      description: 'Creating RESTful APIs, implementing authentication, and integrating third-party services and AI technologies.',
      icon: FaCogs,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimizing application performance, reducing response times, and implementing caching strategies.',
      icon: FaRocket,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Team Collaboration',
      description: 'Leading code reviews, mentoring junior developers, and collaborating effectively in agile development environments.',
      icon: FaUsers,
      gradient: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="stagger-children">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              My professional journey in software development, showcasing the companies I&apos;ve worked with and the impact I&apos;ve made
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 stagger-children">
            {profile.experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < profile.experience.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent dark:from-blue-400"></div>
                )}
                
                <div className="flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                      <FaBriefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Job content */}
                  <div className="flex-1 card-modern p-8 hover-lift">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {job.position}
                        </h3>
                        <div className="flex items-center gap-4 text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          <FaBuilding className="w-5 h-5" />
                          {job.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span className="text-sm font-medium">{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span className="text-sm font-medium">{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <FaCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {job.technologies.map((tech, techIndex) => {
                          const TechIcon = getTechIcon(tech)
                          const iconColor = getTechIconColor(tech)
                          
                          return (
                            <span
                              key={techIndex}
                              className="badge-gradient inline-flex items-center gap-2"
                            >
                              <TechIcon className={`w-4 h-4 ${iconColor}`} />
                              {tech}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-3">
                            <FaCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Skills and expertise I&apos;ve developed throughout my professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {competencies.map((competency, index) => {
              const CompetencyIcon = competency.icon
              
              return (
                <div key={index} className="card-modern p-6 hover-lift group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${competency.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float`}>
                    <CompetencyIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {competency.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {competency.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I bring years of experience in building scalable applications and leading development teams. Let&apos;s create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-gradient"
            >
              Start a Project
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