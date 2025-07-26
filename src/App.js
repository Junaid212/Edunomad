// App.jsx
import React, { useState } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Header from './Component/Header';
import HeroSection from './Component/HeroSection';
import UserTypes from './Component/UserTypes';
import Footer from './Component/Footer';
import RegistrationPage from './Component/RegistrationPage';
import { GraduationCap, BookOpen, Building2, Users, Home } from 'lucide-react';
import TeacherRegistration from './Component/TeacherRegistration';
import InstituteRegistration from './Component/InstituteRegistration';
import ParentRegistration from './Component/ParentRegistration';
import EducatorsList from './Component/EducatorsList';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import JobApplicantsPage from './Component/ApplicantCard'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeacherDashboard from './Component/TeacherDashboard';
import SignIn from './Component/SignIn';
import MainPage from './Component/MainPage';
import HomeCombined from './Component/HomeCombined';
import JobList from './Component/JobList';



function HomePage({ isDarkMode, toggleDarkMode, isMobileMenuOpen, toggleMobileMenu }) {
  const navigate = useNavigate();

  const userTypes = [
    {
      id: 'teachers',
      title: 'Teachers',
      subtitle: 'Professional Educators',
      description: 'Join our global network...',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-emerald-400 to-cyan-400',
      hoverColor: 'hover:from-emerald-500 hover:to-cyan-500',
      features: ['Global Opportunities', 'Flexible Schedule', 'Competitive Pay']
    },
    {
      id: 'tutors',
      title: 'Online Tutors',
      subtitle: 'Digital Learning Experts',
      description: 'Start your online tutoring journey...',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-amber-400 to-orange-400',
      hoverColor: 'hover:from-amber-500 hover:to-orange-500',
      features: ['Work from Home', 'Set Your Rates', 'Grow Your Brand']
    },
    {
      id: 'institutes',
      title: 'Institutes',
      subtitle: 'Educational Organizations',
      description: 'Find qualified educators...',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-rose-400 to-pink-400',
      hoverColor: 'hover:from-rose-500 hover:to-pink-500',
      features: ['Verified Educators', 'Easy Hiring', 'Quality Assurance']
    },
    {
      id: 'parents',
      title: 'Parents',
      subtitle: 'Caring Families',
      description: 'Discover tutors for your children',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-400 to-indigo-400',
      hoverColor: 'hover:from-purple-500 hover:to-indigo-500',
      features: ['Trusted Tutors', 'Progress Tracking', 'Affordable Rates']
    }
  ];


//  const sampleEducators = [
//   {
//     id: 1,
//     image: 'https://example.com/images/michael-chen.jpg',
//     name: 'Sarah Johnson',
//     rating: 4.8,
//     qualifications: 'M.Sc. Physics, B.Ed',
//     location: 'New York, NY',
//     subjects: ['Mathematics', 'Physics']
//   },
//   {
//     id: 2,
//     image: 'https://example.com/images/michael-chen.jpg',
//     name: 'Michael Chen',
//     rating: 4.9,
//     qualifications: 'Ph.D. Chemistry',
//     location: 'San Francisco, CA',
//     subjects: ['Chemistry', 'Biology']
//   },
//   {
//     id: 3,
//     image: 'https://example.com/images/michael-chen.jpg',
//     name: 'Ayesha Patel',
//     rating: 4.7,
//     qualifications: 'M.A. English Literature, B.Ed',
//     location: 'Chicago, IL',
//     subjects: ['English', 'History']
//   },
//   {
//     id: 4,
//     image: 'https://example.com/images/michael-chen.jpg',
//     name: 'David Martinez',
//     rating: 4.6,
//     qualifications: 'B.Tech Computer Science',
//     location: 'Austin, TX',
//     subjects: ['Computer Science', 'Mathematics']
//   },
//   {
//     id: 5,
//     image: 'https://example.com/images/michael-chen.jpg',
//     name: 'Emily Nguyen',
//     rating: 4.85,
//     qualifications: 'M.Sc. Biology, M.Ed',
//     location: 'Seattle, WA',
//     subjects: ['Biology', 'Environmental Science']
//   },
//   {
//     id: 6,
//     image: 'https://example.com/images/michael-chen.jpg',
//     name: 'Ravi Mehra',
//     rating: 4.75,
//     qualifications: 'Ph.D. Mathematics',
//     location: 'Boston, MA',
//     subjects: ['Mathematics', 'Statistics']
//   }
// ];



  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onJoinNowClick={() => navigate('/register')}
      />
      <HeroSection />
      <UserTypes isDarkMode={isDarkMode} userTypes={userTypes} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
    <Routes>
      {/* <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
      <Route path="/" element={<MainPage/>}/>
      <Route
        path="/register"
        element={
          <RegistrationPage
            isDarkMode={isDarkMode}
            onBack={() => window.history.back()}
          />
      
        }
      />
      <Route path='/combined' element={<HomeCombined/>}/>
       <Route
    path="/teacherReg"
    element={<TeacherRegistration isDarkMode={isDarkMode} />}
  />
  <Route path="/institute-register" element={<InstituteRegistration isDarkMode={isDarkMode} />} />
  <Route path="/parent-register" element={<ParentRegistration isDarkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)} />} />
            
  {/* <Route path="/educator-list" element={<EducatorsList isDarkMode={false}  />} /> */}
   <Route path="/educators" element={<EducatorsList isDarkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)} />} />
            <Route
          path="/applicant"
          element={<JobApplicantsPage isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)} />}
        />

            <Route
          path="/about"
          element={<AboutUs isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)} />}
        />
            <Route
          path="/teacher-dashboard"
          element={<TeacherDashboard isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)} />}
        />
        <Route
          path="/contact-us"
          element={
            <ContactUs
              isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
            />}/>
        <Route
          path="/sign"
          element={
            <SignIn
              isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
            />}/>
        <Route
          path="/job-list"
          element={
            <JobList
              isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
            />}/>
        
  {/* <Route path="/educator-list" element={<EducatorsList isDarkMode={isDarkMode} sampleEducators={sampleEducators} />}
        /> */}
   
    </Routes>
    {/* <Footer isDarkMode={isDarkMode} /> */}
     <ToastContainer theme={isDarkMode ? 'dark' : 'light'} newestOnTop />
    </BrowserRouter>
    
  );
}

export default App;
