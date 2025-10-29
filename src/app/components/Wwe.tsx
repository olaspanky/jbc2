'use client';

import React from 'react';
import { Target, Eye, Users, Heart, CheckCircle } from 'lucide-react';

export default function WhoWeArePage() {
  const coreValues = [
    "Public Spiritedness",
    "Passion for Ibadan land",
    "Service-mindedness",
    "Integrity",
    "Discipline",
    "Team Spirit"
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our purpose, vision, and values that guide our service to Ibadan
            </p>
          </div>
        </div>
      </section>

      {/* Aim Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="bg-white p-4 rounded-xl shadow-md flex-shrink-0">
                <Target size={40} className="text-[#0d4dcc]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aim</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To network with like-minded professionals of Ibadan extraction for the purpose of mutual economic 
                  development and impacting public policy discourse for the benefit of our people in Ibadan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6 bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-[#1466ff]">
              <div className="bg-gradient-to-br from-[#1466ff] to-blue-100 p-4 rounded-xl flex-shrink-0">
                <Eye size={40} className="text-[#0d4dcc]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the club of first choice for Ibadan sons committed to transforming Ibadan land into the 
                  epitome of development in Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="bg-gradient-to-br from-[#0d4dcc] to-[#0d4dcc] p-4 rounded-xl flex-shrink-0">
                <Users size={40} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To attract high quality professionals and business persons and leverage their collective social 
                  and economic capital to mobilise resources for both the development of Ibadan land and members of the club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our actions and decisions
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle size={28} className="text-[#0d4dcc] flex-shrink-0" />
                <span className="text-lg font-semibold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vow Section */}
      <section className="py-20 bg-gradient-to-br from-[#0d4dcc] to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Heart size={40} className="text-[#0d4dcc]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Vow</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <p className="text-xl text-white leading-relaxed mb-6">
                Jericho Businessmen Club has vowed to continue to live by its objective now and in the foreseeable 
                future, with greater efforts being devoted to the upliftment of the economic, social and political 
                landscape of Ibadan land.
              </p>
              <p className="text-2xl font-bold text-[#1466ff] italic">
                Ibadan a gbe wa o. Amin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}