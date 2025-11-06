import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero({ onOpenAuth }) {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8c9b0y5rJw1oC3Zr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
              <Rocket className="h-3.5 w-3.5" /> Official Hackathon Hub
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              NEXUSCIPHERGUARD INDIA Hackathons
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
              Discover, apply, and showcase innovation. Join nationwide challenges, connect with partners, and elevate your ideas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800">
                Explore Platform
              </a>
              <button onClick={onOpenAuth} className="inline-flex items-center justify-center rounded-md bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-white">
                Sign up to Participate
              </button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 ring-1 ring-slate-200/60 pointer-events-none"></div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90"></div>
    </section>
  );
}
