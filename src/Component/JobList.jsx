import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobHeader from './JobHeader';
import JobPostCard from './JobPostCard';
import Header from './Header';
import Footer from './Footer';

const jobListings = [
  {
    id: '1',
    title: 'Mathematics Teacher',
    school: 'Green Valley International School',
    location: 'Bangalore, Karnataka',
    type: 'Full-Time',
    postedDate: '20 July 2025',
    isLive: true,
    salary: '₹35,000 - ₹45,000/month',
    qualification: 'M.Sc Mathematics, B.Ed preferred',
    experience: 'Minimum 2 years teaching secondary level',
    applyBefore: '15 August 2025',
    description:
      'Responsible for planning and delivering math lessons, assessing students, and participating in extracurricular activities.'
  },
  {
    id: '2',
    title: 'Physics Teacher',
    school: 'Delhi Public School',
    location: 'Mumbai, Maharashtra',
    type: 'Full-Time',
    postedDate: '18 July 2025',
    isLive: true,
    salary: '₹40,000 - ₹55,000/month',
    qualification: 'M.Sc Physics, B.Ed required',
    experience: 'Minimum 3 years experience in CBSE curriculum',
    applyBefore: '10 August 2025',
    description:
      'Seeking an experienced Physics teacher to deliver engaging lessons for grades 9-12, conduct lab experiments, and mentor students.'
  },
  {
    id: '3',
    title: 'English Literature Teacher',
    school: "St. Xavier's High School",
    location: 'Chennai, Tamil Nadu',
    type: 'Part-Time',
    postedDate: '15 July 2025',
    isLive: false,
    salary: '₹25,000 - ₹35,000/month',
    qualification: 'MA English Literature, B.Ed preferred',
    experience: 'Fresh graduates welcome, training provided',
    applyBefore: '5 August 2025',
    description:
      'Looking for a passionate English teacher to inspire students in literature appreciation and language skills development.'
  }
];

export default function App({ isDarkMode, toggleDarkMode, isMobileMenuOpen, toggleMobileMenu }) {
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

      <JobHeader />

      {/* Job Listings Section */}
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
          {jobListings.map((job) => (
            <JobPostCard key={job.id} {...job} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-[#DAD024] text-[#DAD024] font-medium rounded-lg hover:bg-[#DAD024] hover:text-white transition duration-200 ease-in-out transform hover:scale-105">
            Load More Jobs
          </button>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
