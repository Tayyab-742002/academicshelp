import AnimatedHero from '@/components/ui/animated-hero'
import { CircleDollarSign } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <AnimatedHero 
    title="Simple & Transparent"
    subtitle="Affordable academic assistance tailored to your needs. Choose the plan that works best for you."
    secondaryCta="View Services"
    secondaryCtaLink="/services"
    primaryCtaLink="#pricing-plans"
    tagline="Pricing Plans"
    TagLineIcon={<CircleDollarSign className="w-4 h-4 mr-2"/>}
    primaryCta="View Plans"
    benefits={["Affordable", "Transparent", "Simple", "Customizable"]}
    
  />
  )
}

export default HeroSection