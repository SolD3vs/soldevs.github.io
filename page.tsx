"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ComputerIcon as Windows, Crown, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import ConfirmModal from "./ConfirmModal"
import LoadingScreen from "./components/LoadingScreen"

export default function SolVelocityExecutors() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentDiscordLink, setCurrentDiscordLink] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleGetExecutor = (discordLink: string) => {
    setCurrentDiscordLink(discordLink)
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    window.location.href = currentDiscordLink
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black/90 text-gray-100">
      {/* Navigation */}
      <nav className="border-b border-white/5 bg-black/30 backdrop-blur-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Crown className="h-6 w-6 text-[#FF1155] animate-float" />
              <span className="text-white">SOGED</span>
              <span className="text-[#FF1155]">.NET</span>
            </h1>
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-gray-300 hover:text-[#FF1155] bg-white/5 backdrop-blur-sm">
                Exploits
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-[#FF1155] bg-white/5 backdrop-blur-sm">
                Scripts
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-[#FF1155] bg-white/5 backdrop-blur-sm">
                Community
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search exploits..."
                className="w-64 bg-white/5 border-white/10 focus:border-[#FF1155]/50 backdrop-blur-sm text-sm"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-md"></div>
            </div>
            <Button variant="ghost" className="text-gray-300 hover:text-[#FF1155] bg-white/5 backdrop-blur-sm">
              Login
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <Crown className="h-24 w-24 text-[#FF1155] mx-auto mb-8 animate-float" />
          <h1 className="text-4xl font-bold mb-2">
            find the best <span className="text-[#FF1155]">Roblox Cheats</span> on
          </h1>
          <h2 className="text-5xl font-bold text-white">
            SOGED<span className="text-[#FF1155]">.NET</span>
          </h2>
        </div>

        {/* Executors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExecutorCard
            name="Sol"
            icon="/placeholder.svg?height=80&width=80"
            description="A powerful level 7 executor with 65% stability and regular updates."
            pros={["Level 7", "65% unc"]}
            cons={["Rarely updated, bad UI"]}
            downloads="0"
            likes="0"
            platforms={["windows"]}
            onGetExecutor={() => handleGetExecutor("https://discord.gg/cqHbam3h8x")}
          />
          <ExecutorCard
            name="Velocity"
            icon="/placeholder.svg?height=80&width=80"
            description="Premium executor with built-in decompiler and maximum compatibility."
            pros={["Has a decompiler", "99% unc + 99% sunc", "Level 8"]}
            neutral={["New exploit- Safety is unknown"]}
            downloads="3.4k+"
            likes="105"
            platforms={["windows"]}
            onGetExecutor={() => handleGetExecutor("https://discord.gg/getvelocity")}
          />
        </div>
      </main>

      <footer className="border-t border-white/5 text-center p-4 mt-16 bg-black/30 backdrop-blur-sm">
        <p className="text-gray-500 text-sm">&copy; 2025 SOGED.NET • All rights reserved</p>
      </footer>

      <ConfirmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </div>
  )
}

function ExecutorCard({
  name,
  icon,
  description,
  pros,
  cons = [],
  neutral = [],
  downloads,
  likes,
  platforms,
  onGetExecutor,
}) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF1155]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="p-6 relative">
        <div className="flex gap-6">
          <div className="w-20 h-20 bg-black/50 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/10">
            <span className="text-gray-600 text-xs text-center px-2">TEMPLATE, NO CURRENT ICON YET</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <Windows className="h-4 w-4" />
                  {downloads}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {likes}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
          </div>
        </div>

        {pros.length > 0 && (
          <div className="mb-4">
            <h4 className="text-green-500 font-medium mb-2">Pros</h4>
            <ul className="space-y-1">
              {pros.map((pro, index) => (
                <li key={index} className="text-green-500 text-sm">
                  • {pro}
                </li>
              ))}
            </ul>
          </div>
        )}

        {cons.length > 0 && (
          <div className="mb-4">
            <h4 className="text-red-500 font-medium mb-2">Cons</h4>
            <ul className="space-y-1">
              {cons.map((con, index) => (
                <li key={index} className="text-red-500 text-sm">
                  • {con}
                </li>
              ))}
            </ul>
          </div>
        )}

        {neutral.length > 0 && (
          <div className="mb-4">
            <h4 className="text-yellow-500 font-medium mb-2">Neutral</h4>
            <ul className="space-y-1">
              {neutral.map((item, index) => (
                <li key={index} className="text-yellow-500 text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <Button
            className="flex-1 bg-[#FF1155]/20 hover:bg-[#FF1155]/30 text-white backdrop-blur-sm border border-[#FF1155]/20 transition-all duration-300"
            onClick={onGetExecutor}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
          <span>Last edited by SOGED.NET</span>
          <span>✓</span>
        </div>
      </div>
    </Card>
  )
}

