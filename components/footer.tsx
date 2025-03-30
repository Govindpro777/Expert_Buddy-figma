// import React from 'react';
// import Image from 'next/image';
// import crown from "@/public/Vector.png"
// import logo1 from "@/public/Logo (2).png"
// import logo2 from "@/public/Logo (3).png"
// import logo3 from "@/public/Logo (4).png"
// import logo4 from "@/public/Logo (5).png"
// import logo5 from "@/public/Logo (6).png"
// import logo6 from "@/public/Logo (7).png"
// import logo7 from "@/public/Logo (8).png"  

// const Footer = () => {
//   return (
//     <footer className="bg-[#1a1a36] py-12">
//       <div className="container mx-auto px-4">
//         <div className="mb-8">
//           <div className="flex items-center">
//             <div className="text-purple-500 mr-2">
//               <svg 
//                 width="24" 
//                 height="24" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path 
//                   d="M3 21L12 12L21 21" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                 />
//                 <path 
//                   d="M3 10L12 3L21 10" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-white text-lg font-semibold">As Seen In</h3>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
//           <div className="flex justify-center">
//             <Image 
//               src="/images/logo1.png" 
//               alt="Logoipsum" 
//               width={120} 
//               height={40}
//               className="h-8 object-contain"
//             />
//           </div>
//           <div className="flex justify-center">
//             <Image 
//               src="/images/logo2.png" 
//               alt="Logoipsum Proud Standard" 
//               width={120} 
//               height={40}
//               className="h-8 object-contain"
//             />
//           </div>
//           <div className="flex justify-center">
//             <Image 
//               src="/images/logo3.png" 
//               alt="LOGO" 
//               width={120} 
//               height={40}
//               className="h-8 object-contain"
//             />
//           </div>
//           <div className="flex justify-center">
//             <Image 
//               src="/images/logo4.png" 
//               alt="Logoipsum" 
//               width={120} 
//               height={40}
//               className="h-8 object-contain"
//             />
//           </div>
//           <div className="flex justify-center">
//             <Image 
//               src="/images/logo5.png" 
//               alt="IPSUM" 
//               width={120} 
//               height={40}
//               className="h-8 object-contain"
//             />
//           </div>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center mt-8">
//           <div className="flex justify-center">
//             <Image 
//               src="/images/logo6.png" 
//               alt="logo ipsum" 
//               width={120} 
//               height={40}
//               className="h-8 object-contain"
//             />
//           </div>
//           <div className="flex justify-center">
//             <Image 
//               src="/images/logo7.png" 
//               alt="logo ipsum" 
//               width={120} 
//               height={40}
//               className="h-8 object-contain"
//             />
//           </div>
//         </div>
        
//         <div className="mt-8">
//           <hr className="border-gray-700" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Image from 'next/image';
import crown from "@/public/Vector.png"
import logo1 from "@/public/Logo (2).png"
import logo2 from "@/public/Logo (3).png"
import logo3 from "@/public/Logo (4).png"
import logo4 from "@/public/Logo (5).png"
import logo5 from "@/public/Logo (6).png"
import logo6 from "@/public/Logo (7).png"
import logo7 from "@/public/Logo (8).png"  

const Footer = () => {
  return (
    <footer className="bg-[#1a1a36] py-12 h-[400px]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center">
            <div className="text-purple-500 mr-2">
              <Image 
                src={crown}
                alt="Crown"
                width={32}
                height={32}
                className="object-contain relative left-5 -top-5"
              />
            </div>
            <h3 className="text-white text-2xl font-semibold">As Seen In</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          <div className="flex justify-center">
            <Image 
              src={logo1} 
              alt="Logoipsum" 
              width={120} 
              height={40}
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src={logo2} 
              alt="Logoipsum Proud Standard" 
              width={120} 
              height={40}
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src={logo3} 
              alt="LOGO" 
              width={120} 
              height={40}
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src={logo4} 
              alt="Logoipsum" 
              width={120} 
              height={40}
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src={logo5} 
              alt="IPSUM" 
              width={120} 
              height={40}
              className="h-8 object-contain"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-5 md:grid-cols-5 gap-8 items-center mt-8">
          <div className="flex justify-center">
            <Image 
              src={logo6} 
              alt="logo ipsum" 
              width={120} 
              height={40}
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src={logo7} 
              alt="logo ipsum" 
              width={120} 
              height={40}
              className="h-8 object-contain"
            />
          </div>
        </div>
        
        <div className="mt-8">
          <hr className="border-gray-700" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;