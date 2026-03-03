"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
import Image from "next/image"

interface Message {
  role: "user" | "bot"
  content: string
  displayedContent?: string
}

function TypingText({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("")
  const idx = useRef(0)

  useEffect(() => {
    idx.current = 0
    setDisplayed("")
    const interval = setInterval(() => {
      idx.current++
      setDisplayed(text.slice(0, idx.current))
      if (idx.current >= text.length) {
        clearInterval(interval)
        onDone?.()
      }
    }, 18)
    return () => clearInterval(interval)
  }, [text, onDone])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  )
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Connection established. I'm SAADAI, Saad's AI construct inside the Matrix. Ask me anything about his experience, skills, or projects.",
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // Mini matrix rain for chat background
  useEffect(() => {
    if (!isOpen) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "01"
    const fontSize = 10
    let columns = 0
    let drops: number[] = []
    let animId: number

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      canvas!.width = parent.clientWidth
      canvas!.height = parent.clientHeight
      columns = Math.floor(canvas!.width / fontSize)
      drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * (canvas!.height / fontSize)))
    }

    function draw() {
      animId = requestAnimationFrame(draw)
      ctx!.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)
      ctx!.fillStyle = "rgba(34, 197, 94, 0.3)"
      ctx!.font = `${fontSize}px monospace`
      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx!.fillText(char, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    resize()
    animId = requestAnimationFrame(draw)
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement!)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [isOpen])

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("https://portfolio-chatbot.mbadru3434.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: userMessage }),
      })
      const responseText = await response.json()
      setMessages(prev => [...prev, { role: "bot", content: responseText }])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "bot", content: "Connection lost... The Matrix has you. Try again later or contact Saad directly." }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative group">
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" />
              <span className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-green-500 to-green-400 animate-spin-slow opacity-60" style={{ animationDuration: '3s' }} />
            </>
          )}

          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black border border-green-500/50 text-green-400 px-3 py-1.5 rounded-lg shadow-lg shadow-green-500/20 text-sm font-mono hidden group-hover:block"
            >
              <span className="flex items-center gap-1.5">
                Enter the Matrix...
              </span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-green-500/50" />
            </motion.div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 shadow-2xl shadow-green-500/30 hover:shadow-green-500/60 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            {isOpen ? (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <X className="w-6 h-6 text-green-400" />
              </div>
            ) : (
              <Image
                src="/img/saad-proffessional2.png"
                alt="Chat with Saad"
                fill
                className="object-cover"
              />
            )}
          </button>
        </div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md"
          >
            <div className="rounded-xl overflow-hidden border border-green-500/30 shadow-2xl shadow-green-500/20 bg-black">
              {/* Header */}
              <div className="relative bg-black border-b border-green-500/30 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-green-500/60">
                    <Image
                      src="/img/saad-proffessional2.png"
                      alt="Saad"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-green-400 font-mono text-sm font-bold tracking-wider">SAADAI v2.0</p>
                    <p className="text-green-600 font-mono text-xs">system.matrix.connected</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-green-500/40" />
                    <span className="w-2 h-2 rounded-full bg-green-500/20" />
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="relative h-96 overflow-y-auto">
                {/* Mini matrix rain background */}
                <canvas
                  ref={canvasRef}
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full opacity-40"
                />
                {/* Scanline overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(34,197,94,0.3) 1px, rgba(34,197,94,0.3) 2px)",
                  }}
                />

                <div className="relative z-20 p-4 space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono"
                    >
                      {message.role === "user" ? (
                        <div className="flex justify-end">
                          <div className="max-w-[80%]">
                            <p className="text-green-600 text-xs mb-1 text-right">neo@matrix ~$</p>
                            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                              <p className="text-green-300 text-sm whitespace-pre-wrap">{message.content}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-start">
                          <div className="max-w-[85%]">
                            <p className="text-green-700 text-xs mb-1">agent.saadai &gt;</p>
                            <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-3">
                              <p className="text-green-400 text-sm whitespace-pre-wrap">
                                {index === messages.length - 1 && message.role === "bot" ? (
                                  <TypingText text={message.content} onDone={scrollToBottom} />
                                ) : (
                                  message.content
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start font-mono"
                    >
                      <div>
                        <p className="text-green-700 text-xs mb-1">agent.saadai &gt;</p>
                        <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-3">
                          <span className="text-green-400 text-sm">
                            Decrypting
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                            >...</motion.span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-green-500/30 bg-black/80 p-4">
                <form onSubmit={sendMessage} className="flex gap-2">
                  <div className="flex-1 flex items-center bg-green-900/10 border border-green-500/30 rounded-lg px-3 focus-within:border-green-400 focus-within:shadow-[0_0_10px_rgba(34,197,94,0.2)] transition-all">
                    <span className="text-green-600 font-mono text-sm mr-2 select-none">&gt;</span>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter message..."
                      disabled={isLoading}
                      className="flex-1 py-2 bg-transparent text-green-300 font-mono text-sm placeholder:text-green-800 focus:outline-none disabled:opacity-50 caret-green-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="px-3 py-2 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400 hover:bg-green-500/30 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all disabled:opacity-30 disabled:hover:bg-green-500/20 disabled:hover:border-green-500/40 disabled:hover:shadow-none"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
