"use client"
import { motion } from "framer-motion"
import type React from "react"

interface DesignToolIconProps {
  icon: React.ElementType
  name: string
  color: string
  delay?: number
}

export function DesignToolIcon({ icon: Icon, name, color, delay = 0 }: DesignToolIconProps) {
  return (
    <motion.div
      className={`group relative w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center shadow-glow cursor-pointer`}
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{
        scale: 1.2,
        rotate: 10,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />

      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">{name}</div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black/80"></div>
      </div>
    </motion.div>
  )
}
