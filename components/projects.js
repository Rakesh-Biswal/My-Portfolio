"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const sectionRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Chefo - Smart Canteen Management Solution",
      category: "Full Stack Web App",
      description: "🍽️ Complete canteen management platform with order tracking and digital payments",
      fullDescription:
        "Designed, developed, and launched a full-featured platform automating meal orders, daily tracking, subscription renewals, and reporting—streamlining operations for canteen owners and enhancing transparency for customers.",
      image: "/modern-restaurant-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway", "Real-time Updates"],
      features: [
        "Order Management",
        "Subscription System",
        "Payment Integration",
        "Analytics Dashboard",
        "Real-time Tracking",
      ],
      liveUrl: "https://chefo.in",
      githubUrl: "#",
      icon: "🍽️",
    },
    {
      id: 2,
      title: "Voice Command Four-Wheeler Robot",
      category: "IoT & Hardware",
      description: "🤖 Advanced voice-controlled robot with real-time movement and Firebase integration",
      fullDescription:
        "Designed and built a four-wheeled robot capable of executing real-time movement commands such as forward, backward, stop, 360° rotation, and more through voice input. Integrated with Google Gemini API to analyze and filter voice commands for accurate and context-aware control allowing commands from anywhere without traditional IR or remote systems.",
      image: "/voice-controlled-robot.png",
      technologies: ["Arduino", "Google Gemini API", "Firebase", "Voice Recognition", "IoT Sensors"],
      features: ["Voice Control", "360° Rotation", "Real-time Commands", "Remote Control", "AI Voice Processing"],
      liveUrl: "https://www.linkedin.com/posts/rakesh-biswal-b68a342b3_excited-to-share-my-latest-project-a-voice-controlled-activity-7236356639824453632-zT4r?utm_source=social_share_send&amp;utm_medium=member_desktop_web&amp;rcm=ACoAAEtv_IAB-yx3Eor6C3BKIXXxeCGm9fTm5ek",
      githubUrl: "#",
      icon: "🤖",
    },
    {
      id: 3,
      title: "V-Bhumi - Land Verification Platform",
      category: "Full Stack Web App",
      description: "🏞️ Comprehensive land verification system with document management",
      fullDescription:
        "Built a comprehensive land verification platform enabling users to upload documents, provide property details, and make secure payments for verification services. Implemented a multi-step admin workflow to process verification from initial submission to final approval and automated report generation.",
      image: "/land-verification-dashboard.png",
      technologies: ["React", "Node.js", "Document Processing", "Payment Gateway", "Admin Dashboard"],
      features: ["Document Upload", "Verification Workflow", "Secure Payments", "Admin Panel", "Automated Reports"],
      liveUrl: "https://test.verifiedbhumi.com",
      githubUrl: "#",
      icon: "🏞️",
    },
    {
      id: 4,
      title: "GetMyBook - Custom E-Commerce Platform",
      category: "E-Commerce Solution",
      description: "📚 Tailored e-commerce platform for seamless book purchasing experience",
      fullDescription:
        "Designed and developed a tailored e-commerce platform enabling seamless book purchases, personalized book requests, and real-time availability tracking. Leveraged GraphQL for optimized data querying and implemented a scalable Laravel backend to handle order processing, inventory management, and secure payment processing.",
      image: "/modern-bookstore-ecommerce.png",
      technologies: ["Laravel", "GraphQL", "React", "MySQL", "Payment Processing"],
      features: ["Book Catalog", "Custom Requests", "Inventory Management", "Order Tracking", "Secure Payments"],
      liveUrl: "https://getmybook.com",
      githubUrl: "#",
      icon: "📚",
    },
    {
      id: 5,
      title: "Smart Fire Extinguisher System",
      category: "IoT & Hardware",
      description: "🔥 AI-powered fire detection system with automated response",
      fullDescription:
        "Developed an AIoT-based Smart Fire Extinguisher System for advanced fire safety and automation. The system integrates a 360° camera and multiple fire sensors to detect fire incidents in real time and extract precise fire coordinates. Using an ESP8266 microcontroller, a 360° servo-controlled hose aligns to the detected coordinates and activates automated water sprinkling for rapid fire suppression.",
      image: "/smart-fire-extinguisher.png",
      technologies: ["ESP8266", "AI/Computer Vision", "360° Camera", "Fire Sensors", "Servo Motors"],
      features: ["Real-time Detection", "360° Coverage", "Automated Response", "Precise Targeting", "IoT Integration"],
      liveUrl: "https://docs.google.com/presentation/d/1-q5fKGY5xhG2vy7q_sCYhY5CHWphfOHA/edit?slide=id.p1#slide=id.p1",
      githubUrl: "#",
      icon: "🔥",
    },
    {
      id: 6,
      title: "ML-Based Land Verification System",
      category: "AI/ML Solution",
      description: "🤖 Machine learning model for automated land document verification",
      fullDescription:
        "Developed an ML-based Smart Fire Extinguisher System for advanced fire safety and automation. Part 1: (ML Based) - Developed an AIoT-based Smart Fire Extinguisher System integrates a 360° camera and multiple fire sensors to detect fire incidents in real time and extract precise fire coordinates. Part 2: (Model Based) - Using an ESP8266 microcontroller, a 360° servo-controlled hose aligns to the detected coordinates and activates automated water sprinkling for rapid fire suppression.",
      image: "/ml-document-analysis-dashboard.png",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Document Processing", "ML Models"],
      features: [
        "Document Analysis",
        "ML Verification",
        "Automated Processing",
        "Accuracy Scoring",
        "Real-time Results",
      ],
      liveUrl: "https://ml-verification.com",
      githubUrl: "#",
      icon: "🤖",
    },
  ]

  useEffect(() => {
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
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my professional work spanning full-stack development, IoT systems, and AI/ML solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="scroll-reveal project-card cursor-pointer group relative overflow-hidden border-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute top-4 right-4 text-4xl animate-pulse">{project.icon}</div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-purple-400 font-semibold">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                  >
                    🔍 Explore Project
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-2xl"></div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 bg-red-500/80 hover:bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  ✕
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{selectedProject.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">{selectedProject.fullDescription}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-white mb-4 text-xl flex items-center gap-2">🛠️ Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-4 text-xl flex items-center gap-2">⭐ Key Features</h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-center text-sm">
                          <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-8 py-3 text-lg"
                  >
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      🚀 View Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 font-bold px-8 py-3 text-lg bg-transparent"
                  >
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      💻 View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
