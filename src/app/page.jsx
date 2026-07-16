import { Suspense } from 'react';

// Static imports for Server Components
import Hero from '@/components/sections/Hero';
import SvgPage from '@/components/sections/SvgPage';
import ImageMask from '@/components/sections/ImageMask';
import Sustainability from '@/components/sections/Sustainability';
import WhyChooseModular from '@/components/sections/WhyChooseModular';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse" />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div className="min-h-screen bg-white animate-pulse" />}>
        <SvgPage />
      </Suspense>

      <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse" />}>
        <ImageMask />
      </Suspense>

      <Suspense fallback={<div className="min-h-screen bg-white animate-pulse" />}>
        <Sustainability />
      </Suspense>

      <Suspense fallback={<div className="min-h-screen bg-gray-900 animate-pulse" />}>
        <WhyChooseModular />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse" />}>
        <Footer />
      </Suspense>
    </>
  );
}
