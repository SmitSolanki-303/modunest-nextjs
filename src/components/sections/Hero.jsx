import React from 'react'
import HeroVideo from './HeroVideo'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden"
            aria-label="Hero section"
        >
            {/* Video Background Layer (Client Component) */}
            <HeroVideo />

            {/* Content Layer (Server Component) */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                </div>
            </div>
        </section>
    )
}