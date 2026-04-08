// app/jbc/initiatives/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, ChevronRight, Heart, GraduationCap, Award, 
  Building2, Activity, Users, Target, Globe, TrendingUp,
  Briefcase, Stethoscope, BookOpen, HandHeart, Lightbulb,
  BarChart3, Shield, Sparkles, CheckCircle, Calendar,
  MapPin, Clock, Phone, Mail, FileText
} from 'lucide-react';

// Initiatives data
const initiativesData = [
  {
    id: 1,
    title: "Health Centres Support",
    category: "health",
    icon: Stethoscope,
    description: "Improving healthcare access and quality across Ibadan communities through infrastructure support, medical equipment donation, and health outreach programs.",
    fullDescription: "Our Health Centres Support initiative focuses on strengthening primary healthcare delivery in underserved communities across Ibadanland. We collaborate with local health authorities to identify critical needs and provide sustainable solutions.",
    image: "/images/health-initiative.jpg",
    impact: [
      "5 Primary Health Centres renovated",
      "10,000+ patients served annually",
      "50+ medical equipment donated",
      "100+ healthcare workers trained"
    ],
    ongoing: true,
    startDate: "2021",
    coordinator: "Dr. Adeyemi Sanni",
    contact: "health@jbcibadan.org",
    gallery: ["/images/health1.jpg", "/images/health2.jpg", "/images/health3.jpg"]
  },
  {
    id: 2,
    title: "Empowerment Scheme",
    category: "empowerment",
    icon: Briefcase,
    description: "Strengthening local businesses and entrepreneurs through capacity building, access to funding, and mentorship programs for sustainable economic growth.",
    fullDescription: "The Empowerment Scheme provides comprehensive support to small business owners and aspiring entrepreneurs in Ibadan. Through training, mentorship, and access to capital, we help transform ideas into thriving enterprises.",
    image: "/images/empowerment-initiative.jpg",
    impact: [
      "500+ entrepreneurs trained",
      "100+ businesses funded",
      "1,000+ jobs created",
      "50+ mentorship pairs established"
    ],
    ongoing: true,
    startDate: "2020",
    coordinator: "Mr. Olatunde Akeem Adisa",
    contact: "empowerment@jbcibadan.org",
    gallery: ["/images/empower1.jpg", "/images/empower2.jpg", "/images/empower3.jpg"]
  },
  {
    id: 3,
    title: "Scholarship Scheme",
    category: "education",
    icon: GraduationCap,
    description: "Supporting promising Ibadan indigenes to reach their full potential through educational scholarships and academic mentorship.",
    fullDescription: "Our Scholarship Scheme identifies and supports academically gifted students from Ibadanland who face financial barriers to education. We provide financial assistance, academic mentoring, and career guidance.",
    image: "/images/scholarship-initiative.jpg",
    impact: [
      "150+ scholars supported",
      "₦30M+ in scholarships awarded",
      "95% graduation rate",
      "30+ scholars in professional careers"
    ],
    ongoing: true,
    startDate: "2019",
    coordinator: "Dr. Adeyemi Sanni",
    contact: "scholarship@jbcibadan.org",
    gallery: ["/images/scholar1.jpg", "/images/scholar2.jpg", "/images/scholar3.jpg"]
  },
  {
    id: 4,
    title: "Annual Socio-economic Summit",
    category: "summit",
    icon: TrendingUp,
    description: "Driving dialogue and actionable solutions for sustainable development through high-level convenings of stakeholders, experts, and policymakers.",
    fullDescription: "The Annual Socio-economic Summit is JBC's flagship event bringing together business leaders, government officials, academics, and development experts to address critical challenges facing Ibadan and Oyo State.",
    image: "/images/summit-initiative.jpg",
    impact: [
      "500+ annual participants",
      "50+ policy recommendations",
      "30+ strategic partnerships formed",
      "₦100M+ investment discussions initiated"
    ],
    ongoing: true,
    startDate: "2022",
    coordinator: "Mr. Olukunle Opawale",
    contact: "summit@jbcibadan.org",
    gallery: ["/images/summit1.jpg", "/images/summit2.jpg", "/images/summit3.jpg"]
  },
  {
    id: 5,
    title: "Youth Development Program",
    category: "youth",
    icon: Users,
    description: "Empowering the next generation of Ibadan leaders through skills training, leadership development, and career guidance initiatives.",
    fullDescription: "The Youth Development Program focuses on preparing young Ibadan indigenes for successful careers and leadership roles. We offer vocational training, internship placements, and leadership workshops.",
    image: "/images/youth-initiative.jpg",
    impact: [
      "1,000+ youths trained",
      "200+ internships secured",
      "50+ youth-led projects funded",
      "80% employment rate among graduates"
    ],
    ongoing: true,
    startDate: "2021",
    coordinator: "Mr. Ademola Adedeji",
    contact: "youth@jbcibadan.org",
    gallery: ["/images/youth1.jpg", "/images/youth2.jpg", "/images/youth3.jpg"]
  },
  {
    id: 6,
    title: "Community Infrastructure",
    category: "infrastructure",
    icon: Building2,
    description: "Contributing to physical development through strategic infrastructure projects that enhance community wellbeing and economic activity.",
    fullDescription: "Our Community Infrastructure initiative identifies critical infrastructure gaps and mobilizes resources to address them. From road rehabilitation to public facility improvements, we work to enhance Ibadan's physical landscape.",
    image: "/images/infrastructure-initiative.jpg",
    impact: [
      "10km roads rehabilitated",
      "5 public facilities renovated",
      "50 streetlights installed",
      "3 community parks developed"
    ],
    ongoing: true,
    startDate: "2020",
    coordinator: "Mr. Adewale Oyeniyi",
    contact: "infrastructure@jbcibadan.org",
    gallery: ["/images/infra1.jpg", "/images/infra2.jpg", "/images/infra3.jpg"]
  },
  {
    id: 7,
    title: "Policy & Advocacy",
    category: "advocacy",
    icon: Shield,
    description: "Engaging with government and stakeholders to influence positive public policy and regulatory frameworks for business and community development.",
    fullDescription: "Through research, dialogue, and strategic engagement, we advocate for policies that foster economic growth, improve business environment, and enhance quality of life in Ibadan.",
    image: "/images/policy-initiative.jpg",
    impact: [
      "15 policy briefs published",
      "10 government engagements held",
      "5 policy recommendations adopted",
      "20 stakeholder roundtables"
    ],
    ongoing: true,
    startDate: "2019",
    coordinator: "Oloye Olukunle Oyewole",
    contact: "advocacy@jbcibadan.org",
    gallery: ["/images/policy1.jpg", "/images/policy2.jpg", "/images/policy3.jpg"]
  },
  {
    id: 8,
    title: "Business Mentorship Program",
    category: "business",
    icon: Lightbulb,
    description: "Connecting experienced JBC members with emerging business leaders for knowledge transfer, guidance, and strategic support.",
    fullDescription: "Our Business Mentorship Program pairs seasoned business leaders with promising entrepreneurs for one-on-one mentoring relationships focused on business growth, leadership development, and strategic decision-making.",
    image: "/images/mentorship-initiative.jpg",
    impact: [
      "100+ mentorship pairs",
      "80% business growth reported",
      "50+ new partnerships formed",
      "30 mentees launched successful ventures"
    ],
    ongoing: true,
    startDate: "2021",
    coordinator: "Mr. Tunji Waheed Gafaar",
    contact: "mentorship@jbcibadan.org",
    gallery: ["/images/mentor1.jpg", "/images/mentor2.jpg", "/images/mentor3.jpg"]
  }
];

