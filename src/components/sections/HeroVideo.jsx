'use client'

import React from 'react'

export default function HeroVideo() {
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
                poster="/Modunest-Hero.png"
                style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                }}
            >
                <source src="/videos/tiny_villa_video.mp4" type="video/mp4" />
                <source src="/videos/tiny_villa_video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
        </div>
    )
}
