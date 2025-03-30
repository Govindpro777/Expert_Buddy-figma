import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import crown from "@/public/Vector.png"
import Image from 'next/image';
import country from "@/public/countrylogo.png"

const ClaimOfferPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="py-8 sm:py-12 md:py-16 bg-[#f5f3ef] flex items-center justify-center p-4">
      <div className="bg-[#eabaff] w-full max-w-6xl rounded-3xl overflow-hidden flex flex-col md:flex-row p-6 sm:p-8 md:p-10 lg:p-14 h-auto md:h-[380px]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between md:pr-6 lg:pr-14 mb-6 md:mb-0">
          <div>
            <div className="flex items-center mb-4">
              <Image src={crown} alt="crown" className="w-8 h-8 relative left-4 -top-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-publack">Claim Your Offer</h2>
            </div>
            
            <p className="text-black mb-6 text-sm sm:text-base">
              Hello, we have a special ongoing offer for our new customers to avail 30% OFF & 150% Cashback on their first assignment with us. We are committed to delivering the premium service despite an affordable price. Enter your phone number below to get the coupon code. (we do not spam)
            </p>
          </div>
          
          <div className="mt-4 md:mt-auto">
            <p className="font-semibold text-black">Susan White</p>
            <p className="text-black-sm text-black text-sm">Head Of sales Departments</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-publack mb-4">
            30% OFF & 150% Cashback<br/>
            On Your First Order!
          </h1>
          
          <p className="text-black mb-4 text-sm sm:text-base">
            Type your WhatsApp Number to get an exclusive Code.
          </p>
          
          <div className="mb-4">
            <div className="flex rounded-full border border-gray-300 bg-white overflow-hidden">
              <div className="relative flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-white border-r border-gray-300">
                <div className="flex items-center space-x-2">
                  <Image 
                    src={country} 
                    alt="country" 
                    className="w-6 h-6 sm:w-6 sm:h-4 object-contain" 
                  />
                  <span className="text-black text-sm sm:text-base font-medium">+1</span>
                  <ChevronDown className="text-black" size={16} />
                </div>
              </div>
              <input
                type="tel"
                placeholder="Enter your whatsapp number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-grow px-4 sm:px-6 py-2 sm:py-3 outline-none text-black bg-white text-sm sm:text-base placeholder-gray-400"
              />
            </div>
          </div>
          
          <button 
            className="w-full bg-[#a414d5] text-black py-2 sm:py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold text-sm sm:text-base"
          >
            Get Offer on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimOfferPage;