import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeaturesSection from '../components/FeaturesSection';
import BusinessSection from '../components/BusinessSection';
import TabSection from '../components/TabSection';
import InfoSection from '../components/InfoSection';
import ServiceTabs from '../components/ServiceTab';
import FeaturesSecond from '../components/FeaturesSecond';
import SustainabilityPillars from '../components/SustainPiller';
//import {Helmet} from "react-helmet";


function Home() {
  return (
    <main className="min-h-screen  bg-[#f1f1f1] px-0 lg:px-4">
      {/* <Helmet>
      <title>ThePlacify - IT Recruitment & Staffing Solutions</title>
      <meta name="description" content="ThePlacify - Premier IT recruitment agency specializing in full-time, part-time, and contract roles." />
    </Helmet> */}
      <HeroSlider />
      <FeaturesSection />
      {/* <BusinessSection /> */}
      {/* <FeaturesSection /> */}
      <FeaturesSecond/>
      <ServiceTabs/>
      <InfoSection/>


      <section className="relative px-0 lg:px-16">

      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center h-80 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://softstandard.com/wp-content/uploads/slider/cache/c99bca0e32fd024351cf908220716264/hand.jpg')`, // Replace with your actual background image URL
        }}
      >

{/* 
https://softstandard.com/wp-content/uploads/2016/05/handshake-background.jpg */}



        <div className="absolute inset-0 bg-black opacity-50 px-8"></div> {/* Dark Overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h3 className="text-2xl uppercase font-semibold mb-4 tracking-wide">
            What People Say
          </h3>
          <p className="italic text-lg leading-relaxed max-w-3xl mx-auto">
            "Although I like the fact that Theplacify is in my backyard
            (Fremont), I would recommend using this company regardless of where
            you are located. They provide excellent resources and their
            turn-around time is amazing (in fact they usually have candidates
            for me before I am even ready to interview them)."
          </p>
          <p className="mt-4 font-medium">
            Applications Development Manager at Leading Financial Company
          </p>
        </div>
      </div>

      {/* Commitment Section */}
      {/* <div className="bg-[#00BFB3] text-white text-center py-24 ">
        <p className="text-3xl  font-medium max-w-4xl mx-auto">
          Theplacify demonstrates its commitment to quality and cost, not
          just by <span className="font-bold italic">“words”</span>, but by
          actions and results.
        </p>
      </div> */}
      <SustainabilityPillars/>
    </section>
    </main>
  );
}

export default Home;

