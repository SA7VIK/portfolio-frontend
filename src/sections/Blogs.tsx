import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const blogs = [
  {
    title: "How We Suppress Jamming in Defense Radar Using MVDR (Without Losing the Target)",
    url: "https://medium.com/@sa7vik/how-we-suppress-jamming-in-defense-radar-using-mvdr-without-losing-the-target-51d964031d95",
    image: "/blog-images/jamming.jpg"
  },
  {
    title: "🕒 Why Your Computer Can't Tell Time (And How Atomic Clocks Are Quietly Saving the World)",
    url: "https://medium.com/@sa7vik/why-your-computer-cant-tell-time-and-how-atomic-clocks-are-quietly-saving-the-world-442d13d31cc3",
    image: "/blog-images/computer-time.jpg"
  },
  {
    title: "Everyone Thought Leaderless Replication Was Trash… Until Amazon Did This",
    url: "https://medium.com/@sa7vik/everyone-thought-leaderless-replication-was-trash-until-amazon-did-this-8f9d8195feda",
    image: "/blog-images/leaderless-replication.png"
  },
  {
    title: "How Big Tech Keeps Your Data Safe: Replication in Distributed Systems",
    url: "https://medium.com/@sa7vik/how-big-tech-keeps-your-data-safe-replication-in-distributed-systems-d63a12ecf12a",
    image: "/blog-images/replication.png"
  }
]

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-mono">
            <span className="text-gradient">Blogs</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl font-mono mb-4">
            Technical articles and insights I share on Medium.
          </p>
          <motion.a
            href="https://medium.com/@sa7vik"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-400/30 rounded-2xl font-mono font-bold text-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-base overflow-hidden"
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <ExternalLink className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 relative z-10" />
            <span className="relative z-10">See all blogs on Medium</span>
            
            {/* Shine effect */}
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Animated gradient bar behind blog cards */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div
              className="h-96 w-full bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-400 blur-3xl opacity-20 rounded-full animate-gradient-x"
            />
          </div>
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group relative z-10 transition-shadow transition-transform duration-150 hover:shadow-xl hover:-translate-y-1 cursor-pointer block"
            >
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-mono font-semibold text-gray-900 mb-0 group-hover:text-primary-600 transition-colors duration-100">
                  {blog.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs 