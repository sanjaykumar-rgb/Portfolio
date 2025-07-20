"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  GraduationCap,
  Award,
  Brain,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  School,
  Book,
  Star,
  Calendar,
} from "lucide-react"

interface EducationSectionProps {
  educationData: any[]
  sectionVariants: any
  containerVariants: any
  itemVariants: any
}

export function EducationSection({
  educationData,
  sectionVariants,
  containerVariants,
  itemVariants,
}: EducationSectionProps) {
  // Provide default empty array if educationData is undefined
  const education = educationData || []

  const learningStats = [
    {
      icon: GraduationCap,
      label: "Degrees",
      value: education.length.toString(),
      color: "from-purple-500 to-pink-500",
      description: "Academic qualifications",
    },
    {
      icon: Award,
      label: "Certifications",
      value: "6+",
      color: "from-blue-500 to-cyan-500",
      description: "Professional credentials",
    },
    {
      icon: Brain,
      label: "Specializations",
      value: "4",
      color: "from-green-500 to-emerald-500",
      description: "Focus areas",
    },
    {
      icon: Lightbulb,
      label: "Learning Hours",
      value: "1000+",
      color: "from-orange-500 to-red-500",
      description: "Continuous education",
    },
  ]

  const continuousLearning = [
    { skill: "Advanced UI/UX Principles", platform: "Coursera", year: "2023", status: "Completed" },
    { skill: "Motion Graphics Mastery", platform: "Adobe", year: "2023", status: "Certified" },
    { skill: "Brand Strategy & Design", platform: "LinkedIn Learning", year: "2022", status: "Completed" },
    { skill: "Digital Marketing Design", platform: "Google", year: "2022", status: "Certified" },
  ]

  const coreSubjects = [
    "Graphic Design Fundamentals",
    "Typography & Layout",
    "Color Theory",
    "Brand Identity Design",
    "Web Design Principles",
    "User Experience Design",
    "Print Production",
    "Digital Marketing",
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
            `,
          }}
        />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-delayed" />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
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
              <BookOpen className="w-7 h-7 text-white" />
            </motion.div>
            <div className="text-left">
              <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">Academic Background</span>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1" />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Education &{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Learning
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Strong educational foundation combined with continuous professional development to stay current with
            industry trends and emerging technologies in the ever-evolving design landscape.
          </motion.p>

          {/* Enhanced Learning Stats */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {learningStats.map((stat, index) => {
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
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        {/* Enhanced Education Cards */}
        {education.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-20"
          >
            {education.map((edu, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <EnhancedEducationCard edu={edu} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-gray-500 text-lg">Education information will be available soon.</div>
          </motion.div>
        )}

        {/* Enhanced Core Subjects & Continuous Learning */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Core Subjects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Book className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Core Knowledge Areas</h3>
                    <p className="text-gray-600">Foundation expertise & specialized skills</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {coreSubjects.map((subject, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl hover:bg-purple-50 transition-colors group border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-xl"
                      whileHover={{ y: -4, scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors">
                        {subject}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Continuous Learning */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Lightbulb className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Recent Learning</h3>
                    <p className="text-gray-600">Continuous professional development</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {continuousLearning.map((course, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors group border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-xl"
                      whileHover={{ y: -4, scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">
                            {course.skill}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {course.platform} • {course.year}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={course.status === "Certified" ? "default" : "outline"}
                        className={
                          course.status === "Certified"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                            : "border-blue-200 text-blue-700 bg-blue-50"
                        }
                      >
                        {course.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Learning Philosophy CTA */}
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
            </div>

            <CardContent className="p-12 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 flex items-center justify-center shadow-2xl"
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-4xl font-bold mb-4">Lifelong Learner</h3>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                I believe in continuous learning and staying updated with the latest design trends, tools, and
                technologies to deliver cutting-edge solutions that exceed expectations.
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center shadow-xl">
                    <School className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Formal Education</h4>
                  <p className="text-white/80">Strong academic foundation in IT and design</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center shadow-xl">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Certifications</h4>
                  <p className="text-white/80">Industry-recognized credentials and achievements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center shadow-xl">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Continuous Growth</h4>
                  <p className="text-white/80">Always learning new skills and techniques</p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold px-8"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Credentials
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Education Card Component
function EnhancedEducationCard({ edu }: { edu: any }) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card className="hover:shadow-3xl transition-all duration-500 border-0 shadow-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 relative overflow-hidden">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-[1px] bg-white rounded-xl" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="absolute top-0 right-0 w-32 h-32 pattern-dots opacity-5 group-hover:opacity-10 transition-opacity" />

        <CardContent className="p-8 relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 border-purple-200 text-purple-700 bg-purple-50 mb-2 px-4 py-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all px-4 py-2 shadow-lg">
                  <Award className="w-4 h-4 mr-1" />
                  {edu.grade}
                </Badge>
              </div>
            </div>

            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 px-4 py-2 shadow-lg">
              {edu.type || "Degree"}
            </Badge>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
              {edu.degree}
            </h3>
            <div className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-4">
              <School className="w-5 h-5 text-purple-500" />
              {edu.institution}
            </div>
          </div>

          {edu.description && (
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed">{edu.description}</p>
            </div>
          )}

          {edu.subjects && (
            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Book className="w-4 h-4 text-purple-500" />
                Key Subjects
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.subjects.map((subject: string, index: number) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors"
                  >
                    {subject}
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
