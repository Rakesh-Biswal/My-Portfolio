"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)
  const [introComplete, setIntroComplete] = useState(false)

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "🔺" },
        { name: "JavaScript", level: 98, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "HTML/CSS", level: 96, icon: "📄" },
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "Angular", level: 75, icon: "🔴" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "MongoDB", level: 86, icon: "🍃" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "REST APIs", level: 93, icon: "🔗" },
        { name: "GraphQL", level: 78, icon: "📊" },
        { name: "Firebase", level: 84, icon: "🔥" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      skills: [
        { name: "Git/GitHub", level: 94, icon: "🐙" },
        { name: "Docker", level: 76, icon: "🐳" },
        { name: "AWS", level: 72, icon: "☁️" },
        { name: "Figma", level: 88, icon: "🎯" },
        { name: "VS Code", level: 97, icon: "💙" },
        { name: "Postman", level: 89, icon: "📮" },
        { name: "Linux", level: 83, icon: "🐧" },
        { name: "Webpack", level: 79, icon: "📦" },
      ],
    },
    {
      title: "Hardware & IoT",
      icon: "🔧",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      skills: [
        { name: "Arduino", level: 85, icon: "🤖" },
        { name: "Raspberry Pi", level: 80, icon: "🍓" },
        { name: "ESP32/ESP8266", level: 82, icon: "📡" },
        { name: "Sensors Integration", level: 88, icon: "📊" },
        { name: "PCB Design", level: 75, icon: "🔌" },
        { name: "3D Printing", level: 78, icon: "🖨️" },
        { name: "Embedded C", level: 83, icon: "⚡" },
        { name: "IoT Protocols", level: 86, icon: "🌐" },
      ],
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            if (!animated) {
              setAnimated(true)
              setTimeout(() => {
                const skillBars = document.querySelectorAll(".skill-bar")
                skillBars.forEach((bar, index) => {
                  setTimeout(() => {
                    bar.classList.add("animate")
                  }, index * 100)
                })
              }, 800)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [animated])

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="scroll-reveal mb-20 text-center">
          <div className="relative">
            {/* Delivery truck animation */}
            <div
              className={`absolute -top-16 left-1/2 transform -translate-x-1/2 transition-all duration-2000 ${introComplete ? "translate-x-full opacity-0" : "opacity-100"}`}
            >
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg border">
                <span className="text-2xl">🚚</span>
                <span className="text-sm font-medium text-gray-700">Delivering Skills...</span>
              </div>
            </div>

            {/* Animated title with letter drop effect */}
            <div className="relative">
              {"SKILLS & EXPERTISE".split("").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block text-4xl md:text-6xl font-bold font-mono bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-500 ${
                    introComplete ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1 + 0.5}s`,
                    transitionDelay: `${index * 0.1 + 0.5}s`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>

            {/* Animated underline */}
            <div
              className={`w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4 transition-all duration-1000 ${introComplete ? "scale-x-100" : "scale-x-0"}`}
            />
          </div>

          <p
            className={`text-lg text-muted-foreground mt-8 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${introComplete ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            🚀 A comprehensive arsenal of cutting-edge technologies and frameworks that power extraordinary digital
            experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`scroll-reveal group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <CardHeader className="text-center relative z-10 pb-4">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle
                  className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="space-y-2 group/skill cursor-pointer"
                    onMouseEnter={() => setActiveSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        {activeSkill === `${categoryIndex}-${skillIndex}` && (
                          <span className="text-xs animate-bounce">⭐</span>
                        )}
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`skill-bar h-2 rounded-full bg-gradient-to-r ${category.color} relative transition-all duration-1000 ease-out ${
                          activeSkill === `${categoryIndex}-${skillIndex}` ? "shadow-lg" : ""
                        }`}
                        style={{
                          width: animated ? `${skill.level}%` : "0%",
                          boxShadow:
                            activeSkill === `${categoryIndex}-${skillIndex}`
                              ? `0 0 10px rgba(59, 130, 246, 0.5)`
                              : "none",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
              🌟 Technology Arsenal
            </h3>
            <p className="text-muted-foreground">Cutting-edge tools that power innovation</p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
              { name: "Next.js", icon: "🔺", color: "from-gray-700 to-gray-900" },
              { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
              { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
              { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-800" },
              { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-yellow-600" },
              { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-700" },
              { name: "Python", icon: "🐍", color: "from-green-500 to-blue-600" },
              { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
              { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
              { name: "Arduino", icon: "🤖", color: "from-teal-500 to-teal-700" },
              { name: "Raspberry Pi", icon: "🍓", color: "from-red-500 to-pink-600" },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-100`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: `float 3s ease-in-out infinite ${index * 0.2}s`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{tech.icon}</div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors text-center">
                  {tech.name}
                </span>

                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-white font-bold">✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-reveal mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: "🚀" },
              { number: "15+", label: "Technologies Mastered", icon: "💻" },
              { number: "3+", label: "Years Experience", icon: "⏱️" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
