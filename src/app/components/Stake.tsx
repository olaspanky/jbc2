'use client';

import React from 'react';
import { Users, TrendingUp, Shield, Building2, MapPin, Briefcase, MessageSquare, Globe } from 'lucide-react';

export default function StakeholdersStrategyPage() {
  const stakeholders = [
    {
      icon: Users,
      title: "Members",
      description: "JBC will act as a vehicle for its members to achieve self-actualisation. The club will enable members to gain access to, and develop deep relationship with other successful Ibadan Indigenes and provide them with a platform to partake in the socio-economic development of Ibadan. The club will also provide a platform for attaining relevance in both social and public policy areas."
    },
    {
      icon: TrendingUp,
      title: "Active Indigents",
      description: "JBC intends to make available to them the tools, knowledge, and capital necessary to grow their business sustainably. This initiative will not be run as a charity, but rather as a self-sustaining, professionally managed business support program."
    },
    {
      icon: Shield,
      title: "Vulnerable Indigents",
      description: "JBC provides a platform for this sub-segment to achieve self-development. The initiative will continue to support academically gifted individuals who may find it impossible to fund their tertiary education."
    },
    {
      icon: Building2,
      title: "Oyo State Government",
      description: "JBC intends to act as a platform for channelling the impressive intellectual capital of its members towards providing credible public policy advice to any administration in Oyo state regardless of its political affiliating."
    },
    {
      icon: MapPin,
      title: "Ibadan City",
      description: "JBC intends to be the leading platform for articulation an integrated development plan for Ibadan land and also driving the development agenda through very robust advocacy."
    }
  ];

  const themes = [
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "This refers to how JBC intends to support the indigent (both active and vulnerable) of Ibadan land.",
      color: "from-[#0d4dcc] to-[#0d4dcc]"
    },
    {
      icon: MessageSquare,
      title: "Public Policy and Political Influence",
      description: "This theme deals with how JBC intends to positively influence the policies of the state Government towards the progress of its citizen",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Globe,
      title: "Socio-Cultural Development",
      description: "This theme is focused on defining how JBC will participate in the development of Ibadan Land.",
      color: "from-[#0d4dcc] to-blue-600"
    },
    {
      icon: Users,
      title: "Business Networking",
      description: "This theme is focused on defining how JBC will deliver to its members the articulated benefits of membership.",
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stakeholders Strategy Articulation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to serving all stakeholders and driving Ibadan's development
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Stakeholders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding and serving the diverse groups that form our ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {stakeholders.map((stakeholder, index) => {
              const Icon = stakeholder.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1466ff]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-[#0d4dcc] to-[#0d4dcc] p-3 rounded-xl flex-shrink-0">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{stakeholder.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{stakeholder.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Themes Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Four Strategic Themes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In order to ensure that the articulated strategy is efficiently implemented, four themes which will 
              impact on all JBC's stakeholders segment shall be our focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {themes.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#1466ff]"
                >
                  <div className={`bg-gradient-to-r ${theme.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{theme.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{theme.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#0d4dcc] to-emerald-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Commitment</h3>
                <p className="text-xl leading-relaxed mb-4">
                  Through these strategic themes and stakeholder-focused approach, JBC is committed to creating 
                  sustainable impact across all segments of Ibadan society.
                </p>
                <p className="text-[#1466ff] text-lg">
                  Building a prosperous future for Ibadan, one initiative at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}