'use client';

import { useState } from 'react';

export default function SellerRegisterPage() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    categories: '',
    storeName: '',
    storeURL: '',
    city: '',
    taxName: '',
    taxNumber: '',
    panNumber: '',
    commission: '10',
    nid: null,
    addressProof: null,
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Seller Registered!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto bg-white p-8 mt-10 rounded-xl shadow-lg space-y-6 text-black"
    >
      <h2 className="text-2xl font-bold text-green-700">Seller Complete Profile</h2>
      <p className="text-gray-600 mb-6">Please complete the form to complete your registration</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Row 1 */}
        <div>
          <label className="block text-sm font-medium">User Name *</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mobile *</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter mobile number"
          />
        </div>

        {/* Row 2 */}
        <div>
          <label className="block text-sm font-medium">Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter password"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter confirm password"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Categories *</label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Select Categories"
          />
        </div>

        {/* Row 3 */}
        <div>
          <label className="block text-sm font-medium">Store Name *</label>
          <input
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter store name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Store URL *</label>
          <input
            type="text"
            name="storeURL"
            value={formData.storeURL}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter store URL"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Select or Search City"
          />
        </div>

        {/* Row 4 */}
        <div>
          <label className="block text-sm font-medium">Tax Name</label>
          <input
            type="text"
            name="taxName"
            value={formData.taxName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter tax name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tax Number</label>
          <input
            type="text"
            name="taxNumber"
            value={formData.taxNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter tax number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">PAN Number</label>
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter PAN number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Commission (%)</label>
          <input
            type="number"
            name="commission"
            value={formData.commission}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter commission"
          />
        </div>
      </div>

      {/* Upload Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">National Identity Card *</label>
          <input
            type="file"
            name="nid"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Address Proof *</label>
          <input
            type="file"
            name="addressProof"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Logo *</label>
          <input
            type="file"
            name="logo"
            accept=".jpg,.jpeg,.png"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Complete
      </button>
    </form>
  );
}
