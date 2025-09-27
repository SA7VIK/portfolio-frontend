import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

const NAME = 'Satvik Singh'
const SCRAMBLE_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const ScrambleName: React.FC = () => {
  const [display, setDisplay] = useState<string[]>(
    Array.from(NAME, c => (c === ' ' ? ' ' : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]))
  )

  useEffect(() => {
    console.log('ScrambleName animation started')
    let timeouts: number[] = []
    let revealed = 0
    function revealNext() {
      if (revealed >= NAME.length) return
      let scrambleInterval = window.setInterval(() => {
        setDisplay((prev) =>
          prev.map((char, idx) =>
            idx < revealed
              ? NAME[idx]
              : NAME[idx] === ' '
                ? ' '
                : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          )
        )
      }, 30)
      timeouts.push(scrambleInterval)
      setTimeout(() => {
        clearInterval(scrambleInterval)
        setDisplay((prev) =>
          prev.map((char, idx) => (idx <= revealed ? NAME[idx] : char))
        )
        revealed++
        revealNext()
      }, 250)
    }
    revealNext()
    return () => timeouts.forEach(clearInterval)
  }, [])

  // Fallback: if display is empty, show the name directly
  if (!display || display.length === 0) {
    return <span className="text-black">{NAME}</span>
  }

  return (
    <span
      style={{
        color: 'black',
      }}
      className="tracking-wide sm:tracking-wider md:tracking-widest"
    >
      {display.map((char, idx) => (
        <span key={idx} style={{ minWidth: '0.3em', display: 'inline-block' }}>{char}</span>
      ))}
    </span>
  )
}

const Hero: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (gradientRef.current) {
      gradientRef.current.style.display = 'none'
      // Force reflow
      // eslint-disable-next-line
      gradientRef.current.offsetHeight
      gradientRef.current.style.display = ''
    }
  }, [])

  return (
    <section className="section-padding min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          {/* Main Heading with scramble animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-mono"
          >
            <ScrambleName />
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono text-gray-600 mb-3 sm:mb-4 leading-tight">
              AI Engineer & Researcher
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-4xl leading-relaxed font-mono mb-3 sm:mb-4">
              AI Engineer crafting <span className="text-green-600">high-performance computing</span> algorithms and <span className="text-green-600">intelligent</span> solutions. Because apparently, making machines think isn't enough—they need to do it faster than humans can blink.
            </p>

          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-start mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.a
                href="/chatbot"
                className="group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-400/30 rounded-2xl font-mono font-bold text-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg overflow-hidden"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 relative z-10" />
                <span className="relative z-10">Ask My AI</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="https://drive.google.com/file/d/1gSwhAMhyevVlYe8QRe-DzlR3UCvpuFGV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl font-mono font-bold text-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-base sm:text-lg overflow-hidden"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10">Resume</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              </motion.a>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 flex items-center gap-2 text-sm text-gray-500 font-mono"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 