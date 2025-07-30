// src/components/Header.jsx
import React, { useState } from 'react';
import {
  GraduationCap,
  Search,
  Briefcase,
  Info,
  MessageSquare,
  FileText,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({ isDarkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Find Educators', icon: <Search className="w-5 h-5" />, to: '/educators' },
    { label: 'Jobs',         icon: <Briefcase className="w-5 h-5" />, to: '/job-List' },
    { label: 'About',        icon: <Info className="w-5 h-5" />, to: '/about' },
    { label: "Parents' Requests", icon: <FileText className="w-5 h-5" />, to: '/parent-request' },
    { label: 'Contact',      icon: <MessageSquare className="w-5 h-5" />, to: '/contact-us' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <img src="images/eduno/edonoLogo.png" alt="Edunomad Logo" className="object-contain" />
          </div>
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            Edunomad Connect
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.to}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Actions & Mobile Menu Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          <Link
            to="/sign-in"
            className={`hidden sm:inline-block px-4 py-1.5 text-sm font-medium rounded border transition ${
              isDarkMode
                ? 'text-gray-200 border-gray-600 hover:bg-gray-700'
                : 'text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className={`hidden sm:inline-block px-4 py-1.5 text-sm font-semibold rounded shadow transition ${
              isDarkMode
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90'
                : 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white hover:opacity-90'
            }`}
          >
            Join Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t border-gray-200`}>
          <nav className="flex flex-col space-y-1 px-4 py-3">
            {navItems.map(item => (
              <Link
                key={item.label}
                to={item.to}
                className={`flex items-center space-x-2 py-2 px-2 rounded text-base font-medium transition-colors ${
                  isDarkMode
                    ? 'text-gray-200 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="mt-2 border-t pt-2 flex space-x-2">
              <Link
                to="/sign-in"
                className={`flex-1 text-center px-4 py-2 rounded text-sm font-medium border transition ${
                  isDarkMode
                    ? 'text-gray-200 border-gray-600 hover:bg-gray-700'
                    : 'text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className={`flex-1 text-center px-4 py-2 rounded text-sm font-semibold shadow transition ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90'
                    : 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white hover:opacity-90'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
