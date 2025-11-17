import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For small projects and evaluations',
    features: ['Up to 3 services', 'Basic anomaly alerts', 'Community support'],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$79/mo',
    desc: 'Best for growing teams',
    features: ['Unlimited services', 'Runtime protection', 'SSO + OAuth', 'Priority support'],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Advanced security at scale',
    features: ['SAML/SCIM', 'Dedicated VPC', 'Audit trails', 'Custom SLAs'],
    cta: 'Contact sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-slate-300">Choose a plan that scales with your security needs.</motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className={`relative rounded-2xl border ${t.popular ? 'border-emerald-400/40 bg-emerald-500/5' : 'border-white/10 bg-white/[0.03]'} p-6`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-slate-900">Popular</span>
              )}
              <div className="text-center">
                <h3 className="text-lg font-medium">{t.name}</h3>
                <div className="mt-2 text-3xl font-semibold">{t.price}</div>
                <p className="mt-2 text-sm text-slate-300">{t.desc}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className={`block w-full text-center rounded-md px-5 py-2.5 font-medium transition-colors ${t.popular ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' : 'bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10'}`}>{t.cta}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
