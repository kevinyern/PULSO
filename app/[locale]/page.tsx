'use client';

import { useRef } from 'react';
import AnimationProvider from '@/components/ui/AnimationProvider';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import HeroVideo from '@/components/sections/HeroVideo';
import ForWhom from '@/components/sections/ForWhom';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowWorks from '@/components/sections/HowWorks';
import WhatIncludes from '@/components/sections/WhatIncludes';
import Investment from '@/components/sections/Investment';
import ApplicationCTA from '@/components/sections/ApplicationCTA';
import FAQ from '@/components/sections/FAQ';
import Closing from '@/components/sections/Closing';

export default function Home() {
  const forWhomRef = useRef<HTMLDivElement>(null);

  const scrollToForWhom = () => {
    forWhomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AnimationProvider />
      <Header />
      <main className="bg-black text-white">
        <Hero onSecondaryClick={scrollToForWhom} />
        <HeroVideo />
        <ForWhom ref={forWhomRef} />
        <Problem />
        <Solution />
        <HowWorks />
        <WhatIncludes />
        <Investment />
        <ApplicationCTA />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
