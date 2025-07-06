import React from 'react'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
  const skills = [
    // Programming Languages
    'Python', 'C', 'C++',
    // Libraries and Tools
    'TensorFlow', 'PyTorch', 'OpenCV', 'Docker', 'AWS-CDK', 'FastAPI', 'Django REST', 'MKL Intel',
    // AI Architectures
    'Agentic AI', 'LangGraph', 'LangChain', 'RAG', 'Faiss', 'Pinecone', 'MCP server-client', 'Guardrails',
    // ML Architectures
    'Convolutional Neural Networks', 'YOLO', 'Transformers', 'RNN', 'LSTM', 'Attention Mechanisms',
    // Additional Technologies
    'Computer Vision', 'Machine Learning', 'Signal Processing', 'GPU Programming', 'NLP', 'Automation',
    // Network Programming
    'Unix Network Programming', 'Socket Programming', 'Django', 'Git', 'GitHub', 'Google Cloud',
    // Languages
    'English (Professional)', 'Hindi (Native)', 'German (Elementary)'
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-mono">
            <span className="text-primary-600">const</span> <span className="text-gradient">skills</span> = [];
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-mono">
            Technologies and tools I use to build solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg font-mono text-sm hover:bg-primary-600 hover:border-primary-500 transition-all duration-200 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 