import React from 'react'
import HeroSection from './HeroSection'
import UserTypes from './UserTypes'
import { BookOpen, Building2, GraduationCap, Users } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import Stats from './Stats';
import SearchSection from './SearchSection';
import FeaturedEducators from './FeaturedEducators';
import { useNavigate } from 'react-router-dom';

function HomeCombined({ isDarkMode,toggleDarkMode, isMobileMenuOpen, toggleMobileMenu }) {
  const navigate = useNavigate()

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
              <Header
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                onJoinNowClick={() => navigate('/register')}
              />
      <HeroSection/>
      <SearchSection/>
      <FeaturedEducators/>
      {/* <UserTypes /> */}
      <Stats/>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default HomeCombined
