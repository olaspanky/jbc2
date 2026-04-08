// app/jbc/events/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, MapPin, Clock, Users, ArrowRight, ChevronRight,
  Search, Filter, X, Award, Target, Heart, GraduationCap,
  Building2, Music, Briefcase, Globe, Coffee, TrendingUp,
  ChevronLeft, ChevronRight as ChevronRightIcon
} from 'lucide-react';

// Event categories with icons
const eventCategories = [
  { id: 'all', name: 'All Events', icon: Calendar },
  { id: 'summit', name: 'Socio-Economic Summit', icon: TrendingUp },
  { id: 'agm', name: 'Annual General Meeting', icon: Users },
  { id: 'empowerment', name: 'Empowerment Programs', icon: Award },
  { id: 'health', name: 'Health Initiatives', icon: Heart },
  { id: 'scholarship', name: 'Scholarship Events', icon: GraduationCap },
  { id: 'social', name: 'Social Events', icon: Music },
  { id: 'business', name: 'Business Networking', icon: Briefcase },
];

// Sample events data - replace with your actual data source
const eventsData = [
  {
    id: 1,
    title: "3rd Annual JBC Socio-Economic Summit 2024",
    category: "summit",
    date: "November 15-16, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "International Conference Centre, Ibadan",
    description: "Theme: 'Sustainable Economic Development Through Strategic Partnerships'. Join industry leaders, policymakers, and entrepreneurs for two days of insightful discussions, networking, and collaborative solution-building.",
    image: "/images/summit2024.jpg",
    status: "upcoming",
    registrationLink: "/jbc/events/summit-2024/register",
    speakers: ["Dr. Ngozi Okonjo-Iweala", "Aliko Dangote", "Governor Seyi Makinde"],
    highlights: ["Keynote Speeches", "Panel Discussions", "Investment Pitch Session", "Networking Gala"]
  },
  {
    id: 2,
    title: "JBC Annual General Meeting & Awards Night",
    category: "agm",
    date: "December 7, 2024",
    time: "4:00 PM - 9:00 PM",
    location: "Premier Hotel, Ibadan",
    description: "Join us for our prestigious Annual General Meeting followed by the JBC Excellence Awards ceremony celebrating outstanding members and community contributors.",
    image: "/images/agm2024.jpg",
    status: "upcoming",
    registrationLink: "/jbc/events/agm-2024/register",
    speakers: [],
    highlights: ["Annual Report Presentation", "Executive Elections", "Awards Ceremony", "Dinner & Entertainment"]
  },
  {
    id: 3,
    title: "Youth Empowerment Scheme - Skills Development Workshop",
    category: "empowerment",
    date: "October 25-27, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "JBC Resource Centre, Jericho, Ibadan",
    description: "Free skills training program for 100 Ibadan youths in digital marketing, entrepreneurship, and financial literacy.",
    image: "/images/empowerment.jpg",
    status: "upcoming",
    registrationLink: "/jbc/events/empowerment-workshop/register",
    speakers: ["Mr. Tunde Adebayo", "Mrs. Funke Ogunleye", "Mr. Kunle Adepoju"],
    highlights: ["Hands-on Training", "Mentorship Session", "Startup Toolkit Distribution", "Certificate of Participation"]
  },
  {
    id: 4,
    title: "Community Health Outreach - Free Medical Screening",
    category: "health",
    date: "November 2, 2024",
    time: "8:00 AM - 2:00 PM",
    location: "Oke-Bola Community Centre, Ibadan",
    description: "Free health screening and medical consultation for residents of Oke-Bola and surrounding communities. Services include blood pressure check, diabetes screening, eye tests, and health education.",
    image: "/images/health-outreach.jpg",
    status: "upcoming",
    registrationLink: "/jbc/events/health-outreach/register",
    speakers: [],
    highlights: ["Free Medical Tests", "Doctor Consultations", "Health Talk", "Free Medications"]
  },
  {
    id: 5,
    title: "JBC Scholarship Award Ceremony 2024",
    category: "scholarship",
    date: "October 12, 2024",
    time: "11:00 AM - 2:00 PM",
    location: "JBC Secretariat, Ibadan",
    description: "Award ceremony for 50 exceptional undergraduate students from Ibadan indigene background. Each scholar receives N100,000 and mentorship support.",
    image: "/images/scholarship.jpg",
    status: "past",
    datePassed: true,
    highlights: ["Scholarship Presentation", "Mentorship Pairing", "Success Stories", "Networking Session"]
  },
  {
    id: 6,
    title: "Business Networking Mixer - Q4 2024",
    category: "business",
    date: "November 28, 2024",
    time: "5:30 PM - 8:30 PM",
    location: "The Penthouse, Bodija, Ibadan",
    description: "Monthly networking event for JBC members and invited guests. Connect with fellow business leaders, explore collaboration opportunities, and expand your professional network.",
    image: "/images/networking.jpg",
    status: "upcoming",
    registrationLink: "/jbc/events/networking-mixer/register",
    speakers: [],
    highlights: ["Open Networking", "Business Spotlight Session", "Collaboration Corner", "Refreshments"]
  },
  {
    id: 7,
    title: "JBC End-of-Year Gala & Fundraising Dinner",
    category: "social",
    date: "December 20, 2024",
    time: "6:00 PM - 11:59 PM",
    location: "Kakanfo Inn & Conference Centre, Ibadan",
    description: "Celebrate the year's achievements and support our 2025 community initiatives. Black-tie event featuring live band, auctions, and special recognitions.",
    image: "/images/gala.jpg",
    status: "upcoming",
    registrationLink: "/jbc/events/gala-2024/register",
    speakers: [],
    highlights: ["Live Band", "Charity Auction", "Dinner", "Dance & Celebration"]
  },
  {
    id: 8,
    title: "2nd Annual JBC Socio-Economic Summit 2023",
    category: "summit",
    date: "November 10-11, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "The University of Ibadan, Conference Centre",
    description: "Theme: 'Innovation and Entrepreneurship as Drivers of Economic Growth'. A landmark event that brought together over 500 participants.",
    image: "/images/summit2023.jpg",
    status: "past",
    datePassed: true,
    highlights: ["Keynote Speeches", "Panel Discussions", "Startup Exhibition", "Networking Session"]
  }
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // Filter events based on category, search, and past/future
  const filteredEvents = eventsData.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTimeframe = showPastEvents ? event.status === 'past' : event.status === 'upcoming';
    return matchesCategory && matchesSearch && matchesTimeframe;
  });

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  // Reset page when filters change
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const togglePastEvents = () => {
    setShowPastEvents(!showPastEvents);
    setCurrentPage(1);
  };

  // Upcoming events count
  const upcomingCount = eventsData.filter(e => e.status === 'upcoming').length;
  const pastCount = eventsData.filter(e => e.status === 'past').length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-xl md:text-2xl text-[#c6ddff] max-w-3xl mx-auto mb-8">
              Discover upcoming events, programs, and initiatives driving positive change in Ibadan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#upcoming-events"
                className="bg-white text-[#1466ff] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                View Upcoming Events
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="/jbc/initiatives"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1466ff] transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                Our Initiatives
                <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1466ff]">{upcomingCount}+</div>
              <div className="text-gray-600 mt-2">Upcoming Events</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1466ff]">500+</div>
              <div className="text-gray-600 mt-2">Annual Participants</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1466ff]">8+</div>
              <div className="text-gray-600 mt-2">Annual Programs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1466ff]">10+</div>
              <div className="text-gray-600 mt-2">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="upcoming-events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1466ff] focus:border-transparent transition-all"
                />
              </div>

              {/* Toggle Past/Upcoming */}
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePastEvents}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    !showPastEvents 
                      ? 'bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={togglePastEvents}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    showPastEvents 
                      ? 'bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mt-6">
              {eventCategories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleFilterChange(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon size={18} />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* Active Filters Display */}
            {(selectedCategory !== 'all' || searchQuery) && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#1466ff]/10 text-[#1466ff] rounded-lg text-sm">
                    {eventCategories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('all')} className="hover:text-red-500">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#1466ff]/10 text-[#1466ff] rounded-lg text-sm">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery('')} className="hover:text-red-500">
                      <X size={14} />
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-sm text-gray-500 hover:text-[#1466ff]"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Events Grid */}
          {paginatedEvents.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {paginatedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  {/* Event Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {eventCategories.find(c => c.id === event.category)?.name}
                      </span>
                    </div>

                    {/* Status Badge */}
                    {event.status === 'past' && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Past Event
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1466ff] transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={18} className="mr-2 text-[#1466ff]" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={18} className="mr-2 text-[#1466ff]" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-2 text-[#1466ff]" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Highlights */}
                    {event.highlights && event.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Speakers */}
                    {event.speakers && event.speakers.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Featured Speakers:</p>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker, idx) => (
                            <span key={idx} className="text-sm text-[#1466ff]">{speaker}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    {event.status === 'upcoming' && event.registrationLink && (
                      <Link
                        href={event.registrationLink}
                        className="inline-flex items-center bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-2"
                      >
                        Register Now
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                    )}

                    {event.status === 'past' && (
                      <Link
                        href={`/jbc/events/${event.id}`}
                        className="inline-flex items-center text-[#1466ff] font-semibold hover:gap-2 transition-all mt-2"
                      >
                        View Event Report
                        <ArrowRight size={18} className="ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl">
              <Calendar size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
              <p className="text-gray-500">
                Try adjusting your filters or check back later for upcoming events.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setShowPastEvents(false);
                }}
                className="mt-4 text-[#1466ff] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
              >
                <ChevronRightIcon size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated on Our Events</h2>
          <p className="text-xl text-[#c6ddff] mb-8">
            Subscribe to our newsletter to receive notifications about upcoming events and initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#1466ff] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
              Subscribe Now
            </button>
          </div>
          <p className="text-sm text-[#c6ddff] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}