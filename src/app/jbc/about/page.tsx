// app/jbc/about/page.tsx (enhanced version)
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import WhoWeArePage from '@/app/components/Wwe';
import HistoryPage from '@/app/components/History';
import StakeholdersStrategyPage from '@/app/components/Stake';
import ProjectsActivitiesPage from '@/app/components/Projects';

const sectionTitles = {
  whoweare: 'Who We Are',
  history: 'Our History',
  stake: 'Stakeholders & Strategy',
  projects: 'Projects & Activities'
};

const AboutContent = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get('section') || 'whoweare';

  const renderSection = () => {
    switch (section) {
      case 'whoweare':
        return <WhoWeArePage />;
      case 'history':
        return <HistoryPage />;
      case 'stake':
        return <StakeholdersStrategyPage />;
      case 'projects':
        return <ProjectsActivitiesPage />;
      default:
        return <WhoWeArePage />;
    }
  };

  return (
    <div>
      {/* Optional breadcrumb or title */}
      <div className="bg-emerald-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-[#0d4dcc] mb-1">About</p>
          <h1 className="text-2xl font-bold text-gray-900">
            {sectionTitles[section as keyof typeof sectionTitles]}
          </h1>
        </div>
      </div>
      
      {renderSection()}
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#0d4dcc]">Loading...</div>
      </div>
    }>
      <AboutContent />
    </Suspense>
  );
};

export default Page;