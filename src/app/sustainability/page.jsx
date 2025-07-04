'use client'

import React, { memo, useCallback } from 'react'
import Link from 'next/link'

const Sustainability = memo(() => {
    return (
        <section 
            className="bg-white py-16 md:py-24 lg:py-32"
            aria-label="Our sustainability commitment and collections"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <StandoutButton />
                <MainContent />
            </div>
        </section>
    )
})

const StandoutButton = memo(() => (
    <div className="flex justify-center mb-16 md:mb-20 lg:mb-24">
        <CollectionButton>
            View/Browse the Collections
        </CollectionButton>
    </div>
))

const CollectionButton = memo(({ children }) => {
    const handleClick = useCallback(() => {
        // Track button clicks for analytics
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'click', {
                event_category: 'CTA',
                event_label: 'View Collections'
            });
        }
    }, []);

    return (
        <Link
            href="/collection"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="group relative px-8 py-4 md:px-10 md:py-5 text-white font-medium text-lg md:text-xl 
                    rounded-full transition-all duration-300 ease-out transform hover:scale-105 
                    hover:-translate-y-1 shadow-lg hover:shadow-2xl cursor-pointer
                    bg-[#484439] hover:bg-[#211F19] focus:outline-none focus:ring-2 
                    focus:ring-[#B5A58D] focus:ring-offset-2"
            aria-label="View our modular home collections"
        >
            <span className="relative z-10">{children}</span>
            <ButtonOverlay />
            <ButtonBorder />
        </Link>
    )
})

const ButtonOverlay = memo(() => (
    <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
        style={{
            background: 'linear-gradient(135deg, #B5A58D20, #21231920)'
        }}
    />
))

const ButtonBorder = memo(() => (
    <div
        className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
        style={{ borderColor: '#B5A58D' }}
    />
))

const MainContent = memo(() => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <HeadingSection />
        <DescriptionSection />
    </div>
))

const HeadingSection = memo(() => (
    <div className="lg:pr-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-900">
            We don't just build homes, we build responsibly.
        </h2>
    </div>
))

const DescriptionSection = memo(() => (
    <div className="lg:pt-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Our building systems use modern technology in advanced,
            quality-controlled, indoor environments to ensure the highest
            standard of every detail.
        </p>
        
        {/* Additional semantic content for SEO */}
        <div className="sr-only">
            <h3>Sustainable Building Practices</h3>
            <p>We prioritize environmental responsibility in every aspect of our modular construction process.</p>
        </div>
    </div>
))

// Set display names for better debugging
Sustainability.displayName = 'Sustainability';
StandoutButton.displayName = 'StandoutButton';
CollectionButton.displayName = 'CollectionButton';
ButtonOverlay.displayName = 'ButtonOverlay';
ButtonBorder.displayName = 'ButtonBorder';
MainContent.displayName = 'MainContent';
HeadingSection.displayName = 'HeadingSection';
DescriptionSection.displayName = 'DescriptionSection';

export default Sustainability