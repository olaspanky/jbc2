import React from "react";
import {
  Zap,
  Users,
  Target,
  HandHeart,
  TrendingUp,
  Award,
  Quote,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Cta from "./CTAButton"

const Sub = () => {
  return (
    <div
      className="bg-[#F2F3F4] bg-cover bg-center py-16 px-4"
      //   style={{ backgroundImage: `url(/images/aibg.jpg)` }}
    >
      {/* Sub-Thematic Areas */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#00048f] mb-4">
            Sub-Thematic Areas
          </h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-3 lg:p-6  rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full lg:bg-blue-100 mr-4">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Technological Disruption and Workforce Evolution
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Exploring how emerging technologies like AI, robotics, and
              automation are transforming the nature of work. Focus areas will
              include workforce upskilling, digital integration in both formal
              and informal sectors, and building a resilient, future-ready labor
              market.
            </p>
          </div>
          <div className="bg-white p-3 lg:p-6  rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full lg:bg-blue-100 mr-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Digital Economy and Entrepreneurship
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Examining how Oyo State can leverage digital infrastructure to
              unlock entrepreneurship, drive innovation, and expand market
              access. Areas of focus include fintech, e-commerce, gig work, and
              removing barriers for youth and underserved entrepreneurs.
            </p>
          </div>
          <div className="bg-white p-3 lg:p-6  rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full lg:bg-blue-100 mr-4">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Education and Skills for the Future
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Addressing the need to reform education to match future workforce
              demands. Focus will be on critical thinking, creativity, digital
              literacy, curriculum reform, and strengthening vocational and
              lifelong learning systems.
            </p>
          </div>
          <div className="bg-white p-3 lg:p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full lg:bg-blue-100 mr-4">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Policy and Governance in the Digital Age
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Assessing how the government can adopt digital tools for smarter,
              more transparent governance. This will cover digital public
              services, data privacy, cybersecurity, and building institutional
              capacity for tech-driven policy-making.
            </p>
          </div>
        </div>
      </div>

      {/* Future-Ready Youth Digital Boot Camp */}
     
    </div>
  );
};

export default Sub;
