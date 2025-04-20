// components/AuthForm.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthForm({ role = 'admin' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login as ${role}: ${email}, ${password}`);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-8 mt-20 mx-auto rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-green-700 text-center">
        Login to {role} panel
      </h2>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600  py-3 rounded hover:bg-green-700 transition"
      >
        Login
      </button>

      {/* Show sign-up only for seller */}
      {role === 'seller' && (
        <p className="text-sm text-center text-gray-600">
          Not a user?{' '}
          <Link
            href="/seller/register"
            className="text-green-600 font-medium hover:underline"
          >
            Sign up here
          </Link>
        </p>
      )}
    </form>
  );
}
