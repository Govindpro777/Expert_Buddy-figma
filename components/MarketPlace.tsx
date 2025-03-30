import React, { useState } from 'react';
import { Heart, ChevronRight, Calendar, UserPlus, ChevronDown, Search, Sliders } from 'lucide-react';
import Image from 'next/image';
import img1 from "@/public/image 344.png"
import img2 from "@/public/Group 316127895 (2).png"
import img3 from "@/public/Group 316127895 (3).png"
import img4 from "@/public/Mask group.png"
import img5 from "@/public/Frame 1171284878.png"
import img6 from "@/public/Group 316127881.png"
import img7 from "@/public/Group (1).png"

interface Tutor {
  name: string;
  verified: boolean;
  flag: string;
  experience: string;
  reviewCount: string;
  subjects: string;
  completed: string;
}

interface TutorCardProps {
  tutor: Tutor;
  price: string;
  paymentInfo?: string;
  responseTime?: string;
  imageIndex: number;
  isFirstCard?: boolean;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor, price, paymentInfo, responseTime, imageIndex, isFirstCard }) => {
  const getImage = (index: number) => {
    switch (index % 3) {
      case 0:
        return img1;
      case 1:
        return img2;
      case 2:
        return img3;
      default:
        return img1;
    }
  };

  return (
    <div className="relative flex flex-col p-4 border rounded-xl bg-white mb-4 z-1">
      {isFirstCard && (
        <div className="absolute -top-1 left-4 text-white text-xs px-2 py-0.5 bg-orange-500 rounded-b-sm">
          Best Offers
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        {/* Left section with tutor info */}
        <div className="flex flex-col sm:flex-row items-start gap-3 w-full mb-4 sm:mb-0">
          <div className="relative mb-3 sm:mb-0">
            <div className="w-full sm:w-38 h-42 rounded-md overflow-hidden">
              <Image
                src={getImage(imageIndex)}
                alt={tutor.name}
                className="w-full sm:w-38 h-42 object-cover"
                width={64}
                height={64}
              />
            </div>
            {/* <div className="absolute -top-1 -left-1 w-5 h-5 flex items-center justify-center rounded-md bg-green-500 text-white text-xs">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div> */}
          </div>

          <div className="w-full sm:w-auto">
            <div className="flex items-center gap-1">
              <p className="font-semibold text-lg">Parvipan Deep S.</p>
              {/* <img src="/usa-flag.png" alt="USA flag" className="h-5 w-7 ml-1" /> */}
              <span className="text-blue-500 text-lg ml-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-1">
              <div className="text-sm font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">SUPER TUTOR</div>
              <div className="text-sm text-orange-500 font-medium">15 Year of exp. overall</div>
            </div>

            <div className="flex items-center gap-1 mt-1">
              <div className="flex text-yellow-400">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <span className="font-bold text-lg">5.0</span>
              <span className="text-gray-500 text-sm">(298 Reviews)</span>
            </div>

            <div className="text-sm text-gray-600 mt-1 max-w-xs leading-tight">
              <span className="text-amber-500">🔥</span> CELTA Certified English Pro With 10+ Years Exp. <span className="ml-1">🇺🇸🌟</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              4000+ Xpertbuddy Lessons <span className="text-amber-500">⭐</span> General, Business, Exams, Young Learners <span className="ml-1">🇺🇸</span>
            </div>

            <div className="text-sm text-gray-500 mt-2">Completed <span className="font-bold">31 Criminology</span> projects out of <span className="font-bold">1240</span></div>
          </div>
        </div>

        {/* Right section with price and buttons */}
        <div className="flex flex-col items-center sm:items-end gap-2 min-w-fit sm:ml-2 w-full sm:w-auto">
          <button className="border-none bg-transparent p-0 mb-1 self-end">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-300">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <div className="text-center sm:text-right">
            <div className="text-gray-600 text-sm">Price</div>
            <div className="font-bold text-2xl">{price}</div>
            {paymentInfo && (
              <div className="text-sm text-gray-600 mt-1">
                Pay now only <span className="font-bold">$36</span>
                <span className="ml-1 bg-purple-600 text-white rounded-full w-4 h-4 inline-flex items-center justify-center text-xs font-bold">?</span>
              </div>
            )}
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-3 text-sm font-medium w-full mt-2 mb-2">
            {price === "Price Not Set" ? "Request a Price" : "Hire This Expert"}
          </button>

          <button className="text-purple-600 border border-purple-200 bg-white hover:bg-purple-50 rounded-full px-6 py-2.5 text-sm w-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-purple-600 mr-2">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  return (
    <>
      <div className="bg-[#f1efeb] p-4 h-full mb-14 mt-4 sm:mt-0">
        <div className="bg-white p-4 h-full mb-4 mt-4 sm:mt-0 rounded-3xl">
          <div className="flex items-center mb-4 ">
            <Image src={img5} alt="img4" className="w-7 h-7 mr-2" />
            <p className="font-medium text-sm sm:text-base">Attach a File</p>
          </div>

          <h2 className="text-xl font-bold mb-4">Project Details</h2>

          <div className="mb-4">
            <label className="block text-sm mb-1">Subject Area</label>
            <div className="border rounded-md p-2.5 flex justify-between items-center">
              <span className="text-gray-400 text-sm">Enter subject area</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Project Type</label>
            <div className="border rounded-md p-2.5 flex justify-between items-center">
              <span className="text-gray-400 text-sm">Enter project type</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-md p-3 mb-4">
            <div className="flex items-center text-purple-600 font-medium mb-2">
              <div className="mr-2">⚡</div>
              <span>Express Project</span>
              <div className="ml-auto">ⓘ</div>
            </div>

            <div>
              <label className="block text-sm mb-1">Deadline</label>
              <div className="bg-white border rounded-md p-2.5 flex justify-between items-center">
                <span className="text-gray-600 text-sm">01.28.2025 10 pm</span>
                <Calendar size={16} className="text-purple-500" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Number of words</label>
            <input
              type="text"
              className="border rounded-md p-2.5 w-full"
              value="1100 words"
              readOnly
            />
          </div>

          <div className="text-purple-600 text-right mb-6">More</div>

          <button className="bg-gray-900 text-white rounded-full py-3 w-full mb-8">
            Edit Details
          </button>
        </div>

        <div className="bg-white p-4 h-full mb-4 mt-4 sm:mt-0 rounded-3xl">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-2">
              <div className="text-purple-600 text-3xl">
                <UserPlus size={32} className="mx-auto text-purple-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold">Need <span className="text-purple-600">More Tutor</span></h3>
            <h3 className="text-lg font-bold mb-1">Options?</h3>
            <p className="text-sm text-gray-600 mb-4">Invite top tutors to help with your assignment</p>

            <button className="bg-pink-400 text-white rounded-full py-2.5 px-6 flex items-center justify-center mx-auto">
              Invite Tutors
              <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
        </div>

        <div className="bg-[#f1efeb] p-0 h-full mb-4 mt-4 sm:mt-0">
          <div className="bg-pink-400 rounded-xl p-4 text-center text-white mb-6">
            <h3 className="font-bold text-lg mb-1">Track Your Order Through The App!</h3>
            <p className="mb-4">Get $20 bonus on your first project via app</p>

            <div className="bg-white p-4 rounded-lg mb-3">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <div>9:41</div>
                <div className="flex items-center">
                  <span className="mr-1">•••</span>
                  <span>5G</span>
                </div>
              </div>

              <div className="flex justify-center">
                <Image src={img6} alt="QR Code" className="w-28 h-18 mx-auto mb-2" />
              </div>

              <div className="flex justify-center mb-4">
                <Image src={img4} alt="QR Code" className="w-32 h-32" />
              </div>

              <button className="border border-gray-300 rounded-full py-2 px-4 mx-auto block text-gray-700">
                Download App
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#f1efeb] p-0 h-full mb-4 mt-4 sm:mt-0">
          <div className="bg-purple-600 rounded-t-xl text-white p-3 flex justify-between items-center">
            <div className="font-semibold">Chats</div>
            <ChevronDown size={18} />
          </div>

          <div className="border-x border-b rounded-b-xl bg-white">
            <div className="flex items-center p-3 border-b">
              <Search size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search by Name"
                className="flex-1 outline-none text-sm"
              />
              <button className="flex items-center text-gray-600 text-sm">
                <Sliders size={14} className="mr-1" />
                Filter
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto">
              {[
                { name: "Aspen Stanton", verified: true, rating: 4.5, message: "Hello...", price: "Price Not Set", bestOffer: true, imageIndex: 0 },
                { name: "Parvipan Deep S.", rating: 4.5, message: "Hello...", price: "$219", imageIndex: 1 },
                { name: "Emerson Rhiel Madsen", rating: 4.5, message: "Hello...", price: "$219", imageIndex: 2 },
                { name: "Jakob Torff", verified: true, rating: 4.5, message: "Hello...", price: "$219", imageIndex: 0 },
                { name: "Cooper George", rating: 4.5, message: "Hello...", price: "$219", imageIndex: 1 }
              ].map((chat, index) => (
                <div key={index} className="flex items-center justify-between p-3 border-b">
                  <div className="flex items-center">
                    <div className="relative w-8 h-8 mr-2">
                      <Image
                        src={chat.imageIndex === 0 ? img1 : chat.imageIndex === 1 ? img2 : img3}
                        alt={chat.name}
                        className="rounded-full object-cover"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-sm">{chat.name}</span>
                        {chat.verified && <span className="text-blue-500 text-xs ml-1">✓</span>}
                        {chat.bestOffer && <span className="text-green-500 text-xs ml-2 font-bold">Best Offer</span>}
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-xs text-gray-600 mr-2">{chat.rating}</span>
                        <span className="text-xs text-gray-500">{chat.message}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">{chat.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TutoringMarketplace = () => {
  const tutors = [
    {
      name: "Parvipan Deep S.",
      verified: true,
      flag: "US",
      experience: "10 Year of exp. overall",
      reviewCount: "208",
      subjects: "UCLA Certified English Pro With 10+ Years Exp 🎓💯 ADHD Specialist / Creator of Spreaker Bachelor Exams",
      price: "$90",
      paymentInfo: "Pay now only $45",
      responseTime: "",
      completed: "21 Community projects out of 1240"
    },
    {
      name: "Aspen Stanton",
      verified: true,
      flag: "US",
      experience: "10 Year of exp. overall",
      reviewCount: "208",
      subjects: "Bachelor Science",
      price: "Price Not Set",
      paymentInfo: "",
      responseTime: "",
      completed: "21 Community projects out of 1240"
    },
    {
      name: "Jakob Torff",
      verified: true,
      flag: "US",
      experience: "10 Year of exp. overall",
      reviewCount: "208",
      subjects: "UCLA Certified English Pro With 10+ Years Exp 🎓💯 ADHD Specialist",
      price: "$90",
      paymentInfo: "Pay now only $45",
      responseTime: "",
      completed: "21 Community projects out of 1240"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-[#f1efeb] flex flex-col lg:flex-row">
      {/* Main tutoring marketplace - takes 2/3 on desktop */}
      <div className="w-full lg:w-2/3 lg:border-r z-30 px-2 sm:px-4 lg:px-0">
        <div className="pt-1 bg-orange-400 mb-0.5 relative">
          {/* Best Offers indicator moved to the first card */}
        </div>

        {tutors.map((tutor, index) => (
          <TutorCard
            key={index}
            tutor={tutor}
            price={tutor.price}
            paymentInfo={tutor.paymentInfo}
            responseTime={tutor.responseTime}
            imageIndex={index}
            isFirstCard={index === 0} // Only first card gets the badge
          />
        ))}

        <div className="mt-4 mb-4 flex flex-col md:flex-row justify-between items-center p-4 sm:p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Can't Pick the Right Expert?</h2>
            <p className="text-gray-700 mb-4">Our support team is here to help you make this decision 👍</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-3 font-medium w-full md:w-auto">
              Contact Support
            </button>
          </div>
          <div className="hidden md:block">
            <Image src={img7} alt="Support representative at desk" className="h-32 w-auto" />
          </div>
        </div>

        {tutors.map((tutor, index) => (
          <TutorCard
            key={`second-${index}`}
            tutor={tutor}
            price={tutor.price}
            paymentInfo={tutor.paymentInfo}
            responseTime={tutor.responseTime}
            imageIndex={index}
            isFirstCard={false} // No badge for these cards
          />
        ))}

        <div className="mt-4 mb-4 flex flex-col sm:flex-row items-center p-4 sm:p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="bg-purple-100 p-4 rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0">
            <div className="bg-purple-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
              2x
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Get More Offers With a Project Promotion!</h2>
            <p className="text-gray-600 mb-3">Use a Project Promotion to bring in twice the offers.</p>

            <button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-5 py-2 font-medium flex items-center justify-center sm:justify-start w-full sm:w-auto">
              Get More Offers
              <span className="ml-2 bg-purple-600 text-white text-sm px-2 py-1 rounded-full">$5</span>
            </button>
          </div>
        </div>

        <div className="mb-10 flex rounded-xl flex-wrap items-center justify-center gap-1 py-4 text-sm text-gray-600 bg-white">
          <span className="px-2 my-1">« First</span>
          <span className="px-2 my-1">« Back</span>
          <span className="px-2 my-1">1</span>
          <span className="bg-purple-600 text-white rounded-full px-3 py-1 my-1">2</span>
          <span className="px-2 my-1">3</span>
          <span className="px-2 my-1">4</span>
          <span className="px-2 my-1">...</span>
          <span className="px-2 my-1">25</span>
          <span className="px-2 my-1">Next »</span>
          <span className="px-2 my-1">Last »</span>
        </div>
      </div>

      {/* Right sidebar for project details - takes 1/3 on desktop */}
      <div className="w-full lg:w-1/3 lg:ml-4 px-4 lg:px-0 sticky top-0 self-start">
        <ProjectDetails />
      </div>
    </div>
  );
};

export default TutoringMarketplace;