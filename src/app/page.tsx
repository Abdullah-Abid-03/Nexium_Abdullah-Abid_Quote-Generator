'use client'

import { useState } from "react"
import { quotes, topics } from "../quotes"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0])
  const [results, setResults] = useState<string[]>([])

  const handleSubmit = () => {
    const matched = quotes
      .filter(q => q.topic === selectedTopic)
      .sort(() => 0.5 - Math.random()) // shuffle
      .map(q => q.text)

    setResults(matched.length ? matched : ["No quotes found for this topic."])
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="min-h-screen bg-black/40 backdrop-blur-sm px-4 py-20">
        <div className="max-w-2xl mx-auto text-white">
          <h1 className="text-5xl font-extrabold text-center mb-10 drop-shadow-lg">
            ✨ Quote Generator
          </h1>

          <div className="flex gap-2 items-center justify-center mb-8">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="p-2 rounded bg-white text-black"
            >
              {topics.map((t, i) => (
                <option key={i} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>

            <Button
              onClick={handleSubmit}
              className="bg-white text-black hover:bg-gray-200 transition font-semibold"
            >
              Get Quotes
            </Button>
          </div>

          <div className="space-y-6">
            {results.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/80 backdrop-blur-sm text-gray-800 px-6 py-5 rounded-xl shadow-lg border-l-4 border-blue-400"
              >
                <span className="absolute -top-2 -left-2 text-5xl text-blue-200 opacity-30">“</span>
                <p className="leading-relaxed font-medium text-lg z-10 relative">
                  {quote}
                </p>
              </motion.div>
            ))}
          </div>

          {results.length === 0 && (
            <p className="text-center mt-8 text-white/80">
              Choose a topic to see quotes.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
