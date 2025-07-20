"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Building,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react"

interface ExperienceSectionProps {
  experienceData: any[]
  sectionVariants: any
  containerVariants: any
  itemVariants: any
}

export function ExperienceSection({
  experienceData,
  sectionVariants,
  containerVariants,
  itemVariants,
}: ExperienceSectionProps) {
  // Provide default empty array if experienceData is undefined
  const experience = experienceData || []

  const experienceStats = [
    {
      icon: Briefcase,
      label: "Total Experience",
      value: "5+",
      color: "from-blue-500 to-cyan-500",
      description: "Years in industry",
    },
    {
      icon: Building,
      label: "Companies",
      value: experience.length.toString(),
      color: "from-purple-500 to-pink-500",
      description: "Organizations worked",
    },
    {
      icon: Users,
      label: "Team Projects",
      value: "50+",
      color: "from-green-500 to-emerald-500",
      description: "Collaborative works",
    },
    {
      icon: Award,
      label: "Achievements",
      value: "12",
      color: "from-orange-500 to-red-500",
      description: "Recognition earned",
    },
  ]

  const keySkills = [
    "Leadership & Team Management",
    "Project Planning & Execution",
    "Client Relationship Management",
    "Creative Problem Solving",
    "Cross-functional Collaboration",
    "Quality Assurance",
    "Process Optimization",
    "Mentoring & Training",
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
            `,
          }}
        />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed" />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
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
              className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Briefcase className="w-7 h-7 text-white" />
            </motion.div>
            <div className="text-left">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Professional Journey</span>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1" />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            A comprehensive journey through various roles and responsibilities, showcasing growth, leadership, and
            technical expertise across different organizations and challenging projects.
          </motion.p>

          {/* Enhanced Experience Stats */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {experienceStats.map((stat, index) => {
              const Icon = stat.icon
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
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-[1px] bg-white rounded-xl" />

                    <CardContent className="p-6 text-center relative z-10">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-600">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Experience Timeline */}
        {experience.length > 0 ? (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                style={{ height: "calc(100% - 2rem)" }}
              />

              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl border-4 border-white z-10" />

                    {/* Experience Card */}
                    <div
                      className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                    >
                      <EnhancedExperienceCard exp={exp} index={index} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-gray-500 text-lg">Experience information will be available soon.</div>
          </motion.div>
        )}

        {/* Enhanced Key Skills & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Key Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Skills</h3>
                    <p className="text-gray-600">Core competencies developed through experience</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {keySkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-xl"
                      whileHover={{ y: -4, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Career Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Award className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Career Highlights</h3>
                    <p className="text-gray-600">Notable achievements and milestones</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-green-200"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                          Led High-Impact Projects
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Successfully managed and delivered 25+ projects with 98% client satisfaction rate
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-green-200"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                          Team Leadership
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Mentored 15+ junior developers and designers, fostering growth and collaboration
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-green-200"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                          Industry Recognition
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Received multiple awards for outstanding design work and innovative solutions
                        </p>
                      </div>
                    </div>
                  </motion.div>
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
          <Card className="border-0 shadow-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <CardContent className="p-12 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 flex items-center justify-center shadow-2xl"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-4xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Let's leverage my experience and expertise to bring your vision to life and achieve exceptional results
                for your next project.
              </p>

              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold px-8"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Let's Collaborate
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Experience Card Component
function EnhancedExperienceCard({ exp, index }: { exp: any; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card className="hover:shadow-3xl transition-all duration-500 border-0 shadow-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 relative overflow-hidden">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-[1px] bg-white rounded-xl" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <CardContent className="p-8 relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                <Building className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 border-blue-200 text-blue-700 bg-blue-50 mb-2 px-4 py-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all px-4 py-2 shadow-lg">
                  <Clock className="w-4 h-4 mr-1" />
                  {exp.type || "Full-time"}
                </Badge>
              </div>
            </div>

            {exp.location && (
              <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50 px-4 py-2 shadow-lg">
                <MapPin className="w-4 h-4 mr-1" />
                {exp.location}
              </Badge>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
              {exp.position}
            </h3>
            <div className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-4">
              <Building className="w-5 h-5 text-blue-500" />
              {exp.company}
            </div>
          </div>

          {exp.description && (
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          )}

          {exp.responsibilities && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {exp.achievements && (
            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Key Achievements
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((achievement: string, idx: number) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-green-200 text-green-700 bg-green-50 hover:bg-green-100 transition-colors"
                  >
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
