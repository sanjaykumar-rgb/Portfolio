"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Heart, MessageCircle, ExternalLink, Calendar, User } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    description: string
    image: string
    tags: string[]
    stats: { views: string; likes: string; comments: string }
    color: string
  }
  viewMode?: string
}

export function ProjectCard({ project, viewMode = "grid" }: ProjectCardProps) {
  if (viewMode === "list") {
    return (
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="group">
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
          <div className="flex flex-col md:flex-row">
            {/* Image Container */}
            <div className="relative overflow-hidden md:w-80 flex-shrink-0">
              <div className="aspect-[4/3] md:aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={project.image || "/vite.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-900 border-0">
                  {project.category}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <CardContent className="p-8 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-foreground mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-4 hover:bg-purple-50 hover:border-purple-200 transition-all bg-transparent"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View
                </Button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs hover:bg-purple-50 hover:border-purple-200 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <motion.span
                    className="flex items-center gap-2 hover:text-purple-600 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Eye className="w-4 h-4" />
                    {project.stats.views}
                  </motion.span>
                  <motion.span
                    className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Heart className="w-4 h-4" />
                    {project.stats.likes}
                  </motion.span>
                  <motion.span
                    className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {project.stats.comments}
                  </motion.span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  2024
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group">
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={project.image || "/vite.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <Badge variant="secondary" className="bg-white/90 text-gray-900 border-0">
                {project.category}
              </Badge>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 text-gray-900 border-0 hover:bg-white hover:text-gray-900"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View
              </Button>
            </div>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs hover:bg-purple-50 hover:border-purple-200 transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <motion.span
                className="flex items-center gap-1 hover:text-purple-600 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Eye className="w-4 h-4" />
                {project.stats.views}
              </motion.span>
              <motion.span
                className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-4 h-4" />
                {project.stats.likes}
              </motion.span>
              <motion.span
                className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-4 h-4" />
                {project.stats.comments}
              </motion.span>
            </div>
            <div className="text-xs">
              <User className="w-3 h-3 inline mr-1" />
              Sanjay Kumar
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
