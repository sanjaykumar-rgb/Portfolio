"use client"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Palette,
  User,
  Award,
  Star,
  Sparkles,
  Code,
  Layers,
  PenTool,
  Monitor,
  Target,
  Zap,
  Heart,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
} from "lucide-react"
import { useRef, useState, useEffect } from "react"

interface AboutSectionProps {
  aboutData: any
  containerVariants: any
  itemVariants: any
}

export function AboutSection({ aboutData, containerVariants, itemVariants }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      return () => section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Provide default values to prevent undefined errors

  const keyAchievements = aboutData?.keyAchievements || [
    "Increased client engagement by 45% through innovative design solutions",
    "Maintained 98% client satisfaction rate across all projects",
    "Successfully managed up to 12 concurrent projects",
    "Specialized in Adobe Creative Suite for 8+ years",
    "Expert in both print and digital design mediums",
    "Led design initiatives that generated measurable business results",
  ]

  const introduction =
    aboutData?.introduction || "A highly creative and multitalented graphic designer with extensive experience."
  const journey = aboutData?.journey || "My journey in design began with a passion for visual storytelling."
  const philosophy = aboutData?.philosophy || "I specialize in creating impactful designs that drive results."
  const currentRole = aboutData?.currentRole || "Currently working on exciting projects."

  // Enhanced floating elements with better responsive positioning
  const floatingElements = [
    {
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      size: "w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16",
      position: { top: "15%", left: "5%" },
      delay: 0,
    },
    {
      icon: PenTool,
      color: "from-blue-500 to-cyan-500",
      size: "w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12",
      position: { top: "25%", right: "8%" },
      delay: 0.5,
    },
    {
      icon: Layers,
      color: "from-green-500 to-emerald-500",
      size: "w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14",
      position: { bottom: "30%", left: "3%" },
      delay: 1,
    },
    {
      icon: Monitor,
      color: "from-orange-500 to-red-500",
      size: "w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10",
      position: { bottom: "15%", right: "5%" },
      delay: 1.5,
    },
    {
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      size: "w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8",
      position: { top: "45%", left: "2%" },
      delay: 2,
    },
    {
      icon: Sparkles,
      color: "from-yellow-400 to-orange-500",
      size: "w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6",
      position: { top: "60%", right: "3%" },
      delay: 2.5,
    },
  ]

  const workingStyleItems = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Every design decision backed by research and strategy",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Quick turnaround times without sacrificing quality",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CheckCircle,
      title: "Detail Oriented",
      description: "Meticulous attention to every design element",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description: "Focus on designs that achieve business objectives",
      color: "from-orange-500 to-red-500",
    },
  ]

  // Animation variants for stacking effect with reduced gap
  const aboutStackVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 0,
      y: 0,
      rotate: 0,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      x: index * 100, // Further reduced gap from 280 to 240
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
    stacked: (index: number) => ({
      opacity: 0.7,
      scale: 0.9 - index * 0.05,
      x: index * 8,
      y: index * 8,
      rotate: index * 1.5,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Enhanced Background Design with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-pink-100/30"></div>

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Dynamic dot pattern */}
        <div
          className="absolute inset-0 opacity-20 sm:opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px, 50px 50px, 20px 20px",
            backgroundPosition: "0 0, 25px 25px, 15px 15px",
          }}
        ></div>

        {/* Large floating orbs with enhanced gradients and mouse interaction */}
        <motion.div
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 lg:w-80 h-32 sm:h-48 lg:h-80 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 100%)",
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-32 lg:w-64 h-24 sm:h-32 lg:h-64 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.3) 50%, transparent 100%)",
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating design tool icons with enhanced responsive positioning */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon
          return (
            <motion.div
              key={index}
              className={`absolute ${element.size} rounded-2xl bg-gradient-to-r ${element.color} flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity cursor-pointer`}
              style={{
                ...element.position,
                transform: `translate(${mousePosition.x * (5 + index * 2)}px, ${mousePosition.y * (5 + index * 2)}px)`,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{
                opacity: 0.2,
                scale: 1,
                rotate: 0,
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                delay: element.delay,
                duration: 2,
                y: {
                  duration: 5 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
                x: {
                  duration: 7 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.2, opacity: 0.6, rotate: 10 }}
            >
              <Icon className="w-1/2 h-1/2 text-white" />
            </motion.div>
          )
        })}

        {/* Animated SVG paths */}
        <svg className="absolute inset-0 w-full h-full opacity-5 sm:opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="line-gradient-about" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#line-gradient-about)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,400 Q250,300 500,400 T1000,400"
            stroke="url(#line-gradient-about)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,600 Q250,500 500,600 T1000,600"
            stroke="url(#line-gradient-about)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div style={{ y: contentY }} className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced Responsive Typography */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 sm:mb-6"
          >
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
            <span className="text-purple-600 font-semibold uppercase tracking-wider text-sm sm:text-base lg:text-lg">
              About Me
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 text-balance leading-tight"
          >
            Creative Professional
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              & Design Expert
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto text-balance leading-relaxed px-4 sm:px-0"
          >
            {introduction}
          </motion.p>
        </motion.div>

        {/* Main Content Cards with Stacking Animation */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex gap-2 lg:gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100 pb-6">
            {/* Journey Card */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={aboutStackVariants}
              viewport={{ once: true, amount: 0.3 }}
              onHoverStart={() => setActiveCard(0)}
              onHoverEnd={() => setActiveCard(null)}
              className="flex-shrink-0"
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm relative overflow-hidden group w-80 h-[400px] flex flex-col">
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                <motion.div
                  className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 opacity-5 group-hover:opacity-10 transition-opacity"
                  animate={{ rotate: activeCard === 0 ? 360 : 0 }}
                  transition={{ duration: 2 }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  ></div>
                </motion.div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Palette className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">My Design Journey</h3>
                      <p className="text-gray-600 text-sm">8+ Years of Creative Excellence</p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm pr-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {journey}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {philosophy}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {currentRole}
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Achievements Card */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={aboutStackVariants}
              viewport={{ once: true, amount: 0.3 }}
              onHoverStart={() => setActiveCard(1)}
              onHoverEnd={() => setActiveCard(null)}
              className="flex-shrink-0"
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm w-80 h-[400px] flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Key Achievements</h3>
                      <p className="text-gray-600 text-sm">Proven Track Record</p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-gray-100">
                    <div className="space-y-3 pr-2">
                      {keyAchievements.map((achievement: string, index: number) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                          whileHover={{ x: 4, scale: 1.01 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Working Style Card */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={aboutStackVariants}
              viewport={{ once: true, amount: 0.3 }}
              onHoverStart={() => setActiveCard(2)}
              onHoverEnd={() => setActiveCard(null)}
              className="flex-shrink-0"
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm w-80 h-[400px] flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Star className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Working Style</h3>
                      <p className="text-gray-600 text-sm">How I approach projects</p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
                    <div className="space-y-4 pr-2">
                      {workingStyleItems.map((style, index) => {
                        const Icon = style.icon
                        return (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
                            whileHover={{ scale: 1.02, x: 4 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-r ${style.color} flex items-center justify-center shadow-md flex-shrink-0`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </motion.div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1 text-sm group-hover:text-purple-600 transition-colors">
                                {style.title}
                              </h4>
                              <p className="text-xs text-gray-600 leading-relaxed">{style.description}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Section - Enhanced Responsive Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            {/* Interactive particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <CardContent className="p-6 sm:p-8 lg:p-12 relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-3xl bg-white/20 flex items-center justify-center shadow-2xl"
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </motion.div>

              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4">Passionate About Design</h3>
              <p className="text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Every project is an opportunity to create something meaningful. Let's work together to bring your vision
                to life with creativity, precision, and passion.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold text-sm sm:text-base"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Let's Collaborate
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 bg-transparent shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
