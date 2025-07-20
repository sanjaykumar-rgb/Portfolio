"use client"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

import { Award, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

interface SkillCardProps {
  skill: {
    name: string
    level: number
    years: string
    certified: boolean
    projects: number
    icon?: React.ElementType
  }
  groupColor: string
}

export function SkillCard({ skill, groupColor }: SkillCardProps) {
  const getSkillLevel = (level: number) => {
    if (level >= 90) return { text: "Expert", color: "text-emerald-600", bgColor: "bg-emerald-50" }
    if (level >= 80) return { text: "Advanced", color: "text-blue-600", bgColor: "bg-blue-50" }
    if (level >= 70) return { text: "Proficient", color: "text-purple-600", bgColor: "bg-purple-50" }
    return { text: "Intermediate", color: "text-orange-600", bgColor: "bg-orange-50" }
  }

  const skillLevel = getSkillLevel(skill.level)
  const SkillIcon = skill.icon

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
        {/* Skill Icon Background */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
          {SkillIcon && <SkillIcon className="w-full h-full text-gray-400" />}
        </div>

        {/* Certified Badge */}
        {skill.certified && (
          <motion.div
            className="absolute top-4 right-4 z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group-hover:scale-110">
              <Award className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        )}

        {/* Decorative Corner */}
        <div className="absolute top-0 left-0 w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

        <CardContent className="p-8">
          <div className="mb-6">
            {/* Skill Icon */}
            {SkillIcon && (
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${groupColor} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <SkillIcon className="w-7 h-7 text-white" />
              </div>
            )}

            <h4 className="font-bold text-foreground text-xl mb-3 group-hover:text-purple-600 transition-colors">
              {skill.name}
            </h4>

            {/* Skill Level Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${skillLevel.color} ${skillLevel.bgColor} border border-current/20`}
            >
              <TrendingUp className="w-4 h-4" />
              {skillLevel.text}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-muted-foreground">Proficiency Level</span>
              <span className="text-lg font-bold text-foreground">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
              <motion.div
                className={`h-4 rounded-full bg-gradient-to-r ${groupColor} relative overflow-hidden shadow-sm`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />
              </motion.div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-purple-50 group-hover:to-purple-100 transition-all duration-300 text-center border border-gray-200 group-hover:border-purple-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-bold text-foreground text-xl mb-1">{skill.years}</div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Years</div>
            </motion.div>
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300 text-center border border-gray-200 group-hover:border-blue-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-bold text-foreground text-xl mb-1">{skill.projects}</div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Projects</div>
            </motion.div>
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-green-50 group-hover:to-green-100 transition-all duration-300 text-center border border-gray-200 group-hover:border-green-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-bold text-foreground text-xl mb-1">{skill.level}</div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Score</div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
