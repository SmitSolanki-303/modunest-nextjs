'use client'

import React from 'react'


const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden">
            {/* Video Background Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src='/videos/tiny_villa_video.mp4' type="video/mp4" />
                    {/* <source src="/path/to/your/video.webm" type="video/webm" /> */}
                    Your browser does not support the video tag.
                </video>
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-9xl">Modunest</h1>
                    <p className="text-3xl mb-8 font-urbanist max-w-4xl mx-auto">
                        Offsite production of world-leading homes for forward-thinking developers
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero