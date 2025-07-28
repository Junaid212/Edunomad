import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Users,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

export default function JobApplications() {
  const navigate = useNavigate();
  const [jobVacancies, setJobVacancies] = useState([]);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState('all');
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('jobVacancies') || '[]');
    setJobVacancies(jobs);

    const mockApps = [
      {
        id: 1,
        jobId: jobs[0]?.id || 1,
        candidateName: 'Dr. Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 9876543210',
        experience: '5 years',
        appliedDate: '2024-01-15',
        status: 'pending'
      },
      {
        id: 2,
        jobId: jobs[0]?.id || 1,
        candidateName: 'Rajesh Kumar',
        email: 'rajesh.kumar@email.com',
        phone: '+91 9876543211',
        experience: '3 years',
        appliedDate: '2024-01-14',
        status: 'reviewed'
      },
      {
        id: 3,
        jobId: jobs[0]?.id || 1,
        candidateName: 'Anita Desai',
        email: 'anita.desai@email.com',
        phone: '+91 9876543212',
        experience: '7 years',
        appliedDate: '2024-01-13',
        status: 'shortlisted'
      }
    ];
    setApplications(mockApps);
  }, []);

  const filtered = applications.filter(app => {
    const term = searchTerm.toLowerCase();
    const matchText =
      app.candidateName.toLowerCase().includes(term) ||
      app.email.toLowerCase().includes(term);
    const matchJob =
      selectedJob === 'all' || app.jobId === selectedJob;
    const matchTab =
      activeTab === 'all' || app.status === activeTab;
    return matchText && matchJob && matchTab;
  });

  const getStatusColor = status => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'shortlisted':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = status => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'reviewed':
        return <Eye className="h-4 w-4" />;
      case 'shortlisted':
        return <CheckCircle className="h-4 w-4" />;
      case 'rejected':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const updateAppStatus = (id, status) =>
    setApplications(apps =>
      apps.map(a => (a.id === id ? { ...a, status } : a))
    );

  if (jobVacancies.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-blue-600 mb-6"
          >
            <ArrowLeft /> Back to Dashboard
          </button>
          <div className="text-center bg-white p-8 shadow rounded">
            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Job Vacancies Found</h2>
            <p className="text-gray-500 mb-6">Post a job vacancy first to view applications.</p>
            <button
              onClick={() => navigate('/add-job-vacancy')}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              <Briefcase className="inline mr-2" /> Post Your First Job
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-blue-600 mr-4"
          >
            <ArrowLeft /> Back to Dashboard
          </button>
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Job Applications
            </h1>
            <p className="text-gray-500">Review and manage candidate applications</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10 w-full border rounded-md py-2 text-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedJob('all')}
                className={`px-4 py-2 border rounded ${selectedJob === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
              >
                All Jobs
              </button>
              {jobVacancies.map(job => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job.id)}
                  className={`px-4 py-2 border rounded ${selectedJob === job.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                >
                  {job.jobTitle}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          {['all', 'pending', 'reviewed', 'shortlisted', 'rejected'].map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded ${
                activeTab === key ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} (
              {filtered.filter(a => key === 'all' || a.status === key).length})
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered
            .filter(app => activeTab === 'all' || app.status === activeTab)
            .map(app => {
              const job = jobVacancies.find(j => j.id === app.jobId);
              return (
                <div key={app.id} className="bg-white p-6 rounded shadow">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">{app.candidateName}</h2>
                      <div className="text-sm text-gray-500 flex gap-4">
                        <div className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job?.jobTitle}</div>
                        <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(app.appliedDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-1 text-sm border px-2 py-1 rounded ${getStatusColor(app.status)}`}>
                      {getStatusIcon(app.status)} {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600" /> {app.email}</div>
                      <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-600" /> {app.phone}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2"><Users className="h-4 w-4 text-blue-600" /> {app.experience}</div>
                      <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-blue-600" /> {job?.department}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => updateAppStatus(app.id, 'reviewed')}
                      disabled={app.status === 'reviewed'}
                      className="flex items-center gap-1 border px-3 py-1 rounded text-sm"
                    >
                      <Eye className="h-4 w-4" /> Mark Reviewed
                    </button>
                    <button
                      onClick={() => updateAppStatus(app.id, 'shortlisted')}
                      disabled={app.status === 'shortlisted'}
                      className="flex items-center gap-1 border border-green-300 text-green-700 px-3 py-1 rounded text-sm"
                    >
                      <CheckCircle className="h-4 w-4" /> Shortlist
                    </button>
                    <button
                      onClick={() => updateAppStatus(app.id, 'rejected')}
                      disabled={app.status === 'rejected'}
                      className="flex items-center gap-1 border border-red-300 text-red-700 px-3 py-1 rounded text-sm"
                    >
                      <XCircle className="h-4 w-4" /> Reject
                    </button>
                    <button className="flex items-center gap-1 border px-3 py-1 rounded text-sm">
                      <Download className="h-4 w-4" /> Download Resume
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
