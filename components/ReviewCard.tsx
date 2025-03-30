// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import crown from "@/public/Vector.png"
// import Image from 'next/image';
// import img1 from "@/public/unnamed 2.png"
// import img2 from "@/public/Group 4.png"
// import img3 from "@/public/logo_light.1729398987 1.png"
// import img4 from "@/public/Group.png"
// import img5 from "@/public/logo 1.png"

// interface ReviewCardProps {
//   name: string;
//   rating: number;
//   reviewText: string;
//   platformIcon: React.ReactNode;
//   platform: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, reviewText, platformIcon, platform }) => {
//   const [expanded, setExpanded] = useState(false);
  
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6 relative min-h-[260px] flex flex-col">
//       <div className="flex items-center justify-between mb-3">
//         <h3 className="font-semibold text-gray-800">{name}</h3>
//         <div className="absolute top-6 right-6">
//           {platformIcon}
//         </div>
//       </div>
      
//       <div className="flex mb-3">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} filled={i < Math.floor(rating)} />
//         ))}
//         <span className="ml-2 text-gray-700">{rating.toFixed(1)}</span>
//       </div>
      
//       <p className="text-gray-600 text-sm flex-grow">
//         {expanded ? reviewText : `${reviewText.substring(0, 150)}...`}
//       </p>
      
//       <button 
//         onClick={() => setExpanded(!expanded)} 
//         className="text-purple-600 text-sm mt-2 hover:underline"
//       >
//         Show {expanded ? 'less' : 'more'}
//       </button>
//     </div>
//   );
// };

// interface PlatformBadgeProps {
//   name: string;
//   rating: number;
//   icon: React.ReactNode;
// }

// const PlatformBadge: React.FC<PlatformBadgeProps> = ({ name, rating, icon }) => {
//   const getPlatformImage = (platformName: string) => {
//     switch (platformName) {
//       case "ExpertBuddy":
//         return img1;
//       case "Trustpilot":
//         return img2;
//       case "Sitejabber":
//         return img3;
//       case "Reviews.io":
//         return img4;
//       case "Review Centre":
//         return img5;
//       default:
//         return img1;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mx-4">
//       <Image 
//         src={getPlatformImage(name)} 
//         alt={name} 
//         className="mb-2 w-12 h-12 object-contain" 
//       />
//       <div className="text-sm font-medium">{name}</div>
//       <div className="flex items-center">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} filled={i < Math.floor(rating)} small />
//         ))}
//         <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
//       </div>
//     </div>
//   );
// };

// interface StarProps {
//   filled: boolean;
//   small?: boolean;
// }

// const Star: React.FC<StarProps> = ({ filled, small = false }) => {
//   const size = small ? "w-3 h-3" : "w-4 h-4";
//   const color = filled ? "text-yellow-400" : "text-gray-300";
  
//   return (
//     <svg 
//       xmlns="http://www.w3.org/2000/svg" 
//       viewBox="0 0 24 24" 
//       fill="currentColor" 
//       className={`${size} ${color}`}
//     >
//       <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
//     </svg>
//   );
// };

// interface Review {
//   name: string;
//   rating: number;
//   platform: string;
//   reviewText: string;
// }

// interface Platform {
//   name: string;
//   rating: number;
// }

// const ReviewsCarousel: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   // Placeholder data for the reviews
//   const reviews: Review[] = [
//     {
//       name: "John B.",
//       rating: 5.0,
//       platform: "ExpertBuddy",
//       reviewText: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat volutpat sed id pretium sed amet a vestibulum."
//     },
//     {
//       name: "John B.",
//       rating: 5.0,
//       platform: "Reviews.io",
//       reviewText: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat volutpat sed id pretium sed amet a vestibulum."
//     },
//     {
//       name: "John B.",
//       rating: 5.0,
//       platform: "Sitejabber",
//       reviewText: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat volutpat sed id pretium sed amet a vestibulum."
//     },
//     {
//       name: "Maria L.",
//       rating: 4.8,
//       platform: "Trustpilot",
//       reviewText: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat volutpat sed id pretium sed amet a vestibulum."
//     }
//   ];

//   const platforms: Platform[] = [
//     { name: "ExpertBuddy", rating: 5.0 },
//     { name: "Trustpilot", rating: 4.7 },
//     { name: "Sitejabber", rating: 4.0 },
//     { name: "Reviews.io", rating: 5.0 },
//     { name: "Review Centre", rating: 5.0 }
//   ];

