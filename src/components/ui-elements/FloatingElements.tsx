"use client"
import { motion } from "framer-motion"
import { Palette, PenTool, Layers, Monitor, Camera, Sparkles, Star, Award } from "lucide-react"

export function FloatingElements() {
  const elements = [
    { icon: Palette, color: "from-purple-500 to-pink-500", size: "w-12 h-12", position: { top: "20%", left: "10%" } },
    { icon: PenTool, color: "from-blue-500 to-cyan-500", size: "w-10 h-10", position: { top: "60%", left: "15%" } },
    { icon: Layers, color: "from-green-500 to-emerald-500", size: "w-14 h-14", position: { top: "30%", right: "20%" } },
    { icon: Monitor, color: "from-orange-500 to-red-500", size: "w-8 h-8", position: { bottom: "40%", right: "10%" } },
    {
      icon: Camera,
      color: "from-indigo-500 to-purple-500",
      size: "w-12 h-12",
      position: { bottom: "20%", left: "20%" },
    },
    { icon: Sparkles, color: "from-yellow-400 to-orange-500", size: "w-6 h-6", position: { top: "50%", left: "5%" } },
    { icon: Star, color: "from-pink-400 to-rose-500", size: "w-8 h-8", position: { top: "70%", right: "25%" } },
    { icon: Award, color: "from-cyan-400 to-blue-500", size: "w-10 h-10", position: { bottom: "60%", right: "5%" } },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const Icon = element.icon
        return (
          <motion.div
            key={index}
            className={`absolute ${element.size} rounded-2xl bg-gradient-to-r ${element.color} flex items-center justify-center shadow-glow opacity-20`}
            style={element.position}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 0.2,
              scale: 1,
              rotate: 0,
              y: [0, -20, 0],
            }}
            transition={{
              delay: index * 0.3,
              duration: 2,
              y: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <Icon className="w-1/2 h-1/2 text-white" />
          </motion.div>
        )
      })}
    </div>
  )
}
