import { getProfileData } from '../lib/data'
import { getTechIcon, getTechIconColor } from '../lib/techIcons'
import Navbar from '../components/Navbar'
import TypewriterTitle from '../components/TypewriterTitle'
import DynamicDescription from '../components/DynamicDescription'
import AnimatedCounter from '../components/AnimatedCounter'
import { 
  FaDownload, 
  FaEnvelope, 
  FaBrain, 
  FaRocket, 
  FaUser, 
  FaBriefcase, 
  FaFolder, 
  FaArrowRight,
  FaCode,
  FaGlobe,
  FaLightbulb,
  FaTrophy,
  FaUsers
} from 'react-icons/fa'

export const metadata = {
  title: 'Home',
  description: 'Welcome to my portfolio. I\'m a fullstack developer and AI engineer passionate about building innovative web applications and AI solutions.',
  openGraph: {
    title: 'Zulqarnain Abbas - Fullstack Developer & AI Engineer',
    description: 'Welcome to my portfolio. I\'m a fullstack developer and AI engineer passionate about building innovative web applications and AI solutions.',
  },
}

export default function Home() {
  const profile = getProfileData()

  // Quick navigation cards
  const quickLinks = [
    {
      title: "About Me",
      description: "Learn more about my background, skills, and what drives me as a developer.",
      icon: FaUser,
      gradient: "from-blue-500 to-cyan-500",
      href: "/about",
      delay: "0s"
    },
    {
      title: "Experience",
      description: "Explore my professional journey and the companies I've worked with.",
      icon: FaBriefcase,
      gradient: "from-green-500 to-emerald-500",
      href: "/experience",
      delay: "0.5s"
    },
    {
      title: "Projects",
      description: "Check out some of the projects I've built and contributed to.",
      icon: FaFolder,
      gradient: "from-purple-500 to-pink-500",
      href: "/projects",
      delay: "1s"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center stagger-children">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>
            <h2 className="text-gray-600 dark:text-gray-300 mb-8">
              <TypewriterTitle />
            </h2>
            <DynamicDescription profile={profile} />
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/ZulqarnainAbbas_Resume.pdf"
                download
                className="btn-gradient inline-flex items-center"
              >
                <FaDownload className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <a
                href="/contact"
                className="btn-secondary inline-flex items-center"
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </div>

            {/* Stats Bar */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="text-center group">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <FaCode className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        <AnimatedCounter target={6} suffix="+" />
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Years Experience
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <FaRocket className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        <AnimatedCounter target={25} suffix="+" />
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Projects Completed
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <FaUsers className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        <AnimatedCounter target={3} suffix="" />
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Companies Worked
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <FaTrophy className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        <AnimatedCounter target={23} suffix="+" />
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Skills Mastered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Projects Preview */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
              <FaBrain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              AI & LLM Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Exploring the cutting edge of artificial intelligence and large language models
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 stagger-children">
            {profile.ai_llm_projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="card-modern p-6 hover-lift group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <FaLightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 2).map((tool, toolIndex) => {
                    const TechIcon = getTechIcon(tool)
                    const iconColor = getTechIconColor(tool)
                    
                    return (
                      <span
                        key={toolIndex}
                        className="badge-gradient inline-flex items-center gap-1 text-xs"
                      >
                        <TechIcon className={`w-3 h-3 ${iconColor}`} />
                        {tool}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up">
            <a
              href="/projects"
              className="btn-gradient inline-flex items-center"
            >
              <FaRocket className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
              <FaCode className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies I Work With
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of the technologies I use to build amazing applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 stagger-children">
            {profile.skills.slice(0, 12).map((skill, index) => {
              const TechIcon = getTechIcon(skill)
              const iconColor = getTechIconColor(skill)
              
              return (
                <div
                  key={index}
                  className="card-modern p-4 text-center hover-lift group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:shadow-blue-500/25">
                    <TechIcon className={`w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-white transition-all duration-300 ${iconColor.replace('text-', 'group-hover:text-')}`} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-8 animate-fade-in-up">
            <a
              href="/about"
              className="btn-secondary inline-flex items-center"
            >
              <FaArrowRight className="w-4 h-4 mr-2" />
              View All Skills
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Explore My Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover more about my work, experience, and the projects I&apos;ve built
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {quickLinks.map((link, index) => {
              const LinkIcon = link.icon
              
              return (
                <div key={index} className="card-modern p-8 hover-lift group text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float group-hover:scale-110 transition-transform duration-300`} style={{ animationDelay: link.delay }}>
                    <LinkIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {link.description}
                  </p>
                  <a 
                    href={link.href} 
                    className="btn-gradient inline-flex items-center"
                  >
                    <FaArrowRight className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
              <FaGlobe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              I&apos;m always excited to take on new challenges and collaborate on interesting projects. Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gradient inline-flex items-center"
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                Start a Project
              </a>
              <a
                href="/projects"
                className="btn-secondary inline-flex items-center"
              >
                <FaFolder className="w-5 h-5 mr-2" />
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      </div>
  )
}
