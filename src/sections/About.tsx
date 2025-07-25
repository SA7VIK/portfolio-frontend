import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-8 sm:mb-12 font-mono px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-mono">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
            My professional journey and expertise in software development.
          </p>
        </motion.div>

        <div className="font-mono">
          {/* About Content - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 px-4"
          >
            <div className="space-y-4 text-gray-600 leading-relaxed font-mono">
              <p className="text-sm sm:text-base">
                Architecting <span className="text-green-600">surveillance radar systems</span> with <span className="text-green-600">BLAS/MKL</span> optimization for real-time signal processing. Implementing <span className="text-green-600">Quantum Machine Learning</span> for 6G network error correction and bit prediction. Contributing to <span className="text-green-600">agent-to-agent MCP</span> frameworks and <span className="text-green-600">RAG systems</span> with measurable performance gains. Because apparently, making machines think at quantum speeds isn't enough—they need to predict the future too.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 px-4"
        >
          <div className="space-y-3 sm:space-y-4">
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono font-semibold text-gray-900">Junior Research Fellow</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-mono">DRDO - Centre for Airborne Systems, Bengaluru, Karnataka</p>
              <p className="text-gray-600 text-sm font-mono">
                Optimizing next-generation radar systems for 360-degree surveillance coverage. Engineered high-performance algorithms using MKL INTEL Library and C, processing 200+ GB/hour of real-time signal data with 30% improved efficiency.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono font-semibold text-gray-900">Software Development Engineer</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-mono">Symbian Health (Rikton Inc), Boston, Virginia</p>
              <p className="text-gray-600 text-sm font-mono">
                Engineered NLP models for healthcare data processing, deployed production APIs reducing operational time by 40%, integrated Amazon Health services, and built scalable backend solutions improving system response time by 60%.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono font-semibold text-gray-900">Data Scientist</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-mono">Ai.Tennis, Boston, Virginia</p>
              <p className="text-gray-600 text-sm font-mono">
                Architected ML systems for tennis analytics, developed match prediction model with 90% accuracy, led computer vision pipelines for automated play analysis, and designed scalable ML infrastructure for real-time video processing.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono font-semibold text-gray-900">Python Mentor</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-mono">Codeyoung, United States</p>
              <p className="text-gray-600 text-sm font-mono">
                Instructed diverse students from 5th graders to industry engineers in Python, machine learning, and deep learning. Guided hundreds of projects using state-of-the-art resources.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono font-semibold text-gray-900">Back End Developer</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-mono">Sameep, Jabalpur, Madhya Pradesh</p>
              <p className="text-gray-600 text-sm font-mono">
                Designed robust backend system using Django inspired by ONGC's framework. Built seller, buyer, and delivery sections with efficient APIs and database management.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono font-semibold text-gray-900">Machine Learning Lead</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-mono">GDSC JEC Jabalpur</p>
              <p className="text-gray-600 text-sm font-mono">
                Organized events on Machine Learning, Data Science, Hacktoberfest, Git & GitHub, and Google Cloud. Educated peers and fostered collaborative learning environment.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono font-semibold text-gray-900">Machine Learning Intern</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-mono">IIT Jodhpur, Rajasthan</p>
              <p className="text-gray-600 text-sm font-mono">
                Collaborated with PhD scholars under Assistant Professor Jayant Kumar Mohanta. Contributed to research tasks involving Convolutional Neural Networks and advanced ML concepts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 