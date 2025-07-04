"use client"

import { useState, useEffect, useRef } from "react"

const ModularHouseSvg = () => {
    const [animationProgress, setAnimationProgress] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const svgRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        // Intersection Observer to detect when component is visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                    startAnimation()
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of component is visible
                rootMargin: '0px 0px -100px 0px' // Start animation a bit before fully visible
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [isVisible])

    const startAnimation = () => {
        const duration = 3000 // 3 seconds total animation
        const startTime = Date.now()
        
        const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3)
            setAnimationProgress(easeOutCubic)
            
            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }
        
        requestAnimationFrame(animate)
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (svgRef.current) {
                const rect = svgRef.current.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const x = (e.clientX - centerX) / rect.width
                const y = (e.clientY - centerY) / rect.height
                setMousePosition({ x: x * 15, y: y * 15 }) // Reduced mouse effect
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    // Calculate transforms based on animation progress
    const getTransform = (startX, startY, endX, endY, startScale = 1, endScale = 1, delay = 0) => {
        // Apply delay to create staggered animation
        const adjustedProgress = Math.max(0, Math.min(1, (animationProgress - delay) / (1 - delay)))
        
        const currentX = startX + (endX - startX) * adjustedProgress
        const currentY = startY + (endY - startY) * adjustedProgress
        const currentScale = startScale + (endScale - startScale) * adjustedProgress

        // Add subtle mouse parallax effect (reduced when fully assembled)
        const mouseEffect = 1 - animationProgress * 0.5
        const mouseX = mousePosition.x * mouseEffect * 0.3
        const mouseY = mousePosition.y * mouseEffect * 0.3

        return `translate(${currentX + mouseX}, ${currentY + mouseY}) scale(${currentScale})`
    }

    // Define start and end positions for each element with staggered delays
    const transforms = {
        // Base platform - appears first
        basePlatform: getTransform(-50, 100, 0, 0, 0.8, 1, 0),

        // Main module - comes from right
        mainModule: getTransform(200, -80, 0, 0, 0.7, 1, 0.1),

        // Top module - comes from top left
        topModule: getTransform(-150, -200, 0, 0, 0.6, 1, 0.2),

        // Side module - comes from far right
        sideModule: getTransform(300, -50, 0, 0, 0.5, 1, 0.3),

        // Windows - fade in with scale
        leftWindow: getTransform(-20, -20, 0, 0, 0.3, 1, 0.4),
        rightWindow: getTransform(20, -20, 0, 0, 0.3, 1, 0.45),
        topWindow: getTransform(0, -30, 0, 0, 0.3, 1, 0.5),
        sideWindow: getTransform(50, -30, 0, 0, 0.3, 1, 0.55),

        // Door - comes from center
        door: getTransform(0, -50, 0, 0, 0.4, 1, 0.6),

        // Roof - comes from top
        roof: getTransform(0, -150, 0, 0, 0.6, 1, 0.65),

        // Solar panels - staggered appearance
        solar1: getTransform(-80, -200, 0, 0, 0.2, 1, 0.7),
        solar2: getTransform(-40, -200, 0, 0, 0.2, 1, 0.75),
        solar3: getTransform(0, -200, 0, 0, 0.2, 1, 0.8),
        solar4: getTransform(40, -200, 0, 0, 0.2, 1, 0.85),
        solar5: getTransform(80, -200, 0, 0, 0.2, 1, 0.9),
    }

    // Helper function to get opacity with delay
    const getOpacity = (delay = 0, maxOpacity = 1) => {
        const adjustedProgress = Math.max(0, Math.min(1, (animationProgress - delay) / (1 - delay)))
        return adjustedProgress * maxOpacity
    }

    return (
        <div ref={containerRef} className="relative w-full h-full">
            <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full h-auto"
                style={{ overflow: "visible" }}
            >
                {/* Base platform */}
                <g transform={transforms.basePlatform}>
                    <rect
                        x="150"
                        y="450"
                        width="500"
                        height="20"
                        rx="2"
                        fill="#CBAF87"
                        style={{
                            opacity: getOpacity(0, 0.9),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                {/* Main module */}
                <g transform={transforms.mainModule}>
                    <rect
                        x="250"
                        y="250"
                        width="300"
                        height="200"
                        rx="4"
                        fill="#5A3E36"
                        style={{
                            opacity: getOpacity(0.1, 0.95),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                {/* Top module */}
                <g transform={transforms.topModule}>
                    <rect
                        x="300"
                        y="170"
                        width="200"
                        height="80"
                        rx="4"
                        fill="#8C977D"
                        style={{
                            opacity: getOpacity(0.2, 0.95),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                {/* Side module */}
                <g transform={transforms.sideModule}>
                    <rect
                        x="550"
                        y="310"
                        width="100"
                        height="140"
                        rx="4"
                        fill="#CBAF87"
                        style={{
                            opacity: getOpacity(0.3, 0.95),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                {/* Windows */}
                <g transform={transforms.leftWindow}>
                    <rect
                        x="280"
                        y="280"
                        width="80"
                        height="120"
                        rx="2"
                        fill="#ECE6DF"
                        style={{
                            opacity: getOpacity(0.4, 0.9),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                <g transform={transforms.rightWindow}>
                    <rect
                        x="440"
                        y="280"
                        width="80"
                        height="120"
                        rx="2"
                        fill="#ECE6DF"
                        style={{
                            opacity: getOpacity(0.45, 0.9),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                <g transform={transforms.topWindow}>
                    <rect
                        x="350"
                        y="190"
                        width="100"
                        height="40"
                        rx="2"
                        fill="#ECE6DF"
                        style={{
                            opacity: getOpacity(0.5, 0.9),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                <g transform={transforms.sideWindow}>
                    <rect
                        x="570"
                        y="330"
                        width="60"
                        height="60"
                        rx="2"
                        fill="#ECE6DF"
                        style={{
                            opacity: getOpacity(0.55, 0.9),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                {/* Door */}
                <g transform={transforms.door}>
                    <rect
                        x="370"
                        y="350"
                        width="60"
                        height="100"
                        rx="2"
                        fill="#8C977D"
                        style={{
                            opacity: getOpacity(0.6, 0.95),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                {/* Roof elements */}
                <g transform={transforms.roof}>
                    <path
                        d="M250 250L400 180L550 250"
                        stroke="#5A3E36"
                        strokeWidth="10"
                        fill="none"
                        style={{
                            opacity: getOpacity(0.65, 0.8),
                            transition: "opacity 0.3s ease-out"
                        }}
                    />
                </g>

                {/* Solar panels */}
                {[
                    { transform: transforms.solar1, x: "330", delay: 0.7 },
                    { transform: transforms.solar2, x: "360", delay: 0.75 },
                    { transform: transforms.solar3, x: "390", delay: 0.8 },
                    { transform: transforms.solar4, x: "420", delay: 0.85 },
                    { transform: transforms.solar5, x: "450", delay: 0.9 },
                ].map((solar, index) => (
                    <g key={index} transform={solar.transform}>
                        <rect
                            x={solar.x}
                            y="200"
                            width="20"
                            height="30"
                            rx="1"
                            fill="#333333"
                            style={{
                                opacity: getOpacity(solar.delay, 0.9),
                                transition: "opacity 0.3s ease-out"
                            }}
                        />
                    </g>
                ))}

                {/* Landscape elements */}
                <g style={{ 
                    opacity: getOpacity(0.95, 0.6),
                    transition: "opacity 0.5s ease-out"
                }}>
                    <path
                        d="M170 450C170 450 190 430 210 440C230 450 250 420 270 430C290 440 300 450 300 450"
                        stroke="#8C977D"
                        strokeWidth="4"
                        fill="none"
                    />
                    <path
                        d="M500 450C500 450 520 430 540 440C560 450 580 420 600 430C620 440 630 450 630 450"
                        stroke="#8C977D"
                        strokeWidth="4"
                        fill="none"
                    />
                </g>
            </svg>

            {/* Optional: Animation progress indicator (remove in production) */}
            {isVisible && (
                <div className="absolute top-4 right-4 text-sm text-gray-500 bg-white/80 px-2 py-1 rounded">
                    Assembly: {Math.round(animationProgress * 100)}%
                </div>
            )}
        </div>
    )
}

export default ModularHouseSvg