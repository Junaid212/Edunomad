// src/components/AboutPage.jsx
import React from 'react';
import { GraduationCap, Users, Medal, Heart, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

export default function AboutUs({ isDarkMode,toggleDarkMode, isMobileMenuOpen, toggleMobileMenu }) {
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
    {/* <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen`}> */}
        
      {/* Hero */}
      <section className="py-16 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg">
          Connecting passionate educators with learning opportunities worldwide. We’re building the future of education, one connection at a time.
        </p>
      </section>
      
      {/* Mission */}
      {/* <section className={`p-12 ${
    isDarkMode ? '' : 'bg-gradient-to-r from-green-300 to-cyan-400 '
  }`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
          <p className="text-center mb-8">
            At Edunomad Connect, we believe that quality education should be accessible to everyone, everywhere. Our platform bridges the gap between talented educators and institutions, parents, and students who need their expertise. Whether you’re a seasoned teacher, an innovative online tutor, a forward-thinking institute, or a parent seeking the best education for your child, we’re here to make those meaningful connections happen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`p-6 rounded-lg text-center border-4 ${
    isDarkMode ? 'border-white' : 'border-green-400 '
  }`}>
              <Users className="mx-auto mb-4 w-8 h-8 text-emerald-500" />
              <h3 className="font-medium mb-2">Community</h3>
              <p>Building a global community of educators and learners who support each other’s growth.</p>
            </div>
            <div className={`p-6 rounded-lg text-center border-4 ${
    isDarkMode ? 'border-white' : 'border-green-400'
  }`}>
              <Medal className="mx-auto mb-4 w-8 h-8 text-yellow-500" />
              <h3 className="font-medium mb-2">Excellence</h3>
              <p>Maintaining the highest standards in matching top educators with qualified professionals.</p>
            </div>
            <div className={`p-6 rounded-lg text-center border-4 ${
    isDarkMode ? 'border-white' : 'border-green-400 '
  }`}>
              <Heart className="mx-auto mb-4 w-8 h-8 text-red-500" />
              <h3 className="font-medium mb-2">Passion</h3>
              <p>Fueled by our passion for education and belief in its power to transform lives.</p>
            </div>
            <div className={`p-6 rounded-lg text-center border-4 ${
    isDarkMode ? 'border-white' : 'border-green-400 '
  }`}>
              <CheckCircle className="mx-auto mb-4 w-8 h-8 text-cyan-500" />
              <h3 className="font-medium mb-2">Quality</h3>
              <p>Ensuring every connection made through our platform meets the highest quality standards.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Story */}
      <section className="py-16 px-4 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          {/* <h2 className="text-2xl font-semibold mb-4">Our Story</h2> */}
          <h3 className="font-normal mb-2">With 20 years of international teaching experience, our founder brings a deep insight and passion to the world of educational recruitment. From classrooms in the UK to schools across Egypt, Kenya, India, and Nigeria, this journey has shaped a mission: to connect exceptional educators with the opportunities they deserve.</h3>
          <p className="mb-4">
            This platform was created to bridge the gap between talented teachers and the schools that need them, and between skilled tutors and families seeking quality education. Based in Lagos, Nigeria, we are especially committed to empowering African educators—helping them sharpen their skills, gain global exposure, and compete confidently for international roles.
          </p>
          <p>
            We strongly believe that world-class teaching talent can come from anywhere. It’s time the world recognized that the most inspiring educators aren't always found in the traditional places—and we are here to prove it.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
            alt="Team collaborating"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Impact */}
      {/* <section className="py-16 bg-white dark:bg-green-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="text-3xl font-bold text-emerald-500">1,000+</span>
              <p className="mt-1">Registered Educators</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-yellow-500">500+</span>
              <p className="mt-1">Successful Placements</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-red-500">50+</span>
              <p className="mt-1">Partner Institutions</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-cyan-500">25+</span>
              <p className="mt-1">Countries Served</p>
            </div>
          </div>
        </div>
      </section> */}
      <Footer isDarkMode={isDarkMode} />
    </div>
    // </div>
  );
}
