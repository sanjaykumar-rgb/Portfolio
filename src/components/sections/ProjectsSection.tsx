"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Folder,
  ExternalLink,
  Github,
  Users,
  Star,
  Award,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List,
  Eye,
  Heart,
  Share2,
  Code,
  Zap,
} from "lucide-react"

interface ProjectsSectionProps {
  projectsData: any
  containerVariants: any
  itemVariants: any
}

export function ProjectsSection({
  projectsData,
  containerVariants,
  itemVariants,
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const projectsScrollRef = useRef<HTMLDivElement>(null)

  // Handle different data structures - projects could be directly an array or nested
  const projects = Array.isArray(projectsData) ? projectsData : projectsData?.projects || []

  // Create categories from project data or use defaults
  const projectCategories: string[] =
    projects.length > 0
      ? Array.from(new Set(projects.map((project: any) => project.category).filter(Boolean))) as string[]
      : ["Web Design", "Mobile App", "Branding", "UI/UX"]

  const categories: string[] = ["All", ...projectCategories]

  const projectStats = [
    {
      icon: Folder,
      label: "Total Projects",
      value: projects.length.toString(),
      color: "from-purple-500 to-pink-500",
      description: "Completed works",
    },
    {
      icon: Star,
      label: "Featured",
      value: projects.filter((p: any) => p.featured).length.toString(),
      color: "from-blue-500 to-cyan-500",
      description: "Highlighted projects",
    },
    {
      icon: Users,
      label: "Clients",
      value: "25+",
      color: "from-green-500 to-emerald-500",
      description: "Happy customers",
    },
    {
      icon: Award,
      label: "Awards",
      value: "8",
      color: "from-orange-500 to-red-500",
      description: "Recognition earned",
    },
  ]



  const scrollLeft = () => {
    if (projectsScrollRef.current) {
      projectsScrollRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (projectsScrollRef.current) {
      projectsScrollRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  // Default projects if none exist
  const defaultProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced features and seamless user experience for online shopping.",
      category: "Web Design",
      image: "/vite.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      featured: true,
      duration: "4 months",
      team: "3 members",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with biometric authentication and real-time transactions.",
      category: "Mobile App",
      image: "/vite.svg",
      technologies: ["React Native", "Firebase", "TypeScript"],
      status: "Live",
      featured: true,
      duration: "6 months",
      team: "5 members",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Brand Identity System",
      description: "Complete brand identity design including logo, guidelines, and comprehensive marketing materials.",
      category: "Branding",
      image: "/vite.svg",
      technologies: ["Adobe Illustrator", "Figma", "Photoshop"],
      status: "Completed",
      featured: false,
      duration: "2 months",
      team: "Solo",
      year: "2024",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description:
        "Comprehensive analytics dashboard with real-time data visualization and advanced reporting features.",
      category: "UI/UX",
      image: "/vite.svg",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      status: "Live",
      featured: true,
      duration: "3 months",
      team: "4 members",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Modern social networking platform with real-time messaging and content sharing capabilities.",
      category: "Web Design",
      image: "/vite.svg",
      technologies: ["Next.js", "Socket.io", "Redis", "AWS"],
      status: "Live",
      featured: true,
      duration: "8 months",
      team: "6 members",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Comprehensive fitness tracking application with workout plans and nutrition monitoring.",
      category: "Mobile App",
      image: "/vite.svg",
      technologies: ["Flutter", "Firebase", "HealthKit"],
      status: "Live",
      featured: false,
      duration: "5 months",
      team: "4 members",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const displayProjects = projects.length > 0 ? projects : defaultProjects
  const displayFilteredProjects =
    activeFilter === "All"
      ? displayProjects
      : displayProjects.filter((project: any) => project.category === activeFilter)

  // Animation variants for stacking effect
  const stackVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 0,
      y: 0,
      rotate: 0,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      x: index * 30, // Spread cards horizontally
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
    stacked: (index: number) => ({
      opacity: 0.7,
      scale: 0.9 - index * 0.05,
      x: index * 10,
      y: index * 10,
      rotate: index * 2,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
            `,
          }}
        />
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6"
          >
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Folder className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </motion.div>
            <div className="text-center sm:text-left">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Portfolio Showcase</span>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1 mx-auto sm:mx-0" />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
          >
            Explore my diverse portfolio of creative projects, from stunning web designs to innovative mobile
            applications. Each project represents a unique challenge solved with creativity and technical expertise.
          </motion.p>

          {/* Enhanced Project Stats - Responsive Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {projectStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  className="group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:bg-white relative overflow-hidden">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-[1px] bg-white rounded-xl" />

                    <CardContent className="p-4 sm:p-6 text-center relative z-10">
                      <motion.div
                        className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </motion.div>
                      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1 sm:mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-600">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Filter and View Controls - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8 sm:mb-12"
        >
          {/* Category Filters - Responsive */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl hover:shadow-2xl transform hover:scale-105"
                    : "border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* View Mode and Navigation - Responsive */}
          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-full p-1 shadow-lg border border-gray-200">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`rounded-full px-3 sm:px-4 ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`rounded-full px-3 sm:px-4 ${
                  viewMode === "list"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollLeft}
                className="w-10 h-10 sm:w-12 sm:h-12 p-0 rounded-full hover:bg-blue-50 hover:border-blue-200 shadow-lg bg-white"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollRight}
                className="w-10 h-10 sm:w-12 sm:h-12 p-0 rounded-full hover:bg-blue-50 hover:border-blue-200 shadow-lg bg-white"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Projects Display with Stacking Animation */}
        {displayFilteredProjects.length > 0 ? (
          <div className="relative">
            {viewMode === "grid" ? (
              <div
                ref={projectsScrollRef}
                className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 pb-6"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {displayFilteredProjects.map((project: any, index: number) => (
                  <motion.div
                    key={project.id || index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={stackVariants}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-shrink-0"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <EnhancedProjectCard project={project} viewMode={viewMode} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6 lg:space-y-8">
                {displayFilteredProjects.map((project: any, index: number) => (
                  <motion.div
                    key={project.id || index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <EnhancedProjectCard project={project} viewMode={viewMode} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-gray-500 text-lg">No projects found for the selected category.</div>
          </motion.div>
        )}

        {/* Enhanced CTA Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <Card className="border-0 shadow-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <CardContent className="p-8 sm:p-12 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-3xl bg-white/20 flex items-center justify-center shadow-2xl"
              >
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Let's collaborate to create something extraordinary that stands out and delivers exceptional results for
                your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View All Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 bg-transparent shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  GitHub Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Project Card Component with Equal Heights and Consistent Sizing
function EnhancedProjectCard({ project, viewMode }: { project: any; viewMode: "grid" | "list" }) {
  const [isLiked, setIsLiked] = useState(false)

  if (viewMode === "list") {
    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        className="group w-full"
      >
        <Card className="hover:shadow-3xl transition-all duration-500 border-0 shadow-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 relative overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-[1px] bg-white rounded-xl" />

          <CardContent className="p-0 relative z-10 flex flex-col lg:flex-row">
            {/* Project Image */}
            <div className="relative overflow-hidden lg:w-80 lg:flex-shrink-0">
              <div className="aspect-[4/3] lg:aspect-square">
                <img
                  src={project.image || "/vite.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="sm"
                  className="w-8 h-8 sm:w-10 sm:h-10 p-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900"
                >
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 p-0 rounded-full backdrop-blur-sm border border-white/30 transition-colors ${
                    isLiked
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-white/20 text-white hover:bg-white hover:text-gray-900"
                  }`}
                >
                  <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isLiked ? "fill-current" : ""}`} />
                </Button>
                <Button
                  size="sm"
                  className="w-8 h-8 sm:w-10 sm:h-10 p-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900"
                >
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute bottom-4 left-4">
                <Badge
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm border-white/50 text-gray-900 shadow-lg text-xs"
                >
                  {project.category}
                </Badge>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {project.status && (
                  <Badge
                    variant="outline"
                    className={`ml-4 text-xs ${
                      project.status === "Live"
                        ? "border-green-200 text-green-700 bg-green-50"
                        : "border-blue-200 text-blue-700 bg-blue-50"
                    }`}
                  >
                    {project.status}
                  </Badge>
                )}
              </div>

              {/* Technologies */}
              {project.technologies && (
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Code className="w-4 h-4 text-blue-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="text-center p-2 sm:p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300 border border-gray-200 group-hover:border-blue-200">
                  <div className="font-bold text-gray-900 text-sm sm:text-lg">{project.duration || "3 months"}</div>
                  <div className="text-xs text-gray-600 font-medium">Duration</div>
                </div>
                <div className="text-center p-2 sm:p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-purple-50 group-hover:to-purple-100 transition-all duration-300 border border-gray-200 group-hover:border-purple-200">
                  <div className="font-bold text-gray-900 text-sm sm:text-lg">{project.team || "Solo"}</div>
                  <div className="text-xs text-gray-600 font-medium">Team</div>
                </div>
                <div className="text-center p-2 sm:p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-green-50 group-hover:to-green-100 transition-all duration-300 border border-gray-200 group-hover:border-green-200">
                  <div className="font-bold text-gray-900 text-sm sm:text-lg">{project.year || "2024"}</div>
                  <div className="text-xs text-gray-600 font-medium">Year</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 bg-transparent text-xs sm:text-sm"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Code
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // Grid view with equal heights and consistent sizing
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card className="hover:shadow-3xl transition-all duration-500 border-0 shadow-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 relative overflow-hidden w-80 h-[600px] flex flex-col">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-[1px] bg-white rounded-xl" />

        <CardContent className="p-0 relative z-10 h-full flex flex-col">
          {/* Project Image - Fixed Height */}
          <div className="relative overflow-hidden flex-shrink-0">
            <div className="h-48 w-full">
              <img
                src={project.image || "/vite.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="sm"
                className="w-8 h-8 p-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                <Eye className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`w-8 h-8 p-0 rounded-full backdrop-blur-sm border border-white/30 transition-colors ${
                  isLiked
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-white/20 text-white hover:bg-white hover:text-gray-900"
                }`}
              >
                <Heart className={`w-3 h-3 ${isLiked ? "fill-current" : ""}`} />
              </Button>
              <Button
                size="sm"
                className="w-8 h-8 p-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                <Share2 className="w-3 h-3" />
              </Button>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute bottom-4 left-4">
              <Badge
                variant="outline"
                className="bg-white/90 backdrop-blur-sm border-white/50 text-gray-900 shadow-lg text-xs"
              >
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Project Content - Flexible Height */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">{project.description}</p>
              </div>

              {project.status && (
                <Badge
                  variant="outline"
                  className={`ml-2 text-xs flex-shrink-0 ${
                    project.status === "Live"
                      ? "border-green-200 text-green-700 bg-green-50"
                      : "border-blue-200 text-blue-700 bg-blue-50"
                  }`}
                >
                  {project.status}
                </Badge>
              )}
            </div>

            {/* Technologies */}
            {project.technologies && (
              <div className="mb-4 flex-1">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                  <Code className="w-4 h-4 text-blue-500" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-gray-50">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center p-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300 border border-gray-200 group-hover:border-blue-200">
                <div className="font-bold text-gray-900 text-xs">{project.duration || "3 months"}</div>
                <div className="text-xs text-gray-600 font-medium">Duration</div>
              </div>
              <div className="text-center p-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-purple-50 group-hover:to-purple-100 transition-all duration-300 border border-gray-200 group-hover:border-purple-200">
                <div className="font-bold text-gray-900 text-xs">{project.team || "Solo"}</div>
                <div className="text-xs text-gray-600 font-medium">Team</div>
              </div>
              <div className="text-center p-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-green-50 group-hover:to-green-100 transition-all duration-300 border border-gray-200 group-hover:border-green-200">
                <div className="font-bold text-gray-900 text-xs">{project.year || "2024"}</div>
                <div className="text-xs text-gray-600 font-medium">Year</div>
              </div>
            </div>

            {/* Action Buttons - Always at bottom */}
            <div className="flex gap-2 mt-auto">
              {project.liveUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-xs"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 bg-transparent text-xs"
                >
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
