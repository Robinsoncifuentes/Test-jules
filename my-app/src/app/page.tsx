import React from 'react';
import Section1 from '@/components/sections/Section1';
import Section2 from '@/components/sections/Section2';
import Section3 from '@/components/sections/Section3';
import Section4 from '@/components/sections/Section4';
import Section5 from '@/components/sections/Section5';
import Section6 from '@/components/sections/Section6';
import Section7 from '@/components/sections/Section7';
// import Section8 from '@/components/sections/Section8'; // Removed
import ContactForm from '@/components/ContactForm'; // Added

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      {/* <Section8 /> */} {/* Replaced */}
      <ContactForm /> {/* Added */}
    </>
  );
}
