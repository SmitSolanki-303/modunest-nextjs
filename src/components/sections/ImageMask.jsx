import React from 'react'
import ImageMaskVideo from './ImageMaskVideo'

export default function ImageMask() {
    return (
        <section 
            className="relative min-h-screen w-full overflow-hidden"
            aria-label="Modular construction showcase"
        >
            <ImageMaskVideo />

            <div className="absolute inset-0 z-10 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                </div>
            </div>
        </section>
    )
}