'use client'

import { memo, useCallback } from 'react'
import dynamic from 'next/dynamic'

// Lazy load SVG component for better performance
const ModularHouseSvg = dynamic(() => import('@/components/ui/ModularHouseSvg'), {
    loading: () => <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />,
    ssr: false // SVG can be client-side only if it's interactive
})


const SvgPage = memo(() => {
    return (
        <section
            className="relative min-h-screen py-20 bg-white"
            aria-label="About our modular construction process"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <InteractiveSvgContainer />
                    <ContentSection />
                </div>
            </div>
        </section>
    )
})


const InteractiveSvgContainer = memo(() => (
    <div className="flex justify-center lg:justify-start">
        <div className="w-full max-w-lg h-96 lg:h-[500px] transform hover:scale-105 transition-transform duration-300 ease-out">
            <ModularHouseSvg />
        </div>
    </div>
))

const ContentSection = memo(() => (
    <div className="space-y-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            A better, faster way to build homes
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
            By pre-constructing our homes offsite, we save valuable resources including time, energy, and manpower.
            This maximises efficiency, reduces costs and guarantees their quality.
        </p>
        <ActionButtons />
    </div>
))

const ActionButtons = memo(() => (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <PrimaryButton>
            PARTNER WITH US
        </PrimaryButton>
        <SecondaryButton>
            LEARN MORE
        </SecondaryButton>
    </div>
))

const PrimaryButton = memo(({ children, onClick }) => (
    <button
        className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 
                   transition-all duration-200 border-b-2 border-gray-900 
                   transform hover:scale-105 active:scale-95 focus:outline-none 
                   focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        onClick={onClick}
        aria-label="Partner with Modunest"
    >
        {children}
    </button>
))

const SecondaryButton = memo(({ children, onClick }) => (
    <button
        className="px-6 py-3 text-gray-900 font-medium hover:text-gray-700 
                   transition-all duration-200 border-b-2 border-gray-300 
                   hover:border-gray-900 transform hover:scale-105 active:scale-95 
                   focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        onClick={onClick}
        aria-label="Learn more about Modunest"
    >
        {children}
    </button>
))

// Set display names for better debugging
SvgPage.displayName = 'SvgPage';
InteractiveSvgContainer.displayName = 'InteractiveSvgContainer';
ContentSection.displayName = 'ContentSection';
ActionButtons.displayName = 'ActionButtons';
PrimaryButton.displayName = 'PrimaryButton';
SecondaryButton.displayName = 'SecondaryButton';

export default SvgPage