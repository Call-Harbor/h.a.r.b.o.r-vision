import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutEngine from "@/components/landing/AboutEngine";
import AboutUsSection from "@/components/landing/AboutUsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorks from "@/components/landing/HowItWorks";
import StatsSection from "@/components/landing/StatsSection";
import NexusVectisSection from "@/components/landing/NexusVectisSection";
import CTASection from "@/components/landing/CTASection";

import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-[#060a1a] min-h-screen">
      <Navbar />
      <section id="platform"><HeroSection /></section>
      <AboutEngine />
      <AboutUsSection />
      <section id="features"><FeaturesSection /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <StatsSection />
      <NexusVectisSection />

      <CTASection />
      <Footer />
    </div>
  );
}