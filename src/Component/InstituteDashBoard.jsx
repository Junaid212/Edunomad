import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Plus,
  Users,
 Briefcase,
  Eye,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  ChevronRight,
  UserCheck
} from 'lucide-react';

export default function InstituteDashboard() {
  const navigate = useNavigate();
  const [instituteData, setInstituteData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('instituteData');
    if (data) {
      setInstituteData(JSON.parse(data));
    } else {
      navigate('/institute-dash');
    }
  }, [navigate]);

  if (!instituteData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> */}
        <p>no data</p>

      </div>
    );
  }

  const handleAddJobVacancy = () => navigate('/add-job-vacancy');
  const handleViewApplications = () => navigate('/job-applications');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-10 w-10 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Institute Dashboard
            </h1>
          </div>
          <p className="text-gray-600">
            Welcome to your institute management portal
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold flex items-center">
                  <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                  {instituteData.instituteName}
                </h2>
                <div className="mt-2 text-sm text-gray-700">
                  <span className="inline-block bg-gray-200 px-2 py-1 rounded mr-2">
                    {instituteData.instituteType}
                  </span>
                  <span>Established {instituteData.establishedYear}</span>
                </div>
              </div>
              <span className="px-3 py-1 border border-green-500 text-green-600 rounded-full">
                Active
              </span>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-blue-600 mr-2" />
                <strong>Students:</strong>
                <span className="ml-2">{instituteData.firstName}</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-blue-600 mr-2" />
                <strong>Email:</strong>
                <span className="ml-2 text-gray-600">{instituteData.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-blue-600 mr-2" />
                <strong>Phone:</strong>
                <span className="ml-2 text-gray-600">{instituteData.phone}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start text-sm">
                <MapPin className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                <div>
                  <strong>Address:</strong>
                  <p className="text-gray-600 mt-1">
                    {instituteData.city}, {instituteData.state}
                  </p>
                </div>
              </div>
              {instituteData.websiteUrl && (
                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 text-blue-600 mr-2" />
                  <strong>Website:</strong>
                  <a
                    href={instituteData.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    Visit Site
                  </a>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="text-sm">
                <strong>Contact Person:</strong>
                <p className="text-gray-600 mt-1">
                  {instituteData.contactPersonName}
                </p>
                <p className="text-xs text-gray-500">
                  {instituteData.contactPersonDesignation}
                </p>
              </div>
            </div>
          </div>
          {instituteData.description && (
            <div className="p-6 border-t">
              <h3 className="font-semibold mb-2">About Institute</h3>
              <p className="text-gray-600">{instituteData.description}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onClick={handleAddJobVacancy}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold">Add Job Vacancy</h4>
              <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Post new job opportunities for students and alumni
            </p>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Job Posting
            </button>
          </div>

          <div
            onClick={handleViewApplications}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                <Eye className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold">View Applications</h4>
              <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Review and manage job applications from candidates
            </p>
            <button variant="outline" className="w-full border-indigo-600 text-indigo-600">
              <Eye className="h-4 w-4 mr-2" />
              View All Applications
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">0</div>
            <div className="text-sm text-gray-600">Active Job Postings</div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-indigo-600">0</div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-gray-600">Successful Placements</div>
          </div>
        </div>
      </div>
    </div>
  );
}