const categories = [
  { id: "all", name: "All Initiatives", icon: Target },
  { id: "health", name: "Health", icon: Stethoscope },
  { id: "empowerment", name: "Empowerment", icon: Briefcase },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "summit", name: "Summit", icon: TrendingUp },
  { id: "youth", name: "Youth", icon: Users },
  { id: "infrastructure", name: "Infrastructure", icon: Building2 },
  { id: "advocacy", name: "Advocacy", icon: Shield },
  { id: "business", name: "Business", icon: Lightbulb }
];

// Success stories
// const successStories = [
//   {
//     name: "Adebayo Ogunlesi",
//     initiative: "Empowerment Scheme",
//     story: "Started as a small bakery owner, received business training and funding. Now employs 20 people and supplies to major supermarkets in Ibadan.",
//     image: "/images/story1.jpg",
//     quote: "JBC didn't just give me funds; they gave me the knowledge and confidence to grow my business."
//   },
//   {
//     name: "Folake Adeyemo",
//     initiative: "Scholarship Scheme",
//     story: "JBC scholar who graduated with First Class in Law. Now a practicing attorney and mentor to new scholars.",
//     image: "/images/story2.jpg",
//     quote: "The scholarship changed my life's trajectory. I'm now paying it forward by mentoring other young scholars."
//   },
//   {
//     name: "Dr. Olumide Akinyemi",
//     initiative: "Health Centres Support",
//     story: "Led a team that renovated a primary health centre now serving 5,000+ patients annually.",
//     image: "/images/story3.jpg",
//     quote: "Seeing the impact on our community's health outcomes is the greatest reward."
//   }
// ];

