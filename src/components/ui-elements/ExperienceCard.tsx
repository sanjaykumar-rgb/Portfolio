"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, Star, MapPin, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"

interface ExperienceCardProps {
  job: {
    title: string
    company: string
    location: string
    period: string
    description: string[]
    achievements?: string[]
  }
  index?: number
}

export function ExperienceCard({ job, index = 0 }: ExperienceCardProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block"></div>

      {/* Timeline Dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

      <Card
        className={`hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white relative overflow-hidden group lg:ml-16`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 pattern-dots opacity-5 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 group-hover:w-2 transition-all duration-300"></div>

        <CardHeader className="pb-4">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-purple-600 transition-colors">
                    {job.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-lg font-medium">
                    <span className="text-purple-600">{job.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </CardDescription>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Badge
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 w-fit border-purple-200 text-purple-700 bg-purple-50 font-medium"
              >
                <Calendar className="w-4 h-4" />
                {job.period}
              </Badge>
              <Badge variant="outline" className="text-center border-green-200 text-green-700 bg-green-50">
                <TrendingUp className="w-3 h-3 mr-1" />
                Active Role
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {job.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            {job.achievements && (
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-lg">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Team Collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>Results Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>High Performance</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
