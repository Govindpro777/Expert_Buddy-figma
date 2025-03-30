// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import crown from "@/public/Vector.png"
// import Image from 'next/image';


// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
//   return (
//     <div className="w-full md:w-[calc(50%-16px)] flex-shrink-0 bg-white rounded-lg shadow-sm p-6 mx-2">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
// };

// interface CrownIconProps {
//   className?: string;
// }

// const CrownIcon: React.FC<CrownIconProps> = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} width="40" height="40">
//     <path d="M2.5 5.6c0 .4.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8c-.5 0-.8.4-.8.8zm19 10.4l-2.8-10.4-4.6 4.8L12 5.5l-2.2 4.9L5.3 5.6 2.5 16h19z" />
//   </svg>
// );

// const ExpertBuddyCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const features = [
//     {
//       icon: <NetworkIcon />,
//       title: "Huge Community of Experts",
//       description: "We bring together verified college professors, practicing scientists, independent researchers, freelance journalists, essay writers, and thousands of other experts in different fields of study, not only from the USA, but from all over the world. They are ready to share their knowledge and provide you with professional assignment help."
//     },
//     {
//       icon: <PriceIcon />,
//       title: "Affordable Prices",
//       description: "As a strong team of developers, we use high-tech solutions such as AI-based tools to cover various parts of the process of each project. For example, we automate and optimize plagiarism checking and grammar checking, which lets us offer students assistance of exceptional quality rather than just cheap homework assignment help."
//     },
//     {
//       icon: <SecurityIcon />,
//       title: "Data Security",
//       description: "We care about your security therefore we encrypt all private chats to make sure your data will stay using encryption. In our work we use several cloud servers that are compliant to GDPR and other international standards."
//     },
//     {
//       icon: <PaymentIcon />,
//       title: "Safe Payment Methods",
//       description: "You can use convenient, modern, and safe payment tools and solutions, such as credit, debit, and cryptocurrency for payments and withdrawals, and we're glad to offer you the opportunity to choose the most convenient option to handle all costs at your requirements. It's more convenient for you."
//     }
//   ];

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 2 >= features.length ? 0 : prevIndex + 2));
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 2 < 0 ? features.length - 2 : prevIndex - 2));
//   };

//   // Ensure we always show two cards, even when we have an odd number of features
//   const visibleFeatures = [
//     features[activeIndex],
//     features[(activeIndex + 1) % features.length]
//   ];

//   return (
//     <div className="bg-[#f1efeb] py-8 px-4 mt-10 mb-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-center mb-8">
//           <div className="relative">
//             <Image src={crown} alt="Crown" className="absolute -top-8 -left-7" />
//             <h2 className="text-2xl md:text-3xl font-bold text-center">
//               Studybay anywhere with
//               <br />
//               ExpertBuddy
//             </h2>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="transition-all duration-300 ease-in-out">
//             <div className="flex flex-col md:flex-row gap-4 px-4">
//               {visibleFeatures.map((feature, idx) => (
//                 <FeatureCard 
//                   key={`${activeIndex}-${idx}`}
//                   icon={feature.icon} 
//                   title={feature.title} 
//                   description={feature.description} 
//                 />
//               ))}
//             </div>
//           </div>
          
//           <div className="flex justify-center items-center mt-6 gap-4">
//             <button 
//               onClick={handlePrev}
//               className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
//               aria-label="Previous cards"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button 
//               onClick={handleNext}
//               className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
//               aria-label="Next cards"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Icon components
// const NetworkIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
//     <circle cx="12" cy="12" r="3" fill="#d6b4fe" />
//     <circle cx="4" cy="8" r="2" fill="none" stroke="#333" strokeWidth="1" />
//     <circle cx="20" cy="8" r="2" fill="none" stroke="#333" strokeWidth="1" />
//     <circle cx="4" cy="16" r="2" fill="none" stroke="#333" strokeWidth="1" />
//     <circle cx="20" cy="16" r="2" fill="none" stroke="#333" strokeWidth="1" />
//     <line x1="6" y1="8" x2="9" y2="10" stroke="#333" strokeWidth="1" />
//     <line x1="18" y1="8" x2="15" y2="10" stroke="#333" strokeWidth="1" />
//     <line x1="6" y1="16" x2="9" y2="14" stroke="#333" strokeWidth="1" />
//     <line x1="18" y1="16" x2="15" y2="14" stroke="#333" strokeWidth="1" />
//   </svg>
// );

// const PriceIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
//     <rect x="3" y="6" width="18" height="12" rx="1" fill="none" stroke="#333" strokeWidth="1" />
//     <circle cx="14" cy="12" r="3" fill="#d6b4fe" />
//     <path d="M14 10.5V12h1.5" fill="none" stroke="#333" strokeWidth="1" />
//   </svg>
// );

// const SecurityIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
//     <path d="M12 3L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" fill="none" stroke="#333" strokeWidth="1" />
//     <circle cx="12" cy="12" r="3" fill="#d6b4fe" />
//     <path d="M12 9v2l1 1" fill="none" stroke="#333" strokeWidth="1" />
//   </svg>
// );

// const PaymentIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
//     <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#333" strokeWidth="1" />
//     <line x1="3" y1="10" x2="21" y2="10" stroke="#333" strokeWidth="1" />
//     <circle cx="16" cy="15" r="2" fill="#d6b4fe" />
//   </svg>
// );

