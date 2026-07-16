'use client'

import React, { useState } from 'react'

export default function ImageMaskVideo() {
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
                poster="/images/stitched-videos-poster.jpg"
                onError={() => setHasError(true)}
                style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                }}
            >
                <source src="/videos/STITCHED_VIDEOS.mp4" type="video/mp4" />
                <source src="/videos/STITCHED_VIDEOS.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Alternative: Image Background */}
            {hasError && (
                <img
                    src="/images/Modunest-Hero.png"
                    alt="Modular home construction"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            )}

            <div className="absolute inset-0 bg-black/30" />
        </div>
    )
}
