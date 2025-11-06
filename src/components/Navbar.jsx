import { useEffect, useState } from 'react';
import { Menu, X, Shield, User } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = (href, label) => (
    <a
      key={href}
      href={href}
      className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur ${
      scrolled ? 'bg-white/70 dark:bg-slate-900/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="rounded-lg bg-indigo-600 p-2 text-white shadow">
              <Shield className="h-5 w-5" />
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-tight">
              NEXUSCIPHERGUARD INDIA
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLink('#home', 'Home')}
            {navLink('#about', 'About')}
            {navLink('#partners', 'Partners')}
            {navLink('#gallery', 'Gallery')}
            {navLink('#contact', 'Contact')}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <User className="h-4 w-4" />
              Sign in / Sign up
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800 pt-3">
              {navLink('#home', 'Home')}
              {navLink('#about', 'About')}
              {navLink('#partners', 'Partners')}
              {navLink('#gallery', 'Gallery')}
              {navLink('#contact', 'Contact')}
              <button
                onClick={() => {
                  onOpenAuth();
                  setOpen(false);
                }}
                className="mt-2 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700"
              >
                <User className="h-4 w-4" /> Sign in / Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
