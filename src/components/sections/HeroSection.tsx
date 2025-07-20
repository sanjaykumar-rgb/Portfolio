"use client"

import React, { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion"
import {
  Download,
  Linkedin,
  Github,
  Instagram,
  Globe,
  Palette,
  Layers,
  PenTool,
  Monitor,
  Camera,
  Sparkles,
  Play,
  Eye,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface HeroSectionProps {
  personalInfo: any
  stats: { label: string; value: string; icon: React.ElementType }[]
  containerVariants: any
  itemVariants: any
}

export function HeroSection({ personalInfo, stats, containerVariants, itemVariants }: HeroSectionProps) {
  const [isFlipped, setIsFlipped] = React.useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const rotateY = useMotionValue(0)
  const { scrollY } = useScroll()

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const textY = useTransform(scrollY, [0, 500], [0, 100])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    rotateY.set(isFlipped ? 180 : 0)
  }, [isFlipped, rotateY])

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const designTools = [
    { icon: Palette, name: "Photoshop", color: "from-blue-500 to-blue-600", proficiency: 95 },
    { icon: PenTool, name: "Illustrator", color: "from-orange-500 to-orange-600", proficiency: 92 },
    { icon: Layers, name: "InDesign", color: "from-pink-500 to-pink-600", proficiency: 88 },
    { icon: Monitor, name: "Figma", color: "from-purple-500 to-purple-600", proficiency: 94 },
    { icon: Camera, name: "After Effects", color: "from-indigo-500 to-indigo-600", proficiency: 90 },
  ]

  const quickInfo = [
    { icon: MapPin, label: personalInfo.location, color: "text-green-400" },
    { icon: Phone, label: personalInfo.phone, color: "text-blue-400" },
    { icon: Mail, label: personalInfo.email, color: "text-purple-400" },
  ]

  const socialLinks = [
    { icon: Linkedin, color: "hover:text-blue-400", label: "LinkedIn", followers: "2.5k" },
    { icon: Github, color: "hover:text-gray-400", label: "GitHub", followers: "1.2k" },
    { icon: Instagram, color: "hover:text-pink-400", label: "Instagram", followers: "5.8k" },
    { icon: Globe, color: "hover:text-green-400", label: "Website", followers: "10k+" },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Enhanced Background Effects with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="absolute inset-0 pattern-grid opacity-10"></div>

        {/* Interactive Background Orbs - Responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          }}
        />

        {/* Floating Design Tool Icons - Responsive */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {designTools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={index}
                className={`absolute w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center shadow-glow opacity-20 hover:opacity-40 transition-opacity`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{
                  opacity: 0.2,
                  scale: 1,
                  rotate: 0,
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  delay: 1 + index * 0.2,
                  duration: 2,
                  y: {
                    duration: 4 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                  x: {
                    duration: 6 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                style={{
                  top: `${15 + index * 12}%`,
                  left: `${8 + index * 15}%`,
                  transform: `translate(${mousePosition.x * (5 + index * 2)}px, ${mousePosition.y * (5 + index * 2)}px)`,
                }}
                whileHover={{ scale: 1.2, opacity: 0.6 }}
              >
                <Icon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <div className="relative z-10 pt-16 sm:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
          style={{ y: textY }}
        >
          {/* Main Content Grid - Responsive */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[60vh]">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              {/* Status Badge - Responsive */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              >
                <Badge
                  variant="outline"
                  className="glass border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  <span>Top Rated Designer</span>
                </Badge>
              </motion.div>

              {/* Main Heading - Responsive Typography */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span
                    className="text-gradient text-glow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Sanjay Kumar
                  </motion.span>
                </motion.h1>

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div
                    className="w-12 sm:w-16 lg:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light text-center lg:text-left">
                    {personalInfo.title}
                  </h2>
                </motion.div>
              </motion.div>

              {/* Description - Responsive */}
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-0"
              >
                {personalInfo.tagline} with{" "}
                <motion.span
                  className="text-gradient font-semibold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {personalInfo.experience} years
                </motion.span>{" "}
                of expertise in multimedia, marketing, and print design. Specialized in creating impactful designs that
                drive results.
              </motion.p>

              {/* Key Skills Showcase - Responsive */}
              <motion.div variants={containerVariants} className="space-y-3 sm:space-y-4">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white/90 text-center lg:text-left">
                  Expertise in:
                </h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                  {[
                    "Adobe Creative Suite",
                    "UI/UX Design",
                    "Brand Identity",
                    "Motion Graphics",
                    "Print Design",
                    "Social Media",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className="glass border-white/30 text-white hover:bg-white/10 transition-all px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons - Responsive */}
              <motion.div
                variants={containerVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <motion.div variants={itemVariants}>
                  <Button
                    size="lg"
                    variant="gradient"
                    className="group text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-slate-900 glass bg-transparent text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Portfolio
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links - Responsive */}
              <motion.div
                variants={containerVariants}
                className="flex gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start"
              >
                {socialLinks.map(({ icon: Icon, color, label, followers }, index) => (
                  <motion.div variants={itemVariants} key={index} className="group relative">
                    <Button
                      size="icon"
                      variant="ghost"
                      className={`glass text-white ${color} hover:scale-110 transition-all duration-300 rounded-xl w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </Button>

                    {/* Enhanced Tooltip - Hidden on mobile */}
                    <div className="hidden sm:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-black/80 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                        <div className="font-medium">{label}</div>
                        <div className="text-white/70">{followers} followers</div>
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black/80"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Visual Elements - Responsive */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 order-1 lg:order-2">
              {/* Profile Image with Design Tools - Responsive */}
              <motion.div
                variants={itemVariants}
                className="relative flex justify-center"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                  {/* Animated Rings - Responsive */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                    style={{ transform: "scale(1.1)" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-2 sm:inset-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
                    style={{ transform: "scale(1.05)" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />

                  {/* Profile Image Container - Responsive */}
                  <motion.div
                    className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full glass border-2 sm:border-4 border-white/30 flex items-center justify-center overflow-hidden shadow-glow-lg"
                    style={{ rotateY: rotateY }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center relative overflow-hidden"
                      style={{ opacity: useTransform(rotateY, [0, 90, 180], [1, 0, 0]) }}
                    >
                      <img
                        src="/placeholder.svg?height=200&width=200&text=Sanjay+Kumar"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover rounded-full"
                      />

                      {/* Overlay with stats on hover */}
                      <motion.div
                        className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center text-white">
                          <div className="text-xl sm:text-2xl font-bold">8+</div>
                          <div className="text-xs sm:text-sm">Years</div>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center"
                      style={{
                        rotateY: 180,
                        opacity: useTransform(rotateY, [0, 90, 180], [0, 0, 1]),
                      }}
                    >
                      <Palette className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Floating Tool Icons around profile - Responsive */}
                  {designTools.slice(0, 4).map((tool, index) => {
                    const Icon = tool.icon
                    const angle = index * 90 - 45
                    const radius = window.innerWidth < 640 ? 80 : window.innerWidth < 1024 ? 110 : 140
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius

                    return (
                      <motion.div
                        key={index}
                        className={`absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center shadow-glow group cursor-pointer`}
                        style={{
                          left: `calc(50% + ${x}px - 16px)`,
                          top: `calc(50% + ${y}px - 16px)`,
                        }}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1.5 + index * 0.2, type: "spring" }}
                        whileHover={{ scale: 1.3, rotate: 15, zIndex: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />

                        {/* Tool Tooltip - Hidden on mobile */}
                        <div className="hidden sm:block absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                          <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            <div className="font-medium">{tool.name}</div>
                            <div className="text-white/70">{tool.proficiency}%</div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Quick Contact Info - Responsive */}
              <motion.div variants={itemVariants}>
                <Card className="glass border-white/20 hover:border-white/40 transition-all duration-300 max-w-sm mx-auto lg:max-w-none">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <motion.div
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">Available for Work</h4>
                        <p className="text-white/70 text-xs sm:text-sm">{personalInfo.location}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-white/80">
                      {quickInfo.map((info, index) => {
                        const Icon = info.icon
                        return (
                          <motion.div
                            key={index}
                            className="flex items-center gap-2"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${info.color}`} />
                            <span className="truncate">{info.label}</span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <div className="text-white/60 text-xs sm:text-sm mb-1 group-hover:text-white/80 transition-colors">
              Scroll to explore my work
            </div>
            <motion.div
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 text-white/60 group-hover:text-white/80 transition-colors" />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section Below Hero - Responsive */}
      <div className="relative bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
                    <CardContent className="p-4 sm:p-6">
                      <motion.div
                        className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </motion.div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Wave - Responsive */}
      
    </section>
  )
}
