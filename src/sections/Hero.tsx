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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-mono px-4"
          >
            <ScrambleName />
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 sm:mb-8 px-4"
          >
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono text-gray-600 mb-3 sm:mb-4 leading-tight">
              AI Engineer & Researcher
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-mono mb-3 sm:mb-4 px-2">
              AI Engineer crafting <span className="text-green-600">high-performance computing</span> algorithms and <span className="text-green-600">intelligent</span> solutions. Because apparently, making machines think isn't enough—they need to do it faster than humans can blink.
            </p>

          </motion.div>
          
          {/* CTA Buttons with animated gradient bar */}
          <div className="relative flex flex-col items-start mb-6 sm:mb-8 px-4">
            {/* Glowing gradient bar behind buttons */}
            <div
              ref={gradientRef}
              style={{ willChange: 'transform, opacity' }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 sm:h-24 w-[320px] sm:w-[420px] max-w-full bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-400 opacity-30 rounded-full pointer-events-none animate-gradient-x z-0 blur-2xl"
            />
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/chatbot"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl font-mono font-semibold text-black shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm sm:text-base"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Ask My AI
              </a>
              <a
                href="https://drive.google.com/file/d/1gSwhAMhyevVlYe8QRe-DzlR3UCvpuFGV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl font-mono font-semibold text-black shadow hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm sm:text-base"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                Resume
              </a>
            </div>
            
            {/* Navigation Buttons */}
            <div className="relative z-10 flex flex-wrap justify-start gap-2 sm:gap-3 mt-6">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg font-mono font-medium text-black shadow hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-xs sm:text-sm"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg font-mono font-medium text-black shadow hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-xs sm:text-sm"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg font-mono font-medium text-black shadow hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-xs sm:text-sm"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg font-mono font-medium text-black shadow hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-xs sm:text-sm"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                Blogs
              </button>
              <button
                onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg font-mono font-medium text-black shadow hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-xs sm:text-sm"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                Achievements
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg font-mono font-medium text-black shadow hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-xs sm:text-sm"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                Contact
              </button>
            </div>
          </div>
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