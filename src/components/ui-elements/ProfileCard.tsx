"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <Card className="glass border-white/20 hover:border-white/40 transition-all duration-300">
        <CardContent className="p-6 space-y-4">
          <div className="text-center">
            <h3 className="font-bold text-white text-lg mb-2">Quick Info</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-white/80">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Noida, India</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="w-4 h-4 text-green-400" />
              <span>+91 8630 448230</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>sanjayk85100@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>8+ Years Experience</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/20">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="glass border-white/30 text-white text-xs">
                English
              </Badge>
              <Badge variant="outline" className="glass border-white/30 text-white text-xs">
                Hindi
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
