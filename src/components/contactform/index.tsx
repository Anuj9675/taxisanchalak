'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    mobile: '',
    details: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-3xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-700 to-emerald-800 p-5">
          <h3 className="text-lg font-semibold text-white text-center">Contact Us</h3>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          <div>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="mobile"
              value={formState.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Mobile No."
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="details"
              value={formState.details}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Contact Details"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-700 to-emerald-800 text-white text-sm font-medium py-3 rounded-lg hover:bg-green-900 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
