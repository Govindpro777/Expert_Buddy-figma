"use client"
import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

// Define types for project data
interface ProjectFile {
  id: number;
}

type ProjectStatus = 'In Process' | 'At the Auction' | 'Drafts' | 'Revision' | 'Completed' | 'Under warranty';

type BidType = {
  count: number;
  price?: string;
  isBestOffer: boolean;
} | {
  expert: {
    name: string;
    price: string;
    avatarUrl: string | StaticImageData;
  }
};

interface ProjectCardProps {
  status: ProjectStatus;
  statusCount?: number;
  deadline: string;
  id: string;
  title: string;
  category: string;
  files?: ProjectFile[];
  bid: BidType;
  ratings?: number;
}

const StatusBadge: React.FC<{ status: ProjectStatus; count?: number }> = ({ status, count }) => {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'At the Auction': return 'text-red-500';
      case 'Drafts': return 'text-gray-500';
      case 'Revision': return 'text-purple-800';
      case 'In Process': return 'text-yellow-500';
      case 'Completed': return 'text-green-500';
      case 'Under warranty': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const getBgColor = (status: ProjectStatus) => {
    switch (status) {
      case 'At the Auction': return 'bg-red-50';
      case 'Drafts': return 'bg-gray-50';
      case 'Revision': return 'bg-purple-50';
      case 'In Process': return 'bg-yellow-50';
      case 'Completed': return 'bg-green-50';
      case 'Under warranty': return 'bg-orange-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className={`${getStatusColor(status)} ${getBgColor(status)} rounded-full px-4 py-2 flex items-center gap-2 font-medium text-sm max-w-[180px] w-full`}>
      <span className="truncate">{status}</span>
      {count && (
        <span className="bg-yellow-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0">
          {count}
        </span>
      )}
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  status,
  statusCount,
  deadline,
  id,
  title,
  category,
  files = [],
  bid,
  ratings
}) => {
  const isExpertBid = 'expert' in bid;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm relative border mb-4">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left side */}
        <div className="flex flex-col space-y-4 w-full lg:w-2/3 pr-0 lg:pr-4">
          {/* Status badge */}
          <div className="inline-block">
            <StatusBadge status={status} count={statusCount} />
          </div>
          
          {/* Project info section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center text-purple-600 gap-2 mb-1">
                <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                </svg>
                <div className="min-w-0">
                  <div className="text-gray-500 text-sm">Deadline</div>
                  <div className="text-gray-800 truncate">{deadline}</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center text-purple-600 gap-2 mb-1">
                <div className="w-8 h-8 bg-purple-600 flex items-center justify-center rounded-md text-white font-bold flex-shrink-0">
                  ID
                </div>
                <div className="min-w-0">
                  <div className="text-gray-500 text-sm">ID</div>
                  <div className="text-gray-800 truncate">{id}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Files link if available */}
          {files && files.length > 0 && (
            <div className="flex items-center gap-2 text-purple-600">
              <svg className="w-8 h-8 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <a href="#" className="text-purple-600 hover:underline font-medium truncate">
                File({files.length})
              </a>
            </div>
          )}
          
          {/* Project title */}
          <h3 className="text-xl font-bold text-purple-900 hover:underline cursor-pointer line-clamp-2">
            {title}
          </h3>
          
          {/* Category */}
          <p className="text-gray-600 truncate">{category}</p>
        </div>
        
        {/* Right side - Bid information */}
        <div className="flex flex-col items-start lg:items-end w-full lg:w-1/3 mt-4 lg:mt-0 border-t pt-4 lg:border-t-0 lg:pt-0">
          {/* Bid information */}
          {isExpertBid ? (
            <div className="flex flex-col items-start lg:items-end w-full">
              <div className="text-lg font-bold text-purple-900 mb-2">Expert</div>
              <div className="flex items-center mb-3">
                <div className="mr-3 text-left lg:text-right">
                  <div className="font-medium text-lg">{bid.expert.name}</div>
                  <div className="text-purple-600 font-bold text-lg">${bid.expert.price}</div>
                </div>
                <Image 
                  src={bid.expert.avatarUrl} 
                  alt={bid.expert.name} 
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-md flex-shrink-0"
                />
              </div>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium text-sm w-full">
                Open Chat
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-start lg:items-end w-full">
              <div className="mb-1 text-lg font-bold text-purple-900">{bid.count} Bid</div>
              <div className="text-gray-600 text-sm">Price</div>
              <div className="text-2xl font-bold mt-1">{bid.price}</div>
              {bid.isBestOffer && (
                <div className="flex items-center text-green-500 font-medium mt-1 text-sm">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Best Offer
                </div>
              )}
              <button className="mt-3 bg-purple-600 text-white px-6 py-2 rounded-full font-medium text-sm w-full">
                Check the Offers
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* More options button */}
      <button className="absolute top-3 right-3 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>
    </div>
  );
};

export default ProjectCard;