import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const sample = [
  { id: 'a1', name: 'iPhone 15 Pro', category: 'mobiles', img: 'https://images.unsplash.com/photo-1695048137521-a109464ee810?q=80&w=1600&auto=format&fit=crop', endsIn: 90, bid: 612.5, participants: 142 },
  { id: 'a2', name: 'Samsung Galaxy Watch 6', category: 'wearables', img: 'https://images.unsplash.com/photo-1516893843539-8b06f3dcd0e2?q=80&w=1600&auto=format&fit=crop', endsIn: 260, bid: 142.0, participants: 88 },
  { id: 'a3', name: 'MacBook Pro 14”', category: 'laptops', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop', endsIn: 420, bid: 1202.0, participants: 201 },
  { id: 'a4', name: 'PlayStation 5', category: 'gaming', img: 'https://images.unsplash.com/photo-1606813907291-76b7b1d79a24?q=80&w=1600&auto=format&fit=crop', endsIn: 35, bid: 455.0, participants: 331 },
  { id: 'a5', name: 'iPad Pro 12.9”', category: 'tablets', img: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=1600&auto=format&fit=crop', endsIn: 780, bid: 810.0, participants: 126 },
  { id: 'a6', name: 'Nintendo Switch OLED', category: 'gaming', img: 'https://images.unsplash.com/photo-1612036781189-02253f9683b0?q=80&w=1600&auto=format&fit=crop', endsIn: 180, bid: 220.0, participants: 77 },
]

function pad(n) {
  return String(n).padStart(2, '0')
}

function Countdown({ seconds }) {
  const [time, setTime] = useState(seconds)
  useEffect(() => {
    setTime(seconds)
  }, [seconds])

  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])

  const h = Math.floor(time / 3600)
  const m = Math.floor((time % 3600) / 60)
  const s = time % 60

  return (
    <div className="flex items-center gap-1 text-[13px]">
      {[h, m, s].map((v, i) => (
        <div key={i} className="relative w-10 h-8 rounded-md overflow-hidden bg-black/40 ring-1 ring-white/10 text-center">
          <motion.div
            key={v}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 grid place-items-center font-mono text-white"
          >
            {pad(v)}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

function AuctionCard({ item }) {
  const [bid, setBid] = useState(item.bid)

  useEffect(() => {
    const id = setInterval(() => {
      // mimic live tick
      setBid((b) => (Math.random() < 0.3 ? parseFloat((b + Math.random() * 5).toFixed(2)) : b))
    }, 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl shadow-xl">
      <div className="absolute right-3 top-3 z-10">
        <span className="px-2 py-1 text-xs rounded-full bg-neon-green text-black font-semibold shadow-[0_0_12px_#39FF14]">LIVE</span>
      </div>
      <div className="relative h-44">
        <img src={item.img} alt={item.name} className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
      </div>
      <div className="p-4 text-white">
        <div className="text-sm text-white/70">{item.category[0].toUpperCase() + item.category.slice(1)}</div>
        <h3 className="mt-0.5 text-lg font-semibold leading-snug">{item.name}</h3>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-xs text-white/60">Current Bid</div>
            <motion.div key={bid} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-xl font-semibold tracking-wide">
              ${bid.toFixed(2)}
            </motion.div>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/60">Ends In</div>
            <Countdown seconds={item.endsIn} />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-sm text-white/70">
          <div className="flex items-center gap-1"><Users className="h-4 w-4" /> {item.participants}</div>
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black/90 font-semibold shadow-[0_0_18px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_28px_rgba(139,92,246,0.45)] transition">
            Join Auction
          </button>
        </div>
      </div>

      {/* neon glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute -inset-1 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,_#22d3ee_0%,_#8b5cf6_50%,_#22d3ee_100%)] blur-2xl opacity-30" />
      </div>
    </motion.div>
  )
}

export default function LiveAuctions({ filter }) {
  const items = useMemo(() => sample.filter((i) => (filter ? i.category === filter : true)), [filter])

  return (
    <section id="live" className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">Live Auctions</h2>
          <a href="#" className="text-cyan-300 hover:text-cyan-200">See all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <AuctionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
