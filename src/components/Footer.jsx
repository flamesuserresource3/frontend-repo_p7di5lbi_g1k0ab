import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">NEXUSCIPHERGUARD INDIA</h3>
            <p className="mt-2 text-sm text-slate-600">The official hub for national hackathons — discover, apply, and showcase your innovations.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#partners" className="hover:text-slate-900">Partners</a></li>
              <li><a href="#gallery" className="hover:text-slate-900">Gallery</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 00000 00000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@nexuscipherguard.in</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New Delhi, India</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Newsletter</h4>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="Your email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NEXUSCIPHERGUARD INDIA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
