import { motion } from 'framer-motion'

const categories = [
  { key: 'mobiles', label: 'Mobiles' },
  { key: 'laptops', label: 'Laptops' },
  { key: 'wearables', label: 'Wearables' },
  { key: 'gaming', label: 'Gaming' },
  { key: 'tablets', label: 'Tablets' },
]

export default function CategoryFilters({ active, onChange }) {
  return (
    <div id="categories" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((c) => (
          <motion.button
            key={c.key}
            onClick={() => onChange(c.key)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-xl backdrop-blur-xl ring-1 transition ${
              active === c.key
                ? 'bg-white/15 ring-white/20 text-white shadow-[0_0_24px_rgba(57,255,20,0.25)]'
                : 'bg-white/5 ring-white/10 text-white/80 hover:bg-white/10'
            }`}
          >
            {c.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
