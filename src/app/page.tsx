'use client';

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
      subtitle: "Empowering Professionals, Building Communities",
      description: "Like-minded professionals and technocrats of Ibadan origin for mutual economic development",
      image: "/images/j1.jpg"
    },
    {
      title: "Making Impact Together",
      subtitle: "Driving Economic Growth & Development",
      description: "Impacting public policy discourse for the benefit of our people in Ibadan",
      image: "/images/j2.jpg"
    },
    {
      title: "Join Our Community",
      subtitle: "Be Part of Something Greater",
      description: "Connect with fellow professionals and contribute to Ibadan's development",
      image: "/images/j3.jpg"
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
      description: "Supporting healthcare infrastructure and services across Ibadan communities",
      link: "/health-centres"
    },
    {
      icon: Award,
      title: "Empowerment Scheme",
      description: "Established in November 2013 to provide financial support to traders and artisans of Ibadan origin",
      link: "/empowerment"
    },
    {
      icon: GraduationCap,
      title: "Scholarship Scheme",
      description: "Established October 26, 2006. Giving back to society and helping those with genuine educational needs",
      link: "/scholarship"
    },
    {
      icon: Building2,
      title: "Annual Socio-economic Summit",
      description: "Bringing together stakeholders to discuss and advance Ibadan's economic development",
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
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image} // Critical: Forces re-render of background
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-gray-200"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                      {slide.title}
                    </h2>
                    <p className="text-2xl md:text-3xl text-[#c6ddff] mb-4 font-semibold">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="#about" 
                        className="bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold inline-flex items-center justify-center"
                      >
                        Learn More
                        <ChevronRight size={20} className="ml-2" />
                      </a>
                      <a 
                        href="#contact" 
                        className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1466ff] transition-all duration-300 font-semibold inline-flex items-center justify-center"
                      >
                        Join Us Today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-[#1466ff]' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-white rotate-90" size={32} />
        </div>
      </section>

      {/* About Section */}

<section id="about" className="py-20 bg-[#f3f3f3]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About JBC Ibadan</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Uniting professionals and technocrats for the economic and social development of Ibadan
      </p>
    </div>

    <div className="grid lg:grid-cols-4 gap-4 mb-12">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-6 rounded-2xl transition-all duration-300 text-left ${
              activeTab === tab.id
                ? 'bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:shadow-lg hover:scale-102'
            }`}
          >
            <Icon size={32} className="mb-3" />
            <h3 className="font-bold text-lg">{tab.label}</h3>
          </button>
        );
      })}
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`transition-all duration-500 ${
            activeTab === tab.id ? 'block' : 'hidden'
          }`}
        >
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
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
      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Making meaningful impact through targeted programs and community development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-[#1466ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1466ff] transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                  <a 
                    href={initiative.link}
                    className="text-[#1466ff] font-semibold flex items-center group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-[#1466ff]/5 to-[#0d4dcc]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our President</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leadership that inspires growth, excellence, and community impact
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden md:flex">
            <div className="md:w-5/12 relative overflow-hidden bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] p-8 md:p-12 flex items-center justify-center">
              <img 
                src="/images/presido.jpg" 
                alt="JBC President" 
                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-lg"
              />
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg">
                Olooye Adegboyega Taofeek Adegoke
              </p>
            </div>

            <div className="md:w-7/12 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                President, Jericho Businessmen Club Ibadan
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A business executive and financial management professional with rich and diverse experience in the Oil and Gas industry, Financial Services, Audit and Assurance. An enterprising leader with sound organizational skills, Fellow of the Institute of Chartered Accountants of Nigeria (FCA), and alumnus of OAU Ile-Ife and Cambridge Judge Business School (Advanced Leadership Programme).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Born on 4th February 1964, he is the Mogaji of Abase Family of Oke Gege, Ibadan and currently the Aare-onibon Balogun of Ibadanland. With over 30 years of hands-on experience in financial and strategic management, organizational restructuring, mergers & acquisitions, and business turnaround.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ B.Agric Economics, OAU Ile-Ife (1992)</li>
                    <li>✓ Executive Education, Heriot-Watt (2004)</li>
                    <li>✓ Lean Sigma, University of Oxford (2005)</li>
                    <li>✓ Advanced Leadership, Cambridge (2014)</li>
                    <li>✓ FCA, ICAN (2012)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Key Roles</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ CFO, Oando Energy Services (2010–2016)</li>
                    <li>✓ Executive Director, OES Energy Services</li>
                    <li>✓ Chairman, Aweni Homes & Properties</li>
                    <li>✓ Director, Multiple Energy & Financial Firms</li>
                  </ul>
                </div>
              </div>

              <a 
                href="/jbc/president"
                className="inline-flex items-center bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                See Full Profile
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee Slider */}
      <section id="exco" className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Executive Committee</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the distinguished leaders driving JBC's vision forward
            </p>
          </div>

          <div className="relative">
            <button
              onClick={scrollExecLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all disabled:opacity-50"
              disabled={execSlideIndex === 0}
            >
              <ChevronLeft size={24} className="text-[#1466ff]" />
            </button>
            <button
              onClick={scrollExecRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all disabled:opacity-50"
              disabled={execSlideIndex === totalExecSlides - 1}
            >
              <ChevronRightIcon size={24} className="text-[#1466ff]" />
            </button>

            <div className="overflow-hidden" ref={execSliderRef}>
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${execSlideIndex * (100 / visibleExecCards)}%)` }}
              >
                {executiveCommittee.map((member, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/3 px-2"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
                        <img 
                          src={member.img} 
                          alt={member.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center mb-1">{member.name}</h3>
                      <p className="text-[#1466ff] font-semibold text-center mb-2 text-sm">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalExecSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setExecSlideIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === execSlideIndex 
                      ? 'w-10 h-3 bg-[#1466ff]' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
              <p className="text-lg text-gray-600">Stay updated with our recent activities and announcements</p>
            </div>
            <a 
              href="/jbc/blog" 
              className="hidden md:flex items-center text-[#1466ff] font-semibold hover:gap-2 transition-all"
            >
              View All
              <ArrowRight size={20} className="ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    {new Date(news.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1466ff] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{news.excerpt}</p>
                  <a 
                  href={`/jbc/blog/${news.slug}`}
                    className="text-[#1466ff] font-semibold flex items-center group-hover:gap-2 transition-all"
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

      {/* Photo Gallery */}
      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Photos</h2>
            <p className="text-lg text-gray-600">
              Capturing moments from our events and activities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {photoGallery.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-[#1466ff]/80 transition-all flex items-end justify-center p-6">
                    <h3 className="text-white text-xl font-bold text-center transform group-hover:scale-110 transition-transform">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a 
              href="/jbc/gallery" 
              className="bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold inline-flex items-center"
            >
              View Full Gallery
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl mb-10 text-[#c6ddff]">
              Have questions or want to learn more about joining JBC? We'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <MapPin size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-[#c6ddff] text-sm">Ibadan, Oyo State, Nigeria</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <Mail size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-[#c6ddff] text-sm">info@jbcibadan.org</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <Phone size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-[#c6ddff] text-sm">+234 XXX XXX XXXX</p>
              </div>
            </div>
            <button className="bg-white text-[#1466ff] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold">
              Contact Us Today
            </button>
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

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}