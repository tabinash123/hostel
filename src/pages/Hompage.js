import React from 'react'
import RoomsSection from '../component/hompage/RoomsSection'
import Services from '../component/hompage/Services '
import TestimonialComponent from './../component/hompage/TestimonialComponent';
import PhotoGallery from '../component/hompage/PhotoGallery';
import IntroductionSection from './../component/hompage/IntroductionSection';
import HeroComponent from '../component/hompage/HeroComponent.js';
import WhyJoinUsSection from '../component/hompage/WhyJoinUsSection.js';
// import Video from '../component/hompage/Video.js';
import Video from './../component/hompage/Video';


const Hompage = () => {
  return (
    <div> 
      <HeroComponent />
      <IntroductionSection />
      {/* <RoomsSection /> */}
      <Services />
      <WhyJoinUsSection />
      <Video />
      <TestimonialComponent />
      <PhotoGallery />
    </div>
  )
}

export default Hompage