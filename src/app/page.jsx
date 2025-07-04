'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load components with loading fallbacks for better performance
const Hero = dynamic(() => import('@/app/hero/page'), {
  loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  ssr: true
});

const SvgPage = dynamic(() => import('@/app/svg-page/page'), {
  loading: () => <div className="min-h-screen bg-white animate-pulse" />,
  ssr: true
});

const ImageMask = dynamic(() => import('@/app/image-mask/page'), {
  loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  ssr: true
});

const Sustainability = dynamic(() => import('@/app/sustainability/page'), {
  loading: () => <div className="min-h-screen bg-white animate-pulse" />,
  ssr: true
});

const WhyChooseModular = dynamic(() => import('@/app/why-choose-modular/page'), {
  loading: () => <div className="min-h-screen bg-gray-900 animate-pulse" />,
  ssr: true
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  loading: () => <div className="h-64 bg-gray-800 animate-pulse" />,
  ssr: true
});


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
