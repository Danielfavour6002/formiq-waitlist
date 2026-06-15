import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, HeroSection, FeaturesSection, WhyWeBuiltFormiqSection, FooterSection } from "./components";

export default function Home() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === '#formiq-waitlist') {
      const timer = setTimeout(() => {
        const el = document.getElementById('formiq-waitlist');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhyWeBuiltFormiqSection />
      <FooterSection />
    </main>
  );
}
