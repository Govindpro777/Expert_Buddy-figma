import React from 'react';
import Image from 'next/image';

import trustpilotImage from "@/public/expert.png"
import sitejabberImage from "@/public/logo_light.1729398987 1.png"
import expertBuddyImage from "@/public/unnamed 2.png"

const ReviewRatings = () => {
  return (
    <div className="bg-white rounded-lg px-4 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto shadow-sm mt-8 mb-8 md:mt-12 md:mb-12 gap-6 md:gap-0 ">
      <div className="text-gray-700 font-medium text-base text-center md:text-left">
        150+ Students 
        <br />
        Trusted Us To Write Their Papers
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:space-x-4 md:space-x-8">
        {/* Trustpilot Section */}
        <div className="flex items-center space-x-3">
          <Image 
            src={trustpilotImage} 
            alt="Trustpilot Logo" 
            width={28}
            height={28}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold mb-1">Trustpilot</span>
            <div className="flex text-green-500 mb-1">
              {[1,2,3,4,5].map((star) => (
                <svg 
                  key={star} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill={star <= 4 ? "currentColor" : "none"}
                  stroke="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                
              ))}
               <span className="text-sm text-gray-600 ml-1">4.7</span>
            </div>
           
          </div>
        </div>

        {/* Sitejabber Section */}
        <div className="flex items-center space-x-3">
          <Image 
            src={sitejabberImage} 
            alt="Sitejabber Logo" 
            width={28}
            height={28}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold mb-1">Sitejabber</span>
            <div className="flex text-orange-500 mb-1">
              {[1,2,3,4,5].map((star) => (
                <svg 
                  key={star} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill={star <= 4 ? "currentColor" : "none"}
                  stroke="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            <span className="text-sm text-gray-600 ml-1">4.0</span>
            </div>
          </div>
        </div>

        {/* ExpertBuddy Section */}
        <div className="flex items-center space-x-3">
          <Image 
            src={expertBuddyImage} 
            alt="ExpertBuddy Logo" 
            width={28}
            height={28}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold mb-1">ExpertBuddy</span>
            <div className="flex text-yellow-500 mb-1">
              {[1,2,3,4,5].map((star) => (
                <svg 
                  key={star} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            <span className="text-sm text-gray-600 ml-1">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewRatings;