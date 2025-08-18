"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Sparkles,
  Truck,
  Zap,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Wrench,
} from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [showGlobalIntro, setShowGlobalIntro] = useState(true)
  const [introStep, setIntroStep] = useState(0)
  const [showDelivery, setShowDelivery] = useState(false)
  const [showNameDrop, setShowNameDrop] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [letterAnimations, setLetterAnimations] = useState({})
  const [deliveryComplete, setDeliveryComplete] = useState(false)

  const roles = ["Full Stack Developer", "React Specialist", "Node.js Expert", "UI/UX Enthusiast"]
  const firstName = "RAKESH".split("")
  const lastName = "BISWAL".split("")

  const portfolioShowcase = [
    { name: "Chefo - Restaurant Management", icon: "🍽️", tech: "React, Node.js", type: "project" },
    { name: "Voice Command Robot", icon: "🤖", tech: "IoT, Python", type: "project" },
    { name: "Full Stack Development", icon: "💻", tech: "MERN Stack", type: "skill" },
    { name: "V-Bhumi Land Verification", icon: "🏞️", tech: "ML, React", type: "project" },
    { name: "UI/UX Design", icon: "🎨", tech: "Figma, Adobe XD", type: "skill" },
    { name: "GetMyBook E-commerce", icon: "📚", tech: "MERN Stack", type: "project" },
    { name: "Database Management", icon: "🗄️", tech: "MongoDB, MySQL", type: "skill" },
    { name: "Smart Fire Extinguisher", icon: "🔥", tech: "IoT, Arduino", type: "project" },
    { name: "Mobile Development", icon: "📱", tech: "React Native", type: "skill" },
    { name: "Document Analysis System", icon: "📄", tech: "AI, Python", type: "project" },
    { name: "Cloud Services", icon: "☁️", tech: "AWS, Azure", type: "skill" },
    { name: "Contact & Collaboration", icon: "📧", tech: "Let's Connect", type: "contact" },
  ]

  const techIcons = [
    { icon: Code, color: "text-blue-500" },
    { icon: Database, color: "text-green-500" },
    { icon: Globe, color: "text-purple-500" },
    { icon: Smartphone, color: "text-pink-500" },
    { icon: Cpu, color: "text-orange-500" },
    { icon: Wrench, color: "text-yellow-500" },
  ]

  useEffect(() => {
    setMounted(true)

    const globalIntroSequence = async () => {
      const projectInterval = setInterval(() => {
        setIntroStep((prev) => (prev + 1) % portfolioShowcase.length)
      }, 133)

      setTimeout(() => {
        clearInterval(projectInterval)
        setShowGlobalIntro(false)

        setTimeout(() => setShowDelivery(true), 200)
        setTimeout(() => setDeliveryComplete(true), 1500)

        setTimeout(() => {
          setShowNameDrop(true)
          firstName.forEach((_, index) => {
            setTimeout(() => {
              setLetterAnimations((prev) => ({
                ...prev,
                [`first-${index}`]: true,
              }))
            }, index * 150)
          })

          lastName.forEach((_, index) => {
            setTimeout(
              () => {
                setLetterAnimations((prev) => ({
                  ...prev,
                  [`last-${index}`]: true,
                }))
              },
              firstName.length * 150 + index * 150,
            )
          })
        }, 1200)

        setTimeout(() => setShowContent(true), 2800)
      }, 3000)
    }

    globalIntroSequence()

    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(roleTimer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (showGlobalIntro) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background/95 to-primary/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="text-center z-10">
          <div className="relative">
            <div className="transform-gpu transition-all duration-150 ease-out" key={introStep}>
              <div className="bg-card/20 backdrop-blur-xl rounded-2xl p-8 border border-primary/20 shadow-2xl">
                <div className="text-6xl mb-4 animate-[showcaseZoom_0.15s_ease-out]">
                  {portfolioShowcase[introStep].icon}
                </div>
                <div className="text-foreground font-bold text-xl mb-2">{portfolioShowcase[introStep].name}</div>
                <div className="text-muted-foreground text-sm bg-primary/10 rounded-full px-4 py-2">
                  {portfolioShowcase[introStep].tech}
                </div>
                <div className="text-xs text-primary/70 mt-2 uppercase tracking-wider">
                  {portfolioShowcase[introStep].type}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="w-64 h-2 bg-primary/20 rounded-full mx-auto overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-100"
                style={{
                  width: `${((introStep + 1) / portfolioShowcase.length) * 100}%`,
                  boxShadow: "0 0 10px currentColor",
                }}
              />
            </div>
            <p className="text-muted-foreground text-sm mt-3 font-medium">Loading Portfolio...</p>
          </div>
        </div>

        <style jsx>{`
          @keyframes showcaseZoom {
            0% { 
              transform: scale(0.8); 
              opacity: 0; 
            }
            50% { 
              transform: scale(1.1); 
              opacity: 0.8; 
            }
            100% { 
              transform: scale(1); 
              opacity: 1; 
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        {showDelivery && !deliveryComplete && (
          <div className="absolute top-10 left-0 w-full flex justify-center">
            <div className="animate-[slideInFromLeft_0.8s_ease-out] flex items-center gap-3 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border">
              <Truck className="w-6 h-6 text-primary animate-[truckMove_1s_ease-in-out_infinite]" />
              <span className="text-primary font-medium">Delivering your portfolio...</span>
            </div>
          </div>
        )}

        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rotate-45 animate-pulse" />
        <div
          className="absolute top-40 right-20 w-6 h-6 border-2 border-secondary/30 rotate-12 animate-spin"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-32 left-20 w-8 h-8 bg-accent/15 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-[float3D_20s_ease-in-out_infinite]" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/10 to-primary/5 rounded-full blur-3xl animate-[float3D_25s_ease-in-out_infinite]"
          style={{ animationDelay: "2s" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-8 relative">
            <div
              className={`w-32 h-32 mx-auto mb-6 relative group transition-all duration-1000 ${showNameDrop ? "animate-[dropIn3D_1s_ease-out]" : "opacity-0"}`}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-[continuousRotate_10s_linear_infinite]">
                RB
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300 animate-pulse" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
              <Zap className="absolute -bottom-2 -left-2 w-6 h-6 text-secondary animate-bounce" />

              {showDelivery && !showNameDrop && !deliveryComplete && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-[deliveryHand_1.5s_ease-in-out_infinite]">
                  <div className="text-4xl drop-shadow-lg">👋</div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-2 font-sans bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                <div className="flex justify-center gap-1 mb-2">
                  {firstName.map((letter, index) => (
                    <span
                      key={`first-${index}`}
                      className={`inline-block transition-all duration-700 ${letterAnimations[`first-${index}`]
                          ? "animate-[letterDrop3D_0.8s_ease-out] opacity-100"
                          : "opacity-0 -translate-y-20"
                        }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-1">
                  {lastName.map((letter, index) => (
                    <span
                      key={`last-${index}`}
                      className={`inline-block transition-all duration-700 ${letterAnimations[`last-${index}`]
                          ? "animate-[letterDrop3D_0.8s_ease-out] opacity-100"
                          : "opacity-0 -translate-y-20"
                        }`}
                      style={{ animationDelay: `${(firstName.length + index) * 0.1}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </h1>
              <div
                className={`h-8 flex items-center justify-center transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <p className="text-xl md:text-2xl text-primary font-medium transition-all duration-500">
                  {roles[currentRole]}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`mb-10 max-w-4xl mx-auto transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Passionate about crafting exceptional digital experiences with modern technologies. Specialized in
              building scalable applications that drive business growth and user engagement.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="group cursor-pointer">
                <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  <Code className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  <Sparkles className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  <Github className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">GitHub Commits</div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 transition-all duration-1000 delay-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-3 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 text-lg border-2 hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-3 text-lg hover:bg-secondary/10 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=13LecI-OLtkm4pWLXV641TNzW4l0GAgiv",
                  "_blank"
                )
              }
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>

          </div>

          <div
            className={`flex justify-center gap-6 mb-8 transition-all duration-1000 delay-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <a
              href="#"
              className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border hover:bg-secondary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border hover:bg-accent/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer transition-all duration-1000 delay-1000 ${showContent ? "opacity-100" : "opacity-0"}`}
          onClick={() => scrollToSection("about")}
        >
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center group-hover:border-primary transition-colors duration-300">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
            <ArrowDown className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes letterDrop3D {
          0% { transform: translateY(-100px) rotateX(-90deg) rotateZ(-10deg); opacity: 0; }
          50% { transform: translateY(10px) rotateX(45deg) rotateZ(5deg); opacity: 0.8; }
          100% { transform: translateY(0) rotateX(0deg) rotateZ(0deg); opacity: 1; }
        }
        
        @keyframes dropIn3D {
          0% { transform: translateY(-50px) scale(0.8) rotateY(-180deg); opacity: 0; }
          50% { transform: translateY(10px) scale(1.1) rotateY(-90deg); opacity: 0.8; }
          100% { transform: translateY(0) scale(1) rotateY(0deg); opacity: 1; }
        }
        
        @keyframes continuousRotate {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes float3D {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(10deg); }
        }
        
        @keyframes deliveryHand {
          0% { transform: translateX(-50%) translateY(-10px) rotate(-15deg) scale(1); }
          50% { transform: translateX(-50%) translateY(5px) rotate(15deg) scale(1.1); }
          100% { transform: translateX(-50%) translateY(-10px) rotate(-15deg) scale(1); }
        }
        
        @keyframes truckMove {
          0% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(5px) rotate(2deg); }
          100% { transform: translateX(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  )
}
