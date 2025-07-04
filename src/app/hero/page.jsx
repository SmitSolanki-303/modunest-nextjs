'use client'

import React, { useState, useEffect } from 'react'
import { memo } from 'react'

const Hero = memo(() => {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden"
            aria-label="Hero section"
        >
            {/* Video Background Layer */}
            <VideoBackground />

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <HeroContent />
                </div>
            </div>
        </section>
    )
})

const VideoBackground = memo(() => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="absolute inset-0 z-0">
            {/* Optimized video with better loading strategy */}
            <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                poster="/Modunest-Hero.png" // Add poster for better UX
                onLoadedData={() => setIsLoaded(true)}
                style={{
                    willChange: 'transform', // Optimize for animations
                    transform: 'translateZ(0)' // Force hardware acceleration
                }}
            >
                <source src="/videos/tiny_villa_video.mp4" type="video/mp4" />
                <source src="/videos/tiny_villa_video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Loading state for better UX */}
            {!isLoaded && (
                <div className="absolute inset-0 animate-pulse" />
            )}
        </div>
    )
})

const HeroContent = memo(() => (
    <div className="text-white text-left">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold leading-tight tracking-tight">
            Modunest
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-urbanist max-w-4xl mt-4 leading-relaxed">
            Offsite production of world-leading homes for forward-thinking developers
        </p>
        
        {/* SEO-friendly structured content */}
        <div className="sr-only">
            <h2>Modular Home Construction Services</h2>
            <p>We specialize in sustainable, efficient modular home construction for developers seeking innovative building solutions.</p>
        </div>
    </div>
))

// Set display names for better debugging
Hero.displayName = 'Hero';
VideoBackground.displayName = 'VideoBackground';
HeroContent.displayName = 'HeroContent';

export default Hero