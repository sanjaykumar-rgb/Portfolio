"use client"
import { motion } from "framer-motion"

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating Geometric Shapes */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100, rotate: 0 }}
        animate={{ opacity: 0.1, x: 0, y: 0, rotate: 45 }}
        transition={{ duration: 1.5, delay: 0.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute top-20 left-10 w-24 h-24 bg-geometric-primary rounded-none opacity-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100, y: -100, rotate: 0 }}
        animate={{ opacity: 0.1, x: 0, y: 0, rotate: -30 }}
        transition={{ duration: 1.5, delay: 0.4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute top-40 right-20 w-20 h-20 bg-geometric-secondary transform rotate-45 opacity-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100, y: 100, rotate: 0 }}
        animate={{ opacity: 0.1, x: 0, y: 0, rotate: 60 }}
        transition={{ duration: 1.5, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-40 left-20 w-16 h-16 bg-geometric-accent rounded-full opacity-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100, y: 100, rotate: 0 }}
        animate={{ opacity: 0.1, x: 0, y: 0, rotate: -15 }}
        transition={{ duration: 1.5, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-20 right-10 w-28 h-28 bg-geometric-primary transform skew-y-12 opacity-10"
      ></motion.div>

      {/* Artistic Lines (Geometric) */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="line-gradient-geometric" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--geometric-primary))" />
            <stop offset="100%" stopColor="hsl(var(--geometric-secondary))" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          d="M0,100 L250,200 L500,100 L750,200 L1000,100"
          stroke="url(#line-gradient-geometric)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
          d="M0,300 L250,400 L500,300 L750,400 L1000,300"
          stroke="url(#line-gradient-geometric)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
          d="M0,500 L250,600 L500,500 L750,600 L1000,500"
          stroke="url(#line-gradient-geometric)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  )
}
