import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  BookOpen,
 Pin,
  Clock,
  FileText,
  Send,
  CheckCircle,
  MapPin
} from 'lucide-react';

export default function SubmitRequest() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phoneNumber: '',
    studentGrade: '',
    subjects: '',
    curriculum: '',
    preferredMode: '',
    location: '',
    preferredTiming: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        parentName: '',
        email: '',
        phoneNumber: '',
        studentGrade: '',
        subjects: '',
        curriculum: '',
        preferredMode: '',
        location: '',
        preferredTiming: '',
        additionalNotes: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Request Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for submitting your tutoring request. We'll connect you with qualified teachers soon.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 font-medium">What happens next?</p>
            <ul className="text-green-700 text-sm mt-2 space-y-1">
              <li>• Teachers will review your request</li>
              <li>• You'll receive responses within 24 hours</li>
              <li>• Choose the best teacher for your child</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-white px-8 py-6">
        <div className="flex items-center">
          <User className="w-6 h-6 text-blck mr-3" />
          <div>
            <h2 className="text-xl font-bold text-black">
              Submit Your Tutoring Request
            </h2>
            <p className="text-black mt-1">
              Fill out the form below and we'll help you find the perfect teacher for your child.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8">
        <div className="space-y-8">
          {/* Personal Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Parent Name */}
              <div className="space-y-2">
                <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700">
                  Parent Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                  Location (City, Area) *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Mumbai, Andheri"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Academic Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-4 h-4 text-green-600" />
              </div>
              Academic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Grade */}
              <div className="space-y-2">
                <label htmlFor="studentGrade" className="block text-sm font-semibold text-gray-700">
                  Student's Grade/Class *
                </label>
                <select
                  id="studentGrade"
                  name="studentGrade"
                  required
                  value={formData.studentGrade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                >
                  <option value="">Select grade</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i+1} value={`Class ${i+1}`}>Class {i+1}</option>
                  ))}
                </select>
              </div>

              {/* Curriculum */}
              <div className="space-y-2">
                <label htmlFor="curriculum" className="block text-sm font-semibold text-gray-700">
                  Curriculum *
                </label>
                <select
                  id="curriculum"
                  name="curriculum"
                  required
                  value={formData.curriculum}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                >
                  <option value="">Select curriculum</option>
                  {['CBSE','ICSE','IB','State Board','IGCSE'].map(cur => (
                    <option key={cur} value={cur}>{cur}</option>
                  ))}
                </select>
              </div>

              {/* Subjects */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="subjects" className="block text-sm font-semibold text-gray-700">
                  Subjects Needed *
                </label>
                <input
                  type="text"
                  id="subjects"
                  name="subjects"
                  required
                  value={formData.subjects}
                  onChange={handleInputChange}
                  placeholder="e.g., Mathematics, Physics, Chemistry"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <Clock className="w-4 h-4 text-purple-600" />
              </div>
              Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mode */}
              <div className="space-y-2">
                <label htmlFor="preferredMode" className="block text-sm font-semibold text-gray-700">
                  Preferred Mode *
                </label>
                <select
                  id="preferredMode"
                  name="preferredMode"
                  required
                  value={formData.preferredMode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                >
                  <option value="">Select mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Both">Both Online & Offline</option>
                </select>
              </div>

              {/* Timing */}
              <div className="space-y-2">
                <label htmlFor="preferredTiming" className="block text-sm font-semibold text-gray-700">
                  Preferred Timing & Days *
                </label>
                <input
                  type="text"
                  id="preferredTiming"
                  name="preferredTiming"
                  required
                  value={formData.preferredTiming}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekdays 6-8 PM, Weekends 10-12 PM"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <FileText className="w-4 h-4 text-orange-600" />
              </div>
              Additional Information
            </h3>
            <div className="space-y-2">
              <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={4}
                value={formData.additionalNotes}
                onChange={handleInputChange}
                placeholder="Any specific requirements or additional information..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white resize-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Submitting Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Request</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
