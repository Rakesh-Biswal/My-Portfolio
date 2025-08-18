"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Experience() {
  const sectionRef = useRef(null)
  const [introComplete, setIntroComplete] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  const toggleCardView = (index) => {
    setActiveCard(activeCard === index ? null : index)
  }

    const projects = [
    {
      title: "Chefo - Smart Canteen Management Solution 🍽️",
      category: "Software Solution",
      period: "2022 - 2023",
      type: "Full-Stack Platform",
      description:
        "Designed, developed, and launched a full-featured platform automating meal orders, daily tracking, subscription renewals, cancellations, and reporting—streamlining operations for canteen owners and enhancing transparency for customers.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Payment Gateway", "SEO Tools", "Blog System"],
      achievements: [
        "🚀 Integrated SEO tools and blog features for improved visibility",
        "📈 Driving sustained organic traffic and providing free digital marketing opportunities",
        "💰 Streamlined payment processing and subscription management",
        "📊 Real-time reporting and analytics dashboard",
      ],
      icon: "🍽️",
      link: "https://chefo.in",
    },
    {
      title: "Voice Command Operated Four Wheeler Robot 🤖",
      category: "IoT & ML Solution",
      period: "2022 - 2023",
      type: "Hardware + Software",
      description:
        "Designed and built a four-wheeled robot capable of executing real-time movement commands such as forward, backward, left, right, stop, 360° rotation, and more, all via voice input.",
      technologies: [
        "Arduino",
        "Voice Recognition API",
        "Motor Control",
        "Sensors",
        "Google Gemini API",
        "Firebase",
        "Real-time Database",
      ],
      achievements: [
        "🎤 Integrated Google Gemini API to analyze and filter voice commands",
        "🔄 Context-aware system using Firebase Realtime Database",
        "📱 Remote control allowing commands from anywhere without traditional IR",
        "🤖 360° rotation and precise movement control",
      ],
      icon: "🤖",
      link: "https://www.linkedin.com/posts/rakesh-biswal-b68a342b3_excited-to-share-my-latest-project-a-voice-controlled-activity-7236356639824453632-zT4r?utm_source=social_share_send&amp;utm_medium=member_desktop_web&amp;rcm=ACoAAEtv_IAB-yx3Eor6C3BKIXXxeCGm9fTm5ek",
    },
    {
      title: "V-Bhumi - India's Trusted Land Verification Platform 🏞️",
      category: "Software Based",
      period: "2023 - 2024",
      type: "Verification Platform",
      description:
        "Built a comprehensive land verification platform enabling users to upload documents, provide property details, and make secure payments for verification services.",
      technologies: [
        "React.js",
        "Payment Integration",
        "Document Processing",
        "Verification APIs",
        "Admin Dashboard",
        "Report Generation",
      ],
      achievements: [
        "📋 Implemented multi-step, rule-based admin workflow",
        "💳 Secure payment processing and automated report generation",
        "🔒 Enhanced transparency in land verification process",
        "📄 Automated document verification and processing",
      ],
      icon: "🏞️",
      link: "https://test.verifiedbhumi.com",
    },
    {
      title: "GetMyBook - Custom E-Commerce Platform 📚",
      category: "Software Based",
      period: "2024 - 2025",
      type: "E-Commerce Solution",
      description:
        "Designed and developed a tailored e-commerce platform enabling seamless book purchases, personalized book requests, and real-time availability tracking.",
      technologies: [
        "GraphQL",
        "React.js",
        "Laravel",
        "MySQL",
        "Payment Gateway",
        "Real-time Tracking",
        "Recommendation Engine",
      ],
      achievements: [
        "📊 Leveraged GraphQL for optimized data querying",
        "🛒 Laravel backend to handle order management and secure payment processing",
        "📱 Real-time inventory tracking and personalized recommendations",
        "🔍 Advanced search and filtering capabilities",
      ],
      icon: "📚",
      link: "#",
    },
    {
      title: "AIoT Based Smart Fire Extinguisher System 🔥",
      category: "ML & Model based - SQL",
      period: "2024 - 2025",
      type: "IoT + AI Solution",
      description:
        "Developed an AIoT-based Smart Fire Extinguisher System for advanced fire safety and automation integrating 360° AI camera and multiple sensors.",
      technologies: [
        "AI/ML",
        "Computer Vision",
        "IoT Sensors",
        "Real-time Processing",
        "ESP32",
        "Camera Integration",
        "Automated Control",
      ],
      achievements: [
        "🎯 Part 1: ML-based fire detection with precise coordinate extraction",
        "💧 Part 2: Model-based automated water sprinkling system",
        "🚨 Real-time fire detection and automated suppression",
        "📹 360° AI camera integration for comprehensive monitoring",
      ],
      icon: "🔥",
      link: "https://docs.google.com/presentation/d/1-q5fKGY5xhG2vy7q_sCYhY5CHWphfOHA/edit?slide=id.p1#slide=id.p1",
    },
  ]

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIntroComplete(true)
    }, 2000)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      clearTimeout(introTimer)
    }
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="scroll-reveal mb-16 text-center relative">
          <div className="relative inline-block">
            <div
              className={`transition-all duration-1000 ${introComplete ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"} absolute -top-8 -left-20`}
            >
              <div className="text-4xl animate-bounce">🚚</div>
              <div className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full whitespace-nowrap">
                Delivering Projects...
              </div>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 font-mono text-primary transition-all duration-1000 ${introComplete ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
            >
              {"Projects & Experience".split("").map((char, i) => (
                <span key={i} className="inline-block animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
          </div>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            🚀 My freelancing journey showcasing innovative software solutions and cutting-edge hardware projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {activeCard !== index ? (
                  <Card className="project-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full flex flex-col">
                    <CardHeader className="text-center">
                      <div className="text-6xl mb-4 animate-bounce">{project.icon}</div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {project.period}
                        </span>
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-medium">
                          {project.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground leading-tight">{project.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">{project.type}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs bg-muted px-2 py-1 rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                    <div className="p-4 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCardView(index)}
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        View Details 🔍
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <Card className="project-card border-2 border-secondary/20 bg-secondary/5 h-full flex flex-col">
                    <CardHeader className="text-center relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCardView(null)}
                        className="absolute left-2 top-2 hover:bg-primary/10"
                      >
                        ← Back
                      </Button>
                      <div className="text-4xl mb-2 mt-8">{project.icon}</div>
                      <CardTitle className="text-lg font-bold text-foreground">Key Achievements</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow overflow-y-auto">
                      <div className="space-y-3 mb-4">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-2" />
                            <span className="leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-foreground text-sm mb-2 flex items-center">
                          🛠️ Complete Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-4 pt-0">
                      {project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            🚀 Go Live
                          </Button>
                        </a>
                      ) : (
                        <Button variant="outline" className="w-full bg-transparent" disabled>
                          🔒 Private Project
                        </Button>
                      )}
                    </div>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-reveal mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🎯 Freelancing Journey Summary</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Major Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">3</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}