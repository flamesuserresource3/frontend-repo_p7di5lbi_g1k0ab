import { Calendar, Award, Users, Lock } from 'lucide-react';

export default function Sections({ onOpenAuth }) {
  const items = [
    {
      title: 'Upcoming Hackathons',
      desc: 'Explore national and regional challenges across AI, cybersecurity, web3, and more.',
      icon: Calendar,
      cta: { label: 'View Events', href: '#about' },
    },
    {
      title: 'Prizes & Recognition',
      desc: 'Win prizes, mentorship, and partnership opportunities from leading organizations.',
      icon: Award,
      cta: { label: 'View Rewards', href: '#partners' },
    },
    {
      title: 'Community & Teams',
      desc: 'Find teammates, attend workshops, and collaborate with innovators nationwide.',
      icon: Users,
      cta: { label: 'Join Community', href: '#contact' },
    },
    {
      title: 'Participant Portal',
      desc: 'Sign up to submit projects, manage applications, and track your progress.',
      icon: Lock,
      action: { label: 'Sign up / Login', onClick: onOpenAuth },
    },
  ];

  return (
    <section className="py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Built for innovators</h2>
          <p className="mt-2 text-slate-600">Everything you need to participate, learn, and showcase your work</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, icon: Icon, cta, action }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              {cta && (
                <a href={cta.href} className="mt-4 inline-flex text-sm font-semibold text-indigo-700 hover:text-indigo-800">{cta.label} →</a>
              )}
              {action && (
                <button onClick={action.onClick} className="mt-4 inline-flex text-sm font-semibold text-indigo-700 hover:text-indigo-800">{action.label} →</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
