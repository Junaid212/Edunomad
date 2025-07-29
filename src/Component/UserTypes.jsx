import React from 'react';
import { CheckCircle, ArrowRight, GraduationCap, BookOpen, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';  


function UserTypes({ isDarkMode }) {
  const navigate = useNavigate();
    // console.log(userTypes);

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

    
    
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Path
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Whether you're an educator, student, or institution, we have the perfect solution for you
          </p>
        </div> */}

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {userTypes?.map((userType, index) => (
            <div
              key={userType.id}
              className={`group rounded-2xl transition-transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 shadow-lg relative border`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${userType.color} text-white mb-6`}>
                {userType.icon}
              </div>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{userType.title}</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{userType.subtitle}</p>
              <p className={`text-sm my-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{userType.description}</p>

              <div className="space-y-2 mb-6">
                {userType.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* <Link
  to="/teacherReg"
  className={`w-full flex justify-center items-center space-x-2 py-3 rounded-lg font-medium text-white
    bg-gradient-to-r ${userType.color} ${userType.hoverColor}
    hover:scale-105 transform`}
>
  <span>Get Started</span>
  <ArrowRight className="w-4 h-4" />
</Link> */}
<button
                onClick={() => {
                  if (userType.id === 'teachers') {
                    navigate('/teacherreg');
                  } else if (userType.id === 'parents'){
                    navigate('/parent-register');
                  }else if (userType.id === 'tutors'){
                    navigate('/online-tutor');
                  } else {
                    navigate('/institute-register');
                  } 
                }}
                className={`w-full flex justify-center items-center space-x-2 py-3 rounded-lg font-medium text-white
                  bg-gradient-to-r ${userType.color} ${userType.hoverColor} hover:scale-105 transform`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserTypes;
