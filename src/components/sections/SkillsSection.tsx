"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Target,
  Sparkles,
  Send,
  Download,
  Award,
  TrendingUp,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
} from "lucide-react"
import { useRef } from "react"

interface SkillsSectionProps {
  skillsData: any
  containerVariants: any
  itemVariants: any
}

export function SkillsSection({ skillsData, containerVariants, itemVariants }: SkillsSectionProps) {
  const [activeSkillTab, setActiveSkillTab] = React.useState(skillsData?.categories?.[0]?.category || "Design")
  const skillsScrollRef = useRef<HTMLDivElement>(null)
  const certificationsScrollRef = useRef<HTMLDivElement>(null)
  const workflowScrollRef = useRef<HTMLDivElement>(null)

  // Provide default values to prevent undefined errors
  const skillOverview = [
    {
      icon: Award,
      label: "Expert Level",
      value: skillsData?.overview?.expertLevel || "6",
      color: "from-emerald-500 to-green-500",
      description: "Tools mastered",
    },
    {
      icon: TrendingUp,
      label: "Advanced",
      value: skillsData?.overview?.advancedLevel || "4",
      color: "from-blue-500 to-cyan-500",
      description: "Skills developed",
    },
    {
      icon: Clock,
      label: "Total Tools",
      value: skillsData?.overview?.totalTools || "10",
      color: "from-purple-500 to-pink-500",
      description: "In toolkit",
    },
    {
      icon: Users,
      label: "Certifications",
      value: skillsData?.overview?.certifications || "6+",
      color: "from-orange-500 to-red-500",
      description: "Earned",
    },
  ]

  const certifications = skillsData?.certifications || []
  const workflowSteps = skillsData?.workflow || []
  const skillCategories = skillsData?.categories || []

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
            `,
          }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-delayed" />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Enhanced Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-7 h-7 text-white" />
            </motion.div>
            <div className="text-left">
              <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">Technical Expertise</span>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1" />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Mastery
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive expertise across design disciplines with industry-leading tools and cutting-edge technologies.
            Constantly evolving to stay ahead of design trends.
          </motion.p>

          {/* Enhanced Skills Overview Stats */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skillOverview.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  className="group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:bg-white relative overflow-hidden">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-[1px] bg-white rounded-xl" />

                    <CardContent className="p-6 text-center relative z-10">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                        {item.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
                      <div className="text-xs text-gray-600">{item.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Tabs - Reduced Height */}
        {skillCategories.length > 0 && (
          <div className="max-w-7xl mx-auto mb-16">
            <Tabs value={activeSkillTab} onValueChange={setActiveSkillTab} className="w-full">
              <div className="overflow-x-auto pb-4 mb-8">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-2 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl border-0 min-w-[800px] md:min-w-0 gap-3">
                  {skillCategories.map((group: any, index: number) => {
                    const Icon = group.icon
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={group.category}
                      >
                        <TabsTrigger
                          value={group.category}
                          className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:via-pink-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:scale-105 transition-all duration-500 rounded-2xl hover:bg-gray-50 min-h-[90px] w-full group cursor-pointer border-2 border-transparent data-[state=active]:border-white/20 relative overflow-hidden"
                        >
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-5 group-data-[state=active]:opacity-10">
                            <div
                              style={{
                                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                backgroundSize: "20px 20px",
                              }}
                              className="w-full h-full"
                            />
                          </div>

                          <motion.div
                            className="w-8 h-8 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 group-data-[state=active]:from-white/20 group-data-[state=active]:to-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
                            whileHover={{ rotate: 5 }}
                          >
                            <Icon className="w-4 h-4 text-gray-600 group-data-[state=active]:text-white" />
                          </motion.div>

                          <div className="text-center space-y-1 relative z-10">
                            <div className="font-bold text-sm group-data-[state=active]:text-white text-gray-900">
                              {group.category}
                            </div>
                            <Badge
                              variant="outline"
                              className="text-xs px-2 py-1 group-data-[state=active]:border-white/30 group-data-[state=active]:text-white group-data-[state=active]:bg-white/10 border-gray-300 text-gray-600 bg-gray-50 font-semibold"
                            >
                              {group.totalYears}+ Years
                            </Badge>
                          </div>
                        </TabsTrigger>
                      </motion.div>
                    )
                  })}
                </TabsList>
              </div>

              {skillCategories.map((group: any) => (
                <TabsContent key={group.category} value={group.category}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    {/* Enhanced Horizontal Scrolling Skills */}
                    <div className="relative">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">
                            {group.category} Tools ({group.skills?.length || 0})
                          </h4>
                          <p className="text-gray-600">Professional expertise and experience</p>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => scrollLeft(skillsScrollRef)}
                            className="w-12 h-12 p-0 rounded-full hover:bg-purple-50 hover:border-purple-200 shadow-lg"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => scrollRight(skillsScrollRef)}
                            className="w-12 h-12 p-0 rounded-full hover:bg-purple-50 hover:border-purple-200 shadow-lg"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>

                      <div
                        ref={skillsScrollRef}
                        className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100 pb-6"
                        style={{ scrollSnapType: "x mandatory" }}
                      >
                        {(group.skills || []).map((skill: any, index: number) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0"
                            style={{ scrollSnapAlign: "start" }}
                          >
                            <EnhancedSkillCard skill={skill} groupColor={group.color} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}

        {/* Enhanced Additional Sections */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-yellow-50 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Award className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
                      <p className="text-gray-600">Industry-recognized credentials</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => scrollLeft(certificationsScrollRef)}
                      className="w-10 h-10 p-0 rounded-full shadow-lg"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => scrollRight(certificationsScrollRef)}
                      className="w-10 h-10 p-0 rounded-full shadow-lg"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div
                  ref={certificationsScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-100 pb-4"
                >
                  {certifications.map((cert: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 w-80 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-yellow-200"
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors mb-2 leading-tight">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">{cert.year}</p>
                          {cert.verified && (
                            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Design Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Target className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Design Process</h3>
                      <p className="text-gray-600">My systematic approach</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => scrollLeft(workflowScrollRef)}
                      className="w-10 h-10 p-0 rounded-full shadow-lg"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => scrollRight(workflowScrollRef)}
                      className="w-10 h-10 p-0 rounded-full shadow-lg"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div
                  ref={workflowScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 pb-4"
                >
                  {workflowSteps.map((step: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 w-72 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200"
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg text-white font-bold flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {step.step}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-tight">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-0 shadow-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
            </div>

            <CardContent className="p-12 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 flex items-center justify-center shadow-2xl"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-4xl font-bold mb-4">Ready to Create Something Amazing?</h3>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Let's collaborate and bring your vision to life with cutting-edge design solutions that drive results
                and exceed expectations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Start Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 bg-transparent shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Skill Card Component
function EnhancedSkillCard({ skill, groupColor }: { skill: any; groupColor: string }) {
  const getSkillLevel = (level: number) => {
    if (level >= 95)
      return { text: "Master", color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-emerald-200" }
    if (level >= 90)
      return { text: "Expert", color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" }
    if (level >= 80)
      return { text: "Advanced", color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200" }
    if (level >= 70)
      return { text: "Proficient", color: "text-orange-600", bgColor: "bg-orange-50", borderColor: "border-orange-200" }
    return { text: "Intermediate", color: "text-gray-600", bgColor: "bg-gray-50", borderColor: "border-gray-200" }
  }

  const skillLevel = getSkillLevel(skill.level)
  const SkillIcon = skill.icon

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      className="group w-80"
    >
      <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 h-full">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-[1px] bg-white rounded-2xl" />

        {/* Skill Icon Background */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
          {SkillIcon && <SkillIcon className="w-full h-full text-gray-400" />}
        </div>

        {/* Certified Badge */}
        {skill.certified && (
          <motion.div
            className="absolute top-4 right-4 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow group-hover:scale-110">
              <Award className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        )}

        <CardContent className="p-8 relative z-10">
          <div className="mb-6">
            {/* Skill Icon */}
            {SkillIcon && (
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${groupColor} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 10 }}
              >
                <SkillIcon className="w-8 h-8 text-white" />
              </motion.div>
            )}

            <h4 className="font-bold text-foreground text-2xl mb-3 group-hover:text-purple-600 transition-colors">
              {skill.name}
            </h4>

            {/* Enhanced Skill Level Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${skillLevel.color} ${skillLevel.bgColor} border-2 ${skillLevel.borderColor} shadow-lg`}
            >
              <Star className="w-4 h-4" />
              {skillLevel.text}
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-muted-foreground">Proficiency Level</span>
              <span className="text-xl font-bold text-foreground">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
              <motion.div
                className={`h-4 rounded-full bg-gradient-to-r ${groupColor} relative overflow-hidden shadow-lg`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
              </motion.div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-purple-50 group-hover:to-purple-100 transition-all duration-300 text-center border-2 border-gray-200 group-hover:border-purple-200 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="font-bold text-foreground text-xl mb-1">{skill.years}</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Years</div>
            </motion.div>
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300 text-center border-2 border-gray-200 group-hover:border-blue-200 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="font-bold text-foreground text-xl mb-1">{skill.projects}</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Projects</div>
            </motion.div>
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-green-50 group-hover:to-green-100 transition-all duration-300 text-center border-2 border-gray-200 group-hover:border-green-200 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="font-bold text-foreground text-xl mb-1">{skill.level}</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Score</div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
