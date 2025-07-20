"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Linkedin, Github, Instagram, Globe, Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react"

interface FooterProps {
  sectionVariants: any
  containerVariants: any
  itemVariants: any
}

export function Footer({ sectionVariants, containerVariants, itemVariants }: FooterProps) {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ]

  const services = [
    "Logo & Brand Design",
    "UI/UX Design",
    "Social Media Graphics",
    "Print Design",
    "Motion Graphics",
    "Web Design",
  ]

  const contactInfo = [
    { icon: Phone, label: "+91 8630 448230" },
    { icon: Mail, label: "sanjayk85100@gmail.com" },
    { icon: MapPin, label: "Noida, India" },
  ]

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Github, label: "GitHub", color: "hover:text-gray-600" },
    { icon: Instagram, label: "Instagram", color: "hover:text-pink-500" },
    { icon: Globe, label: "Website", color: "hover:text-green-500" },
  ]

  return (
    <motion.footer
      className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-float-delayed" />

      <motion.div variants={containerVariants} className="relative container-custom">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-glow">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Sanjay Kumar</h3>
                <p className="text-white/70 text-sm">Graphic Designer & UI/UX Designer</p>
              </div>
            </div>

            <p className="text-white/80 mb-6 leading-relaxed">
              Creating impactful visual experiences with 8+ years of expertise in multimedia, marketing, and print
              design.
            </p>

            <div className="flex gap-3">
              <Badge variant="outline" className="border-white/30 text-white bg-white/10">
                Available for Work
              </Badge>
              <Badge variant="outline" className="border-green-300 text-green-300 bg-green-500/10">
                ● Online
              </Badge>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-gradient">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-gradient">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <div className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-pointer">
                    <div className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    {service}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-gradient">Get in Touch</h4>
            <div className="space-y-4 mb-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{info.label}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      variant="ghost"
                      className={`w-10 h-10 rounded-xl text-white/70 ${social.color} hover:bg-white/10 transition-all duration-300 p-0`}
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card className="border-0 bg-white/10 backdrop-blur-md">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Get the latest updates on my work, design tips, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white/70">
              <span>© 2025 Sanjay Kumar. All rights reserved.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in India</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}
