import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, FolderOpen, Code, BookOpen, Trophy, Mail, Menu, X } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'about', label: 'Experience', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'blogs', label: 'Blogs', icon: BookOpen },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
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

      {/* Mobile Navigation - Bottom Fixed Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg"
          style={{ WebkitBackdropFilter: 'blur(12px)' }}
        >
          <div className="flex items-center justify-between p-3">
            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 bg-white/30 rounded-xl"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Quick Access Buttons */}
            <div className="flex gap-2">
              {navItems.slice(0, 3).map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-center w-10 h-10 bg-white/30 rounded-xl hover:scale-105 transition-all duration-200"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-gray-700" />
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-white/20 overflow-hidden"
              >
                <div className="p-3 space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center gap-3 px-3 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 text-left"
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-4 h-4 text-gray-700" />
                        <span className="text-sm font-mono text-gray-700">{item.label}</span>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Navigation