export default function InitiativesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInitiative, setSelectedInitiative] = useState<typeof initiativesData[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredInitiatives = selectedCategory === 'all' 
    ? initiativesData 
    : initiativesData.filter(initiative => initiative.category === selectedCategory);

  const openInitiativeModal = (initiative: typeof initiativesData[0]) => {
    setSelectedInitiative(initiative);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedInitiative(null);
    document.body.style.overflow = 'auto';
  };

  // Calculate total impact numbers
  const totalImpact = {
    livesImpacted: "10,000+",
    initiatives: initiativesData.length,
    communities: "25+",
    partners: "40+"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Initiatives
            </h1>
            <p className="text-xl md:text-2xl text-[#c6ddff] max-w-3xl mx-auto mb-8">
              Driving sustainable development and positive change across Ibadan through strategic interventions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#initiatives-grid"
                className="bg-white text-[#1466ff] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                Explore Our Work
                <ArrowRight size={20} className="ml-2" />
              </a>
              <Link 
                href="/jbc/join-us"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1466ff] transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                Support an Initiative
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through collective action and strategic interventions, we're making a measurable difference in Ibadanland
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1466ff]">{totalImpact.livesImpacted}</div>
              <div className="text-gray-600 mt-2">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1466ff]">{totalImpact.initiatives}</div>
              <div className="text-gray-600 mt-2">Active Initiatives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1466ff]">{totalImpact.communities}</div>
              <div className="text-gray-600 mt-2">Communities Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1466ff]">{totalImpact.partners}</div>
              <div className="text-gray-600 mt-2">Strategic Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid Section */}
      <section id="initiatives-grid" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  <Icon size={18} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Initiatives Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInitiatives.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={initiative.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
                  onClick={() => openInitiativeModal(initiative)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-[#1466ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-[#1466ff]" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1466ff] transition-colors">
                      {initiative.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {initiative.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>Since {initiative.startDate}</span>
                    </div>
                    
                    <button className="text-[#1466ff] font-semibold flex items-center group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredInitiatives.length === 0 && (
            <div className="text-center py-16">
              <Target size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">No initiatives found</h3>
              <p className="text-gray-500 mt-2">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Create Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures sustainable and measurable outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-[#1466ff]" />
              </div>
              <h3 className="font-bold text-lg mb-2">1. Identify Needs</h3>
              <p className="text-gray-600 text-sm">Community assessment and stakeholder engagement</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-[#1466ff]" />
              </div>
              <h3 className="font-bold text-lg mb-2">2. Strategic Planning</h3>
              <p className="text-gray-600 text-sm">Develop targeted interventions and partnerships</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart size={32} className="text-[#1466ff]" />
              </div>
              <h3 className="font-bold text-lg mb-2">3. Implementation</h3>
              <p className="text-gray-600 text-sm">Execute programs with expert oversight</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={32} className="text-[#1466ff]" />
              </div>
              <h3 className="font-bold text-lg mb-2">4. Monitor & Evaluate</h3>
              <p className="text-gray-600 text-sm">Track outcomes and measure impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-20 bg-gradient-to-br from-[#1466ff]/5 to-[#0d4dcc]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories of transformation through JBC initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1466ff]/20">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                  <p className="text-sm text-[#1466ff] font-semibold">{story.initiative}</p>
                </div>
                <p className="text-gray-600 text-sm italic text-center mb-3">"{story.quote}"</p>
                <p className="text-gray-500 text-sm text-center">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Collaborating with organizations that share our vision for Ibadan's development
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 opacity-50 hover:opacity-100 transition-opacity">
                <div className="h-16 flex items-center justify-center">
                  <Building2 size={48} className="text-gray-400" />
                </div>
                <p className="text-gray-500 text-center mt-2">Partner {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support Our Initiatives
          </h2>
          <p className="text-xl text-[#c6ddff] mb-8">
            Join us in making a lasting impact on Ibadanland. Your support can help transform lives and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jbc/join-us"
              className="bg-white text-[#1466ff] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
            >
              Become a Member
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href="/jbc/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1466ff] transition-all duration-300 inline-flex items-center justify-center"
            >
              Partner With Us
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for Initiative Details */}
      {showModal && selectedInitiative && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="sticky top-4 right-4 float-right z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
            >
              {/* <X size={24} className="text-gray-600" /> */}
            </button>
            
            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="mb-6">
                <div className="bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {selectedInitiative.icon && <selectedInitiative.icon size={32} className="text-[#1466ff]" />}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {selectedInitiative.title}
                </h2>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1" />
                  <span>Since {selectedInitiative.startDate}</span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedInitiative.image} 
                    alt={selectedInitiative.title}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle size={20} className="text-[#1466ff] mr-2" />
                      Key Impact Metrics
                    </h3>
                    <ul className="space-y-2">
                      {selectedInitiative.impact.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle size={14} className="text-[#1466ff] mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedInitiative.fullDescription}
                  </p>
                  
                  <div className="bg-gradient-to-br from-[#1466ff]/5 to-[#0d4dcc]/5 rounded-xl p-4 mb-4">
                    <h3 className="font-bold text-gray-900 mb-3">Program Coordinator</h3>
                    <p className="text-gray-700">{selectedInitiative.coordinator}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <Mail size={16} className="mr-2 text-[#1466ff]" />
                      {selectedInitiative.contact}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link
                      href="/jbc/join-us"
                      className="flex-1 bg-gradient-to-r from-[#1466ff] to-[#0d4dcc] text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                    >
                      Support This Initiative
                    </Link>
                    <Link
                      href="/jbc/contact"
                      className="flex-1 border-2 border-[#1466ff] text-[#1466ff] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#1466ff]/5 transition-all"
                    >
                      Partner With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}