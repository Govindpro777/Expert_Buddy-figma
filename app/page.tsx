"use client"

import FAQ from "@/components/faq"
import ReviewRatings from "@/components/Review"
import Howworks from "@/components/how_works"
import Experts from "@/components/Experts"
import Offer from "@/components/Offer"
import FeatureCard from "@/components/FeatureCard"
import ReviewCard from "@/components/ReviewCard"
import Home1 from "@/components/Home"
export default function Home() {


  return (
    <div className="min-h-screen bg-[#f1efeb] ">
      <Home1 />
      <ReviewRatings />
      <Howworks />
      <Experts />
      <FeatureCard />
      <ReviewCard />
      <Offer />
      <FAQ />  
    </div>
  )
}
