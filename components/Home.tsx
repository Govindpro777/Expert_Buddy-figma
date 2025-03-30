import React, { useState } from 'react';
import Image from 'next/image';
import business from "@/public/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand-b 1.png";
import bgImage from "@/public/bg-pattern.png";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const HomePage = () => {
    const [projectDescription, setProjectDescription] = useState('');
    const [humanExpertsOnly, setHumanExpertsOnly] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // TODO: Implement expert finding logic
      console.log('Project Description:', projectDescription);
      console.log('Human Experts Only:', humanExpertsOnly);
    };

  return (
    <section
        className="mx-auto px-4 py-4 md:py-12 flex flex-col md:flex-row items-center relative"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
       
        <div className="w-full md:w-1/2 space-y-6 md:ml-32 px-4 md:px-0 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16192c] leading-tight">
            A-Plus Homework<br />
            Help For All
          </h1>
          <p className="text-base sm:text-lg text-[#16192c] max-w-md mx-auto md:mx-0">
            Get personalized expert assistance in any academic field. 100+ courses and programs covered.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4 text-[#16192c]">
            <textarea 
              placeholder="Describe your project briefly"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="w-full sm:max-w-[460px] h-[100px] md:h-[150px] p-4 text-start align-top rounded-xl mx-auto md:mx-0 resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center space-x-2 mt-4">
                <Switch 
                  checked={humanExpertsOnly}
                  onCheckedChange={setHumanExpertsOnly}
                />
                <span className="text-[#16192c] font-bold font-sans text-base sm:text-lg">Human experts only</span>
              </div>
            </div>
            
            <div className="flex flex-col text-lg font-bold">
              <p className="text-base sm:text-lg text-black mb-2 mt-4">
                Get Offers 
                <span className="text-purple-600"> For FREE & Pay Only </span>
                When You Accept 
                <br className="hidden sm:block" />
                An Offer!
              </p>
              
              <Button 
                type="submit" 
                className="w-[150px] rounded-2xl bg-purple-600 hover:bg-purple-700 text-black mt-4 mx-auto md:mx-0"
              >
                Find an Expert
              </Button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full max-w-[570px] mx-auto">
            <Image 
              src={business} 
              alt="Professional person" 
              fill 
              className="object-contain md:object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>
  );
};

export default HomePage;