//   // Calculate the visible review cards (3 at a time)
//   const visibleReviews = [
//     reviews[activeIndex % reviews.length],
//     reviews[(activeIndex + 1) % reviews.length],
//     reviews[(activeIndex + 2) % reviews.length]
//   ];

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
//   };

//   // Placeholder function for platform icons (replace with actual icons later)
//   const getPlatformIcon = (platform: string): React.ReactNode => {
//     switch (platform) {
//       case "ExpertBuddy":
//         return <Image src={img1} alt="ExpertBuddy" className="w-6 h-6 object-contain" />;
//       case "Trustpilot":
//         return <Image src={img2} alt="Trustpilot" className="w-6 h-6 object-contain" />;
//       case "Sitejabber":
//         return <Image src={img3} alt="Sitejabber" className="w-6 h-6 object-contain" />;
//       case "Reviews.io":
//         return <Image src={img4} alt="Reviews.io" className="w-6 h-6 object-contain" />;
//       case "Review Centre":
//         return <Image src={img5} alt="Review Centre" className="w-6 h-6 object-contain" />;
//       default:
//         return <Image src={img1} alt="Default" className="w-6 h-6 object-contain" />;
//     }
//   };

//   return (
//     <div className="bg-[#f1efeb] py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-center mb-10">
//           <div className="relative">
//             <Image src={crown} alt="Crown" className="absolute -top-8 -left-5 mb-2" />
//             <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
//               Reviews from XpertBuddy Community
//             </h2>
//           </div>
//         </div>
        
//         {/* Platform Badges */}
//         <div className="flex justify-center mb-10 overflow-x-auto py-2">
//           {platforms.map((platform) => (
//             <PlatformBadge 
//               key={platform.name}
//               name={platform.name}
//               rating={platform.rating}
//               icon={getPlatformIcon(platform.name)}
//             />
//           ))}
//         </div>
        
//         {/* Reviews Carousel */}
//         <div className="relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
//             {visibleReviews.map((review, index) => (
//               <ReviewCard 
//                 key={`${activeIndex}-${index}`}
//                 name={review.name}
//                 rating={review.rating}
//                 reviewText={review.reviewText}
//                 platformIcon={getPlatformIcon(review.platform)}
//                 platform={review.platform}
//               />
//             ))}
//           </div>
          
//           {/* Navigation Buttons */}
//           <button 
//             onClick={handlePrev}
//             className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
//             aria-label="Previous review"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button 
//             onClick={handleNext}
//             className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
//             aria-label="Next review"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
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

// export default ReviewsCarousel;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import crown from "@/public/Vector.png"
import Image from 'next/image';
import img1 from "@/public/unnamed 2.png"
import img2 from "@/public/Group 4.png"
import img3 from "@/public/logo_light.1729398987 1.png"
import img4 from "@/public/Group.png"
import img5 from "@/public/logo 1.png"

interface ReviewCardProps {
  name: string;
  rating: number;
  reviewText: string;
  platformIcon: React.ReactNode;
  platform: string;
  animationDirection: 'left' | 'right' | 'none';
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, reviewText, platformIcon, platform, animationDirection }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Animation classes based on direction
  let animationClass = '';
  if (animationDirection === 'left') {
    animationClass = 'animate-slide-left';
  } else if (animationDirection === 'right') {
    animationClass = 'animate-slide-right';
  }
  
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 relative min-h-[260px] flex flex-col ${animationClass}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <div className="absolute top-6 right-6">
          {platformIcon}
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < Math.floor(rating)} />
        ))}
        <span className="ml-2 text-gray-700">{rating.toFixed(1)}</span>
      </div>
      
      <p className="text-gray-600 text-sm flex-grow">
        {expanded ? reviewText : `${reviewText.substring(0, 150)}...`}
      </p>
      
      <button 
        onClick={() => setExpanded(!expanded)} 
        className="text-purple-600 text-sm mt-2 hover:underline"
      >
        Show {expanded ? 'less' : 'more'}
      </button>
    </div>
  );
};

interface PlatformBadgeProps {
  name: string;
  rating: number;
  icon: React.ReactNode;
}

