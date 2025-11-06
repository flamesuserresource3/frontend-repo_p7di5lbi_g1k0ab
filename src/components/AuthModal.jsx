import { useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModal({ open, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h3 className="text-lg font-semibold">{isLogin ? 'Login' : 'Create Account'}</h3>
          <button onClick={onClose} className="rounded p-1 hover:bg-slate-100" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-6 py-5">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            {!isLogin && (
              <div>
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Password</label>
              <input type="password" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
            </div>
            <button className="mt-2 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-slate-600">
            {isLogin ? 'New to the platform?' : 'Already have an account?'}{' '}
            <button onClick={() => setIsLogin((v) => !v)} className="font-semibold text-indigo-700 hover:text-indigo-800">
              {isLogin ? 'Create an account' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
