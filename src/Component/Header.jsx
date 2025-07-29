// src/components/Header.jsx
import React from 'react';
import { GraduationCap, Search, Briefcase, Info, MessageSquare, FileText, Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({ isDarkMode, toggleDarkMode }) {
  const navItems = [
    { label: 'Find Educators', icon: <Search className="w-4 h-4" />, to: '/educators' },
    { label: 'Jobs', icon: <Briefcase className="w-4 h-4" />, to: '/job-List' },
    { label: 'About', icon: <Info className="w-4 h-4" />, to: '/about' },
    { label: "Parents' Requests", icon: <FileText className="w-4 h-4" />, to: '/parent-request' },
    { label: 'Contact', icon: <MessageSquare className="w-4 h-4" />, to: '/contact-us' }
    
  ];

  return (
    <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center  w-12 justify-center">
        <img src='images/eduno/edonoLogo.png'/>
          {/* <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div> */}
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            Edunomad Connect
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.to}
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} flex items-center space-x-2 text-sm`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
            
          ))}
          
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full">
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>
          <Link
    to="/sign-in"
    className={`px-4 py-1.5 rounded text-sm font-medium border transition ${
      isDarkMode
        ? 'text-gray-200 border-gray-600 hover:bg-gray-700'
        : 'text-gray-700 border-gray-300 hover:bg-gray-50'
    }`}
  >
    Sign In
  </Link>
  <Link
    to="/register"
    className={`px-4 py-1.5 rounded text-sm font-semibold shadow ${
      isDarkMode
        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90'
        : 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white hover:opacity-90'
    }`}
  >
    Join Now
  </Link>
          <Menu className="md:hidden w-6 h-6" />
        </div>
       
      </div>
    </header>
);
}
