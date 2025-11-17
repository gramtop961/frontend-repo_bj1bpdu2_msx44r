import { Rocket, ShieldCheck, Zap } from 'lucide-react'

const steps = [
  {
    icon: ShieldCheck,
    title: 'Verify & Top Up',
    desc: 'Create your account, verify instantly and add funds to your wallet securely.',
  },
  {
    icon: Zap,
    title: 'Join Live Auctions',
    desc: 'Pick a gadget, watch the clock, and place quick bids with real-time updates.',
  },
  {
    icon: Rocket,
    title: 'Win & Deliver',
    desc: 'When the clock hits zero, the top bid wins. Checkout and receive your gadget fast.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-white backdrop-blur-xl">
              <div className="mb-4 h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 grid place-items-center text-[#0a0e1a]">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="mt-1 text-white/75 text-sm leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle separator */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
