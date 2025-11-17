import { ShieldCheck, Lock, Radar, Bug, KeyRound, GlobeLock } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ShieldCheck,
    title: 'Continuous Protection',
    desc: '24/7 monitoring with automated remediation backed by AI-driven rules.'
  },
  { icon: Radar, title: 'Anomaly Detection', desc: 'Detect suspicious behavior across users, APIs, and infrastructure.' },
  { icon: Bug, title: 'Runtime Shield', desc: 'Block exploits in production with zero-code instrumentation.' },
  { icon: Lock, title: 'Zero Trust Access', desc: 'Just-in-time, least-privilege access for every service and user.' },
  { icon: KeyRound, title: 'Secrets Governance', desc: 'Rotate keys, vault secrets, and audit access automatically.' },
  { icon: GlobeLock, title: 'Cloud Posture', desc: 'Agentless misconfiguration scanning for AWS, GCP, and Azure.' },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for security-first teams</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-slate-300">Unified visibility and automated defense across your entire SaaS surface. Deployed in minutes, not months.</motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/30">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              </div>
              <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
