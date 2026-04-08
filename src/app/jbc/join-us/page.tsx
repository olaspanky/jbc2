// app/jbc/join-us/page.tsx
'use client';

import Link from "next/link";
import React, { useState } from 'react';
import { 
  ChevronRight, ArrowRight, CheckCircle, Users, Target, Heart, 
  Award, Briefcase, UserCheck, FileText, Send, MapPin, Mail, Phone,
  Calendar, Clock, Coffee, HandshakeIcon, GraduationCap, Building2
} from 'lucide-react';

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    occupation: '',
    company: '',
    reason: '',
    hearAbout: '',
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual endpoint
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        occupation: '',
        company: '',
        reason: '',
        hearAbout: '',
        agreeTerms: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const benefits = [
    {
      icon: Users,
      title: "Premium Network",
      description: "Connect with accomplished Ibadan professionals across diverse industries"
    },
    {
      icon: Target,
      title: "Business Growth",
      description: "Access strategic partnerships and business development opportunities"
    },
    {
      icon: Award,
      title: "Leadership Development",
      description: "Enhance your leadership skills through exclusive programs and mentorship"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Contribute meaningfully to Ibadan's economic and social development"
    },
    {
      icon: HandshakeIcon,
      title: "Strategic Alliances",
      description: "Form partnerships with like-minded business leaders and organizations"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Access seminars, workshops, and knowledge-sharing sessions"
    }
  ];

  const requirements = [
    "Must be a son of Ibadanland",
    "Proven track record in business or profession",
    "Commitment to community development",
    "Willingness to actively participate in club activities",
    "Sponsorship by at least two existing members",
    "Clearance by the Membership Committee"
  ];

  const processSteps = [
    { step: 1, title: "Expression of Interest", icon: FileText, description: "Submit your application with personal and professional details" },
    { step: 2, title: "Initial Screening", icon: UserCheck, description: "Membership committee reviews your application" },
    { step: 3, title: "Interview", icon: Users, description: "Meet with the membership committee for an interactive session" },
    { step: 4, title: "Approval", icon: CheckCircle, description: "Final approval by the Executive Committee" },
    { step: 5, title: "Induction", icon: Award, description: "Official induction into Jericho Businessmen Club Ibadan" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Jericho Businessmen Club Ibadan
            </h1>
            <p className="text-xl md:text-2xl text-[#c6ddff] max-w-3xl mx-auto mb-8">
              Become part of a distinguished community of accomplished Ibadan sons 
              committed to excellence, leadership, and community transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#application-form"
                className="bg-white text-[#1466ff] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                Apply Now
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="#membership-info"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1466ff] transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                Learn More
                <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="membership-info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join JBC Ibadan?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Membership in Jericho Businessmen Club Ibadan offers unparalleled opportunities 
              for professional growth, meaningful connections, and lasting community impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-[#c6ddff] to-[#1466ff]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-[#1466ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1466ff] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#1466ff] to-[#0d4dcc] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-10 text-[#c6ddff]">
              Our membership team is ready to assist you with any inquiries
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
                <p className="text-[#c6ddff] text-sm">membership@jbcibadan.org</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <Phone size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-[#c6ddff] text-sm">+234 802 345 6789</p>
              </div>
            </div>
            <Link
              href="/jbc/contact"
              className="inline-flex items-center bg-white text-[#1466ff] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              Contact Membership Team
              <ArrowRight size={20} className="ml-2" />
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
      `}</style>
    </div>
  );
}