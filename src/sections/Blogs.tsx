import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Clock } from 'lucide-react'

interface Blog {
  title: string
  description: string
  imageUrl: string | null
  readTime: string
  publishDate: string
  mediumUrl: string
  tags: string[]
}

const staticBlogs: Blog[] = [
  {
    title: 'Building a RAG-Powered Portfolio Chatbot with FastAPI and React',
    description: 'A comprehensive guide to implementing Retrieval-Augmented Generation for portfolio chatbots, covering FastAPI backend setup, React frontend integration, and real-time chat functionality.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    readTime: '8 min read',
    publishDate: '2024-01-15',
    mediumUrl: 'https://medium.com/@sa7vik/building-a-rag-powered-portfolio-chatbot-with-fastapi-and-react',
    tags: ['AI', 'RAG', 'FastAPI', 'React', 'Chatbot']
  },
  {
    title: 'The Future of Web Development: Emerging Technologies and Trends',
    description: 'Exploring cutting-edge technologies and trends that will shape the future of web development, from AI integration to new frameworks and development methodologies.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    readTime: '12 min read',
    publishDate: '2024-01-10',
    mediumUrl: 'https://medium.com/@sa7vik/the-future-of-web-development-emerging-technologies-and-trends',
    tags: ['Web Development', 'Technology', 'Trends', 'AI']
  },
  {
    title: 'Optimizing React Performance: A Practical Guide for Developers',
    description: 'Practical techniques and best practices for optimizing React applications, including code splitting, memoization, and performance monitoring strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    readTime: '15 min read',
    publishDate: '2024-01-05',
    mediumUrl: 'https://medium.com/@sa7vik/optimizing-react-performance-a-practical-guide-for-developers',
    tags: ['React', 'Performance', 'JavaScript', 'Optimization']
  },
  {
    title: 'From Junior to Senior: My Development Journey and Lessons Learned',
    description: 'Personal insights and valuable lessons learned while transitioning from junior to senior developer, including technical growth, soft skills, and career advancement strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop',
    readTime: '10 min read',
    publishDate: '2024-01-01',
    mediumUrl: 'https://medium.com/@sa7vik/from-junior-to-senior-my-development-journey-and-lessons-learned',
    tags: ['Career', 'Development', 'Growth', 'Leadership']
  }
]

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  return (
    <motion.a
      key={blog.mediumUrl || blog.title}
      href={blog.mediumUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group relative z-10 transition-shadow transition-transform duration-150 hover:shadow-xl hover:-translate-y-1 cursor-pointer block"
    >
      {/* Blog Image with skeleton loader */}
      <div className="relative overflow-hidden h-48 bg-gray-200">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-10" />
        )}
        {blog.imageUrl ? (
          <img
            src={blog.imageUrl}
            alt={blog.title || 'Blog image'}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      {/* Blog Title Only */}
      <div className="p-6">
        <h3 className="text-xl font-mono font-semibold text-gray-900 mb-0 group-hover:text-primary-600 transition-colors duration-100">
          {blog.title || 'Untitled'}
        </h3>
      </div>
    </motion.a>
  )
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Try to load from localStorage first
    const cached = localStorage.getItem('mediumBlogs')
    if (cached) {
      try {
        const parsed = JSON.parse(cached)
        if (Array.isArray(parsed)) setBlogs(parsed)
      } catch {}
      setLoading(false)
    }
    // Always try to fetch fresh blogs
    const fetchBlogs = async () => {
      try {
        const apiUrl = process.env.NODE_ENV === 'production' ? 'https://api.sa7vik.in/medium-blogs' : 'http://localhost:8000/medium-blogs';
        const res = await fetch(apiUrl)
        if (!res.ok) throw new Error("Failed to fetch blogs")
        const data = await res.json()
        // Limit to latest 4 blogs
        const latestBlogs = data.slice(0, 4)
        setBlogs(latestBlogs)
        localStorage.setItem('mediumBlogs', JSON.stringify(latestBlogs))
      } catch (err: any) {
        setError(err.message || "Unknown error")
        if (!cached) setBlogs(staticBlogs.slice(0, 4))
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <section id="blogs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-mono">
            <span className="text-primary-600">const</span> <span className="text-gradient">blogs</span> = [];
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-mono">
            Technical articles and insights I share on Medium.
          </p>
        </motion.div>
        {loading ? (
          <div className="text-center text-gray-500 font-mono">Loading blogs...</div>
        ) : error ? (
          <div className="text-center text-red-500 font-mono">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Animated gradient bar behind blog cards */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
              <div
                className="h-96 w-full bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-400 blur-3xl opacity-20 rounded-full animate-gradient-x"
              />
            </div>
            {blogs.map((blog, index) => (
              <BlogCard blog={blog} key={blog.mediumUrl || blog.title || index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blogs 