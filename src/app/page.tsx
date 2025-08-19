// pages/index.tsx
"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  ChevronRight, 
  Users, 
  Target, 
  Award, 
  Calendar,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
  ArrowRight,
  Star,
  Building2,
  GraduationCap,
  HandHeart
} from 'lucide-react';
import Navbar from './components/Navbar';
import JerichoSummitBanner from './components/Header';
import ValuesCard from './components/ValuesCard';

interface NavItem {
  href: string;
  label: string;
}

interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: string;
  deadline?: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#events', label: 'Events' },
    { href: '#membership', label: 'Membership' },
    { href: '#contact', label: 'Contact' }
  ];

  const programs: Program[] = [
    {
      id: 'scholarship',
      title: 'JBC Scholarship Scheme',
      description: 'Supporting educational excellence among Ibadan youth with financial assistance for qualified students.',
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      status: 'Applications Open',
      deadline: 'May 30, 2025'
    },
    {
      id: 'empowerment',
      title: 'Empowerment Scheme',
      description: 'Providing financial support to traders and artisans of Ibadan origin since November 2013.',
      icon: <HandHeart className="w-8 h-8 text-green-600" />,
      status: 'Ongoing',
    },
    {
      id: 'summit',
      title: 'JBC Annual Summit',
      description: 'Bringing together entrepreneurs, policymakers, and changemakers to address socio-economic challenges.',
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      status: 'Coming Soon',
    }
  ];

  const upcomingEvents: Event[] = [
    {
      id: '1',
      title: 'JBC Annual Summit 2025',
      date: 'Coming Soon',
      location: 'Ibadan, Oyo State',
      description: 'Annual gathering of business leaders and policymakers'
    },
    {
      id: '2',
      title: 'Monthly General Meeting',
      date: 'Last Thursday of Every Month',
      location: 'JBC Secretariat, Ibadan',
      description: 'Regular members meeting and networking session'
    }
  ];

  const objectives: string[] = [
    "Network with like-minded professionals of Ibadan extraction for mutual economic development",
    "Impact public policy discourse for the benefit of Ibadan people",
    "Be the club of first choice for Ibadan sons committed to transformation",
    "Attract high quality professionals and leverage collective capital for development"
  ];

  return (
    <>
      <Head>
        <title>Jericho Businessmen Club - Transforming Ibadan Through Excellence</title>
        <meta name="description" content="Premier business club for Ibadan professionals committed to economic development and community transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navbar/>
      <JerichoSummitBanner/>
      <ValuesCard/>
 

  

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About JBC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The epitome of professional excellence and community development in Ibadan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the club of first choice for Ibadan sons committed to transforming 
                  Ibadan land into the epitome of development in Nigeria.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To attract high quality professionals and business persons and leverage 
                  their collective social and economic capital to mobilise resources for 
                  both the development of Ibadan land and members of the club.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Commitment</h4>
                <p className="text-gray-700 italic">
                  "Ibadan a gbe wa o. Amin" - Jericho Businessmen Club continues to live by 
                  its objectives with greater efforts devoted to the upliftment of Ibadan's 
                  economic, social and political landscape.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Objectives</h3>
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Target size={16} className="text-white" />
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Initiatives designed to empower our community and create lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    {program.icon}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      program.status === 'Applications Open' 
                        ? 'bg-green-100 text-green-800'
                        : program.status === 'Coming Soon'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  
                  {program.deadline && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                      <p className="text-sm text-red-800">
                        <strong>Deadline:</strong> {program.deadline}
                      </p>
                    </div>
                  )}
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform group-hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                    Learn More
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Events & Activities
            </h2>
            <p className="text-xl text-gray-600">
              Stay connected with our upcoming events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be part of Ibadan's most prestigious business network and contribute to our city's transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Network</h3>
              <p className="text-blue-100">Connect with like-minded professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-blue-100">Maintain highest professional standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
              <p className="text-blue-100">Create meaningful change in our community</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
            Apply for Membership
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to join us or have questions? We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">Jericho, Ibadan, Oyo State, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+234 XXX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@jbcibadan.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JBC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jericho Businessmen Club</h3>
                  <p className="text-gray-400 text-sm">Ibadan</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transforming Ibadan through professional excellence, community development, and strategic partnerships.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <a key={item.href} href={item.href} className="block text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Scholarship Scheme</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Empowerment Program</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Annual Summit</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Member Benefits</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Jericho Businessmen Club. All rights reserved. | Ibadan a gbe wa o. Amin
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;