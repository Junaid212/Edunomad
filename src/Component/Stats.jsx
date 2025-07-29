import React from 'react';
import { Users, MapPin, GraduationCap, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '2,500+',
      label: 'Active Jobs',
      color: 'text-blue-600',
      // bgColor: 'bg-blue-50'
    },
    {
      icon: MapPin,
      value: '150+',
      label: 'Cities',
      color: 'text-green-600',
      // bgColor: 'bg-green-50'
    },
    {
      icon: GraduationCap,
      value: '800+',
      label: 'Schools',
      color: 'text-purple-600',
      // bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      color: 'text-orange-600',
      // bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="bg-[#1CE5D6] py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.bgColor} rounded-2xl  mb-1 inline-flex`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}