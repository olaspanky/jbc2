'use client';

import React from 'react';
import { 
  Award, Building2, Calendar, GraduationCap, 
  MapPin, ChevronRight, ArrowRight, Star,
  Briefcase, Users, Target, Heart
} from 'lucide-react';
import Link from 'next/link';
import presi from "../../../../public/images/presido.jpg"
import Image from 'next/image';

export default function PresidentPage() {
  const president = {
    name: "Olooye Adegboyega Taofeek Adegoke",
    title: "President, Jericho Businessmen Club Ibadan",
    birthDate: "4th February 1964",
    family: "Mogaji of Abase Family of Oke Gege, Ibadan",
    traditionalTitle: "Aare-onibon Balogun of Ibadanland",
    image: presi, // Replace with actual image
    quote: "Leadership is not about titles, but about impact, integrity, and inspiring others to achieve greatness."
  };

  const education = [
    { year: "1992", degree: "B.Agric Economics", institution: "Obafemi Awolowo University, Ile-Ife" },
    { year: "2000", degree: "Associate Chartered Accountant (ACA)", institution: "Institute of Chartered Accountants of Nigeria" },
    { year: "2004", degree: "Excellence in Execution", institution: "Heriot-Watt University, Executive Education" },
    { year: "2005", degree: "Lean Sigma", institution: "University of Oxford, Executive Education" },
    { year: "2012", degree: "Fellow Chartered Accountant (FCA)", institution: "Institute of Chartered Accountants of Nigeria" },
    { year: "2014", degree: "Advanced Leadership Programme (ALP)", institution: "University of Cambridge, Judge Business School" }
  ];

  const experience = [
    { period: "1992–1993", role: "NYSC", company: "Nigerian Agricultural Cooperative Bank, FCT Abuja" },
    { period: "1993–1994", role: "Finance and Admin Manager", company: "M-Systems Limited, Lagos" },
    { period: "1995–2000", role: "Audit & Assurance", company: "Deloitte and Touche" },
    { period: "2000–2001", role: "Head, Accounts and Operations", company: "City Securities Limited (First City Group)" },
    { period: "2001–2002", role: "Management Accountant", company: "Schlumberger Oilfield Services" },
    { period: "2002–2003", role: "Financial Reporting & Consolidation Manager", company: "Schlumberger Oilfield Services" },
    { period: "2004–2007", role: "Financial Controller, Drilling & Measurements", company: "Schlumberger Oilfield Services" },
    { period: "2009–2010", role: "Group Treasurer (Gulf of Guinea Africa – 16 Countries)", company: "Schlumberger Oilfield Services" },
    { period: "2010–2010", role: "Group Finance Center Manager (Gulf of Guinea Africa)", company: "Schlumberger Oilfield Services" },
    { period: "2010–2016", role: "Chief Financial Officer (CFO)", company: "Oando Energy Services Limited" },
    { period: "2016–Present", role: "Executive Director", company: "OES Energy Services Limited" },
    { period: "2016–Present", role: "Director", company: "Pacesetter Deepsea Drilling Limited" },
    { period: "2016–Present", role: "Director", company: "CVAB Energy Services Limited" },
    { period: "2016–Present", role: "Director", company: "Ocean Deep Drilling ESV Nigeria Limited (ODENL)" },
    { period: "2014–Present", role: "Director", company: "Solid Allianze Microfinance Bank Limited" },
    { period: "2015–Present", role: "Chairman", company: "Premium Channel 8 Hospitality & Tours Limited" },
    { period: "2019–Present", role: "Director", company: "4Mation Drilling Services Limited" },
    { period: "2020–Present", role: "Chairman", company: "Aweni Homes and Properties" },
    { period: "2021–Present", role: "Chairman", company: "Aweni Communication Services Limited (Solution 93.9 FM)" }
  ];

  const achievements = [
    "Over 30 years of hands-on experience in financial & strategic management",
    "Led organizational restructuring, mergers & acquisitions, and business turnaround",
    "Managed financial operations across 16 African countries at Schlumberger",
    "Transformed Oando Energy Services as CFO during critical growth phase",
    "Established multiple successful companies in energy, real estate, and media",
    "Recipient of multiple industry leadership and excellence awards"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#1466ff] to-[#0d4dcc]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mx-auto max-w-md">
                  <div className="bg-white/30 rounded-2xl p-6">
                        {president.image ? (
                          <Image 
                            src={president.image} 
                            alt={president.name}
                            className="w-full h-full object-cover rounded-lg"
                            width={300} height={400}
                          />
                        ) : (
                          "OA"
                        )}
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl px-6 py-3 text-center">
                  <p className="font-bold text-[#1466ff]">{president.traditionalTitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {president.name}
                </h1>
                <p className="text-2xl md:text-3xl text-[#c6ddff] mb-4 font-semibold">
                  {president.title}
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                  "{president.quote}"
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Calendar size={18} />
                    <span>Born: {president.birthDate}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Users size={18} />
                    <span>{president.family}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f8faff] to-[#e6f0ff] rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Professional Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Olooye Adegboyega Taofeek Adegoke is a seasoned business executive and financial management professional with over <strong>30 years</strong> of rich and diverse experience across the <strong>Oil & Gas</strong>, <strong>Financial Services</strong>, and <strong>Audit & Assurance</strong> industries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Fellow of the Institute of Chartered Accountants of Nigeria (<strong>FCA</strong>) and alumnus of prestigious institutions including <strong>Obafemi Awolowo University</strong>, <strong>University of Oxford</strong>, and <strong>Cambridge Judge Business School</strong>, he has demonstrated exceptional leadership in financial strategy, organizational restructuring, mergers & acquisitions, and business turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Educational Background
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap size={28} className="text-[#1466ff]" />
                  <span className="text-sm font-semibold text-[#1466ff]">{edu.year}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Professional Experience
          </h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group hover:bg-gradient-to-r hover:from-[#1466ff]/5 hover:to-[#0d4dcc]/5 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-32 text-sm font-semibold text-[#1466ff] bg-[#1466ff]/10 rounded-lg px-3 py-2 text-center">
                  {exp.period}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={20} className="text-[#1466ff]" />
                    <h3 className="font-bold text-gray-900">{exp.role}</h3>
                  </div>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Building2 size={16} className="text-gray-400" />
                    {exp.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Achievements & Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <Star size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership at JBC */}
      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Leadership at Jericho Businessmen Club
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Under Olooye Adegoke's leadership, JBC Ibadan has strengthened its role as a catalyst for economic empowerment, youth development, and community transformation.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Target className="text-[#1466ff] mt-1" size={20} />
                    <span>Expanded scholarship reach to over 100 beneficiaries annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="text-[#1466ff] mt-1" size={20} />
                    <span>Empowered 3,500+ traders through soft loan initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-[#1466ff] mt-1" size={20} />
                    <span>Hosted impactful socio-economic summits with national leaders</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#c6ddff] to-[#1466ff] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Vision for Ibadan</h3>
                <p className="text-lg leading-relaxed">
                  "To build a self-sustaining Ibadan where every indigene has access to opportunity, dignity, and prosperity through strategic collaboration and innovation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Connect With Leadership
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in partnering with JBC or learning more about our initiatives?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href="/"
              className="bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all inline-flex items-center justify-center"
            >
              Back to Home
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </>
  );
}