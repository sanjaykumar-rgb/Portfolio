"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Globe,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactSectionProps {
  sectionVariants: any
  containerVariants: any
  itemVariants: any
}

export function ContactSection({ sectionVariants, containerVariants, itemVariants }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "97308abd-d551-40f4-a3b9-236f7d50a382")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8630 448230",
      color: "from-green-500 to-emerald-500",
      description: "Available Mon-Fri, 9 AM - 6 PM IST",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sanjayk85100@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Response within 24 hours",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, India",
      color: "from-purple-500 to-pink-500",
      description: "Available for remote & local projects",
    },
  ]

  const socialLinks = [
    { icon: Linkedin, color: "hover:text-blue-600", label: "LinkedIn", followers: "2.5k" },
    { icon: Github, color: "hover:text-gray-700", label: "GitHub", followers: "1.2k" },
    { icon: Instagram, color: "hover:text-pink-600", label: "Instagram", followers: "5.8k" },
    { icon: Globe, color: "hover:text-green-600", label: "Website", followers: "10k+" },
  ]

  const responseTime = [
    { icon: Clock, label: "Response Time", value: "< 24 hours", description: "Email inquiries" },
    { icon: CheckCircle, label: "Availability", value: "Open", description: "New projects" },
  ]

  return (
    <motion.section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-15 animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-15 animate-float-delayed" />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div variants={containerVariants} className="text-center mb-20">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-glow">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-primary font-semibold uppercase tracking-wider text-lg">Get In Touch</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            Let's Work Together
            <span className="text-gradient block">& Create Something Amazing</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 text-balance"
          >
            Ready to bring your vision to life? Let's discuss your next project and create something amazing together.
            I'm here to help you achieve your creative goals.
          </motion.p>

          {/* Response Time Stats */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {responseTime.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div variants={itemVariants} key={index}>
                  <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xl font-bold text-foreground mb-1">{item.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Information - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon
                      return (
                        <motion.div key={index} className="group" whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
                          <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                            <div
                              className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-cyan-600 transition-colors">
                                {info.label}
                              </h4>
                              <p className="text-muted-foreground font-medium">{info.value}</p>
                              <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Follow Me</h3>

                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <div
                            className={`flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-200 ${social.color} hover:border-current/30 transition-all duration-300 group cursor-pointer`}
                          >
                            <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <div>
                              <div className="font-semibold text-sm">{social.label}</div>
                              <div className="text-xs text-muted-foreground">{social.followers} followers</div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-foreground mb-3">Languages</h4>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="px-4 py-2 border-2">
                        English (Fluent)
                      </Badge>
                      <Badge variant="outline" className="px-4 py-2 border-2">
                        Hindi (Native)
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3">
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-2xl bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <div className="absolute inset-0 pattern-dots opacity-5"></div>

                <CardHeader className="relative z-10 pb-6">
                  <CardTitle className="text-3xl text-gradient">Send a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and I'll get back to you as soon as possible. Let's discuss your project!
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                          className="h-12 border-2 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="h-12 border-2 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          className="h-12 border-2 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-base font-semibold">
                          Project Budget
                        </Label>
                        <Input
                          id="budget"
                          name="budget"
                          placeholder="e.g., $1000 - $5000"
                          className="h-12 border-2 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base font-semibold">
                        Project Type *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="e.g., Logo Design, Website UI, Brand Identity"
                        className="h-12 border-2 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about your project, timeline, specific requirements, and any inspiration or references you have..."
                        className="border-2 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 resize-none transition-all rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 rounded-xl font-semibold text-lg"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By sending this message, you agree to discuss your project requirements. I'll respond within 24
                      hours with next steps.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
