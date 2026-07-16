import React from 'react'
import Button from '@/components/ui/Button'

export default function Sustainability() {
    return (
        <section 
            className="bg-white py-16 md:py-24 lg:py-32"
            aria-label="Our sustainability commitment and collections"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex justify-center mb-16 md:mb-20 lg:mb-24">
                    <Button href="/collection" ariaLabel="View our modular home collections">
                        View/Browse the Collections
                    </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="lg:pr-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-900">
                            We don't just build homes, we build responsibly.
                        </h2>
                    </div>
                    
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
                </div>
            </div>
        </section>
    )
}