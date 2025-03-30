"use client"

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ProjectCard from '@/app/activeprojects/ProjectCard';
import ReferralCard from '@/app/activeprojects/ReferalCard';
import { Calendar } from "@/components/ui/calendar"
import img1 from "@/public/Group 316127895.png"
import Image from 'next/image';
import crown from "@/public/Vector.png"
import img2 from "@/public/Group 316127895 (3).png"
import img3 from "@/public/Group 316127895 (2).png"

type ProjectStatus = 'At the Auction' | 'Drafts' | 'Revision' | 'In Process' | 'Completed' | 'Under warranty';

type ButtonTab = 'All' | 'At the Auction' | 'In Process' | 'Under Warranty' | 'Completed';

const ActiveProjects: React.FC = () => {
  // State to track which button is active
  const [activeTab, setActiveTab] = useState<ButtonTab>('All');

  const projects = [
    {
      status: 'At the Auction' as ProjectStatus,
      statusCount: 1,
      deadline: 'January 31, 2025, 11:30 Am',
      id: '3744728',
      title: 'lorem ipsum',
      category: 'Criminology, Personal Statement',
      bid: {
        count: 1,
        price: '$90',
        isBestOffer: true
      }
    },
    {
      status: 'Drafts' as ProjectStatus,
      statusCount: 1,
      deadline: 'January 31, 2025, 11:30 Am',
      id: '3744728',
      title: 'lorem ipsum',
      category: 'Criminology, Personal Statement',
      files: [{ id: 1 }],
      bid: {
        count: 55,
        price: '$50-$69',
        isBestOffer: true
      }
    },
    {
      status: 'Revision' as ProjectStatus,
      statusCount: 1,
      deadline: 'January 31, 2025, 11:30 Am',
      id: '3744728',
      title: 'lorem ipsum',
      category: 'Criminology, Personal Statement',
      files: [{ id: 1 }],
      bid: {
        expert: {
          name: 'Hillary A',
          price: '50',
          avatarUrl: img2
        }
      }
    },
    {
      status: 'In Process' as ProjectStatus,
      statusCount: 1,
      deadline: 'January 31, 2025, 11:30 Am',
      id: '3744728',
      title: 'lorem ipsum',
      category: 'Criminology, Personal Statement',
      files: [{ id: 1 }],
      bid: {
        expert: {
          name: 'Hillary A',
          price: '50',
          avatarUrl: img3
        }
      }
    },
    {
      status: 'Completed' as ProjectStatus,
      statusCount: 2,
      deadline: 'January 31, 2025, 11:30 Am',
      id: '3744728',
      title: 'lorem ipsum',
      category: 'Criminology, Personal Statement',
      files: [{ id: 1 }],
      bid: {
        count: 55,
        price: '$50-$69',
        isBestOffer: true
      }
    },
    {
      status: 'Under warranty' as ProjectStatus,
      statusCount: 1,
      deadline: 'January 31, 2025, 11:30 Am',
      id: '3744728',
      title: 'lorem ipsum',
      category: 'Criminology, Personal Statement',
      files: [{ id: 1 }],
      bid: {
        expert: {
          name: 'Hillary A',
          price: '50',
          avatarUrl: img2
        }
      }
    },
    {
      status: 'Completed' as ProjectStatus,
      statusCount: 2,
      deadline: 'January 31, 2025, 11:30 Am',
      id: '3744728',
      title: 'lorem ipsum',
      category: 'Criminology, Personal Statement',
      files: [{ id: 1 }],
      ratings: 5,
      bid: {
        count: 55,
        price: '$50-$69',
        isBestOffer: true
      }
    }
  ];

  // Function to handle button click
  const handleTabClick = (tab: ButtonTab) => {
    setActiveTab(tab);
  };

  // Helper function to get button styles based on active state
  const getButtonStyles = (tab: ButtonTab) => {
    if (tab === activeTab) {
      return "py-2 px-3 sm:px-4 font-medium border-b-2 border-purple-600 text-purple-600 bg-purple-50 rounded-t-lg mr-1 whitespace-nowrap text-sm sm:text-base";
    }
    return "py-2 px-3 sm:px-4 text-gray-500 hover:bg-gray-50 mr-1 whitespace-nowrap text-sm sm:text-base";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-3 sm:p-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left side - Main content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <div className="flex flex-col items-center mb-4 sm:mb-0">
                <Image src={crown} alt="Crown" className="w-6 h-6 -left-20 relative" />
                <h1 className="text-xl sm:text-2xl font-bold ml-1">Active Projects</h1>
              </div>
              <a href="#" className="text-sm text-gray-600 hover:underline">View all projects</a>
            </div>
            
            <div className="overflow-x-auto">
              <div className="flex border-b mb-6 overflow-x-auto">
                <button 
                  className={getButtonStyles('All')}
                  onClick={() => handleTabClick('All')}
                >
                  All (7)
                </button>
                <button 
                  className={getButtonStyles('At the Auction')}
                  onClick={() => handleTabClick('At the Auction')}
                >
                  At the Auction (1)
                </button>
                <button 
                  className={getButtonStyles('In Process')}
                  onClick={() => handleTabClick('In Process')}
                >
                  In Process (1)
                </button>
                <button 
                  className={getButtonStyles('Under Warranty')}
                  onClick={() => handleTabClick('Under Warranty')}
                >
                  Under Warranty (1)
                </button>
                <button 
                  className={getButtonStyles('Completed')}
                  onClick={() => handleTabClick('Completed')}
                >
                  Completed (2)
                </button>
              </div>

              <div className="flex flex-col sm:flex-row mb-6">
                <div className="relative flex-grow mb-2 sm:mb-0 sm:mr-2">
                  <input
                    type="text"
                    placeholder="Search by Name, Description, or Tutor Name"
                    className="w-full p-2 pl-10 border rounded-lg"
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <Search size={18} />
                  </div>
                </div>
                <button className="px-6 py-2 bg-gray-900 text-white rounded-lg w-full sm:w-auto">
                  Search
                </button>
              </div>

              <div className="flex items-center mb-4">
                <span className="mr-2 text-gray-600">Subject</span>
                <button className="flex items-center px-3 py-1 bg-white border rounded-md">
                  <span className="mr-2">Maths</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Project cards section */}
          <div>
            {projects
              .filter(project => activeTab === 'All' || activeTab === project.status)
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            
            {/* Referral card at the bottom */}
            <ReferralCard />
          </div>
        </div>

        {/* Right side - Notifications */}
        <div className="w-full lg:w-72">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 pb-3">
              <div className="flex items-center">
                <div className="relative mr-3">
                  <Image src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <h2 className="text-lg font-semibold">Aspen Stanton</h2>
              </div>
            </div>
            
            <div className="px-4 pb-2 flex justify-between items-center">
              <span className="font-medium text-base">Notifications</span>
              <a href="#" className="text-sm text-gray-600 hover:underline">View all</a>
            </div>
            
            <hr className="border-gray-200" />
            
            <div className="p-4 text-center text-gray-500 text-sm">
              No new notifications
            </div>
          </div>
          <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
            <div className="w-full overflow-x-auto">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;