'use client'

import { useState } from 'react'

export default function DeleteAccount() {
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!mobile || !otp) {
      setError('Mobile number and OTP are required')
      return
    }

    const correctOtp = '123456' 

    if (otp === correctOtp) {
      setSuccess('Account successfully deleted')
      setError('')
    } else {
      setError('Invalid OTP')
      setSuccess('')
    }
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col lg:flex-row">
      <div className="lg:flex-1 bg-green-800 text-white p-6 lg:p-12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Delete Your Account</h1>
        <p className="text-lg lg:text-xl mb-6">Please read the following before proceeding:</p>
        <ul className="space-y-4 text-base lg:text-lg">
          {[
            'This action is permanent and cannot be undone.',
            'All your data will be erased from our system.',
            'You will lose access to any services tied to this account.',
            'Please back up any important information before proceeding.',
            'An OTP is required for verification before deleting your account.'
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <svg className="mr-3 h-5 w-5 lg:h-6 lg:w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:flex-1 p-6 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Confirm Deletion</h2>
            <p className="text-gray-600 mb-6">Enter your mobile number and OTP to proceed</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              )}
              {success && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                  <p className="font-bold">Success</p>
                  <p>{success}</p>
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  placeholder="Enter your mobile number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  placeholder="Enter OTP sent to your mobile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Delete Account
              </button>
            </form>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-600">
            <p>If you have any questions, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