const PlatformBadge: React.FC<PlatformBadgeProps> = ({ name, rating, icon }) => {
  const getPlatformImage = (platformName: string) => {
    switch (platformName) {
      case "ExpertBuddy":
        return img1;
      case "Trustpilot":
        return img2;
      case "Sitejabber":
        return img3;
      case "Reviews.io":
        return img4;
      case "Review Centre":
        return img5;
      default:
        return img1;
    }
  };

  return (
    <div className="flex flex-col items-center mx-4">
      <Image 
        src={getPlatformImage(name)} 
        alt={name} 
        className="mb-2 w-12 h-12 object-contain" 
      />
      <div className="text-sm font-medium">{name}</div>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < Math.floor(rating)} small />
        ))}
        <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

interface StarProps {
  filled: boolean;
  small?: boolean;
}

const Star: React.FC<StarProps> = ({ filled, small = false }) => {
  const size = small ? "w-3 h-3" : "w-4 h-4";
  const color = filled ? "text-yellow-400" : "text-gray-300";
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`${size} ${color}`}
    >
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
};

interface Review {
  name: string;
  rating: number;
  platform: string;
  reviewText: string;
}

interface Platform {
  name: string;
  rating: number;
}

const ReviewsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | 'none'>('none');
  
  // Placeholder data for the reviews
  const reviews: Review[] = [
    {
      name: "John B.",
      rating: 5.0,
      platform: "ExpertBuddy",
      reviewText: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat volutpat sed id pretium sed amet a vestibulum."
    },
    {
      name: "John B.",
      rating: 5.0,
      platform: "Reviews.io",
      reviewText: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat volutpat sed id pretium sed amet a vestibulum."
    },
    {
      name: "John B.",
      rating: 5.0,
      platform: "Sitejabber",
      reviewText: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat volutpat sed id pretium sed amet a vestibulum."
    },
    {
      name: "Maria L.",
      rating: 4.8,
      platform: "Trustpilot",
      reviewText: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat volutpat sed id pretium sed amet a vestibulum."
    }
  ];

  const platforms: Platform[] = [
    { name: "ExpertBuddy", rating: 5.0 },
    { name: "Trustpilot", rating: 4.7 },
    { name: "Sitejabber", rating: 4.0 },
    { name: "Reviews.io", rating: 5.0 },
    { name: "Review Centre", rating: 5.0 }
  ];

  // Calculate the visible review cards (3 at a time)
  const visibleReviews = [
    reviews[activeIndex % reviews.length],
    reviews[(activeIndex + 1) % reviews.length],
    reviews[(activeIndex + 2) % reviews.length]
  ];

  const handleNext = () => {
    setAnimationDirection('left');
    // Use setTimeout to allow animation to complete before changing index
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setAnimationDirection('none');
    }, 300);
  };

  const handlePrev = () => {
    setAnimationDirection('right');
    // Use setTimeout to allow animation to complete before changing index
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
      setAnimationDirection('none');
    }, 300);
  };

  // Placeholder function for platform icons (replace with actual icons later)
  const getPlatformIcon = (platform: string): React.ReactNode => {
    switch (platform) {
      case "ExpertBuddy":
        return <Image src={img1} alt="ExpertBuddy" className="w-6 h-6 object-contain" />;
      case "Trustpilot":
        return <Image src={img2} alt="Trustpilot" className="w-6 h-6 object-contain" />;
      case "Sitejabber":
        return <Image src={img3} alt="Sitejabber" className="w-6 h-6 object-contain" />;
      case "Reviews.io":
        return <Image src={img4} alt="Reviews.io" className="w-6 h-6 object-contain" />;
      case "Review Centre":
        return <Image src={img5} alt="Review Centre" className="w-6 h-6 object-contain" />;
      default:
        return <Image src={img1} alt="Default" className="w-6 h-6 object-contain" />;
    }
  };

  return (
    <div className="bg-[#f1efeb] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="relative">
            <Image src={crown} alt="Crown" className="absolute -top-8 -left-5 mb-2" />
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
              Reviews from XpertBuddy Community
            </h2>
          </div>
        </div>
        
        {/* Platform Badges */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2">
          {platforms.map((platform) => (
            <PlatformBadge 
              key={platform.name}
              name={platform.name}
              rating={platform.rating}
              icon={getPlatformIcon(platform.name)}
            />
          ))}
        </div>
        
        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
            {visibleReviews.map((review, index) => (
              <ReviewCard 
                key={`${activeIndex}-${index}`}
                name={review.name}
                rating={review.rating}
                reviewText={review.reviewText}
                platformIcon={getPlatformIcon(review.platform)}
                platform={review.platform}
                animationDirection={animationDirection}
              />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
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


export default ReviewsCarousel;