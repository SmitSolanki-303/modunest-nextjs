'use client'

import React, { memo, useState } from 'react'

const ImageMask = memo(() => {
    return (
        <section 
            className="relative min-h-screen w-full overflow-hidden"
            aria-label="Modular construction showcase"
        >
            <VideoBackground />

            <div className="absolute inset-0 z-10 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <ContentSection />
                </div>
            </div>
        </section>
    )
})

const VideoBackground = memo(() => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="absolute inset-0 z-0">
            {/* Video Background */}
            <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                poster="/images/stitched-videos-poster.jpg" // Add poster for better UX
                onLoadedData={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                style={{
                    willChange: 'transform', // Optimize for animations
                    transform: 'translateZ(0)' // Force hardware acceleration
                }}
            >
                <source src="/videos/STITCHED_VIDEOS.mp4" type="video/mp4" />
                <source src="/videos/STITCHED_VIDEOS.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Alternative: Image Background (uncomment to use instead of video) */}
            {(hasError || !isLoaded) && (
                <img
                    src="/images/Modunest-Hero.png"
                    alt="Modular home construction"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                />
            )}

            {/* Loading state for better UX */}
            {!isLoaded && (
                <div className="absolute inset-0 animate-pulse" />
            )}

            <div className="absolute inset-0 bg-black/30" />
        </div>
    )
})

const ContentSection = memo(() => (
    <div className="text-white text-center">
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-urbanist mt-4 max-w-4xl mx-auto leading-relaxed">
            Offsite production of world-leading homes for forward-thinking developers
        </p>
        
        {/* Additional semantic content for SEO */}
        <div className="sr-only">
            <h2>Our Construction Process</h2>
            <p>Watch our advanced modular construction techniques in action, showcasing quality and efficiency.</p>
        </div>
    </div>
))

// Set display names for better debugging
ImageMask.displayName = 'ImageMask';
VideoBackground.displayName = 'VideoBackground';
ContentSection.displayName = 'ContentSection';

export default ImageMask