import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const featured = [
  { id: 1, name: 'iPhone 15 Pro Max', img: 'https://images.unsplash.com/photo-1695048137521-a109464ee810?q=80&w=1600&auto=format&fit=crop', accent: 'from-cyan-400 to-violet-500' },
  { id: 2, name: 'PlayStation 5 Slim', img: 'https://images.unsplash.com/photo-1606813907291-76b7b1d79a24?q=80&w=1600&auto=format&fit=crop', accent: 'from-fuchsia-400 to-purple-500' },
  { id: 3, name: 'MacBook Air M3', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop', accent: 'from-emerald-400 to-cyan-400' },
]

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % featured.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative h-64 sm:h-80 overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={featured[index].id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img src={featured[index].img} alt={featured[index].name} className="h-full w-full object-cover opacity-70" />
            <div className={`absolute inset-0 bg-gradient-to-r ${featured[index].accent} opacity-40 mix-blend-overlay`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-xs uppercase tracking-wider text-white/70">Featured</div>
              <div className="text-2xl sm:text-3xl font-semibold">{featured[index].name}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
