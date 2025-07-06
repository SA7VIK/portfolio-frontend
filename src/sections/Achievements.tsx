import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, Target } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: 'academic' | 'competition' | 'research'
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'GATE Data Science and AI 2024',
      description: 'Qualified in Data Science-Artificial Intelligence discipline, demonstrating expertise in advanced AI/ML concepts.',
      icon: <Award className="w-6 h-6" />,
      category: 'academic'
    },
    {
      id: '2',
      title: 'Smart India Hackathon 2023',
      description: 'National Finalist among 100,000+ participants for innovative healthcare solution.',
      icon: <Trophy className="w-6 h-6" />,
      category: 'competition'
    },
    {
      id: '3',
      title: 'Rajasthan IT Day Hackathon',
      description: 'Certificate of achievement for innovative technology solution in state-level competition.',
      icon: <Target className="w-6 h-6" />,
      category: 'competition'
    },
    {
      id: '4',
      title: 'Python & Deep Learning Certifications',
      description: 'Certified in Python programming and Introduction to Deep Learning, demonstrating foundational expertise.',
      icon: <Award className="w-6 h-6" />,
      category: 'academic'
    },
    {
      id: '5',
      title: 'DRDO Research Excellence',
      description: 'Contributing to next-generation radar systems with 360-degree surveillance coverage and 30% improved efficiency.',
      icon: <Target className="w-6 h-6" />,
      category: 'research'
    },
    {
      id: '6',
      title: 'IIT Jodhpur Internship',
      description: 'Certificate of internship for research work in Machine Learning under Assistant Professor Jayant Kumar Mohanta.',
      icon: <Award className="w-6 h-6" />,
      category: 'research'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-mono">
            <span className="text-primary-600">const</span> <span className="text-gradient">achievements</span> = [];
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-mono">
            Recognition and accomplishments in my academic and professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600">
                    {achievement.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-mono font-semibold text-gray-900">
                    {achievement.title}
                  </h3>
                  <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                    achievement.category === 'academic' 
                      ? 'bg-blue-100 text-blue-600' 
                      : achievement.category === 'competition'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-mono">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements 