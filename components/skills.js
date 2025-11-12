"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Calendar, MapPin, ExternalLink, Building2 } from "lucide-react"

export default function Experience() {
  const [activeCompany, setActiveCompany] = useState(0)
  const [expandedItems, setExpandedItems] = useState({})

  const experienceData = [
    {
      company: "Tech Innovators Inc.",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Led a team of 5 developers to build a SaaS platform serving 10k+ users",
        "Improved application performance by 40% through code optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 3 junior developers to senior level within 2 years"
      ],
      technologies: ["WordPress","PHP-Laravel","React", "Node.js", "TypeScript", "AWS", "MongoDB"],
      link: "#"
    },
    {
      company: "Digital Solutions Ltd.",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Developed and maintained multiple client projects with focus on user experience.",
      achievements: [
        "Built 15+ client websites with 99.9% uptime",
        "Reduced page load time by 50% across all projects",
        "Implemented responsive designs for mobile-first approach",
        "Collaborated with UX team to improve conversion rates by 25%"
      ],
      technologies: ["JavaScript", "React", "Python", "PostgreSQL", "Docker"],
      link: "#"
    },
    {
      company: "StartUp Ventures",
      role: "Frontend Developer",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: "Built user interfaces for early-stage startup products and prototypes.",
      achievements: [
        "Developed MVP for 3 successful startup products",
        "Created reusable component library saving 200+ development hours",
        "Implemented A/B testing framework for product validation",
        "Worked directly with founders to iterate on product vision"
      ],
      technologies: ["WordPress","React", "Vue.js", "SASS", "Firebase", "Figma"],
      link: "#"
    },
    {
      company: "Freelance",
      role: "Web Developer",
      period: "2018 - 2019",
      location: "Remote",
      description: "Provided web development services for small businesses and startups.",
      achievements: [
        "Delivered 20+ projects on time and within budget",
        "Maintained 100% client satisfaction rate",
        "Built e-commerce solutions generating $500k+ in revenue",
        "Created custom CMS solutions for non-technical clients"
      ],
      technologies: ["WordPress","HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
      link: "#"
    }
  ]

  const toggleAchievements = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My career path through innovative companies and challenging projects
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide"
          >
            <div className="flex space-x-4 min-w-max">
              {experienceData.map((exp, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCompany(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeCompany === index
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md"
                  }`}
                >
                  <Building2 size={18} className="mr-2" />
                  {exp.company}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Company Details */}
            <motion.div
              key={activeCompany}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {experienceData[activeCompany].role}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {experienceData[activeCompany].period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {experienceData[activeCompany].location}
                      </div>
                    </div>
                  </div>
                  <motion.a
                    href={experienceData[activeCompany].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors mt-4 sm:mt-0"
                  >
                    Visit <ExternalLink size={16} className="ml-1" />
                  </motion.a>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {experienceData[activeCompany].description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleAchievements(activeCompany)}
                    className="flex items-center text-lg font-semibold text-gray-800 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Key Achievements
                    {expandedItems[activeCompany] ? (
                      <ChevronUp size={20} className="ml-2" />
                    ) : (
                      <ChevronDown size={20} className="ml-2" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedItems[activeCompany] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 overflow-hidden"
                      >
                        {experienceData[activeCompany].achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experienceData[activeCompany].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 sticky top-24">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 text-center">
                  Career Timeline
                </h4>
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                  
                  {experienceData.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`flex items-center mb-6 last:mb-0 cursor-pointer group ${
                        activeCompany === index ? "scale-105" : ""
                      } transition-transform duration-300`}
                      onClick={() => setActiveCompany(index)}
                    >
                      {/* Dot */}
                      <div
                        className={`w-4 h-4 rounded-full border-4 z-10 transition-all duration-300 ${
                          activeCompany === index
                            ? "bg-blue-500 border-blue-200 scale-125"
                            : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 group-hover:border-blue-300"
                        }`}
                      />
                      
                      {/* Content */}
                      <div className="ml-4 flex-1">
                        <div
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            activeCompany === index
                              ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 shadow-md"
                              : "bg-gray-50 dark:bg-gray-700/50 group-hover:bg-gray-100 dark:group-hover:bg-gray-700"
                          }`}
                        >
                          <h5
                            className={`font-semibold transition-colors duration-300 ${
                              activeCompany === index
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                            }`}
                          >
                            {exp.company}
                          </h5>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {exp.period}
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