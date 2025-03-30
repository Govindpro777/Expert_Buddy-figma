// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import logo from "@/public/Group 316127881.png";
// import USD from "@/public/Frame 1171284552@3x.png";
// import WelcomeModal from "@/components/welcomeForm";

// // Signup Modal Component
// function SignupModal({ onClose }: { onClose: () => void }) {
//   const [email, setEmail] = useState("wadewarren@gmail.com")
//   const [isUserAgreementAccepted, setIsUserAgreementAccepted] = useState(false)
//   const [isMarketingAccepted, setIsMarketingAccepted] = useState(false)
//   const [showWelcome, setShowWelcome] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle signup logic
//     console.log("Signup submitted", { email, isUserAgreementAccepted, isMarketingAccepted })
//     setShowWelcome(true)
//   }

//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-xl w-full max-w-[480px] p-6 relative mx-4">
//           <button 
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             aria-label="Close"
//             onClick={onClose}
//           >
//             <X className="h-5 w-5" />
//           </button>

//           <h2 className="text-xl font-semibold text-center mb-6 mt-2">Sign Up XpertBuddy</h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <p className="text-lg ml-2">Email</p>
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input 
//                 id="email"
//                 type="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="w-full px-3 py-2 border rounded-md"
//                 required 
//               />
//             </div>

//             <div className="space-y-2">
//               <div className="flex items-start sm:items-center">
//                 <input 
//                   id="user-agreement" 
//                   type="checkbox" 
//                   checked={isUserAgreementAccepted}
//                   onChange={() => setIsUserAgreementAccepted(!isUserAgreementAccepted)}
//                   className="mr-2 mt-1 sm:mt-0" 
//                 />
//                 <label htmlFor="user-agreement" className="text-sm">
//                   I accept 
//                   <span className="text-[#8a20b9]"> User Agreement</span>
//                 </label>
//               </div>

//               <div className="flex items-start sm:items-center mt-2">
//                 <input 
//                   id="marketing-messages" 
//                   type="checkbox" 
//                   checked={isMarketingAccepted}
//                   onChange={() => setIsMarketingAccepted(!isMarketingAccepted)}
//                   className="mr-2 mt-1 sm:mt-0" 
//                 />
//                 <label htmlFor="marketing-messages" className="text-sm">
//                   I don't want to receive marketing messages from 
//                   <span className="text-[#8a20b9]"> XpertBuddy</span>
//                 </label>
//               </div>
//             </div>

//             <button 
//               type="submit" 
//               className="w-full sm:w-[150px] bg-[#8a20b9] text-white py-2 rounded-3xl hover:bg-[#7a10a9] transition-colors"
//               disabled={!isUserAgreementAccepted}
//             >
//               Sign Up
//             </button>
//           </form>

//           <div className="text-center mt-4 mb-2">
//             <p className="text-sm">
//               Already registered? <a href="#" className="text-[#8a20b9] font-semibold">Log In</a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
//     </>
//   )
// }

// // Navbar Component
// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const pathname = usePathname();

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setIsMenuOpen(false);
//   };

//   const isActive = (path: string) => pathname === path;

//   return (
//     <>
//       <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
//         <div className="mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/" className="flex-shrink-0">
//             <Image src={logo} alt="XpertBuddy Logo" width={120} height={40} className="w-26 h-8 sm:w-26 sm:h-10 ml-0 sm:ml-12" />
//           </Link>

//           <nav className="hidden md:flex items-center gap-2 lg:gap-6">
//             <Link href="/" className={`text-sm lg:text-md ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//             Find Tutor
//             </Link>

//             <Link href="/homework" className={`text-sm lg:text-md ${isActive("/homework") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//             HomeWork
//             </Link>

//             <Link href="/experts" className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//               <Image src={USD} alt="XpertBuddy Logo" width={100} height={40} className="w-18 h-8 lg:w-17 lg:h-8" />
//             </Link>
//             <Link
//               href="/pricing"
//               className={`text-xs lg:text-md px-2 lg:px-3 py-1 border border-[#a414d5] rounded-lg transition ${isActive("/pricing")
//                 ? "text-[#a414d5] font-medium bg-[#f9f0ff]"
//                 : "text-[#16192c] hover:text-[#a414d5] hover:bg-[#f9f0ff]"
//                 }`}
//             >
//               Refer a friend
//             </Link>
//             <Link href="/projects" className={`text-sm lg:text-md ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//             Projects
//             </Link>
//             <Link href="/activeprojects" className={`text-sm lg:text-md ${isActive("/activeprojects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//             Active Projects
//             </Link>
//           </nav>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <Button variant="outline" className="text-xs sm:text-sm px-2 py-1 h-auto sm:h-10 hidden md:flex">
//               Log in
//             </Button>
//             <Button className="bg-[#a414d5] hover:bg-[#8a0fb3] text-white text-xs sm:text-sm px-2 py-1 h-auto sm:h-10" onClick={handleSignupClick}>
//               Sign Up
//             </Button>
//             <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-100">
//             <div className="px-4 py-4">
//               <nav className="flex flex-col gap-4">
//                 <Link href="/" className={`text-sm ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>
//                 Find Tutor
//                 </Link>
//                 <Link href="" className={`text-sm ${isActive("") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>
//                 HomeWork
//                 </Link>
//                 <Link href="" className={`text-sm ${isActive("") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>
//                  Refer a friend
//                  </Link>
//                 <Link href="/projects" className={`text-sm ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>
//                 Projects
//                 </Link>
//                 <Link href="/activeprojects" className={`text-sm ${isActive("/activeprojects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>
//                 Active Projects
//                 </Link>
//               </nav>
//             </div>
//           </div>
//         )}
//       </header>

//       {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
//     </>
//   );
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import logo from "@/public/Group 316127881.png";
// import USD from "@/public/Frame 1171284552@3x.png";
// import WelcomeModal from "@/components/welcomeForm";

// // Signup Modal Component
// function SignupModal({ onClose }: { onClose: () => void }) {
//   const [email, setEmail] = useState("wadewarren@gmail.com")
//   const [isUserAgreementAccepted, setIsUserAgreementAccepted] = useState(false)
//   const [isMarketingAccepted, setIsMarketingAccepted] = useState(false)
//   const [showWelcome, setShowWelcome] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle signup logic
//     console.log("Signup submitted", { email, isUserAgreementAccepted, isMarketingAccepted })
//     setShowWelcome(true)
//   }

//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-xl w-full max-w-[480px] p-6 relative mx-4">
//           <button 
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             aria-label="Close"
//             onClick={onClose}
//           >
//             <X className="h-5 w-5" />
//           </button>

//           <h2 className="text-xl font-semibold text-center mb-6 mt-2">Sign Up XpertBuddy</h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <p className="text-lg ml-2">Email</p>
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input 
//                 id="email"
//                 type="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="w-full px-3 py-2 border rounded-md"
//                 required 
//               />
//             </div>

//             <div className="space-y-2">
//               <div className="flex items-start sm:items-center">
//                 <input 
//                   id="user-agreement" 
//                   type="checkbox" 
//                   checked={isUserAgreementAccepted}
//                   onChange={() => setIsUserAgreementAccepted(!isUserAgreementAccepted)}
//                   className="mr-2 mt-1 sm:mt-0" 
//                 />
//                 <label htmlFor="user-agreement" className="text-sm">
//                   I accept 
//                   <span className="text-[#8a20b9]"> User Agreement</span>
//                 </label>
//               </div>

//               <div className="flex items-start sm:items-center mt-2">
//                 <input 
//                   id="marketing-messages" 
//                   type="checkbox" 
//                   checked={isMarketingAccepted}
//                   onChange={() => setIsMarketingAccepted(!isMarketingAccepted)}
//                   className="mr-2 mt-1 sm:mt-0" 
//                 />
//                 <label htmlFor="marketing-messages" className="text-sm">
//                   I don't want to receive marketing messages from 
//                   <span className="text-[#8a20b9]"> XpertBuddy</span>
//                 </label>
//               </div>
//             </div>

//             <button 
//               type="submit" 
//               className="w-full sm:w-[150px] bg-[#8a20b9] text-white py-2 rounded-3xl hover:bg-[#7a10a9] transition-colors"
//               disabled={!isUserAgreementAccepted}
//             >
//               Sign Up
//             </button>
//           </form>

//           <div className="text-center mt-4 mb-2">
//             <p className="text-sm">
//               Already registered? <a href="#" className="text-[#8a20b9] font-semibold">Log In</a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
//     </>
//   )
// }

// // Navbar Component
// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const pathname = usePathname();

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setIsMenuOpen(false);
//   };

//   const isActive = (path: string) => pathname === path;

