'use client';

import React from 'react';
import { Calendar, Users, Building2 } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-[#1466ff] text-[#0d4dcc] rounded-full text-sm font-semibold">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">History of JBC</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey from inception to becoming a leading force for Ibadan's development
            </p>
          </div>
        </div>
      </section>

      {/* Main History Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Founding Story */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <Calendar size={32} className="text-[#0d4dcc]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Founded January 2, 2002</h2>
                  <p className="text-[#0d4dcc] font-semibold">Over two decades of service</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Jericho Businessmen Club is a club of upwardly mobile Ibadan Indigenes established through the 
                pioneering and visionary efforts of <span className="font-bold text-[#0d4dcc]">Chief Adeyemi Soladoye</span> (Ekerin Baameto of Ibadan Land), 
                its founding president, and the foundation members.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The club was formally launched on <span className="font-semibold">2nd of January, 2002</span> and its membership comprises of 
                Ibadan professionals and technocrats gainfully engaged in various sectors of the Nigeria economy as 
                well as in the diaspora.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                From year 2002 to date, the membership roll of the club has also grown significantly with many Ibadan 
                sons from across the various indigenous areas in the Ibadan land joining its fold.
              </p>
            </div>

            {/* The JBC Centre */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-[#1466ff]">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-[#1466ff] to-blue-100 p-3 rounded-xl">
                  <Building2 size={32} className="text-[#0d4dcc]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">The JBC Centre Ibadan</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Located on NIHORT Road, Ibadan, the JBC Centre serves as the hub for our activities and initiatives. 
                This facility represents our commitment to having a permanent presence in Ibadan and provides a 
                central location for members to convene, collaborate, and drive forward our mission of economic and 
                social development.
              </p>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Address:</span><br />
                  NIHORT Road, Ibadan, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Growth Journey</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#0d4dcc] to-[#0d4dcc] text-white font-bold px-4 py-2 rounded-lg flex-shrink-0">
                  2002
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Foundation & Launch</h3>
                  <p className="text-gray-700">Club formally launched under Chief Adeyemi Soladoye's leadership</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#0d4dcc] to-[#0d4dcc] text-white font-bold px-4 py-2 rounded-lg flex-shrink-0">
                  2006
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Scholarship Scheme Established</h3>
                  <p className="text-gray-700">JBC Scholarship Trust Fund established to support education</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#0d4dcc] to-[#0d4dcc] text-white font-bold px-4 py-2 rounded-lg flex-shrink-0">
                  2013
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Empowerment Program Launch</h3>
                  <p className="text-gray-700">Empowerment scheme for traders and artisans initiated</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#0d4dcc] to-[#0d4dcc] text-white font-bold px-4 py-2 rounded-lg flex-shrink-0">
                  Present
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Continued Growth & Impact</h3>
                  <p className="text-gray-700">Expanding membership and deepening our impact across Ibadan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#0d4dcc] to-emerald-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-4">
                "Building on a legacy of excellence and service to Ibadan land"
              </p>
              <p className="text-[#1466ff] text-lg">
                Over 20 years of dedicated service and counting
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}