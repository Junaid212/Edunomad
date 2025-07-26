import React from 'react'
import HeroSection from './HeroSection'
import UserTypes from './UserTypes'
import { BookOpen, Building2, GraduationCap, Users } from 'lucide-react';
import Footer from './Footer';

function HomeCombined() {
//      const userTypes = [
//     {
//       id: 'teachers',
//       title: 'Teachers',
//       subtitle: 'Professional Educators',
//       description: 'Join our global network...',
//       icon: <GraduationCap className="w-8 h-8" />,
//       color: 'from-emerald-400 to-cyan-400',
//       hoverColor: 'hover:from-emerald-500 hover:to-cyan-500',
//       features: ['Global Opportunities', 'Flexible Schedule', 'Competitive Pay']
//     },
//     {
//       id: 'tutors',
//       title: 'Online Tutors',
//       subtitle: 'Digital Learning Experts',
//       description: 'Start your online tutoring journey...',
//       icon: <BookOpen className="w-8 h-8" />,
//       color: 'from-amber-400 to-orange-400',
//       hoverColor: 'hover:from-amber-500 hover:to-orange-500',
//       features: ['Work from Home', 'Set Your Rates', 'Grow Your Brand']
//     },
//     {
//       id: 'institutes',
//       title: 'Institutes',
//       subtitle: 'Educational Organizations',
//       description: 'Find qualified educators...',
//       icon: <Building2 className="w-8 h-8" />,
//       color: 'from-rose-400 to-pink-400',
//       hoverColor: 'hover:from-rose-500 hover:to-pink-500',
//       features: ['Verified Educators', 'Easy Hiring', 'Quality Assurance']
//     },
//     {
//       id: 'parents',
//       title: 'Parents',
//       subtitle: 'Caring Families',
//       description: 'Discover tutors for your children',
//       icon: <Users className="w-8 h-8" />,
//       color: 'from-purple-400 to-indigo-400',
//       hoverColor: 'hover:from-purple-500 hover:to-indigo-500',
//       features: ['Trusted Tutors', 'Progress Tracking', 'Affordable Rates']
//     }
//   ];

  return (
    <div>
      <HeroSection/>
      <UserTypes />
      <Footer/>
    </div>
  )
}

export default HomeCombined
