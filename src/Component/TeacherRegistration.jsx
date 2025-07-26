// src/components/TeacherRegistration.jsx
import React, { useState , useEffect} from 'react';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { toast } from 'react-toastify'; 
import Header2 from './Header2';

export default function TeacherRegistration({ isDarkMode ,toggleDarkMode, isMobileMenuOpen, toggleMobileMenu }) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);   // ⬅️ loading flag
  const REDIRECT_DELAY = 3500; 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    qualification: '',
    experience: '',
    subjects: [],
    bio: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const subjectsList = [
    'Mathematics','Physics','Chemistry','Biology',
    'English','Literature','History','Geography',
    'Computer Science','Economics','Art','Music'
  ];
  const [showModal, setShowModal] = useState(false);
const [secondsLeft, setSecondsLeft] = useState(3);

useEffect(() => {
  if (!showModal) return;
  const id = setInterval(() => setSecondsLeft(s => s - 1), 1000);
  return () => clearInterval(id);
}, [showModal]);

useEffect(() => {
  if (secondsLeft === 0) navigate('/teacher-dashboard');
}, [secondsLeft]);


  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    if (name === 'subjects') {
      setFormData(prev => {
        const updated = prev.subjects.includes(value)
          ? prev.subjects.filter(s => s !== value)
          : [...prev.subjects, value];
        return { ...prev, subjects: updated };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* client-side checks */
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');             // ⬅️ quick error
      return;
    }
     setSubmitting(true);
    // TODO: integrate API call here
    // console.log('Submitted:', formData);
    // navigate('/');
    try {
      /* ⬇️ replace with real POST call */
      // await fetch('/api/teachers', { method:'POST', body:JSON.stringify(formData) });
      await new Promise(r => setTimeout(r, 1200));       // demo latency

      /* show success toast & start timer */
      toast.success('Account created! Redirecting…', { autoClose: REDIRECT_DELAY });
      setTimeout(() => navigate('/job-List', {
        state: { welcome: true }                         // pass optional flag
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
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/combined')}
          className={`flex items-center space-x-2 mb-8 text-sm font-medium ${
            isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Form Container */}
        <div className={`rounded-2xl shadow-xl border p-8 ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Teacher Registration</h1>
            <p className="text-sm text-gray-400">Join our network of professional teachers</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="John"
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Doe"
                  className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="email@example.com"
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone"
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="City, State"
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            {/* Qualifications */}
            <div>
              <label className="block text-sm font-medium">Qualification</label>
              <input
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                placeholder="e.g., M.Sc. Physics, B.Ed"
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Years of Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="">Select experience</option>
                <option>0–1 years</option>
                <option>2–5 years</option>
                <option>6–10 years</option>
                <option>10+ years</option>
              </select>
            </div>

            {/* Subjects */}
            <div>
              <span className="block text-sm font-medium mb-2">Subjects You Teach</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {subjectsList.map(subj => (
                  <label key={subj} className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value={subj}
                      checked={formData.subjects.includes(subj)}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {subj}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us about yourself..."
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="••••••••"
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                placeholder="••••••••"
                className={`mt-1 w-full px-4 py-3 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                className="w-4 h-4"
              />
              <label className="text-sm">
                I agree to the{' '}
                <a href="#" className="text-emerald-500 underline">Terms of Service</a> and{' '}
                <a href="#" className="text-emerald-500 underline">Privacy Policy</a>
              </label>
            </div>

            <button
  type="submit"
  disabled={submitting}
  className={`w-full px-6 py-3 rounded-lg font-medium transition
    ${submitting
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:scale-105'}`}
>
  {submitting ? 'Creating…' : 'Create Account'}
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
  );
}
