"use client"

import { useState, useEffect } from "react"
import {
  Award,
  Briefcase,
  Users,
  Star,
  Home,
  User,
  FolderOpen,
  BookOpen,
  Send,
  Zap,
  Palette,
  Video,
  Target,
  Layers,
  PenTool,
  Camera,
  Monitor,
  Smartphone,
  Printer,
} from "lucide-react"
import { useMotionValue } from "framer-motion"

// Import separated components
import { Navbar } from "@/components/ui-elements/Navbar"
import { BackgroundElements } from "@/components/ui-elements/BackgroundElements"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { EducationSection } from "@/components/sections/EducationSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { CTASection } from "@/components/sections/CTASection"
import { Footer } from "@/components/ui-elements/Footer"
import { ScrollToTopButton } from "@/components/ui-elements/ScrollToTopButton"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // State for the flip card
  const [isFlipped, setIsFlipped] = useState(false)
  const rotateY = useMotionValue(0)

  // Automatic flip effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev)
    }, 5000) // Flip every 5 seconds
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    rotateY.set(isFlipped ? 180 : 0)
  }, [isFlipped, rotateY])

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Send },
  ]

  // Centralized data structure to eliminate repetition
  const portfolioData = {
    // Personal Information
    personal: {
      name: "Sanjay Kumar",
      title: "Graphic Designer & UI/UX Designer",
      tagline: "Transforming ideas into stunning visual experiences",
      location: "Noida, India",
      phone: "+91 8630 448230",
      email: "sanjayk85100@gmail.com",
      experience: "8+",
      availability: "Available for Work",
    },

    // Core Statistics (used only in Hero)
    coreStats: [
      { label: "Years Experience", value: "8+", icon: Award },
      { label: "Projects Completed", value: "500+", icon: Briefcase },
      { label: "Happy Clients", value: "100+", icon: Users },
      { label: "Design Awards", value: "15+", icon: Star },
    ],

    // About Information (unique to About section)
    about: {
      introduction:
        "A highly creative and multitalented graphic designer with extensive experience in multimedia, marketing, and print design. Passionate about working in marketing agencies with solid problem-solving skills that bring creative visions to life.",
      journey:
        "My journey in design began with a passion for visual storytelling and has evolved into comprehensive expertise across multiple design disciplines. From Arena Animation to leading design initiatives at top companies, I've consistently delivered innovative solutions.",
      philosophy:
        "I specialize in creating impactful designs that not only look stunning but also drive business results. My experience spans brand identity, print design, modern UI/UX, and motion graphics.",
      currentRole:
        "Currently at Yes Madam, I continue pushing creative boundaries while managing multiple projects and collaborating with cross-functional teams.",

      personalityTraits: [
        {
          icon: Target,
          label: "Strategic Thinker",
          description: "Every design decision backed by research and strategy",
        },
        { icon: Zap, label: "Fast Executor", description: "Quick turnaround without compromising quality" },
        { icon: Users, label: "Team Collaborator", description: "Thrives in collaborative environments" },
        { icon: Star, label: "Quality Focused", description: "Meticulous attention to every detail" },
      ],

      keyAchievements: [
        "Increased client engagement by 45% through innovative design solutions",
        "Maintained 98% client satisfaction rate across all projects",
        "Successfully managed up to 12 concurrent projects",
        "Specialized in Adobe Creative Suite for 8+ years",
        "Expert in both print and digital design mediums",
        "Led design initiatives that generated measurable business results",
      ],
    },

    // Skills Information (unique to Skills section)
    skills: {
      overview: {
        totalTools: 10,
        expertLevel: 6,
        advancedLevel: 4,
        certifications: 6,
      },

      categories: [
        {
          category: "Design",
          icon: Palette,
          color: "from-purple-500 to-pink-500",
          description: "Visual Design & Creative Tools",
          totalYears: "8+",
          skills: [
            { name: "Photoshop", level: 95, years: "8", certified: true, projects: 200, icon: Layers },
            { name: "Illustrator", level: 92, years: "7", certified: true, projects: 180, icon: PenTool },
            { name: "InDesign", level: 88, years: "6", certified: true, projects: 120, icon: Printer },
            { name: "CorelDraw", level: 85, years: "5", certified: false, projects: 100, icon: Target },
          ],
        },
        {
          category: "Motion",
          icon: Video,
          color: "from-blue-500 to-cyan-500",
          description: "Animation & Video Production",
          totalYears: "6+",
          skills: [
            { name: "After Effects", level: 90, years: "6", certified: true, projects: 150, icon: Video },
            { name: "Premiere Pro", level: 88, years: "5", certified: true, projects: 120, icon: Camera },
          ],
        },
        {
          category: "UI/UX",
          icon: Monitor,
          color: "from-green-500 to-emerald-500",
          description: "User Interface & Experience Design",
          totalYears: "5+",
          skills: [
            { name: "Adobe XD", level: 94, years: "5", certified: true, projects: 100, icon: Monitor },
            { name: "Figma", level: 92, years: "4", certified: true, projects: 85, icon: Smartphone },
          ],
        },
      ],

      certifications: [
        { name: "Adobe Certified Expert - Photoshop", year: "2023", verified: true },
        { name: "Adobe Certified Expert - Illustrator", year: "2022", verified: true },
        { name: "Adobe Certified Expert - After Effects", year: "2023", verified: true },
        { name: "UI/UX Design Certification", year: "2021", verified: true },
      ],

      workflow: [
        { step: "01", title: "Research & Analysis", description: "Understanding client needs and market trends" },
        { step: "02", title: "Concept Development", description: "Brainstorming and ideation phase" },
        { step: "03", title: "Design Creation", description: "Bringing concepts to life with precision" },
        { step: "04", title: "Review & Refinement", description: "Iterating based on feedback" },
        { step: "05", title: "Final Delivery", description: "Polished, production-ready assets" },
      ],
    },

    // Projects Information (unique to Projects section)
    projects: [
      {
        id: 1,
        title: "E-commerce Mobile App UI",
        category: "UI/UX Design",
        description:
          "Modern mobile app interface design for fashion e-commerce platform with intuitive user experience and seamless shopping flow.",
        image: "/placeholder.svg?height=300&width=400&text=Mobile+App+UI",
        tags: ["Figma", "UI/UX", "Mobile", "E-commerce"],
        stats: { views: "2.3k", likes: "156", comments: "23" },
        color: "from-pink-500 to-rose-500",
        year: "2024",
        client: "Fashion Startup",
        duration: "3 months",
      },
      {
        id: 2,
        title: "Brand Identity Design",
        category: "Branding",
        description:
          "Complete brand identity package including logo design, business cards, letterheads, and comprehensive brand guidelines for tech startup.",
        image: "/placeholder.svg?height=300&width=400&text=Brand+Identity",
        tags: ["Illustrator", "Branding", "Print", "Logo Design"],
        stats: { views: "1.8k", likes: "134", comments: "18" },
        color: "from-blue-500 to-cyan-500",
        year: "2024",
        client: "Tech Startup",
        duration: "2 months",
      },
      {
        id: 3,
        title: "Social Media Campaign",
        category: "Digital Marketing",
        description:
          "Creative social media posts, stories, and ad designs for beauty brand's product launch campaign across multiple platforms.",
        image: "/placeholder.svg?height=300&width=400&text=Social+Media",
        tags: ["Photoshop", "Social Media", "Marketing", "Campaign"],
        stats: { views: "3.1k", likes: "201", comments: "31" },
        color: "from-purple-500 to-indigo-500",
        year: "2023",
        client: "Beauty Brand",
        duration: "1 month",
      },
      {
        id: 4,
        title: "Corporate Website Design",
        category: "Web Design",
        description:
          "Professional website design for consulting firm with focus on user experience, conversion optimization, and modern aesthetics.",
        image: "/placeholder.svg?height=300&width=400&text=Website+Design",
        tags: ["Adobe XD", "Web Design", "Corporate", "UX"],
        stats: { views: "1.5k", likes: "98", comments: "12" },
        color: "from-green-500 to-emerald-500",
        year: "2023",
        client: "Consulting Firm",
        duration: "4 months",
      },
      {
        id: 5,
        title: "Motion Graphics Video",
        category: "Motion Design",
        description:
          "Animated explainer video for SaaS product showcasing features, benefits, and user journey with engaging visual storytelling.",
        image: "/placeholder.svg?height=300&width=400&text=Motion+Graphics",
        tags: ["After Effects", "Motion", "Video", "Animation"],
        stats: { views: "4.2k", likes: "287", comments: "45" },
        color: "from-orange-500 to-red-500",
        year: "2023",
        client: "SaaS Company",
        duration: "6 weeks",
      },
      {
        id: 6,
        title: "Print Magazine Layout",
        category: "Print Design",
        description:
          "Editorial design for lifestyle magazine featuring modern typography, visual hierarchy, and engaging layout design for print publication.",
        image: "/placeholder.svg?height=300&width=400&text=Magazine+Layout",
        tags: ["InDesign", "Print", "Editorial", "Typography"],
        stats: { views: "1.2k", likes: "89", comments: "15" },
        color: "from-teal-500 to-blue-500",
        year: "2022",
        client: "Lifestyle Magazine",
        duration: "2 months",
      },
    ],

    // Experience Information (unique to Experience section)
    experience: [
      {
        title: "Graphic Designer & Video Editor",
        company: "Yes Madam",
        location: "Noida",
        period: "2022 - Present",
        type: "Full-time",
        description: [
          "Lead design initiatives for marketing campaigns across digital and print media",
          "Create engaging video content and motion graphics for brand promotion",
          "Collaborate with cross-functional teams to deliver integrated design solutions",
          "Manage brand consistency across all marketing touchpoints",
        ],
        keyProjects: [
          "Redesigned complete brand identity resulting in 40% increase in brand recognition",
          "Created video marketing campaign that generated 2M+ views across platforms",
          "Developed design system that improved team efficiency by 35%",
        ],
        technologies: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
      },
      {
        title: "Senior Graphic & UI/UX Designer",
        company: "WebApp.world",
        location: "Noida",
        period: "2021 - 2022",
        type: "Full-time",
        description: [
          "Led design team of 4 designers on multiple client projects",
          "Specialized in web and mobile application design",
          "Mentored junior designers and established design processes",
          "Maintained 100% on-time delivery record across all projects",
        ],
        keyProjects: [
          "Designed UI/UX for 15+ web applications with 95% user satisfaction",
          "Implemented design system that reduced development time by 30%",
          "Led rebranding project for major e-commerce client",
        ],
        technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
      },
      {
        title: "Creative Graphic & UI/UX Designer",
        company: "Adbird Media Private Limited",
        location: "Vaishali Ghaziabad",
        period: "2020 - 2021",
        type: "Full-time",
        description: [
          "Designed comprehensive marketing campaigns for diverse client portfolio",
          "Created user interface designs for mobile and web applications",
          "Developed brand identity materials and marketing collateral",
          "Achieved 25% increase in client conversion rates through design optimization",
        ],
        keyProjects: [
          "Designed 100+ social media campaigns with high engagement rates",
          "Created brand identities for 20+ startups and small businesses",
          "Developed mobile app UI that won regional design award",
        ],
        technologies: ["Photoshop", "Illustrator", "InDesign", "CorelDraw"],
      },
      {
        title: "Creative Graphic Designer & Video Editor",
        company: "Horizon9 Advertising & Brand Consultants LTD",
        location: "Noida",
        period: "2017 - 2020",
        type: "Full-time",
        description: [
          "Started career managing print production and digital design projects",
          "Developed expertise in video editing and motion graphics",
          "Built strong foundation in brand design and marketing materials",
          "Consistently delivered projects on time while managing multiple deadlines",
        ],
        keyProjects: [
          "Delivered 500+ design projects with 98% client satisfaction",
          "Reduced project turnaround time by 20% through process optimization",
          "Created award-winning print campaign for major retail client",
        ],
        technologies: ["Photoshop", "Illustrator", "After Effects", "CorelDraw"],
      },
    ],

    // Education Information (unique to Education section)
    education: [
      {
        degree: "Graphic Web Designer & Development",
        institution: "Arena Animation Noida",
        period: "2017 - 2018",
        grade: "Distinction",
        type: "Professional Certification",
        description:
          "Comprehensive program covering graphic design fundamentals, web design principles, and development basics. Focused on industry-standard tools and practical project work.",
        subjects: ["Graphic Design", "Web Design", "Typography", "Color Theory", "Print Production"],
      },
      {
        degree: "Bachelor of Science (Information Technology)",
        institution: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
        period: "2014 - 2017",
        grade: "First Class",
        type: "Bachelor's Degree",
        description:
          "Information Technology degree with focus on computer science fundamentals, programming, and digital systems. Built strong technical foundation for design career.",
        subjects: ["Programming", "Database Systems", "Web Technologies", "Computer Graphics", "Digital Systems"],
      },
    ],

    // Contact Information (unique to Contact section)
    contact: {
      availability: {
        status: "Available",
        responseTime: "< 24 hours",
        workingHours: "Mon-Fri, 9 AM - 6 PM IST",
      },
      services: [
        "Logo & Brand Design",
        "UI/UX Design",
        "Social Media Graphics",
        "Print Design",
        "Motion Graphics",
        "Web Design",
      ],
      socialLinks: [
        { platform: "LinkedIn", followers: "2.5k", url: "#" },
        { platform: "GitHub", followers: "1.2k", url: "#" },
        { platform: "Instagram", followers: "5.8k", url: "#" },
        { platform: "Website", visitors: "10k+", url: "#" },
      ],
    },
  }

  // Framer Motion variants for section entrance
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  // Framer Motion variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <BackgroundElements />

      <HeroSection
        personalInfo={portfolioData.personal}
        stats={portfolioData.coreStats}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <AboutSection
        aboutData={portfolioData.about}
        sectionVariants={sectionVariants}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <SkillsSection
        skillsData={portfolioData.skills}
        sectionVariants={sectionVariants}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <ProjectsSection
        projectsData={portfolioData.projects}
        sectionVariants={sectionVariants}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <ExperienceSection
        experienceData={portfolioData.experience}
        sectionVariants={sectionVariants}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <EducationSection
        educationData={portfolioData.education}
        sectionVariants={sectionVariants}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <ContactSection
        contactData={portfolioData.contact}
        personalInfo={portfolioData.personal}
        sectionVariants={sectionVariants}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <CTASection
        personalInfo={portfolioData.personal}
        sectionVariants={sectionVariants}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <Footer
        personalInfo={portfolioData.personal}
        contactData={portfolioData.contact}
        sectionVariants={sectionVariants}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <ScrollToTopButton showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  )
}
