"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Calendar, MapPin, ExternalLink, Building2, Code, Globe, Server, Users } from "lucide-react"

export default function Experience() {
  const [activePhase, setActivePhase] = useState(0)
  const [expandedItems, setExpandedItems] = useState({})

  const journeyData = [
    {
      phase: "The Beginning",
      company: "WordPress & Laravel Development",
      role: "Web Developer",
      period: "2020 - 2021",
      location: "Remote",
      icon: Globe,
      description: "Started my development journey with WordPress and Laravel, building foundational skills in web development and content management systems.",
      achievements: [
        "Mastered WordPress theme and plugin development",
        "Built custom Laravel applications for small businesses",
        "Learned PHP, MySQL, and basic frontend technologies",
        "Completed 10+ WordPress projects for local clients",
        "Developed understanding of server management and deployment"
      ],
      technologies: ["WordPress", "PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS", "jQuery"],
      link: "#",
      color: "from-green-500 to-blue-500"
    },
    {
      phase: "Full Stack Exploration",
      company: "Tech Stack Expansion",
      role: "Full Stack Developer",
      period: "2021 - 2024",
      location: "Remote",
      icon: Code,
      description: "Expanded into complete full-stack development, exploring frontend frameworks, backend technologies, DevOps, databases, and security practices.",
      achievements: [
        "Mastered React.js and modern frontend development",
        "Built RESTful APIs with Node.js and Express",
        "Implemented DevOps practices with Docker and CI/CD",
        "Worked with various databases (MongoDB, PostgreSQL)",
        "Learned application security best practices",
        "Explored cloud platforms (AWS, Vercel, Netlify)",
        "Contributed to open-source projects"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "AWS", "Next.js", "Express.js"],
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Enterprise CRM Development",
      company: "Chefo - Canteen Management Solutions",
      role: "Full Stack Developer",
      period: "2024",
      location: "Remote",
      icon: Server,
      description: "Led the development of a comprehensive CRM platform for Chefo, automating complete canteen management solutions for enterprise clients.",
      achievements: [
        "Architected and built complete CRM system from scratch",
        "Implemented real-time order tracking and inventory management",
        "Developed admin dashboard with analytics and reporting",
        "Integrated multiple payment gateways and notification systems",
        "Optimized database queries improving performance by 60%",
        "Implemented role-based access control and security measures",
        "Deployed and maintained production infrastructure"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Redis", "Socket.io", "JWT", "Docker", "AWS EC2"],
      link: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      phase: "Freelance Excellence",
      company: "Independent Freelancer",
      role: "Senior Full Stack Developer",
      period: "2025 - Present",
      location: "Remote",
      icon: Users,
      description: "Currently working as a freelance developer, delivering high-quality solutions to clients worldwide while continuously learning and adapting to new technologies.",
      achievements: [
        "Delivering custom web applications for international clients",
        "Specializing in scalable and performant solutions",
        "Mentoring junior developers and conducting code reviews",
        "Staying updated with latest industry trends and technologies",
        "Building long-term relationships with clients",
        "Managing projects from conception to deployment",
        "Providing ongoing maintenance and support"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS", "GraphQL", "Prisma"],
      link: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const toggleAchievements = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const getPhaseIcon = (IconComponent, color) => {
    return (
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-white shadow-lg`}>
        <IconComponent size={20} className="md:w-6 md:h-6" />
      </div>
    )
  }

  return (
    <section id="experience" className="min-h-screen py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            My Development Journey
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            From WordPress beginnings to full-stack expertise and entrepreneurial ventures
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile Phase Navigation - Horizontal Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:hidden mb-8"
          >
            <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide px-2">
              {journeyData.map((phase, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 min-w-max ${
                    activePhase === index
                      ? "bg-white dark:bg-gray-800 shadow-lg border-2 border-transparent bg-gradient-to-r bg-white dark:bg-gray-800"
                      : "bg-white/70 dark:bg-gray-800/70 shadow-md border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${phase.color} flex items-center justify-center text-white`}>
                    <phase.icon size={16} />
                  </div>
                  <div className="text-left">
                    <span className={`font-semibold text-sm block ${
                      activePhase === index 
                        ? "text-gray-800 dark:text-white" 
                        : "text-gray-600 dark:text-gray-400"
                    }`}>
                      {phase.phase.split(' ')[0]}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500 block">
                      {phase.period.split(' ')[0]}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Desktop Phase Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:grid grid-cols-4 gap-4 mb-12"
          >
            {journeyData.map((phase, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                  activePhase === index
                    ? "bg-white dark:bg-gray-800 shadow-xl border-2 border-transparent bg-gradient-to-r bg-white dark:bg-gray-800"
                    : "bg-white/70 dark:bg-gray-800/70 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center text-white mb-3`}>
                  <phase.icon size={20} />
                </div>
                <span className={`font-semibold text-sm text-center ${
                  activePhase === index 
                    ? "text-gray-800 dark:text-white" 
                    : "text-gray-600 dark:text-gray-400"
                }`}>
                  {phase.phase}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {phase.period}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Content */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Phase Details */}
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6">
                  <div className="flex items-start space-x-3 md:space-x-4 mb-4 sm:mb-0">
                    {getPhaseIcon(journeyData[activePhase].icon, journeyData[activePhase].color)}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2 break-words">
                        {journeyData[activePhase].role}
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Building2 size={16} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{journeyData[activePhase].company}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1 flex-shrink-0" />
                            <span>{journeyData[activePhase].period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1 flex-shrink-0" />
                            <span>{journeyData[activePhase].location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.a
                    href={journeyData[activePhase].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm sm:text-base w-full sm:w-auto"
                  >
                    Details <ExternalLink size={14} className="ml-1" />
                  </motion.a>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                  {journeyData[activePhase].description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleAchievements(activePhase)}
                    className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>Key Milestones & Achievements</span>
                    {expandedItems[activePhase] ? (
                      <ChevronUp size={20} className="ml-2 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="ml-2 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedItems[activePhase] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 overflow-hidden"
                      >
                        {journeyData[activePhase].achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${journeyData[activePhase].color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                            <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {journeyData[activePhase].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="px-2 py-1 sm:px-3 sm:py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Journey Timeline - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 sticky top-24">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 text-center">
                  Development Timeline
                </h4>
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500" />
                  
                  {journeyData.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`flex items-center mb-6 last:mb-0 cursor-pointer group ${
                        activePhase === index ? "scale-105" : ""
                      } transition-transform duration-300`}
                      onClick={() => setActivePhase(index)}
                    >
                      {/* Dot */}
                      <div
                        className={`w-4 h-4 rounded-full border-4 z-10 transition-all duration-300 ${
                          activePhase === index
                            ? `bg-gradient-to-r ${phase.color} border-white dark:border-gray-800 scale-125`
                            : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 group-hover:border-blue-300"
                        }`}
                      />
                      
                      {/* Content */}
                      <div className="ml-4 flex-1">
                        <div
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            activePhase === index
                              ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 shadow-md"
                              : "bg-gray-50 dark:bg-gray-700/50 group-hover:bg-gray-100 dark:group-hover:bg-gray-700"
                          }`}
                        >
                          <h5
                            className={`font-semibold transition-colors duration-300 text-sm ${
                              activePhase === index
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                            }`}
                          >
                            {phase.phase}
                          </h5>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {phase.period}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}