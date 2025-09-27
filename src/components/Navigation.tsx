import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, FolderOpen, Code, BookOpen, Trophy } from 'lucide-react'

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  
  const navItems = [
    { id: 'about', label: 'Experience', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'blogs', label: 'Blogs', icon: BookOpen },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
  ]

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId)
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      console.log('Successfully scrolled to:', sectionId)
      // Clear active section after animation
      setTimeout(() => setActiveSection(null), 1000)
    } else {
      console.error('Section not found:', sectionId)
    }
  }

  return (
    <>
      {/* Desktop Navigation - Right Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Mobile Navigation - Right Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 lg:hidden"
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  console.log('Mobile button clicked:', item.id)
                  scrollToSection(item.id)
                }}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'bg-green-500/30 scale-110' 
                    : 'bg-white/20 backdrop-blur-md border border-white/20 hover:scale-110 hover:brightness-110'
                }`}
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className={`w-5 h-5 transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-green-700' 
                    : 'text-gray-700 group-hover:text-gray-900'
                }`} />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}

export default Navigation
