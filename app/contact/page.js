import { getProfileData } from '../../lib/data'
import Navbar from '../../components/Navbar'
import ContactForm from '../../components/ContactForm'
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGithub, 
  FaLinkedin, 
  FaDownload,
  FaPaperPlane,
  FaUser,
  FaGlobe,
  FaPhone
} from 'react-icons/fa'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Zulqarnain Abbas for collaboration opportunities, project inquiries, or just to say hello. Available for freelance and full-time positions.',
  openGraph: {
    title: 'Contact Zulqarnain Abbas',
    description: 'Connect with me for collaboration opportunities, project inquiries, or professional networking.',
  },
}

export default function Contact() {
  const profile = getProfileData()

  // Contact methods with icons and details
  const contactMethods = [
    {
      title: "Email",
      value: profile.email,
      link: `mailto:${profile.email}`,
      icon: FaEnvelope,
      gradient: "from-blue-500 to-cyan-500",
      description: "Send me an email for any inquiries"
    },
    {
      title: "Location",
      value: profile.location,
      link: null,
      icon: FaMapMarkerAlt,
      gradient: "from-green-500 to-emerald-500",
      description: "Based in Lahore, Pakistan"
    },
    {
      title: "Availability",
      value: "Open to opportunities",
      link: null,
      icon: FaClock,
      gradient: "from-purple-500 to-pink-500",
      description: "Available for new projects and collaborations"
    }
  ]

  // Social links
  const socialLinks = [
    {
      name: "GitHub",
      url: profile.github,
      icon: FaGithub,
      gradient: "from-gray-700 to-gray-900"
    },
    {
      name: "LinkedIn",
      url: profile.linkedin,
      icon: FaLinkedin,
      gradient: "from-blue-600 to-blue-700"
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
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="stagger-children">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I&apos;m always interested in hearing about new opportunities and interesting projects. Let&apos;s create something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Ready to start a project or just want to chat? I&apos;d love to hear from you!
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6 stagger-children">
                {contactMethods.map((method, index) => {
                  const MethodIcon = method.icon
                  
                  return (
                    <div key={index} className="card-modern p-6 hover-lift group">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <MethodIcon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {method.title}
                          </h3>
                          {method.link ? (
                            <a 
                              href={method.link}
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                              {method.value}
                            </p>
                          )}
                          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const SocialIcon = social.icon
                    
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-modern p-4 hover-lift group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <SocialIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2 block text-center">
                          {social.name}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
              <FaDownload className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Know More?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Download my resume to learn more about my experience, skills, and achievements.
            </p>
            <a
              href="/ZulqarnainAbbas_Resume.pdf"
              download
              className="btn-gradient inline-flex items-center"
            >
              <FaDownload className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start a Project?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Whether it&apos;s a full-stack application, AI integration, or something entirely new, I&apos;m excited to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${profile.email}?subject=Project Inquiry`}
              className="btn-gradient inline-flex items-center"
            >
              <FaPaperPlane className="w-5 h-5 mr-2" />
              Start a Conversation
            </a>
            <a
              href="/projects"
              className="btn-secondary inline-flex items-center"
            >
              <FaGlobe className="w-5 h-5 mr-2" />
              View My Work
            </a>
          </div>
        </div>
      </section>

    </div>
  )
} 