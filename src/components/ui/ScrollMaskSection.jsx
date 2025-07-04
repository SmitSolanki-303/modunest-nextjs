"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ScrollMaskSection() {
    const sectionRef = useRef(null)

    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return

            const rect = sectionRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Calculate scroll progress when section is in view
            const start = rect.top + window.scrollY - windowHeight
            const end = rect.bottom + window.scrollY
            const current = window.scrollY

            if (current >= start && current <= end) {
                const progress = Math.min(Math.max((current - start) / (end - start), 0), 1)
                setScrollProgress(progress)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Initial call

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Generate organic blob path based on scroll progress
    const generateBlobPath = (progress) => {
        const size = 50 + progress * 150 // Grows from 50 to 200
        const centerX = 50
        const centerY = 50

        // Create organic blob shape with varying control points
        const points = []
        const numPoints = 8

        for (let i = 0; i < numPoints; i++) {
            const angle = (i / numPoints) * Math.PI * 2
            const radiusVariation = 0.8 + Math.sin(angle * 3 + progress * Math.PI) * 0.3
            const radius = size * radiusVariation

            const x = centerX + Math.cos(angle) * radius
            const y = centerY + Math.sin(angle) * radius

            points.push({ x, y })
        }

        // Create smooth curve through points
        let path = `M ${points[0].x} ${points[0].y}`

        for (let i = 0; i < points.length; i++) {
            const current = points[i]
            const next = points[(i + 1) % points.length]
            const nextNext = points[(i + 2) % points.length]

            // Calculate control points for smooth curves
            const cp1x = current.x + (next.x - points[(i - 1 + points.length) % points.length].x) * 0.2
            const cp1y = current.y + (next.y - points[(i - 1 + points.length) % points.length].y) * 0.2
            const cp2x = next.x - (nextNext.x - current.x) * 0.2
            const cp2y = next.y - (nextNext.y - current.y) * 0.2

            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`
        }

        path += " Z"
        return path
    }

    const maskId = "scroll-reveal-mask"
    const blobPath = generateBlobPath(scrollProgress)

    return (
        <div className="relative">
            {/* SVG Definitions */}
            <svg className="absolute inset-0 w-0 h-0">
                <defs>
                    <mask id={maskId}>
                        <rect width="100%" height="100%" fill="black" />
                        <path
                            d={blobPath}
                            fill="white"
                            transform="translate(-50, -50)"
                            style={{
                                transformOrigin: "50% 50%",
                                transition: "all 0.1s ease-out",
                            }}
                        />
                    </mask>
                </defs>
            </svg>

            {/* Main Section */}
            <section
                ref={sectionRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
            >
                {/* Background Image - Always visible */}
                <div className="absolute inset-0">
                    <Image
                        src="https://picsum.photos/1080/1920"
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>

                {/* Masked Content Layer */}
                <div
                    className="absolute inset-0"
                    style={{
                        mask: `url(#${maskId})`,
                        WebkitMask: `url(#${maskId})`,
                    }}
                >
                    {/* Revealed Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/placeholder.svg?height=1080&width=1920"
                            alt="Revealed Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Revealed Content */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="text-center text-white px-8 max-w-4xl">
                            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Organic
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                    Reveal
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                                Experience the smooth, organic masking effect that reveals content as you scroll through this immersive
                                section.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Default Content (visible when mask is small) */}
                <div className="relative z-20 text-center text-white px-8 max-w-4xl">
                    <div
                        className="transition-opacity duration-300"
                        style={{
                            opacity: scrollProgress < 0.3 ? 1 : 0,
                            pointerEvents: scrollProgress < 0.3 ? "auto" : "none",
                        }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-300">Scroll to Reveal</h2>
                        <p className="text-lg md:text-xl text-gray-400">Watch the organic mask animation unfold</p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div
                        className="w-1 bg-white rounded-full transition-all duration-300"
                        style={{
                            height: `${Math.max(40, scrollProgress * 100)}px`,
                            opacity: 0.6,
                        }}
                    />
                </div>
            </section>

            {/* Additional content for scroll testing */}
            <section className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Continue Scrolling</h3>
                    <p className="text-xl text-gray-600">The mask effect is complete. Add your next section here.</p>
                </div>
            </section>
        </div>
    )
}
