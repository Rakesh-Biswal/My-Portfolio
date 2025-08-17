"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Code, Sparkles } from "lucide-react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const countRefs = useRef([])

  const roles = ["Full Stack Developer", "React Specialist", "Node.js Expert", "UI/UX Enthusiast"]

  useEffect(() => {
    setMounted(true)

    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    // Start counter animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target
            const finalValue = parseInt(target.getAttribute('data-count') || '0', 10)
            const duration = 2000
            const startTime = performance.now()

            const updateCount = (currentTime) => {
              const elapsedTime = currentTime - startTime
              if (elapsedTime < duration) {
                const progress = elapsedTime / duration
                const currentValue = Math.floor(progress * finalValue)
                target.textContent = currentValue.toString()
                requestAnimationFrame(updateCount)
              } else {
                target.textContent = finalValue.toString()
              }
            }

            requestAnimationFrame(updateCount)
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.5 }
    )

    countRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearInterval(roleTimer)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const nameVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 1
      }
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          initial={{ x: -100, y: -100 }}
          animate={{
            x: [-100, 0, -100],
            y: [-100, 100, -100]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/10 to-primary/5 rounded-full blur-3xl"
          initial={{ x: 100, y: 100 }}
          animate={{
            x: [100, 0, 100],
            y: [100, -100, 100]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Animated Name Presentation */}
          <motion.div
            className="relative mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="w-40 h-40 mx-auto mb-8 relative group"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-2xl group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-white"
                  >
                    RB
                  </motion.div>
                </div>
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
            </motion.div>

            <motion.div
              variants={nameVariants}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                <motion.span
                  className="inline-block"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  RAKESH
                </motion.span>{' '}
                <motion.span
                  className="inline-block"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  BISWAL
                </motion.span>
              </h1>
            </motion.div>

            <div className="h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-primary font-medium"
                >
                  {roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="mb-10 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Passionate about crafting exceptional digital experiences with modern technologies. Specialized in
              building scalable applications that drive business growth and user engagement.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-2xl mx-auto"
            variants={itemVariants}
            ref={ref}
          >
            <motion.div
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card/80 transition-all duration-300">
                <Code className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground" ref={el => countRefs.current[0] = el} data-count="3">0</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
            <motion.div
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card/80 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground" ref={el => countRefs.current[1] = el} data-count="18">0</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
            </motion.div>
            <motion.div
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card/80 transition-all duration-300">
                <Github className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground" ref={el => countRefs.current[2] = el} data-count="100">0</div>
                <div className="text-sm text-muted-foreground">GitHub Commits</div>
              </div>
            </motion.div>
            <motion.div
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card/80 transition-all duration-300">
                <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            variants={itemVariants}
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
              className="px-8 py-3 text-lg hover:bg-secondary/10 transition-all duration-300 group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce transition-transform duration-300" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/Rakesh-Biswal"
              className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rakesh-biswal-b68a342b3/"
              className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border hover:bg-secondary/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rb2306114@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border hover:bg-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-8 cursor-pointer"
            onClick={() => scrollToSection("about")}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-12 border-2 border-primary/30 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
              </div>
              <motion.p
                className="text-sm text-muted-foreground mt-2"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                Explore more
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}