// export default ExpertBuddyCarousel;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import crown from "@/public/Vector.png"
import Image from 'next/image';


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isAnimating?: boolean;
  direction?: 'left' | 'right';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  isAnimating = false,
  direction = 'right' 
}) => {
  return (
    <div 
      className={`w-full md:w-[calc(50%-16px)] flex-shrink-0 bg-white rounded-lg shadow-sm p-6 mx-2 transition-all duration-500 ease-in-out ${
        isAnimating 
          ? direction === 'right' 
            ? 'translate-x-full opacity-0' 
            : '-translate-x-full opacity-0'
          : 'translate-x-0 opacity-100'
      }`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

interface CrownIconProps {
  className?: string;
}

const CrownIcon: React.FC<CrownIconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} width="40" height="40">
    <path d="M2.5 5.6c0 .4.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8c-.5 0-.8.4-.8.8zm19 10.4l-2.8-10.4-4.6 4.8L12 5.5l-2.2 4.9L5.3 5.6 2.5 16h19z" />
  </svg>
);

const ExpertBuddyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('right');
  
  const features = [
    {
      icon: <NetworkIcon />,
      title: "Huge Community of Experts",
      description: "We bring together verified college professors, practicing scientists, independent researchers, freelance journalists, essay writers, and thousands of other experts in different fields of study, not only from the USA, but from all over the world. They are ready to share their knowledge and provide you with professional assignment help."
    },
    {
      icon: <PriceIcon />,
      title: "Affordable Prices",
      description: "As a strong team of developers, we use high-tech solutions such as AI-based tools to cover various parts of the process of each project. For example, we automate and optimize plagiarism checking and grammar checking, which lets us offer students assistance of exceptional quality rather than just cheap homework assignment help."
    },
    {
      icon: <SecurityIcon />,
      title: "Data Security",
      description: "We care about your security therefore we encrypt all private chats to make sure your data will stay using encryption. In our work we use several cloud servers that are compliant to GDPR and other international standards."
    },
    {
      icon: <PaymentIcon />,
      title: "Safe Payment Methods",
      description: "You can use convenient, modern, and safe payment tools and solutions, such as credit, debit, and cryptocurrency for payments and withdrawals, and we're glad to offer you the opportunity to choose the most convenient option to handle all costs at your requirements. It's more convenient for you."
    }
  ];

  const handleNext = () => {
    if (isAnimating) return;
    
    setAnimationDirection('right');
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1 >= features.length ? 0 : prevIndex + 1));
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setAnimationDirection('left');
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 < 0 ? features.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, 500);
  };

  // Get the visible features (we still show 2 cards at once)
  const visibleFeatures = [
    features[activeIndex],
    features[(activeIndex + 1) % features.length]
  ];

  return (
    <div className="bg-[#f1efeb] py-8 px-4 mt-10 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <Image src={crown} alt="Crown" className="absolute -top-8 -left-7" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Studybay anywhere with
              <br />
              ExpertBuddy
            </h2>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="transition-all duration-300 ease-in-out">
            <div className="flex flex-col md:flex-row gap-4 px-4">
              {visibleFeatures.map((feature, idx) => (
                <FeatureCard 
                  key={`${activeIndex}-${idx}`}
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description}
                  isAnimating={isAnimating && idx === 0}
                  direction={animationDirection}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-6 gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors disabled:opacity-50"
              aria-label="Previous card"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-1">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex || idx === (activeIndex + 1) % features.length
                      ? 'bg-gray-800'
                      : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    if (isAnimating) return;
                    
                    const direction = idx > activeIndex ? 'right' : 'left';
                    setAnimationDirection(direction);
                    setIsAnimating(true);
                    
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 500);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors disabled:opacity-50"
              aria-label="Next card"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Icon components
const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
    <circle cx="12" cy="12" r="3" fill="#d6b4fe" />
    <circle cx="4" cy="8" r="2" fill="none" stroke="#333" strokeWidth="1" />
    <circle cx="20" cy="8" r="2" fill="none" stroke="#333" strokeWidth="1" />
    <circle cx="4" cy="16" r="2" fill="none" stroke="#333" strokeWidth="1" />
    <circle cx="20" cy="16" r="2" fill="none" stroke="#333" strokeWidth="1" />
    <line x1="6" y1="8" x2="9" y2="10" stroke="#333" strokeWidth="1" />
    <line x1="18" y1="8" x2="15" y2="10" stroke="#333" strokeWidth="1" />
    <line x1="6" y1="16" x2="9" y2="14" stroke="#333" strokeWidth="1" />
    <line x1="18" y1="16" x2="15" y2="14" stroke="#333" strokeWidth="1" />
  </svg>
);

const PriceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
    <rect x="3" y="6" width="18" height="12" rx="1" fill="none" stroke="#333" strokeWidth="1" />
    <circle cx="14" cy="12" r="3" fill="#d6b4fe" />
    <path d="M14 10.5V12h1.5" fill="none" stroke="#333" strokeWidth="1" />
  </svg>
);

const SecurityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
    <path d="M12 3L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" fill="none" stroke="#333" strokeWidth="1" />
    <circle cx="12" cy="12" r="3" fill="#d6b4fe" />
    <path d="M12 9v2l1 1" fill="none" stroke="#333" strokeWidth="1" />
  </svg>
);

const PaymentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#333" strokeWidth="1" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="#333" strokeWidth="1" />
    <circle cx="16" cy="15" r="2" fill="#d6b4fe" />
  </svg>
);

export default ExpertBuddyCarousel;