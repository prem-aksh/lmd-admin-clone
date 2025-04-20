'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SellerRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    shopName: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registering seller:\n${JSON.stringify(form, null, 2)}`);
    router.push('/seller/login');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-8 mt-20 mx-auto rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-green-700 text-center">
        Seller Registration
      </h2>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Shop Name</label>
        <input
          type="text"
          name="shopName"
          value={form.shopName}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
      >
        Register
      </button>
    </form>
  );
}
