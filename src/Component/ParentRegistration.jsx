// src/components/ParentRegistration.jsx
import React, { useState } from 'react'
import { ArrowLeft, Users} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Header2 from './Header2'

export default function ParentRegistration({ isDarkMode ,toggleDarkMode, isMobileMenuOpen, toggleMobileMenu}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    childrenAges: '',
    learningRequirements: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // TODO: API integration
    console.log('Parent registration data:', formData)
    navigate('/')
  }

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
          <Header2
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            onJoinNowClick={() => navigate('/register')}
          />
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back to Home */}
        <button
          onClick={() => navigate('/combined')}
          className={`flex items-center space-x-2 mb-6 text-sm font-medium ${
            isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Form Container */}
        <div
          className={`rounded-2xl shadow-xl border p-8 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Parent Registration</h1>
            <p className="text-sm text-gray-400">Find the best educators for your children</p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
                required
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Children’s Ages</label>
              <input
                type="text"
                name="childrenAges"
                value={formData.childrenAges}
                onChange={handleChange}
                placeholder="e.g. 8, 12, 15"
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Learning Requirements</label>
              <textarea
                name="learningRequirements"
                value={formData.learningRequirements}
                onChange={handleChange}
                rows="3"
                placeholder="What subjects or areas do you need help with?"
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="w-4 h-4"
              />
              <label className="text-sm">
                I agree to the{' '}
                <a href="#" className="text-emerald-500 underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-emerald-500 underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 hover:scale-105 transition duration-200"
            >
              Create Account
            </button>

            <p className="text-center text-sm">
              Already have an account?{' '}
              <a href="#" className="text-emerald-500 font-medium hover:underline">
                Sign in here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
