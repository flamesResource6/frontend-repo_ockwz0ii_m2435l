import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Real-time threat protection
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
            Cybersecurity, reimagined for modern SaaS
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-6 text-lg text-slate-300">
            SentinelSecure uses AI-driven anomaly detection, agentless posture management, and automated response to keep your cloud apps safe—without slowing you down.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-slate-900 font-medium hover:bg-emerald-400 transition-colors">Start free trial</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/5 px-6 py-3 text-white ring-1 ring-white/10 hover:bg-white/10 transition-colors">See features</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
