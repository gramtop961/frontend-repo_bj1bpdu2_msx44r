import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0b1020] via-[#0c1026] to-[#0a0e1a]" />

      {/* Neon gradient orbs */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Win Your Dream Gadget for Just a Bid
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-lg text-white/80 max-w-xl">
            Real-time electronic gadget auctions with blazing-fast updates, ironclad trust, and stunning 3D visuals.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#live" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white font-semibold shadow-[0_0_30px_rgba(56,189,248,0.35)]">
              Explore Live Auctions
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#how" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 ring-1 ring-white/15 backdrop-blur-xl">
              How It Works
            </motion.a>
          </div>

          {/* Floating badges */}
          <div className="mt-8 flex items-center gap-4 text-white/70">
            <div className="px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15">Secure & Transparent</div>
            <div className="px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15">1M+ Bids Placed</div>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 ring-1 ring-white/10">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Glass overlay corners */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent" />
        </div>
      </div>
    </section>
  )
}
