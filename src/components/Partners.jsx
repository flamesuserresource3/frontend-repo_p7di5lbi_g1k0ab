import { ShieldCheck, Medal, Sparkles } from 'lucide-react';

const partners = [
  { name: 'CyberShield Labs', tier: 'Platinum', icon: ShieldCheck },
  { name: 'QuantumByte AI', tier: 'Gold', icon: Sparkles },
  { name: 'SecureNet Cloud', tier: 'Silver', icon: Medal },
  { name: 'DataForge Systems', tier: 'Community', icon: Sparkles },
  { name: 'DevGuild India', tier: 'Community', icon: Sparkles },
  { name: 'OpenSource Collective', tier: 'Community', icon: Sparkles },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 to-purple-50/40 -z-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Partners</h2>
          <p className="mt-2 text-slate-600">Organizations supporting innovation across India</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map(({ name, tier, icon: Icon }) => (
            <div key={name} className="group rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:shadow transition">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm font-semibold text-slate-900">{name}</div>
              <div className="text-xs text-slate-500">{tier}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
