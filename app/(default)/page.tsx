export const metadata = {
  title: 'Limitless Network | V3 website',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Guide from '@/components/guide'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Partners from '@/components/partners'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Partners />
      <Guide />
      <FeaturesBlocks />
      <Testimonials />
      
    </>
  )
}