//   return (
//     <>
//       <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
//         <div className="mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/" className="flex-shrink-0">
//             <Image src={logo} alt="XpertBuddy Logo" width={120} height={40} className="w-26 h-8 sm:w-26 sm:h-10 ml-0 sm:ml-12" />
//           </Link>

//           <nav className="hidden md:flex items-center gap-2 lg:gap-6">
//             <Link href="/" className={`text-sm lg:text-md ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//             Find Tutor
//             </Link>

//             <Link href="/homework" className={`text-sm lg:text-md ${isActive("/homework") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//             HomeWork
//             </Link>

//             <Link href="/experts" className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//               <Image src={USD} alt="XpertBuddy Logo" width={100} height={40} className="w-18 h-8 lg:w-17 lg:h-8" />
//             </Link>
//             <Link
//               href="/pricing"
//               className={`text-xs lg:text-md px-2 lg:px-3 py-1 border border-[#a414d5] rounded-lg transition ${isActive("/pricing")
//                 ? "text-[#a414d5] font-medium bg-[#f9f0ff]"
//                 : "text-[#16192c] hover:text-[#a414d5] hover:bg-[#f9f0ff]"
//                 }`}
//             >
//               Refer a friend
//             </Link>
//             <Link href="/projects" className={`text-sm lg:text-md ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//             Projects
//             </Link>
//             <Link href="/activeprojects" className={`text-sm lg:text-md ${isActive("/activeprojects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//             Active Projects
//             </Link>
//           </nav>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <Button variant="outline" className="text-xs sm:text-sm px-2 py-1 h-auto sm:h-10 hidden md:flex">
//               Log in
//             </Button>
//             <Button className="bg-[#a414d5] hover:bg-[#8a0fb3] text-white text-xs sm:text-sm px-2 py-1 h-auto sm:h-10" onClick={handleSignupClick}>
//               Sign Up
//             </Button>
//             <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu overlay - changed to fixed positioning */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col">
//             <div className="flex items-center justify-between p-4 border-b border-gray-100">
//               <Link href="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
//                 <Image src={logo} alt="XpertBuddy Logo" width={120} height={40} className="w-26 h-8 sm:w-26 sm:h-10" />
//               </Link>
//               <button onClick={() => setIsMenuOpen(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="flex-1 overflow-y-auto">
//               <nav className="flex flex-col p-4">
//                 <Link href="/" 
//                   className={`text-sm py-3 ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
//                   onClick={() => setIsMenuOpen(false)}>
//                   Find Tutor
//                 </Link>
//                 <Link href="" 
//                   className={`text-sm py-3 ${isActive("") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
//                   onClick={() => setIsMenuOpen(false)}>
//                   HomeWork
//                 </Link>
//                 <Link href="/pricing" 
//                   className={`text-sm py-3 ${isActive("/pricing") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
//                   onClick={() => setIsMenuOpen(false)}>
//                   Refer a friend
//                 </Link>
//                 <Link href="/projects" 
//                   className={`text-sm py-3 ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
//                   onClick={() => setIsMenuOpen(false)}>
//                   Projects
//                 </Link>
//                 <Link href="/activeprojects" 
//                   className={`text-sm py-3 ${isActive("/activeprojects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
//                   onClick={() => setIsMenuOpen(false)}>
//                   Active Projects
//                 </Link>
//               </nav>
//             </div>
//             <div className="p-4 border-t border-gray-100">
//               <div className="flex flex-col gap-3">
//                 <Button variant="outline" className="w-full" onClick={() => {
//                   setIsMenuOpen(false);
//                 }}>
//                   Log in
//                 </Button>
//                 <Button className="w-full bg-[#a414d5] hover:bg-[#8a0fb3] text-white" onClick={handleSignupClick}>
//                   Sign Up
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/public/Group 316127881.png";
import USD from "@/public/Frame 1171284552@3x.png";
import WelcomeModal from "@/components/welcomeForm";

