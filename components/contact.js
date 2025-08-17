"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showIntro, setShowIntro] = useState(false)

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "rb2306114@gmail.com",
      link: "mailto:rb2306114@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9938179834",
      link: "tel:+919938179834",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Bhubaneswar, Odisha, India",
      link: "#",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/rakeshbiswal",
      link: "https://www.linkedin.com/in/rakesh-biswal-b68a342b3",
    },
  ]

  const formSteps = [
    { field: "name", label: "What should I call you?", placeholder: "Your Name", type: "text" },
    { field: "email", label: "How can I reach you back?", placeholder: "your.email@example.com", type: "email" },
    {
      field: "subject",
      label: "What brings you here today?",
      placeholder: "Project Discussion / Collaboration / Inquiry",
      type: "text",
    },
    {
      field: "message",
      label: "Tell me more about your requirements",
      placeholder: "Describe your project, requirements, or just say hello!",
      type: "textarea",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            setTimeout(() => setShowIntro(true), 500)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY

      if (!BREVO_API_KEY) {
        throw new Error("Brevo API key not found. Please add NEXT_PUBLIC_BREVO_API_KEY to your environment variables.")
      }

      // Send email to Rakesh using Brevo API
      const emailToRakesh = {
        sender: { email: "noreply@rb2306114@gmail.com", name: "Portfolio Contact Form" },
        to: [{ email: "rakeshbiswal836@gmail.com", name: "Rakesh Biswal" }],
        subject: `New Contact Form Submission: ${formData.subject}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px;">Contact Details:</h2>
              <div style="margin-bottom: 15px;">
                <strong style="color: #667eea;">Name:</strong> ${formData.name}
              </div>
              <div style="margin-bottom: 15px;">
                <strong style="color: #667eea;">Email:</strong> ${formData.email}
              </div>
              <div style="margin-bottom: 15px;">
                <strong style="color: #667eea;">Subject:</strong> ${formData.subject}
              </div>
              <div style="margin-bottom: 20px;">
                <strong style="color: #667eea;">Message:</strong>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #667eea;">
                  ${formData.message.replace(/\n/g, "<br>")}
                </div>
              </div>
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px;">This email was sent from your portfolio contact form</p>
              </div>
            </div>
          </div>
        `,
      }

      // Send receipt email to user
      const receiptEmail = {
        sender: { email: "noreply@rb2306114@gmail.com", name: "Rakesh Biswal" },
        to: [{ email: formData.email, name: formData.name }],
        subject: "Thank you for reaching out! - Rakesh Biswal",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${formData.name}!</h1>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <p style="color: #333; font-size: 16px; line-height: 1.6;">Hello <strong>${formData.name}</strong>,</p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Thank you for reaching out through my portfolio! I've successfully received your message regarding "<strong>${formData.subject}</strong>" and I'm excited to learn more about your project.
              </p>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <h3 style="color: #667eea; margin-top: 0;">Your Message Summary:</h3>
                <p style="color: #555; margin: 10px 0;"><strong>Subject:</strong> ${formData.subject}</p>
                <p style="color: #555; margin: 10px 0;"><strong>Message:</strong> ${formData.message}</p>
              </div>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                I typically respond within 24-48 hours. In the meantime, feel free to check out my latest projects on my portfolio or connect with me on LinkedIn.
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://www.linkedin.com/in/rakesh-biswal-b68a342b3" style="background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Connect on LinkedIn</a>
              </div>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Looking forward to discussing your project!
              </p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Best regards,<br>
                <strong>Rakesh Biswal</strong><br>
                <span style="color: #667eea;">Full Stack Developer & Freelancer</span>
              </p>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 12px;">
                  This is an automated receipt confirmation. Please do not reply to this email.<br>
                  For urgent matters, contact me directly at rakeshbiswal836@gmail.com
                </p>
              </div>
            </div>
          </div>
        `,
      }

      // Send email to Rakesh
      const response1 = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(emailToRakesh),
      })

      if (!response1.ok) {
        const errorData = await response1.json()
        throw new Error(`Failed to send email to Rakesh: ${errorData.message || response1.statusText}`)
      }

      // Send receipt email to user
      const response2 = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(receiptEmail),
      })

      if (!response2.ok) {
        const errorData = await response2.json()
        throw new Error(`Failed to send receipt email: ${errorData.message || response2.statusText}`)
      }

      alert(
        `Thank you ${formData.name}! Your message has been sent successfully. You'll receive a confirmation email shortly.`,
      )
      setFormData({ name: "", email: "", subject: "", message: "" })
      setCurrentStep(0)
    } catch (error) {
      console.error("[v0] Error sending email:", error)
      if (error.message.includes("Brevo API key not found")) {
        alert("Email service is not configured. Please contact me directly at rakeshbiswal836@gmail.com")
      } else {
        alert("Sorry, there was an error sending your message. Please try again or contact me directly.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentStepData = formSteps[currentStep]
  const isCurrentStepValid = formData[currentStepData?.field]?.trim() !== ""

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`scroll-reveal mb-16 text-center transition-all duration-1000 ${showIntro ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-primary">
              {"Let's Connect".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-bounce"
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: "1s" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-pulse" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in-up delay-500">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="scroll-reveal space-y-8">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Ready to Start Something Amazing?</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm passionate about creating innovative solutions and bringing creative visions to life. Whether you
                need a full-stack web application, IoT solution, or custom software development, I'm here to help
                transform your ideas into reality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover:scale-105 transition-all duration-300 animate-fade-in-up bg-card/50 backdrop-blur-sm border border-primary/20"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl animate-bounce" style={{ animationDelay: `${index * 300}ms` }}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="animate-fade-in-up delay-1000">
              <h4 className="font-medium text-foreground mb-4">Let's Connect on Social Media</h4>
              <div className="flex space-x-4">
                {[
                  { name: "GitHub", url: "https://github.com/rakeshbiswal", icon: "🐙" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/rakesh-biswal-b68a342b3", icon: "💼" },
                  { name: "Twitter", url: "#", icon: "🐦" },
                  { name: "Instagram", url: "#", icon: "📸" },
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 animate-bounce"
                    style={{ animationDelay: `${index * 200}ms` }}
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="scroll-reveal animate-fade-in-right">
            <Card className="border-2 border-primary/20 shadow-2xl bg-card/80 backdrop-blur-sm relative z-20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="animate-pulse">💬</span>
                  Start Our Conversation
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Step {currentStep + 1} of {formSteps.length}
                </p>
              </CardHeader>
              <CardContent className="p-6 bg-background/95">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2 mb-6">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentStep + 1) / formSteps.length) * 100}%` }}
                    ></div>
                  </div>

                  {/* Current Step */}
                  <div className="min-h-[200px] flex flex-col justify-center">
                    <div className="animate-fade-in-up" key={currentStep}>
                      <label className="block text-lg font-medium text-foreground mb-4 animate-pulse">
                        {currentStepData.label}
                      </label>

                      {currentStepData.type === "textarea" ? (
                        <Textarea
                          name={currentStepData.field}
                          required
                          value={formData[currentStepData.field]}
                          onChange={handleInputChange}
                          className="w-full min-h-[120px] text-lg border-2 border-primary/20 focus:border-primary transition-all duration-300"
                          placeholder={currentStepData.placeholder}
                        />
                      ) : (
                        <Input
                          name={currentStepData.field}
                          type={currentStepData.type}
                          required
                          value={formData[currentStepData.field]}
                          onChange={handleInputChange}
                          className="w-full text-lg border-2 border-primary/20 focus:border-primary transition-all duration-300"
                          placeholder={currentStepData.placeholder}
                        />
                      )}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevStep}
                      disabled={currentStep === 0}
                      className="flex-1 transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      ← Previous
                    </Button>

                    {currentStep < formSteps.length - 1 ? (
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        disabled={!isCurrentStepValid}
                        className="flex-1 glow-animation transition-all duration-300 hover:scale-105"
                      >
                        Next →
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isCurrentStepValid}
                        className="flex-1 glow-animation transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-secondary"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </span>
                        ) : (
                          "Send Message 🚀"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
