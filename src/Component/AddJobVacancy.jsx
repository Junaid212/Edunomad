import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap
} from 'lucide-react';

export default function AddJobVacancy() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    department: '',
    jobType: '',
    experienceLevel: '',
    location: '',
    workMode: '',
    salaryMin: '',
    salaryMax: '',
    currency: 'INR',
    jobDescription: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    applicationDeadline: '',
    positions: '',
    skills: '',
    qualifications: '',
    isActive: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(r => setTimeout(r, 2000));
    const existing = JSON.parse(localStorage.getItem('jobVacancies') || '[]');
    existing.push({ id: Date.now(), ...formData, createdAt: new Date().toISOString(), applicationsCount: 0 });
    localStorage.setItem('jobVacancies', JSON.stringify(existing));

    alert('Job Vacancy Posted!');
    setIsLoading(false);
    navigate('/institute-dash');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/institute-dash')}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mr-4"
          >
            <ArrowLeft /> Back to Dashboard
          </button>
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Add Job Vacancy
            </h1>
            <p className="text-gray-500">Create a new job posting for your institute</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Card Header */}
          <div className="p-6 border-b">
            <div className="flex items-center gap-2 text-2xl">
              <Briefcase /> Job Details
            </div>
            <p className="text-gray-600 mt-2">
              Fill in the complete job information to attract the right candidates
            </p>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Basic Information</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                      Job Title *
                    </label>
                    <input
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Assistant Professor"
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                      Department *
                    </label>
                    <input
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Computer Science"
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">
                      Job Type *
                    </label>
                    <select
                      id="jobType"
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    >
                      <option value="">Select job type</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                      <option value="temporary">Temporary</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">
                      Experience Level *
                    </label>
                    <select
                      id="experienceLevel"
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    >
                      <option value="">Select experience</option>
                      <option value="entry-level">Entry Level (0-2 yrs)</option>
                      <option value="mid-level">Mid Level (3-5 yrs)</option>
                      <option value="senior-level">Senior Level (6-10 yrs)</option>
                      <option value="expert-level">Expert Level (10+ yrs)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="positions" className="block text-sm font-medium text-gray-700">
                      Positions *
                    </label>
                    <input
                      id="positions"
                      name="positions"
                      type="number"
                      min="1"
                      value={formData.positions}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., 2"
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700">
                      Application Deadline *
                    </label>
                    <input
                      id="applicationDeadline"
                      name="applicationDeadline"
                      type="date"
                      value={formData.applicationDeadline}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                </div>
              </section>

              {/* Location & Work Mode */}
              <section className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-600">
                  <MapPin /> Location & Work Mode
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      Job Location *
                    </label>
                    <input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Mumbai"
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="workMode" className="block text-sm font-medium text-gray-700">
                      Work Mode *
                    </label>
                    <select
                      id="workMode"
                      name="workMode"
                      value={formData.workMode}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    >
                      <option value="">Select work mode</option>
                      <option value="on-site">On-site</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Salary */}
              <section className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-600">
                  <DollarSign /> Salary Information
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <label htmlFor="salaryMin" className="block text-sm font-medium text-gray-700">
                      Min Salary
                    </label>
                    <input
                      id="salaryMin"
                      name="salaryMin"
                      type="number"
                      value={formData.salaryMin}
                      onChange={handleInputChange}
                      placeholder="300000"
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="salaryMax" className="block text-sm font-medium text-gray-700">
                      Max Salary
                    </label>
                    <input
                      id="salaryMax"
                      name="salaryMax"
                      type="number"
                      value={formData.salaryMax}
                      onChange={handleInputChange}
                      placeholder="500000"
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    >
                      <option value="INR">INR (₹)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Descriptions */}
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Job Description</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
                      Description *
                    </label>
                    <textarea
                      id="jobDescription"
                      name="jobDescription"
                      value={formData.jobDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700">
                      Responsibilities *
                    </label>
                    <textarea
                      id="responsibilities"
                      name="responsibilities"
                      value={formData.responsibilities}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                      Requirements *
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">
                      Qualifications *
                    </label>
                    <input
                      id="qualifications"
                      name="qualifications"
                      value={formData.qualifications}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                      Skills
                    </label>
                    <input
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">
                      Benefits
                    </label>
                    <textarea
                      id="benefits"
                      name="benefits"
                      value={formData.benefits}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 w-full border-gray-300 rounded-xl px-4 py-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                </div>
              </section>

              {/* Active Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 p-4 rounded">
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="isActive" className="text-sm text-gray-700">
                  Make this job vacancy active immediately
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? 'Posting Job…' : <><Briefcase className="h-5 w-5" /> Post Job Vacancy</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
