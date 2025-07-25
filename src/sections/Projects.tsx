import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  status?: 'WIP' | 'Live'
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'DermCare Solutions',
      status: 'Live',
      description: 'AI-powered skin disease diagnosis platform that identifies 30+ skin conditions with 98% accuracy. Features secure patient portal with detailed diagnostic reports and HIPAA-compliant telemedicine for direct doctor consultations.',
      technologies: ['Computer Vision', 'Machine Learning', 'Healthcare', 'Python', 'TensorFlow', 'OpenCV'],
      githubUrl: 'https://github.com/SA7VIK/DermCareSolutions',
      liveUrl: 'https://6572f7c7bb457577f1524ca2--golden-liger-f4b46a.netlify.app'
    },
    {
      id: '2',
      title: 'Email Marketing Agent',
      status: 'Live',
      description: 'AI-powered campaign automation platform that analyzes product specifications for optimal audience targeting and messaging strategy. Features automated A/B testing and personalized template generation with 23% improved open rates.',
      technologies: ['NLP', 'Automation', 'Agentic AI', 'LangGraph', 'LangChain', 'Python'],
      githubUrl: 'https://github.com/sa7vik/email-marketing-agent',
      liveUrl: 'https://www.rovlin.com'
    },
    {
      id: '3',
      title: 'MoneyInsight',
      status: 'Live',
      description: 'Smart Investment Allocation Advisor that uses time series models to predict market trends for 1 year. Analyzes your age, income, and life goals to provide personalized investment recommendations with optimal asset allocation (e.g., 50% Nifty, 30% Gold, 20% Bonds).',
      technologies: ['Time Series Analysis', 'Machine Learning', 'Financial Modeling', 'Python', 'FastAPI', 'React'],
      githubUrl: 'https://github.com/sa7vik/money-insight',
      liveUrl: 'https://moneyinsight.onrender.com'
    },
    {
      id: '4',
      title: 'Portfolio Chatbot',
      status: 'Live',
      description: 'AI-powered portfolio chatbot using RAG and LLM to provide information about skills, experience, and projects.',
      technologies: ['React', 'FastAPI', 'Python', 'RAG', 'LLM', 'TailwindCSS'],
      githubUrl: 'https://github.com/sa7vik/portfolio-chatbot',
      liveUrl: 'https://your-portfolio.com'
    },
    {
      id: '5',
      title: 'LLM Hallucination Detection Pipeline',
      status: 'Live',
      description: 'Advanced pipeline that detects hallucinations in LLM responses by analyzing log probabilities and confidence rates. The system evaluates text authenticity by examining token-level confidence scores, providing a factual accuracy assessment for AI-generated content.',
      technologies: ['Machine Learning', 'NLP', 'Log Probability Analysis', 'Python', 'LLM Evaluation', 'Confidence Scoring'],
      githubUrl: 'https://github.com/sa7vik/llm-hallucination-detection',
      liveUrl: 'https://llm-hallucination-detection.onrender.com'
    },

  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-mono">
            <span className="text-primary-600">function</span> <span className="text-gradient">Projects</span>()
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-mono">
            Some of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative px-4">
          {/* Animated gradient bar behind project cards */}
          <motion.div 
            className="absolute inset-0 flex justify-center items-center pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="h-96 w-full bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-400 blur-3xl opacity-20 rounded-full animate-gradient-x"
            />
          </motion.div>
          
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card-dark group text-white relative z-10 cursor-pointer block transition-shadow transition-transform duration-150 hover:shadow-xl hover:-translate-y-1 p-4 sm:p-6"
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-mono font-semibold text-white group-hover:text-primary-400 transition-colors duration-100">
                  {project.title}
                </h3>
                {project.status && (
                  <span className={`px-2 py-1 text-xs font-mono font-medium rounded self-start ${
                    project.status === 'WIP' 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {project.status}
                  </span>
                )}
              </div>

              {/* Project Description */}
              <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-gray-800 text-gray-300 border border-gray-700 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 