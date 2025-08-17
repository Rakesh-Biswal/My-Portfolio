"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation, useInView } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function About() {
  const sectionRef = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [projectsCount, setProjectsCount] = useState(0)
  const [monthsExp, setMonthsExp] = useState(0)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      
      // Projects count animation
      const projectsInterval = setInterval(() => {
        setProjectsCount(prev => {
          if (prev >= 50) {
            clearInterval(projectsInterval)
            return 50
          }
          return prev + 1
        })
      }, 30)

      // Months experience animation
      const monthsInterval = setInterval(() => {
        setMonthsExp(prev => {
          if (prev >= 36) { // 3 years = 36 months
            clearInterval(monthsInterval)
            return 36
          }
          return prev + 1
        })
      }, 30)

      return () => {
        clearInterval(projectsInterval)
        clearInterval(monthsInterval)
      }
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6
      }
    }
  }

  const photoVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
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
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-primary">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={photoVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full p-1 shadow-xl">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                    <motion.img
                      src="/Rakesh-professional-passport.jpg"
                      alt="Rakesh Biswal"
                      className="w-72 h-72 rounded-full object-cover"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl float-animation" />
                <div
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl float-animation"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  <TypeAnimation
                    sequence={[
                      "Hello! I'm Rakesh Biswal",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={false}
                    speed={30}
                    style={{ display: 'inline-block' }}
                  />
                </h3>
                <div className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <TypeAnimation
                    sequence={[
                      "A passionate Full Stack Developer with expertise in modern web technologies. I love creating innovative solutions that bridge the gap between design and functionality.",
                      500,
                    ]}
                    wrapper="p"
                    cursor={false}
                    speed={60}
                    style={{ display: 'inline-block' }}
                  />
                </div>
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <TypeAnimation
                    sequence={[
                      "With a strong foundation in both frontend and backend development, I specialize in building scalable applications using cutting-edge technologies like React, Node.js, and cloud platforms.",
                      500,
                    ]}
                    wrapper="p"
                    cursor={false}
                    speed={60}
                    style={{ display: 'inline-block' }}
                  />
                </div>
              </div>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <Card className="project-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {projectsCount}+
                    </div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="project-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {monthsExp}+
                    </div>
                    <div className="text-sm text-muted-foreground">Months Experience</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {["Problem Solver", "Team Player", "Quick Learner", "Innovation Focused"].map((trait) => (
                  <motion.span 
                    key={trait}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}