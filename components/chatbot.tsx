"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Message {
  role: "user" | "bot"
  content: string
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hi! I'm SAADAI, Mohammed Saad's AI assistant. Ask me anything about his experience, skills, or projects!"
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput: userMessage
        }),
      })

      const responseText = await response.json()
      setMessages(prev => [...prev, { role: "bot", content: responseText }])
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content: "Sorry, I'm having trouble connecting right now. Please try again later or contact Mohammed directly."
        }
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
          {/* Animated pulsing rings */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
              <span className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-accent to-primary animate-spin-slow opacity-60" style={{ animationDuration: '3s' }} />
            </>
          )}

          {/* Tooltip */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background border border-accent/30 text-foreground px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium hidden group-hover:block"
            >
              <span className="flex items-center gap-1.5">
                👋 Let&apos;s chat!
              </span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-accent/30" />
            </motion.div>
          )}

          {/* Button with photo */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent shadow-2xl hover:shadow-accent/50 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {isOpen ? (
              <div className="w-full h-full bg-accent flex items-center justify-center">
                <X className="w-6 h-6 text-background" />
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
            <Card className="shadow-2xl border-accent/20">
              <CardHeader className="bg-accent/10 border-b border-accent/20">
                <CardTitle className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent">
                    <Image
                      src="/img/saad-proffessional2.png"
                      alt="Saad"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>SAADAI - Portfolio Assistant</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === "user"
                            ? "bg-accent text-background"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg">
                        <Loader2 className="w-5 h-5 animate-spin text-accent" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t border-accent/20 p-4">
                  <form onSubmit={sendMessage} className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything..."
                      disabled={isLoading}
                      className="flex-1 px-4 py-2 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none disabled:opacity-50"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={isLoading || !input.trim()}
                      className="flex-shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
