import { useState } from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a href={`#${label.toLowerCase()}`} className="text-sm md:text-base text-slate-300 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-400/40">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="text-white font-semibold tracking-tight">SentinelSecure</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItem('Features')}
            {navItem('Pricing')}
            {navItem('Docs')}
            {navItem('Contact')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-300 hover:text-white text-sm">Sign in</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400 transition-colors">
              Start Free Trial
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 text-white" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-0 inset-x-0 p-4 bg-slate-900/95 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-white font-semibold">
              <ShieldCheck className="h-5 w-5 text-emerald-400" /> SentinelSecure
            </div>
            <button onClick={() => setOpen(false)} className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid gap-3 text-slate-200">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#docs" onClick={() => setOpen(false)}>Docs</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <div className="pt-2 flex gap-3">
              <a href="#" className="flex-1 text-center rounded-md bg-white/5 py-2 ring-1 ring-white/10">Sign in</a>
              <a href="#" className="flex-1 text-center rounded-md bg-emerald-500 py-2 text-slate-900 font-medium">Free Trial</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
