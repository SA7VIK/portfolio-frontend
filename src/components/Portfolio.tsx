import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import About from '../sections/About'
import Blogs from '../sections/Blogs'
import Achievements from '../sections/Achievements'
import MathBackground from './MathBackground'
import { Github, Linkedin, Mail } from 'lucide-react'

const Portfolio: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Social Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed left-4 bottom-8 z-50"
      >
        <div className="flex flex-col gap-3">
          <motion.a
            href="https://github.com/sa7vik"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200" />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              GitHub
            </div>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/sa7vik/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200" />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              LinkedIn
            </div>
          </motion.a>
          
          <motion.a
            href="mailto:satviksingh1000@gmail.com"
            className="group relative flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200" />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Contact
            </div>
          </motion.a>
        </div>
      </motion.div>
      {/* Math Equations Background */}
      <MathBackground />
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Achievements />
        <Blogs />
      </main>
    </div>
  )
}

export default Portfolio 