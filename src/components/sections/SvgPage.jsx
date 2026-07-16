import React from 'react'
import Button from '@/components/ui/Button'
import LazyModularHouseSvg from '@/components/ui/LazyModularHouseSvg'

export default function SvgPage() {
    return (
        <section
            className="relative min-h-screen py-20 bg-white"
            aria-label="About our modular construction process"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-full max-w-lg h-96 lg:h-[500px] transform hover:scale-105 transition-transform duration-300 ease-out">
                            <LazyModularHouseSvg />
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            A better, faster way to build homes
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            By pre-constructing our homes offsite, we save valuable resources including time, energy, and manpower.
                            This maximises efficiency, reduces costs and guarantees their quality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button href="/contact" variant="secondary" ariaLabel="Partner with Modunest">
                                PARTNER WITH US
                            </Button>
                            <Button href="/about" variant="outline" ariaLabel="Learn more about Modunest">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}