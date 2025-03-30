import React from 'react';
import img1 from "@/public/Frame.png"
import Image from 'next/image';

const ReferralCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg mb-4 shadow-sm relative border p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between p-2 sm:p-4">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Invite and earn $25.00</h3>
          <p className="text-gray-600 mb-4">
            You can get $25.00 on your Expertbuddy Wallet for every friend you refer to us
          </p>
          
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <input 
                type="text" 
                value="https://my.assignment" 
                className="w-full sm:w-[300px] md:w-[350px] lg:w-[410px] border rounded-full py-3 px-4 border-purple-600"
                readOnly
              />
              {/* <button className="absolute left-90 top-3 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button> */}
            </div>
            
            <div className="flex space-x-2">
              <button className="bg-green-500 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </button>
              <button className="bg-blue-600 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
              <button className="bg-black text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </button>
            </div>
            
            <button className="border border-black text-gray-700 rounded-full py-2 px-6 w-max">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center mt-4 sm:mt-0">
          <Image 
            src={img1} 
            alt="Refer a friend" 
            className="w-32 h-32 lg:w-40 lg:h-40"
          />
        </div>
      </div>
      
      {/* More options button */}
      <button className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>
    </div>
  );
};

export default ReferralCard;