// Signup Modal Component
function SignupModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("wadewarren@gmail.com")
  const [isUserAgreementAccepted, setIsUserAgreementAccepted] = useState(false)
  const [isMarketingAccepted, setIsMarketingAccepted] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log("Signup submitted", { email, isUserAgreementAccepted, isMarketingAccepted })
    setShowWelcome(true)
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl w-full max-w-[480px] p-6 relative mx-4">
          <button 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>

          <h2 className="text-xl font-semibold text-center mb-6 mt-2">Sign Up XpertBuddy</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg ml-2">Email</p>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md"
                required 
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-start sm:items-center">
                <input 
                  id="user-agreement" 
                  type="checkbox" 
                  checked={isUserAgreementAccepted}
                  onChange={() => setIsUserAgreementAccepted(!isUserAgreementAccepted)}
                  className="mr-2 mt-1 sm:mt-0" 
                />
                <label htmlFor="user-agreement" className="text-sm">
                  I accept 
                  <span className="text-[#8a20b9]"> User Agreement</span>
                </label>
              </div>

              <div className="flex items-start sm:items-center mt-2">
                <input 
                  id="marketing-messages" 
                  type="checkbox" 
                  checked={isMarketingAccepted}
                  onChange={() => setIsMarketingAccepted(!isMarketingAccepted)}
                  className="mr-2 mt-1 sm:mt-0" 
                />
                <label htmlFor="marketing-messages" className="text-sm">
                  I don't want to receive marketing messages from 
                  <span className="text-[#8a20b9]"> XpertBuddy</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full sm:w-[150px] bg-[#8a20b9] text-white py-2 rounded-3xl hover:bg-[#7a10a9] transition-colors"
              disabled={!isUserAgreementAccepted}
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-4 mb-2">
            <p className="text-sm">
              Already registered? <a href="#" className="text-[#8a20b9] font-semibold">Log In</a>
            </p>
          </div>
        </div>
      </div>

      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
    </>
  )
}

// Navbar Component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const pathname = usePathname();

  const handleSignupClick = () => {
    setShowSignup(true);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
        <div className="mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="XpertBuddy Logo" width={120} height={40} className="w-26 h-8 sm:w-26 sm:h-10 ml-0 sm:ml-12" />
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            <Link href="/" className={`text-sm lg:text-md ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
            Find Tutor
            </Link>

            <Link href="" className={`text-sm lg:text-md ${isActive("") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
            HomeWork
            </Link>

            <Link href="" className={`text-sm ${isActive("") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
              <Image src={USD} alt="XpertBuddy Logo" width={100} height={40} className="w-18 h-8 lg:w-17 lg:h-8" />
            </Link>
            <Link
              href=""
              className={`text-xs lg:text-md px-2 lg:px-3 py-1 border border-[#a414d5] rounded-lg transition ${isActive("")
                ? "text-[#a414d5] font-medium bg-[#f9f0ff]"
                : "text-[#16192c] hover:text-[#a414d5] hover:bg-[#f9f0ff]"
                }`}
            >
              Refer a friend
            </Link>
            <Link href="/projects" className={`text-sm lg:text-md ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
            Projects
            </Link>
            <Link href="/activeprojects" className={`text-sm lg:text-md ${isActive("/activeprojects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
            Active Projects
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="outline" className="text-xs sm:text-sm px-2 py-1 h-auto sm:h-10 hidden md:flex">
              Log in
            </Button>
            <Button className="bg-[#a414d5] hover:bg-[#8a0fb3] text-white text-xs sm:text-sm px-2 py-1 h-auto sm:h-10" onClick={handleSignupClick}>
              Sign Up
            </Button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay - with reduced width */}
        {isMenuOpen && (
          <div className="fixed inset-y-0 right-0 w-64 bg-white z-40 md:hidden flex flex-col shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link href="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
                <Image src={logo} alt="XpertBuddy Logo" width={100} height={30} className="h-7" />
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col p-4">
                <Link href="/" 
                  className={`text-sm py-3 ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
                  onClick={() => setIsMenuOpen(false)}>
                  Find Tutor
                </Link>
                <Link href="" 
                  className={`text-sm py-3 ${isActive("") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
                  onClick={() => setIsMenuOpen(false)}>
                  HomeWork
                </Link>
                <Link href="" 
                  className={`text-sm py-3 ${isActive("") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
                  onClick={() => setIsMenuOpen(false)}>
                  Refer a friend
                </Link>
                <Link href="/projects" 
                  className={`text-sm py-3 ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
                  onClick={() => setIsMenuOpen(false)}>
                  Projects
                </Link>
                <Link href="/activeprojects" 
                  className={`text-sm py-3 ${isActive("/activeprojects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} 
                  onClick={() => setIsMenuOpen(false)}>
                  Active Projects
                </Link>
              </nav>
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full" onClick={() => {
                  setIsMenuOpen(false);
                }}>
                  Log in
                </Button>
                <Button className="w-full bg-[#a414d5] hover:bg-[#8a0fb3] text-white" onClick={handleSignupClick}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
    </>
  );
}