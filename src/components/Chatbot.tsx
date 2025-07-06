import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, ArrowLeft, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const HINTS = [
  { label: 'Me', value: "Tell me about Satvik Singh." },
  { label: 'Projects', value: "What projects has Satvik worked on?" },
  { label: 'Skills', value: "What are Satvik's main skills?" },
  { label: 'Fun', value: "What are Satvik's hobbies or fun facts?" },
  { label: 'Contact', value: "How can I contact Satvik?" },
]

const FLUID_COLORS = [
  'rgba(59,130,246,0.5)',   // blue
  'rgba(139,92,246,0.5)',  // purple
  'rgba(236,72,153,0.5)',  // pink
  'rgba(245,158,11,0.5)',  // orange
  'rgba(16,185,129,0.5)',  // green
  'rgba(239,68,68,0.5)',   // red
]

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey! I'm Satvik's AI assistant. Ask me anything about his skills, projects, or experience!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorColor, setCursorColor] = useState('#3B82F6') // Blue
  const [fluidColorIdx, setFluidColorIdx] = useState(0)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      // Cycle through colors smoothly
      const idx = Math.floor((e.clientX + e.clientY) / 120) % FLUID_COLORS.length
      setFluidColorIdx(idx)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const apiUrl = process.env.NODE_ENV === 'production' ? 'https://api.sa7vik.in/chat' : 'http://localhost:8000/chat';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          conversation_history: messages.map(m => ({ role: m.sender, content: m.text }))
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response from AI')
      }

      const data = await response.json()
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error calling AI backend:', error)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting to my AI backend right now. Please try again later!",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Fluid, colorful, cursor-reactive background */}
      <canvas
        id="fluid-bg"
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(60px)', opacity: 0.7 }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <script dangerouslySetInnerHTML={{
        __html: `
          const canvas = document.getElementById('fluid-bg');
          if (canvas) {
            const ctx = canvas.getContext('2d');
            let x = ${cursorPosition.x}, y = ${cursorPosition.y};
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            const grad = ctx.createRadialGradient(x, y, 80, x, y, 400);
            grad.addColorStop(0, '${FLUID_COLORS[fluidColorIdx]}');
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.arc(x, y, 400, 0, 2 * Math.PI);
            ctx.fillStyle = grad;
            ctx.fill();
          }
        `
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 border-b border-gray-800 p-6"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a 
              href="/" 
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-mono">Back to Portfolio</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Bot className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-mono font-bold">Satvik's AI Assistant</h1>
          </div>
        </div>
      </motion.div>

      {/* Chat Container */}
      <div className="relative z-10 max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-blue-600' 
                    : 'bg-gray-700'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-100'
                }`}>
                  <p className="font-mono text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-60 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-gray-800">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input + Hints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-gray-800 p-6"
        >
          {/* Hints row */}
          <div className="flex flex-wrap gap-3 mb-4 justify-center">
            {HINTS.map(hint => (
              <button
                key={hint.label}
                type="button"
                className="flex items-center gap-2 px-5 py-2 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl font-mono font-semibold text-black shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
                onClick={() => setInputValue(hint.value)}
              >
                {hint.label}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Satvik's skills, projects, or experience..."
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl font-mono font-semibold text-black shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:bg-gray-700 disabled:cursor-not-allowed"
              style={{ WebkitBackdropFilter: 'blur(12px)' }}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Chatbot 