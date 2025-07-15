"use client"

const DynamicDescription = ({ profile }) => {
  // Create a comprehensive description using profile data
  const getDescription = () => {
    const yearsOfExperience = 6 // Updated to 6+ years
    const hasAISkills = profile.skills?.some(s => ['OpenAI', 'Langchain'].includes(s))
    const hasLargeScaleExperience = profile.experience?.[0]?.responsibilities?.some(r => r.includes('13 million') || r.includes('30%'))
    
    if (hasAISkills && hasLargeScaleExperience) {
      return `Passionate Full-Stack Developer with ${yearsOfExperience}+ years of experience building scalable applications that handle millions of users. Specialized in AI integration and LLM solutions. From microservices to AI-powered solutions, I transform complex ideas into elegant, scalable applications. Let's create something amazing together!`
    } else if (hasAISkills) {
      return `Experienced Full-Stack Developer with ${yearsOfExperience}+ years of expertise in React, Node.js, and AWS. Specialized in AI integration and modern web technologies, I transform complex ideas into elegant, scalable solutions. From frontend to backend, cloud deployment to AI implementation, I bring comprehensive solutions to life. Ready to bring your vision to reality!`
    } else if (hasLargeScaleExperience) {
      return `Full-Stack Developer with ${yearsOfExperience}+ years of experience building high-performance applications. I've optimized systems handling millions of records and improved user engagement by 30%. From database design to cloud architecture, I create robust solutions that scale. Let's build the next big thing together!`
    } else {
      return `Experienced Full-Stack Developer with ${yearsOfExperience}+ years of expertise in React, Node.js, and AWS. Passionate about creating scalable, modern applications that deliver exceptional user experiences. From concept to deployment, I handle every aspect of development with precision and innovation. Let's create something amazing together!`
    }
  }
  
  return (
    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
      {getDescription()}
    </p>
  )
}

export default DynamicDescription 