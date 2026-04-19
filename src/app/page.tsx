'use client';

import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, MapPin, Mail, Phone, 
  Users, Target, Eye, Heart, Facebook, Twitter, 
  Instagram, Linkedin, ArrowRight, Calendar,
  Award, Building2, GraduationCap, Activity,
  ChevronLeft, ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { recentNews } from './constants/news';

export default function JBCIbadan() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('aim');
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [execSlideIndex, setExecSlideIndex] = useState(0);
  const execSliderRef = useRef<HTMLDivElement>(null);

  // Reset slide and start auto-play on mount
  useEffect(() => {
    setCurrentSlide(0); // Always start from first slide

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []); // Empty array = run once on mount

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Executive Slider Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setExecSlideIndex((prev) => 
        prev >= executiveCommittee.length - visibleExecCards ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Jericho Businessmen Club Ibadan",
      subtitle: "",
      description:
        "A distinguished community of accomplished Sons of Ibadan committed to ethical leadership, economic development, and measurable community impact.",
      image: "/images/j1.jpg",
      cta1: { text: "Learn More", link: "/jbc/about" },
      cta2: { text: "Join Us Today", link: "/jbc/join-us" }
    },
    {
      title: "Where Professional Excellence Meets Purpose",
      subtitle: "",
      description:
        "We connect like minded Ibadan Sons across business, finance, technology, and public service to strengthen enterprises, foster strategic partnerships, and advance sustainable development in our home city.",
      image: "/images/j2.jpg",
      cta1: { text: "Our Story", link: "/jbc/about?section=history" },
      cta2: { text: "Become a Member", link: "/jbc/join-us" }
    },
    {
      title: "Driving Real Impact in Ibadan.",
      subtitle: "",
      description:
        "Through policy engagement, youth development, entrepreneurship support, and community initiatives, we contribute actively to economic growth and long term progress.",
      image: "/images/j3.jpg",
      cta1: { text: "Explore Our Work", link: "/jbc/initiatives" },
      cta2: { text: "Upcoming Events", link: "/jbc/events" }
    }
  ];

  
  const tabs = [
    { 
      id: 'aim', 
      label: 'Aim', 
      icon: Target,
      content: "To promote the economic, social, and cultural development of Ibadan and its environs through collaborative efforts of like-minded professionals and technocrats."
    },
    { 
      id: 'vision', 
      label: 'Vision', 
      icon: Eye,
      content: "To be the foremost organization championing sustainable development and economic prosperity for Ibadan and its people."
    },
    { 
      id: 'mission', 
      label: 'Mission', 
      icon: Users,
      content: "To bring together professionals and technocrats of Ibadan origin to foster mutual economic development, influence positive public policy, and create lasting impact in our community."
    },
    { 
      id: 'vow', 
      label: 'Vow', 
      icon: Heart,
      content: "We pledge our unwavering commitment to the development of Ibadan, promising to work tirelessly for the economic empowerment and social advancement of our people."
    }
  ];

  const initiatives = [
    {
      icon: Activity,
      title: "Health Centres Support",
      description: "Improving healthcare access across Ibadan communities.",
      link: "/health-centres"
    },
    {
      icon: Award,
      title: "Empowerment Scheme",
      description: "Strengthening businesses and entrepreneurs for economic growth.",
      link: "/empowerment"
    },
    {
      icon: GraduationCap,
      title: "Scholarship Scheme",
      description: "Supporting promising students to reach their full potential.",
      link: "/scholarship"
    },
    {
      icon: Building2,
      title: "Annual Socio-economic Summit",
      description: "Driving dialogue and solutions for sustainable development.",
      link: "/summit"
    }
  ];

  const executiveCommittee = [
    { name: "Mr. Tunji Waheed Gafaar", position: "Vice President", img: "/images/twg.jpg" },
    { name: "Mr. Olatunde Akeem Adisa", position: "General Secretary", img: "/images/oaa.jpg" },
    { name: "Dr. Adeyemi Sanni", position: "Financial Secretary", img: "/images/das.jpg" },
    { name: "Mr. Ademola Adedeji", position: "Assistant General Secretary", img: "/images/maa.jpg" },
    { name: "Mr. Olukunle Opawale", position: "Publicity Secretary", img: "/images/moo.jpg" },
    { name: "Mr. Adewale Oyeniyi", position: "Social Secretary", img: "/images/mooye.jpg" },
    { name: "Mr. Wasiu Ola Abiola", position: "Assistant Social Secretary", img: "/images/woa.jpg" },
    { name: "Oloye Olukunle Oyewole", position: "Legal Adviser", img: "/images/ooo.jpg" },
    { name: "Mr. Akinwale Akinola", position: "Chief Whip", img: "/images/maa.jpg" },
    { name: "Oloye Remi Ibrahim Babalola", position: "Immediate Past President", img: "/images/orib.jpg" }
  ];

  const photoGallery = [
    { 
      title: "Second Edition JBC Annual Socio-Economic Summit", 
      image: "/jbchead.png" 
    },
    { 
      title: "JBC Annual Youth Innovation Challenge 2024", 
      image: "/jbcbg4.jpg" 
    },
  ];

  const footerLinks = {
    about: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Meet JBC President", href: "/president" },
      { label: "Executive Office Holders", href: "/excos" },
      { label: "Board of Trustees", href: "/board-of-trustees" },
      { label: "Featured Members", href: "/featured-jbc-member" },
      { label: "Past Executive Holders", href: "/past-excos" }
    ],
    initiatives: [
      { label: "Health Centres Support", href: "/health-centres" },
      { label: "Empowerment Scheme", href: "/empowerment" },
      { label: "Scholarship Scheme", href: "/scholarship" }
    ],
    resources: [
      { label: "JBC Anthem", href: "/jbc-anthem" },
      { label: "Photo Gallery", href: "/photos" },
      { label: "Become a Member", href: "/how-to-become-a-member" },
      { label: "News & Events", href: "/events" }
    ]
  };

  // Slider settings
  const visibleExecCards = 3;
  const totalExecSlides = Math.ceil(executiveCommittee.length / visibleExecCards);

  const scrollExecLeft = () => {
    setExecSlideIndex(prev => Math.max(0, prev - 1));
  };

  const scrollExecRight = () => {
    setExecSlideIndex(prev => Math.min(totalExecSlides - 1, prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex(tab => tab.id === current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Slider Section - Enhanced with parallax and animated overlays */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide 
                  ? 'opacity-100 pointer-events-auto' 
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Ken Burns effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-gray-200 animate-ken-burns"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Dynamic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,102,255,0.3),transparent_50%)]"></div>
                {/* Animated floating particles */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse-slow"></div>
              </div>
              
              {/* Content with staggered animation */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up [animation-delay:0ms] drop-shadow-2xl">
                      <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-semibold animate-slide-up [animation-delay:200ms]">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-slide-up [animation-delay:400ms] leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:600ms]">
                      <Link
                        href={slide.cta1.link}
                        className="group bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold inline-flex items-center justify-center relative overflow-hidden"
                      >
                        <span className="relative z-10">{slide.cta1.text}</span>
                        <ChevronRight size={20} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      </Link>
                      <Link
                        href={slide.cta2.link}
                        className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg hover:bg-white hover:text-[#1466ff] transition-all duration-300 font-semibold inline-flex items-center justify-center relative overflow-hidden"
                      >
                        <span className="relative z-10">{slide.cta2.text}</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] shadow-lg shadow-blue-500/50' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80 hover:scale-125'
              }`}
            />
          ))}
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2 tracking-widest">SCROLL</span>
            <ChevronRight className="rotate-90 animate-pulse" size={32} />
          </div>
        </div>
      </section>

      {/* Leadership Section - Enhanced with glassmorphism and floating elements */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              A Welcome from the President
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1466ff] to-transparent"></div>
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden md:flex transform hover:scale-[1.02] transition-all duration-500 border border-white/50">
            <div className="md:w-5/12 relative overflow-hidden bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] p-8 md:p-12 flex items-center justify-center group">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src="/images/presido.jpg" 
                  alt="JBC President" 
                  className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-lg relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full">
                Olooye Adegboyega Taofeek Adegoke
              </p>
            </div>

            <div className="md:w-7/12 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] bg-clip-text">
                President, Jericho Businessmen Club Ibadan
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to Jericho Businessmen Club Ibadan.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our Club was founded on a clear belief that business leadership must serve a purpose
                greater than personal success. As accomplished Sons of Ibadan, we understand that
                influence carries responsibility, and we are committed to using our experience and
                networks to strengthen economic development and community progress.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Through focused initiatives, strategic partnerships, and constructive engagement, we
                continue to support education, entrepreneurship, and sustainable growth across
                Ibadan and Oyo State. We are deliberate in our actions and accountable for our
                impact.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Jericho Businessmen Club Ibadan is not simply a network. It is a commitment to
                service, integrity, and lasting contribution.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                I invite you to learn more about our work and the values that guide us.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome once again
              </p>

              <a 
                href="/jbc/president"
                className="group inline-flex items-center bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">See Full Profile</span>
                <ArrowRight size={18} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with animated tabs and gradient backgrounds */}
      <section id="about" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              About JBC Ibadan
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1466ff] to-transparent"></div>
            </h2>
            <p className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">
              Who we are
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Jericho Businessmen Club Ibadan unites experienced Sons of Ibadan across diverse
              professional backgrounds and industries to strengthen businesses, drive economic
              growth, and advance social progress in Ibadanland. Founded to combine legacy,
              vision, and action, the Club turns purpose into tangible results for our communities.
            </p>
            <a 
              href="/jbc/about" 
              className="group bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold inline-flex items-center justify-center relative overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <ChevronRight size={20} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>

          <div className="grid lg:grid-cols-4 gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 text-left group relative overflow-hidden ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 hover:shadow-lg hover:scale-102 border border-gray-100 hover:border-blue-200'
                  }`}
                >
                  {/* Animated background for inactive tabs */}
                  {activeTab !== tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <div className="relative z-10">
                    <Icon size={32} className={`mb-3 transition-transform group-hover:scale-110 ${activeTab === tab.id ? 'text-white' : 'text-[#1466ff]'}`} />
                    <h3 className="font-bold text-lg">{tab.label}</h3>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 animate-pulse"></div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`transition-all duration-500 ${
                  activeTab === tab.id ? 'block animate-fade-in-up' : 'hidden'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-3 transition-transform">
                    {React.createElement(tab.icon, { size: 32, className: "text-[#1466ff]" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{tab.label}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{tab.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section - Enhanced with 3D card effects */}
      <section id="initiatives" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Connect and Engage
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1466ff] to-transparent"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our Annual Socio-Economic Summit, Annual General Meeting, and other key events
              bring together leaders and innovators to collaborate, share insights, and drive
              progress. Each gathering reflects our commitment to purposeful action and
              measurable impact.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">Transforming Lives Through Intentional Action</h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                      <Icon size={32} className="text-[#1466ff]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1466ff] transition-colors">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                    <a 
                      href={initiative.link}
                      className="inline-flex items-center text-[#1466ff] font-semibold group-hover:gap-2 transition-all"
                    >
                      Learn More
                      <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-2xl"></div>
                </div>
              );
            })}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 mt-6">
              <a 
                href="/jbc/events" 
                className="group bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold inline-flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">View Events</span>
                <ChevronRight size={20} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section - Enhanced with animated background */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow-delayed"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-sm font-semibold tracking-widest text-[#1466ff] uppercase mb-4">
            Membership
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Be Part of Something Greater
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Becoming a member of <span className="font-semibold text-gray-900">
            Jericho Businessmen Club Ibadan</span> means more than networking. 
            It is a commitment to collaboration, service, and shaping Ibadan's future, 
            alongside like-minded vision-oriented sons of the land.
          </p>
          <Link
            href="/jbc/join-us"
            className="group inline-flex items-center bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Become a Member</span>
            <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>
      </section>

      {/* News & Events - Enhanced with image overlays and hover effects */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
                Latest News & Events
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1466ff] to-transparent"></div>
              </h2>
              <p className="text-lg text-gray-600">Stay updated with our recent activities and announcements</p>
            </div>
            <a 
              href="/jbc/blog" 
              className="hidden md:flex items-center text-[#1466ff] font-semibold hover:gap-2 transition-all group"
            >
              View All
              <ArrowRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center text-sm text-white/90">
                      <Calendar size={16} className="mr-2" />
                      {new Date(news.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1466ff] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{news.excerpt}</p>
                  <a 
                    href={`/jbc/blog/${news.slug}`}
                    className="inline-flex items-center text-[#1466ff] font-semibold group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Enhanced with glassmorphism and floating elements */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full filter blur-3xl animate-pulse-slow-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl mb-10 text-blue-100">
              Have questions or want to learn more about joining JBC? We'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 duration-300 border border-white/20">
                <MapPin size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-blue-100 text-sm">Ibadan, Oyo State, Nigeria</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 duration-300 border border-white/20">
                <Mail size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-blue-100 text-sm">info@jbcibadan.org</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 duration-300 border border-white/20">
                <Phone size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-blue-100 text-sm">+234 XXX XXX XXXX</p>
              </div>
            </div>
            <button className="group bg-white text-[#1466ff] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold relative overflow-hidden">
              <span className="relative z-10">Contact Us Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced animations and styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite alternate;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slow-delayed {
          animation: float-slow-delayed 10s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 5s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .drop-shadow-2xl {
          filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
        }
      `}</style>
    </div>
  );
}