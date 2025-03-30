

import React from 'react';
import crown from "@/public/Vector.png"
import Image from 'next/image';

const ProjectProgressTracker = () => {
  // Define the steps in the progress tracker
  const steps = [
    { id: 1, label: 'Submit a project', subLabel: 'Edit Details', isActive: true, isCompleted: true },
    { id: 2, label: 'At the auction', subLabel: '', isActive: false, isCompleted: false },
    { id: 3, label: 'In progress', subLabel: '', isActive: false, isCompleted: false },
    { id: 4, label: 'Under warranty', subLabel: '', isActive: false, isCompleted: false },
    { id: 5, label: 'Completed', subLabel: '', isActive: false, isCompleted: false }
  ];
  
  return (
    <div className="bg-[#f1efeb] max-w-6xl mx-auto py-8 px-4">
      {/* Progress Tracker */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm mb-8 overflow-x-auto">
        <div className="relative min-w-max md:min-w-0">
          {/* Progress Line */}
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200"></div>
          
          {/* Steps */}
          <div className="flex justify-between relative w-full" style={{ minWidth: "480px" }}>
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center relative z-10 px-2 md:px-0">
                {/* Step Circle */}
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step.isCompleted ? 'bg-purple-700 text-white' : 'bg-white border-2 border-gray-300'
                }`}>
                  {step.isCompleted ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                
                {/* Step Label */}
                <div className="mt-2 text-center w-full">
                  <p className="text-xs sm:text-sm font-medium whitespace-nowrap">{step.label}</p>
                  {step.subLabel && (
                    <p className="text-xs text-gray-500">{step.subLabel}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Annotated Bibliography Section */}
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Annotated Bibliography</h1>
        <div className="text-gray-700">
          <p className="mb-4 text-sm sm:text-base">
            An annotated bibliography is a list of sources (books, articles, documents, etc.) that includes a brief summary and evaluation of each source. 
            The title "Annotated Bibliography" should reflect the purpose of the document: to showcase research materials along with concise, critical, 
            and descriptive notes about their content, relevance, and quality.
          </p>
        </div>
        <div className="relative">
          <Image src={crown} alt="crown" width={40} height={40} className='relative top-6 -left-5' />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-4">Choose an expert for your project</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgressTracker;