'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function HeroVideo() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    return (
        <div className="absolute inset-0 z-0 bg-[#211F19]">
            {/* Highly Optimized Next.js Image acting as a poster */}
            {/* This fixes the 3MB raw image download by serving a compressed WebP */}
            <Image 
                src="/Modunest-Hero.png" 
                alt="Modunest Hero Background"
                fill
                className={`object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
                priority={true}
                quality={85}
                sizes="100vw"
            />
            
            {/* Optimized video with better loading strategy */}
            <video
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                onCanPlay={() => setIsVideoLoaded(true)}
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
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>
    )
}
