import React from 'react';
import ProjectProgressTracker from "@/components/projectProgress"
import MarketPlace from "@/components/MarketPlace"


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f1efeb]">
      <ProjectProgressTracker />
      <MarketPlace />
    </div>
  )
}

