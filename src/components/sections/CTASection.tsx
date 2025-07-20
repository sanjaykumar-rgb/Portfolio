"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Sparkles, Award, Users, Clock, CheckCircle, Star } from "lucide-react"

interface CTASectionProps {
  sectionVariants: any
  containerVariants: any
  itemVariants: any
}

export function CTASection({ sectionVariants, containerVariants, itemVariants }: CTASectionProps) {
  const benefits = [
    { icon: Award, title: "Expert Quality", description: "8+ years of professional experience" },
    { icon: Clock, title: "Fast Delivery", description: "Quick turnaround without compromising quality" },
    { icon: Users, title: "Client Focused", description: "98% client satisfaction rate" },
    { icon: CheckCircle, title: "Full Support", description: "Complete project support & revisions" },
  ]

  const projectTypes = [
    "Logo & Brand Identity",
    "Website UI/UX Design",
    "Social Media Graphics",
    "Print Design",
    "Motion Graphics",
    "Marketing Materials",
  ]

  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl opacity-20 animate-pulse-slow" />

      <div className="relative container-custom">
        <motion.div variants={containerVariants}>
          {/* Main CTA Content */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-glow">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <Badge variant="outline" className="border-white/30 text-white bg-white/10 px-6 py-3 text-lg">
                <Star className="w-4 h-4 mr-2" />
                Ready to Start
              </Badge>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Ready to Start Your
              <span className="text-gradient block">Next Project?</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-4xl mx-auto text-balance">
              Let's collaborate and create something extraordinary that will make your brand stand out from the
              competition and achieve your business goals.
            </p>

            {/* Project Types */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {projectTypes.map((type, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white bg-white/10 px-4 py-2 hover:bg-white/20 transition-all"
                  >
                    {type}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div variants={itemVariants} key={index} className="group">
                  <Card className="border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-white mb-2 text-lg">{benefit.title}</h3>
                      <p className="text-white/80 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-glow hover:shadow-glow-lg transition-all transform hover:scale-105 rounded-xl font-semibold text-lg px-8 py-4 flex-1"
              >
                <Mail className="w-6 h-6 mr-3" />
                Start a Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 bg-transparent shadow-lg hover:shadow-xl transition-all transform hover:scale-105 rounded-xl font-semibold text-lg px-8 py-4 flex-1"
              >
                <Phone className="w-6 h-6 mr-3" />
                Schedule a Call
              </Button>
            </div>
          </motion.div>

          {/* Final Stats & Guarantee */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
              <CardContent className="p-12 relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-8">Why Choose Me?</h3>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                    <div className="text-white/80">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                    <div className="text-white/80">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gradient mb-2">24h</div>
                    <div className="text-white/80">Response Time</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">100% Satisfaction Guarantee</span>
                  <span className="mx-2">•</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Unlimited Revisions</span>
                  <span className="mx-2">•</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Fast Delivery</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
