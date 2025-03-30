import React, { useState } from 'react';
import Image from 'next/image';
import crown from "@/public/Vector.png";
import Img1 from "@/public/image.png";
import Img2 from "@/public/image (1).png";
import Img3 from "@/public/image (2).png";

const ExpertLandingPage = () => {
  const [projectName, setProjectName] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f266cd] to-[#f266cd] flex flex-col mt-12">
      <div className="container mx-auto px-4 py-8 md:py-16 flex-grow flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-black md:ml-0 lg:ml-12 mb-8 md:mb-0">
          <div className="relative">
            <Image 
              src={crown} 
              alt="Crown" 
              className="absolute -top-6 md:-top-10 -left-4 md:-left-12 w-12 md:w-20 opacity-70"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Reach Out to the Expert Now</h1>
          </div>
          
          <p className="text-lg md:text-xl mb-6 md:mb-10 pr-0 md:pr-16">
            Chat with the expert directly, discuss your project in detail, 
            and get professional academic assistance by the deadline.
          </p>
          
          <div className="space-y-4 max-w-lg">
            <input 
              type="text"
              placeholder="Personal Self-Care Plan"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-gray-800"
            />
            
            <div className="relative">
              <input 
                type="text"
                placeholder="Choose Deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span>
            </div>
            
            <button className="w-[200px] bg-black text-white py-3 rounded-3xl hover:bg-gray-900 transition">
              Find an Expert
            </button>
          </div>
        </div>
        
        {/* Right Images Structure - Modified to match screenshot */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative md:mr-0 lg:mr-12">
          {/* Top right image */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden">
            <Image 
              src={Img1} 
              alt="Expert Image 1" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Bottom left image */}
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden">
            <Image 
              src={Img3} 
              alt="Expert Image 3" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Center image */}
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden mx-auto my-16">
            <Image 
              src={Img2} 
              alt="Expert Image 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Features Section - Updated to match screenshot */}
      <div className="bg-white py-8 md:py-12 rounded-t-3xl">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="flex flex-col items-center text-purple-900">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#800080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                <path d="M12 2v1"></path>
                <path d="M12 21v1"></path>
                <path d="M20 12h1"></path>
                <path d="M3 12h1"></path>
              </svg>
            </div>
            <span className="font-semibold text-lg">Money-Back Guarantee</span>
          </div>
          
          <div className="flex flex-col items-center text-purple-900">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#800080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#800080">24/7</text>
              </svg>
            </div>
            <span className="font-semibold text-lg">Support 24/7</span>
          </div>
          
          <div className="flex flex-col items-center text-purple-900">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#800080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <span className="font-semibold text-lg">No Hidden Charges</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertLandingPage;