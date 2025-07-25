import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-mono">
            <span className="text-primary-600">async</span> <span className="text-gradient">connect</span>()
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-mono">
            Let's work together on your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-4">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Let's Connect
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-mono font-medium text-gray-900 text-sm sm:text-base">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-mono text-sm sm:text-base break-all"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-mono font-medium text-gray-900 text-sm sm:text-base">GitHub</h4>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-mono text-sm sm:text-base break-all"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-mono font-medium text-gray-900 text-sm sm:text-base">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-mono text-sm sm:text-base break-all"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-mono font-semibold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-mono font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-mono"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-mono"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none font-mono"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full font-mono"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 