import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaDocker, 
  FaAws, 
  FaGitAlt, 
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaCloud,
  FaServer,
  FaCode,
  FaSearch,
  FaBox,
  FaLayerGroup,
  FaBolt,
  FaRobot,
  FaTestTube,
  FaCalendar,
  FaSend,
  FaPalette
} from 'react-icons/fa'

import { 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiRedis,
  SiSpringboot,
  SiAngular,
  SiJest,
  SiMocha,
  SiOpensearch,
  SiOpenai,
  SiLangchain,
  SiHibernate,
  SiFlyway,
  SiSequelize,
  SiElasticsearch,
  SiPostman,
  SiJira,
  SiAntdesign,
  SiMaterialdesignicons
} from 'react-icons/si'

import { 
  BiCodeAlt, 
  BiServer, 
  BiCloud, 
  BiBot, 
  BiPackage, 
  BiSearch, 
  BiLayer, 
  BiGitBranch,
  BiSend,
  BiCalendar,
  BiTestTube,
  BiBox
} from 'react-icons/bi'

export const getTechIcon = (techName) => {
  const iconMap = {
    // Programming Languages
    'Typescript': SiTypescript,
    'TypeScript': SiTypescript,
    'JavaScript': SiJavascript,
    'Java': FaJava,
    'Python': FaPython,
    
    // Databases
    'MySQL': SiMysql,
    'SQL': FaDatabase,
    'MongoDB': SiMongodb,
    'DynamoDB': FaDatabase,
    'PostgreSQL': SiPostgresql,
    'Redis': SiRedis,
    
    // Frontend & Frameworks
    'ExpressJS': SiExpress,
    'Express': SiExpress,
    'NodeJS': FaNodeJs,
    'Node.js': FaNodeJs,
    'NextJS': SiNextdotjs,
    'Next.js': SiNextdotjs,
    'Spring Boot': SiSpringboot,
    'Spring': SiSpringboot,
    'Angular': SiAngular,
    'React': FaReact,
    'Material UI': SiMaterialdesignicons,
    'Shadcn': FaPalette,
    'Ant Design': SiAntdesign,
    
    // Testing
    'Jest': SiJest,
    'Mocha': SiMocha,
    
    // Cloud & AWS
    'AWS': FaAws,
    'AWS (SQS, Opensearch, Lambda)': FaAws,
    'SQS': BiPackage,
    'Opensearch': SiOpensearch,
    'Lambda': FaBolt,
    'AppSync': FaServer,
    'DynamoDB': FaDatabase,
    
    // AI & ML
    'OpenAI': SiOpenai,
    'OpenAI API': SiOpenai,
    'OpenAI Agent API': SiOpenai,
    'Langchain': SiLangchain,
    'LLMs': FaRobot,
    
    // DevOps & Tools
    'Docker': FaDocker,
    'Git': FaGitAlt,
    'Postman': SiPostman,
    'Jira': SiJira,
    
    // ORMs & Frameworks
    'Hibernate': SiHibernate,
    'Flyway': SiFlyway,
    'Sequelize': SiSequelize,
    'ElasticSearch': SiElasticsearch,
    
    // Default fallback
    'default': BiCodeAlt
  }

  // Try exact match first
  if (iconMap[techName]) {
    return iconMap[techName]
  }

  // Try case-insensitive match
  const lowerTechName = techName.toLowerCase()
  for (const [key, icon] of Object.entries(iconMap)) {
    if (key.toLowerCase() === lowerTechName) {
      return icon
    }
  }

  // Try partial match for complex names
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lowerTechName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerTechName)) {
      return icon
    }
  }

  // Return default icon if no match found
  return iconMap.default
}

// Helper function to get icon color based on technology category
export const getTechIconColor = (techName) => {
  const colorMap = {
    // Programming Languages - Blue
    'Typescript': 'text-blue-600',
    'TypeScript': 'text-blue-600',
    'JavaScript': 'text-yellow-500',
    'Java': 'text-orange-600',
    'Python': 'text-blue-500',
    
    // Databases - Green
    'MySQL': 'text-blue-600',
    'SQL': 'text-blue-600',
    'MongoDB': 'text-green-600',
    'DynamoDB': 'text-blue-600',
    'PostgreSQL': 'text-blue-600',
    'Redis': 'text-red-600',
    
    // Frontend - Purple/Blue
    'React': 'text-blue-500',
    'Angular': 'text-red-600',
    'NextJS': 'text-black dark:text-white',
    'Next.js': 'text-black dark:text-white',
    'Material UI': 'text-blue-600',
    'Shadcn': 'text-gray-700 dark:text-gray-300',
    'Ant Design': 'text-blue-600',
    
    // Backend - Orange/Red
    'ExpressJS': 'text-green-600',
    'Express': 'text-green-600',
    'NodeJS': 'text-green-600',
    'Node.js': 'text-green-600',
    'Spring Boot': 'text-green-600',
    'Spring': 'text-green-600',
    
    // Cloud - Orange
    'AWS': 'text-orange-600',
    'SQS': 'text-orange-600',
    'Opensearch': 'text-orange-600',
    'Lambda': 'text-orange-600',
    'AppSync': 'text-orange-600',
    
    // AI - Purple
    'OpenAI': 'text-purple-600',
    'Langchain': 'text-purple-600',
    'LLMs': 'text-purple-600',
    
    // Tools - Gray
    'Docker': 'text-blue-600',
    'Git': 'text-orange-600',
    'Postman': 'text-orange-600',
    'Jira': 'text-blue-600',
    'Jest': 'text-red-600',
    'Mocha': 'text-orange-600',
    
    // Default
    'default': 'text-gray-600'
  }

  // Try exact match first
  if (colorMap[techName]) {
    return colorMap[techName]
  }

  // Try case-insensitive match
  const lowerTechName = techName.toLowerCase()
  for (const [key, color] of Object.entries(colorMap)) {
    if (key.toLowerCase() === lowerTechName) {
      return color
    }
  }

  // Try partial match
  for (const [key, color] of Object.entries(colorMap)) {
    if (lowerTechName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerTechName)) {
      return color
    }
  }

  return colorMap.default
} 