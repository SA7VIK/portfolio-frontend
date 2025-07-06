import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Utensils, Trophy, Heart, ExternalLink } from 'lucide-react'

interface Update {
  id: string
  type: 'book' | 'cooking' | 'achievement' | 'personal'
  title: string
  description: string
  date: string
  icon: React.ReactNode
  link?: string
  tags?: string[]
}

const Updates: React.FC = () => {
  const updates: Update[] = [
    {
      id: '1',
      type: 'book',
      title: 'Currently Reading: "Designing Data-Intensive Applications"',
      description: 'Learning about scalable data systems and distributed architecture. This book is a must-read for any developer working with large-scale applications.',
      date: '2024-01-20',
      icon: <BookOpen className="w-6 h-6" />,
      link: 'https://dataintensive.net/',
      tags: ['Reading', 'Architecture', 'Data Systems']
    },
    {
      id: '2',
      type: 'achievement',
      title: 'New Personal Record: 225kg Deadlift',
      description: 'Hit a new PR at the gym today! Been working on strength training for the past 6 months and finally achieved this milestone.',
      date: '2024-01-18',
      icon: <Trophy className="w-6 h-6" />,
      tags: ['Fitness', 'Strength Training', 'PR']
    },
    {
      id: '3',
      type: 'cooking',
      title: 'Made Homemade Sourdough Bread',
      description: 'First successful attempt at sourdough bread! The crust was perfect and the crumb was airy. Used a 72-hour cold fermentation process.',
      date: '2024-01-15',
      icon: <Utensils className="w-6 h-6" />,
      tags: ['Cooking', 'Baking', 'Sourdough']
    },
    {
      id: '4',
      type: 'achievement',
      title: 'Contributed to Open Source: React Query',
      description: 'Submitted a PR to TanStack Query (React Query) that was merged! Fixed a bug related to query invalidation in concurrent mode.',
      date: '2024-01-12',
      icon: <Trophy className="w-6 h-6" />,
      link: 'https://github.com/TanStack/query/pull/1234',
      tags: ['Open Source', 'React', 'Contribution']
    },
    {
      id: '5',
      type: 'personal',
      title: 'Started Learning Piano',
      description: 'Began piano lessons this month. Currently working on basic chords and simple melodies. It\'s amazing how music theory connects to programming patterns.',
      date: '2024-01-10',
      icon: <Heart className="w-6 h-6" />,
      tags: ['Music', 'Learning', 'Piano']
    },
    {
      id: '6',
      type: 'book',
      title: 'Finished: "Atomic Habits" by James Clear',
      description: 'Excellent book on building good habits and breaking bad ones. The concept of identity-based habits really resonated with me.',
      date: '2024-01-08',
      icon: <BookOpen className="w-6 h-6" />,
      link: 'https://jamesclear.com/atomic-habits',
      tags: ['Reading', 'Self-Improvement', 'Habits']
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'book':
        return 'bg-blue-50 text-blue-600 border-blue-200'
      case 'cooking':
        return 'bg-orange-50 text-orange-600 border-orange-200'
      case 'achievement':
        return 'bg-green-50 text-green-600 border-green-200'
      case 'personal':
        return 'bg-purple-50 text-purple-600 border-purple-200'
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200'
    }
  }

  return (
    <section id="updates" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-mono">
            <span className="text-primary-600">let</span> <span className="text-gradient">updates</span> = [];
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-mono">
            What I'm reading, cooking, achieving, and learning lately.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Animated gradient bar behind update cards */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div
              className="h-96 w-full bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-400 blur-3xl opacity-20 rounded-full animate-gradient-x"
            />
          </div>
          
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 relative z-10 border border-gray-100"
            >
              {/* Update Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg border ${getTypeColor(update.type)}`}>
                  {update.icon}
                </div>
                <span className="text-sm text-gray-500 font-mono">
                  {new Date(update.date).toLocaleDateString()}
                </span>
              </div>

              {/* Update Title */}
              <h3 className="text-lg font-mono font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                {update.title}
              </h3>

              {/* Update Description */}
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {update.description}
              </p>

              {/* Update Tags */}
              {update.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {update.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono bg-gray-100 text-gray-600 border border-gray-200 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Update Link */}
              {update.link && (
                <a
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-mono font-medium text-sm transition-colors duration-200"
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Updates 