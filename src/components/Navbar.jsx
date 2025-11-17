import { useState } from 'react'
import { Bell, ChevronDown, CircleDollarSign, Home, Layers, Sparkles, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(8,10,26,0.55)]/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/30 grid place-items-center ring-1 ring-white/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide text-lg">Dream60</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-white/80 hover:text-white transition flex items-center gap-2">
              <Home className="h-4 w-4" /> Home
            </a>
            <a href="#live" className="text-white/80 hover:text-white transition">Live Auctions</a>
            <a href="#categories" className="text-white/80 hover:text-white transition flex items-center gap-2">
              <Layers className="h-4 w-4" /> Categories
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 text-emerald-300 ring-1 ring-white/15 backdrop-blur-md">
              <CircleDollarSign className="h-4 w-4" />
              <span className="font-medium">Wallet: $240.50</span>
            </motion.div>

            <button className="relative h-10 w-10 grid place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 text-white/90 hover:text-white hover:bg-white/15">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-neon-green shadow-[0_0_16px_#39FF14]" />
            </button>

            <button onClick={() => setOpen(!open)} className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl bg-white/10 ring-1 ring-white/15 text-white/80 hover:text-white">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="hidden sm:block">Profile</span>
              <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Electric gradient glow */}
      <div className="pointer-events-none h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </div>
  )
}
