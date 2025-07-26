import React from 'react';
import { GraduationCap } from 'lucide-react';
import JobHeader from './JobHeader';
import Stats from './Stats';
import JobPostCard from './JobPostCard';
import Header from './Header';


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
    description: 'Responsible for planning and delivering math lessons, assessing students, and participating in extracurricular activities.'
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
    description: 'Seeking an experienced Physics teacher to deliver engaging lessons for grades 9-12, conduct lab experiments, and mentor students.'
  },
  {
    id: '3',
    title: 'English Literature Teacher',
    school: 'St. Xavier\'s High School',
    location: 'Chennai, Tamil Nadu',
    type: 'Part-Time',
    postedDate: '15 July 2025',
    isLive: false,
    salary: '₹25,000 - ₹35,000/month',
    qualification: 'MA English Literature, B.Ed preferred',
    experience: 'Fresh graduates welcome, training provided',
    applyBefore: '5 August 2025',
    description: 'Looking for a passionate English teacher to inspire students in literature appreciation and language skills development.'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      <JobHeader />
      <Stats/>
      
      {/* Job Listings */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Latest Job Openings
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Explore our curated list of teaching positions from top schools across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  m-10">
          {jobListings.map((job) => (
            <JobPostCard key={job.id} {...job} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105">
            Load More Jobs
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-blue-600 rounded-full p-2">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">TeachingJobs</span>
          </div>
          <p className="text-gray-400">
            Connecting passionate educators with amazing opportunities
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;