import React from 'react'

export default function WhyChooseModular() {
    return (
        <section 
            className="w-full dark-bg py-16 px-6 md:px-16"
            aria-label="Benefits of choosing modular construction"
        >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-grey mb-6 leading-tight">
                    Why Choose Modular?
                </h2>
                
                <p className="text-lg md:text-xl text-grey/90 leading-relaxed max-w-4xl mx-auto">
                    Modular homes are built with precision, speed, and sustainability in mind.
                    By pre-constructing the core components in a controlled environment,
                    we minimize waste, reduce costs, and deliver consistently high-quality results.
                    Whether it's a home, office, or cabin, modular construction ensures faster delivery and
                    superior performance, all while aligning with modern architectural values.
                </p>
                
                {/* Additional structured content for SEO */}
                <div className="sr-only">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li>Faster construction timelines</li>
                        <li>Superior quality control</li>
                        <li>Reduced environmental impact</li>
                        <li>Cost-effective solutions</li>
                        <li>Consistent architectural standards</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}