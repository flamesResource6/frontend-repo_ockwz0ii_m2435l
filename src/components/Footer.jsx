import { ShieldCheck, Twitter, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-400/40">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-semibold">SentinelSecure</span>
            </div>
            <p className="mt-4 max-w-lg text-sm text-slate-400">A modern cybersecurity platform for SaaS teams. Monitor, detect, and respond—without the noise.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Product</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs">
          <p>© {new Date().getFullYear()} SentinelSecure Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
