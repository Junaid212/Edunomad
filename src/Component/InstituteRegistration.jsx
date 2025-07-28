// src/components/InstituteRegistration.jsx

import React, { useState, useEffect } from 'react';
import { Building, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Header2 from './Header2';
import { toast } from 'react-toastify';

export default function InstituteRegistration({ isDarkMode, toggleDarkMode, isMobileMenuOpen, toggleMobileMenu }) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const REDIRECT_DELAY = 3500;

  const [formData, setFormData] = useState({
    instituteName: '',
    instituteType: '',
    establishedYear:'',
    email: '',
    phone: '',
    location: '',
    instituteType: '',
    description: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const instituteTypes = [
    'School',
    'College',
    'University',
    'Training Center',
    'Online Platform',
    'Other',
  ];

  useEffect(() => {
    const savedData = localStorage.getItem('instituteData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setSubmitting(true);

    try {
      await new Promise((r) => setTimeout(r, 1200));

      // Save to localStorage
      localStorage.setItem('instituteData', JSON.stringify(formData));

      toast.success('Account created! Redirecting…', { autoClose: REDIRECT_DELAY });

      setTimeout(() => navigate('/institute-dash', {
        state: { welcome: true }
      }), REDIRECT_DELAY);
    } catch (err) {
      toast.error('Registration failed — please try again');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      <Header2
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onJoinNowClick={() => navigate('/register')}
      />

      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-3xl mx-auto px-4 py-8">

          {/* Back Button */}
          <button
            onClick={() => navigate('/combined')}
            className={`flex items-center space-x-2 mb-6 text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Form Container */}
          <div className={`rounded-2xl shadow-xl border p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Institute Registration</h1>
              <p className="text-sm text-gray-400">Register your educational institution</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Fields */}
              {/* <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                    className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  />
                </div>
              </div> */}
              {/* Institute Fields */}
              <div>
                <label className="block text-sm font-medium">Institute Name</label>
                <input
                  type="text"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleChange}
                  required
                  placeholder="Enter institute name"
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Institute Type</label>
                <select
                  name="instituteType"
                  value={formData.instituteType}
                  onChange={handleChange}
                  required
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                >
                  <option value="">Select institute type</option>
                  {instituteTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

               <div className="block text-sm font-medium">
                    <label htmlFor="establishedYear">Established Year </label>
                    <input
                      name="establishedYear"
                      type="number"
                      value={formData.establishedYear}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 1995"
                      className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                  </div>
                  </div>

              {/* Contact Fields */}
              <div>
                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone"
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="City, State"
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>

              
              
              <div>
                <label className="block text-sm font-medium">Institute Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your institute, programs offered, and mission..."
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>

              {/* Password Fields */}
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>

              {/* Terms & Submit */}
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
                  <a href="#" className="text-indigo-500 underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-indigo-500 underline">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full px-6 py-3 rounded-lg font-medium transition ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:scale-105'}`}
              >
                {submitting ? 'Creating…' : 'Create Account'}
              </button>

              <p className="text-center text-sm">
                Already have an account?{' '}
                <a href="sign-in" className="text-indigo-500 font-medium hover:underline">
                  Sign in here
                </a>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
