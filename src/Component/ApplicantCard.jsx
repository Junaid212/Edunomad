import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const applicants = [
  {
    name: "Sarah Johnson",
    rating: 4.8,
    description:
      "Passionate mathematics and physics teacher with 5 years of experience in helping students excel in STEM subjects.",
    details: [
      "M.Sc. Physics, Rutgers",
      "New York, NY",
      "Experience: 5 years",
      "Availability: Full-time",
    ],
    subjects: ["Mathematics", "Physics"],
  },
  {
    name: "Michael Chen",
    rating: 4.7,
    description:
      "Experienced chemistry educator specializing in organic chemistry and laboratory instruction.",
    details: [
      "Ph.D. Chemistry",
      "San Francisco, CA",
      "Experience: 7 years",
      "Availability: Part-time",
    ],
    subjects: ["Chemistry", "Biology"],
  },
  {
    name: "Emily Rodriguez",
    rating: 4.9,
    description:
      "Creative writing and literature specialist with expertise in modern and classical works.",
    details: [
      "M.A. English Literature",
      "Austin, TX",
      "Experience: 6 years",
      "Availability: Full-time",
    ],
    subjects: ["English", "Literature"],
  },
  {
    name: "David Kim",
    rating: 4.8,
    description:
      "Software engineer turned educator, specializing in programming and advanced mathematics.",
    details: [
      "M.Sc. Computer Science, MIT",
      "Seattle, WA",
      "Experience: 8 years",
      "Availability: Part-time",
    ],
    subjects: ["Mathematics", "Computer Science"],
  },
  {
    name: "Lisa Thompson",
    rating: 4.7,
    description:
      "History enthusiast with a focus on American history and social studies curriculum development.",
    details: [
      "M.A. History, UCLA",
      "Boston, MA",
      "Experience: 10 years",
      "Availability: Full-time",
    ],
    subjects: ["History", "Social Science"],
  },
  {
    name: "James Wilson",
    rating: 4.9,
    description:
      "Lifelong physics educator with research background in classical mechanics.",
    details: [
      "Ph.D. Physics",
      "Chicago, IL",
      "Experience: 12 years",
      "Availability: Full-time",
    ],
    subjects: ["Physics", "Mathematics","English"],
  },
];


function ApplicantCard({ applicant }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
        <h3 className="text-lg font-semibold">{applicant.name}</h3>
        <div className="flex items-center text-yellow-500 text-sm mb-2">
          <svg className="w-4 h-4 inline text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0L13.6 7.05l4.916.362c.969.071 1.371 1.24.588 1.81l-3.799 2.838 1.179 4.813c.232.947-.755 1.688-1.54 1.106L10 15.347l-4.04 2.637c-.784.582-1.771-.16-1.54-1.106l1.18-4.813-3.8-2.838c-.782-.57-.38-1.739.588-1.81L6.4 7.05l2.649-4.123z"/>
          </svg>
          {applicant.rating}
        </div>
        <p className="text-gray-700 text-sm mb-3">{applicant.description}</p>
        <ul className="mb-3 text-xs text-gray-600 space-y-1">
          {applicant.details.map((d, i) => (
            <li key={i}>• {d}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {applicant.subjects.map((subject, i) => (
          <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{subject}</span>
        ))}
      </div>
      <button className="mt-5 bg-cyan-400 text-white py-2 rounded hover:bg-cyan-500 transition text-sm font-semibold">
        View Full Profile
      </button>
    </div>
  );
}

export default function JobApplicantsPage({isDarkMode, toggleDarkMode, isMobileMenuOpen, toggleMobileMenu}) {
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
    <div className="bg-gradient-to-b from-green-200 to-white min-h-screen pb-16">
      <header className="bg-gradient-to-r from-green-400 to-green-200 py-14 text-center">
        <h1 className="text-5xl font-bold text-white mb-2">Job Applicants</h1>
        <p className="text-white">Browse through qualified educators ready to join your team.</p>
      </header>
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by name, subject, or keyword..."
            className="w-full md:w-2/3 border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-200"
          />
          <select className="w-full md:w-1/6 border rounded px-3 py-2 mt-2 md:mt-0">
            <option>Subject</option>
          </select>
          <select className="w-full md:w-1/6 border rounded px-3 py-2 mt-2 md:mt-0">
            <option>Location</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
          <span className="font-semibold mb-2 md:mb-0">Available Applicants ({applicants.length})</span>
          <div className="space-x-1">
            <button className="bg-white border px-3 py-1 rounded text-sm font-medium">Sort by Rating</button>
            <button className="bg-white border px-3 py-1 rounded text-sm font-medium">Sort by Experience</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applicants.map((app, i) => (
            <ApplicantCard key={i} applicant={app} />
          ))}
        </div>
      </div>
    </div>
    <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
