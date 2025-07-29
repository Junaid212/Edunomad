import React from 'react';
import { GraduationCap, Star, CheckCircle, Users } from 'lucide-react';
import UserTypes from './UserTypes';

function HeroSection() {
  return (
    <section className="relative overflow-hidden h-full w-auto">
  {/* Background Gradients */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#00E5D5]  to-[#DAD024] opacity-90" />
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-10" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center flex flex-col justify-center h-full">
    <div className="mb-0">
      <div className="inline-flex items-center justify-center w-36 h-36 mb-2 rounded-full mt-5">
        <img src='images/eduno/edonoLogo.png'/>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-1">Edunomad Connect</h1>
      <p className="text-sm sm:text-base text-white/90 font-light max-w-2xl mx-auto">Connecting Education Professionals Worldwide</p>
    </div>

    {/* Stats */}
    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 mt-2 text-white/90 text-xs">
      <div className="flex items-center space-x-1">
        <Star className="w-4 h-4 text-yellow-400" />
        <span className="font-medium">50K+ Active Users</span>
      </div>
      <div className="flex items-center space-x-1">
        <CheckCircle className="w-4 h-4 text-green-400" />
        <span className="font-medium">Verified Educators</span>
      </div>
      <div className="flex items-center space-x-1">
        <Users className="w-4 h-4 text-blue-400" />
        <span className="font-medium">Global Community</span>
      </div>
    </div>
  </div>
  <UserTypes/>
</section>

  );
}

export default HeroSection;
