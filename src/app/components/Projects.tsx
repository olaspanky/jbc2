'use client';

import React from 'react';
import { Calendar, GraduationCap, Droplet, Heart, Laptop, TrendingUp, Users, BookOpen } from 'lucide-react';

export default function ProjectsActivitiesPage() {
  const projects = [
    {
      icon: Calendar,
      title: "Sponsorship of Annual Ibadan Week Conference",
      description: "Supporting and promoting Ibadan's cultural heritage through annual conferences",
      color: "from-[#0d4dcc] to-[#0d4dcc]"
    },
    {
      icon: BookOpen,
      title: "Sponsorship of the Adejoke Adelabu Foundation and Book Launch",
      description: "Promoting literacy and preserving Ibadan's literary heritage",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Laptop,
      title: "Establishment of the JBC Computer Centre",
      description: "Providing digital literacy and computer skills training to Ibadan residents",
      color: "from-[#0d4dcc] to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Establishment of a Scholarship Trust Fund",
      description: "Award of scholarships for the educational development of needy Ibadan Sons and Daughters",
      color: "from-blue-600 to-[#0d4dcc]"
    },
    {
      icon: Droplet,
      title: "Sinking of Water Boreholes in Ibadan",
      description: "Providing access to clean water across various communities in Ibadan",
      color: "from-[#0d4dcc] to-[#0d4dcc]"
    },
    {
      icon: Heart,
      title: "Regular Support to CCII",
      description: "Both moral and financial support to the CCII and notable Ibadan programmes and events",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Laptop,
      title: "Donation of Computers to Secondary Schools",
      description: "Equipping various secondary schools in Ibadan with modern computer facilities",
      color: "from-[#0d4dcc] to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Establishment of Empowerment Program",
      description: "Supporting Artisans and small scale business owners with tools and capital",
      color: "from-blue-600 to-[#0d4dcc]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-[#1466ff] text-[#0d4dcc] rounded-full text-sm font-semibold">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects and Activities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Translating vision into action through impactful developmental projects
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg mb-16">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Aside from the business and social networking amongst its members, the club has lived up to its 
                objective through successful execution of various developmental projects within Ibadan land.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Some of Our Key Projects
            </h2>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1466ff] group"
                >
                  <div className={`bg-gradient-to-r ${project.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0d4dcc] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#0d4dcc] to-emerald-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="text-center text-white">
                <Users size={56} className="mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Making a Difference</h3>
                <p className="text-xl leading-relaxed mb-4">
                  Through these projects and many more, JBC continues to make tangible improvements to the lives 
                  of Ibadan residents and the overall development of our beloved city.
                </p>
                <p className="text-[#1466ff] text-lg">
                  Our commitment to Ibadan's progress remains unwavering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Learn More About Our Initiatives</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/scholarship"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#1466ff] hover:border-emerald-300 group"
              >
                <GraduationCap size={40} className="text-[#0d4dcc] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0d4dcc]">JBC Scholarship Scheme</h4>
                <p className="text-gray-600">Supporting education for deserving students →</p>
              </a>
              <a
                href="/empowerment"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#1466ff] hover:border-emerald-300 group"
              >
                <TrendingUp size={40} className="text-[#0d4dcc] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0d4dcc]">JBC Empowerment Scheme</h4>
                <p className="text-gray-600">Empowering traders and artisans →</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}