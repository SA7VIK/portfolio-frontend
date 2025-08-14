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
      <div className="fixed bottom-8 left-6 z-50 flex flex-col items-center gap-6 bg-white/80 rounded-2xl shadow px-3 py-4 border border-gray-200" style={{ willChange: 'transform' }}>
        <a
          href="https://github.com/sa7vik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/sa7vik/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:satviksingh1000@gmail.com"
          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
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