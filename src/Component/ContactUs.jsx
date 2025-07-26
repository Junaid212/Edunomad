// src/components/ContactPage.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function ContactUs({ isDarkMode, toggleDarkMode, isMobileMenuOpen, toggleMobileMenu }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  const bgClass = isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const inputBg = isDarkMode
    ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100'
    : 'bg-white border-gray-300 placeholder-gray-500 text-gray-900';

  const navigate = useNavigate();

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onJoinNowClick={() => navigate('/register')}
      />
    <div className={`${bgClass} min-h-screen py-16 px-4 sm:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-400 text-lg">
            We’d love to hear from you. Fill out the form and we’ll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div className={`p-8 rounded-3xl shadow-xl ${cardBg}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl px-4 py-3 border ${inputBg} focus:ring-2 focus:ring-emerald-400 transition`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl px-4 py-3 border ${inputBg} focus:ring-2 focus:ring-emerald-400 transition`}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-xl px-4 py-3 border ${inputBg} focus:ring-2 focus:ring-emerald-400 transition`}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-xl px-4 py-3 border ${inputBg} focus:ring-2 focus:ring-emerald-400 transition`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-xl px-4 py-3 border ${inputBg} focus:ring-2 focus:ring-emerald-400 transition`}
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition"
              >
                <Send className="w-5 h-5 mr-2" /> Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6 text-emerald-500 mt-1" />,
                title: 'Email Us',
                content: (
                  <a href="mailto:hello@edunomadconnect.com" className="text-emerald-500 hover:underline">
                    hello@edunomadconnect.com
                  </a>
                )
              },
              {
                icon: <Phone className="w-6 h-6 text-emerald-500 mt-1" />,
                title: 'Call Us',
                content: (
                  <>
                    <a href="tel:+15551234567" className="text-emerald-500 hover:underline">
                      +1 (555) 123-4567
                    </a>
                    <p className="text-sm text-gray-400">Mon–Fri: 8 am–5 pm</p>
                  </>
                )
              },
              {
                icon: <MapPin className="w-6 h-6 text-emerald-500 mt-1" />,
                title: 'Visit Us',
                content: (
                  <address className="not-italic">
                    123 Education Street<br />
                    Learning District<br />
                    Knowledge City, KC 12345
                  </address>
                )
              },
              {
                icon: <Clock className="w-6 h-6 text-emerald-500 mt-1" />,
                title: 'Office Hours',
                content: (
                  <>
                    <p>Mon–Fri: 8 am–5 pm</p>
                    <p>Sat: 9 am–1 pm</p>
                    <p>Sun: Closed</p>
                  </>
                )
              }
            ].map(({ icon, title, content }, idx) => (
              <div key={idx} className={`p-6 rounded-2xl shadow-md flex items-start gap-4 ${cardBg} hover:shadow-lg transition`}>
                {icon}
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <div className="mt-1 text-sm">{content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
