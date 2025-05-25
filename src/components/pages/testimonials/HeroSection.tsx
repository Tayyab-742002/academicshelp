import AnimatedHero from '@/components/ui/animated-hero'
import { UserRound } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <AnimatedHero 
    title="Real Student Experiences"
    subtitle="Hear from students who have achieved academic success with our expert assistance. These testimonials reflect real experiences from students at various academic levels."
    primaryCta="View Testimonials"
    primaryCtaLink="#testimonials"
    secondaryCta="View Services"
    secondaryCtaLink="/services"
    benefits={["Real Student Experiences", "Academic Success", "Expert Assistance", "Various Academic Levels"]}
    tagline="Testimonials"
    TagLineIcon={<UserRound className="w-4 h-4 mr-2"/>}
    />
  )
}

export default HeroSection