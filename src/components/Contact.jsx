import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact Us</h2>
            <p className="mt-2 text-slate-600">Have questions about publishing an event, partnering, or participating? Reach out.</p>
            <ul className="mt-6 space-y-2 text-slate-600 text-sm">
              <li>Email: contact@nexuscipherguard.in</li>
              <li>Location: New Delhi, India</li>
              <li>Hours: Mon - Fri, 10am - 6pm IST</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input type="text" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea rows="4" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
