"use client"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, Award } from "lucide-react"
import { motion } from "framer-motion"

interface EducationCardProps {
  edu: {
    degree: string
    institution: string
    period: string
    grade: string
    description?: string
  }
}

export function EducationCard({ edu }: EducationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 pattern-dots opacity-5 group-hover:opacity-10 transition-opacity" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 group-hover:w-2 transition-all duration-300" />

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 border-purple-200 text-purple-700 bg-purple-50 mb-2"
                >
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all">
                  <Award className="w-3 h-3 mr-1" />
                  {edu.grade}
                </Badge>
              </div>
            </div>
          </div>

          <CardTitle className="text-2xl mb-3 group-hover:text-purple-600 transition-colors leading-tight">
            {edu.degree}
          </CardTitle>
          <CardDescription className="text-lg font-semibold text-foreground mb-2">{edu.institution}</CardDescription>
        </CardHeader>

        {edu.description && (
          <CardContent className="pt-0">
            <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
          </CardContent>
        )}
      </Card>
    </motion.div>
  )
}
