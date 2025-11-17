import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryFilters from './components/CategoryFilters'
import FeaturedCarousel from './components/FeaturedCarousel'
import LiveAuctions from './components/LiveAuctions'
import HowItWorks from './components/HowItWorks'
import { Wallet } from 'lucide-react'

function App() {
  const [filter, setFilter] = useState('')

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Global background gradient accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,_rgba(56,189,248,0.15),_transparent),radial-gradient(800px_500px_at_100%_10%,_rgba(168,85,247,0.12),_transparent)]" />
      </div>

      <Navbar />
      <Hero />

      {/* Categories */}
      <div className="py-6">
        <CategoryFilters active={filter} onChange={setFilter} />
      </div>

      {/* Featured Carousel */}
      <div className="py-4">
        <FeaturedCarousel />
      </div>

      {/* Live Auctions */}
      <LiveAuctions filter={filter} />

      {/* How It Works */}
      <HowItWorks />

      {/* Floating Wallet Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-300 to-cyan-400 text-[#0a0e1a] font-semibold shadow-[0_0_40px_rgba(16,185,129,0.45)]"
      >
        <Wallet className="h-5 w-5" /> Add Funds
      </motion.button>
    </div>
  )
}

export default App
