"use client"
import { motion } from "framer-motion"

interface FlipCardProps {
  frontOpacity: any
  backOpacity: any
}

export function FlipCard({ frontOpacity, backOpacity }: FlipCardProps) {
  return (
    <>
      {/* Front Side: Profile Photo */}
      <motion.div
        className="absolute inset-0 w-full h-full rounded-none backface-hidden"
        style={{ opacity: frontOpacity }}
      >
        <img
          src="/vite.svg" // Placeholder for your photo
          alt="Sanjay Kumar's Profile Photo"
          className="w-full h-full object-cover rounded-none animate-float-subtle"
        />
      </motion.div>

      {/* Back Side: Graphic Image */}
      <motion.div
        className="absolute inset-0 w-full h-full rounded-none backface-hidden"
        style={{ rotateY: 180, opacity: backOpacity }}
      >
        <img
          src="/vite.svg" // Placeholder for graphic image
          alt="Graphic Art"
          className="w-full h-full object-cover rounded-none animate-float-subtle"
        />
      </motion.div>
    </>
  )
}
