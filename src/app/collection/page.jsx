"use client"

import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"
import { getCollectionData } from "../../data/homesData" // Import the external data

const CollectionPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const [scrollDirection, setScrollDirection] = useState("down") // Track scroll direction
    const containerRef = useRef(null)
    const scrollTimeoutRef = useRef(null)
    const router = useRouter()

    // Add refs to store current values
    const currentIndexRef = useRef(currentIndex)
    const isScrollingRef = useRef(isScrolling)

    // Get homes data from external file
    const homesData = getCollectionData()

    // Update refs when state changes
    useEffect(() => {
        currentIndexRef.current = currentIndex
        isScrollingRef.current = isScrolling
    }, [currentIndex, isScrolling])

    // Enhanced scroll handler with scroll direction tracking
    const handleScroll = (e) => {
        e.preventDefault()
        // Clear any existing timeout first
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current)
        }

        // Check if already scrolling
        if (isScrollingRef.current) return

        const delta = e.deltaY
        const currentIdx = currentIndexRef.current

        // Determine next index and scroll direction
        let nextIndex = currentIdx
        let direction = "down"

        if (delta > 0 && currentIdx < homesData.length - 1) {
            nextIndex = currentIdx + 1
            direction = "down"
        } else if (delta < 0 && currentIdx > 0) {
            nextIndex = currentIdx - 1
            direction = "up"
        }

        // Only proceed if index will change
        if (nextIndex !== currentIdx) {
            setScrollDirection(direction)
            setIsScrolling(true)
            setCurrentIndex(nextIndex)

            // Set timeout with cleanup
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false)
                scrollTimeoutRef.current = null
            }, 800)
        }
    }

    // Enhanced keyboard handler with direction tracking
    const handleKeyDown = (e) => {
        // Clear any existing timeout first
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current)
        }

        if (isScrollingRef.current) return

        const currentIdx = currentIndexRef.current
        let nextIndex = currentIdx
        let direction = "down"

        if (e.key === "ArrowDown" && currentIdx < homesData.length - 1) {
            nextIndex = currentIdx + 1
            direction = "down"
        } else if (e.key === "ArrowUp" && currentIdx > 0) {
            nextIndex = currentIdx - 1
            direction = "up"
        }

        // Only proceed if index will change
        if (nextIndex !== currentIdx) {
            setScrollDirection(direction)
            setIsScrolling(true)
            setCurrentIndex(nextIndex)

            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false)
                scrollTimeoutRef.current = null
            }, 800)
        }
    }

    // Handle touch events for mobile with direction tracking
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientY)
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientY)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd || isScrollingRef.current) return

        const distance = touchStart - touchEnd
        const isUpSwipe = distance > 50
        const isDownSwipe = distance < -50

        const currentIdx = currentIndexRef.current

        // Clear any existing timeout first
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current)
        }

        let nextIndex = currentIdx
        let direction = "down"

        if (isUpSwipe && currentIdx < homesData.length - 1) {
            nextIndex = currentIdx + 1
            direction = "down"
        } else if (isDownSwipe && currentIdx > 0) {
            nextIndex = currentIdx - 1
            direction = "up"
        }

        // Only proceed if index will change
        if (nextIndex !== currentIdx) {
            setScrollDirection(direction)
            setIsScrolling(true)
            setCurrentIndex(nextIndex)

            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false)
                scrollTimeoutRef.current = null
            }, 800)
        }

        // Reset touch values
        setTouchStart(0)
        setTouchEnd(0)
    }

    // Enhanced navigation function for indicators
    const navigateToIndex = (index) => {
        if (isScrollingRef.current || index === currentIndexRef.current) return

        // Clear any existing timeout first
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current)
        }

        // Determine direction based on index comparison
        const direction = index > currentIndexRef.current ? "down" : "up"

        setScrollDirection(direction)
        setIsScrolling(true)
        setCurrentIndex(index)

        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false)
            scrollTimeoutRef.current = null
        }, 800)
    }

    // Navigation functions for up/down buttons
    const handleUpClick = () => {
        const currentIdx = currentIndexRef.current
        if (currentIdx > 0) {
            navigateToIndex(currentIdx - 1)
        }
    }

    const handleDownClick = () => {
        const currentIdx = currentIndexRef.current
        if (currentIdx < homesData.length - 1) {
            navigateToIndex(currentIdx + 1)
        }
    }

    // Handle CTA button click - navigate to detail page with ID
    const handleCTAClick = () => {
        const currentHome = homesData[currentIndex]
        router.push(`/collection-detail/${currentHome.id}`)
    }

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        container.addEventListener("wheel", handleScroll, { passive: false })
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            container.removeEventListener("wheel", handleScroll)
            window.removeEventListener("keydown", handleKeyDown)
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current)
                scrollTimeoutRef.current = null
            }
        }
    }, [])

    // Safety useEffect to ensure isScrolling doesn't get stuck
    useEffect(() => {
        const safetyTimeout = setTimeout(() => {
            if (isScrolling) {
                console.log("Safety reset: isScrolling was stuck, resetting to false")
                setIsScrolling(false)
            }
        }, 2000) // 2 seconds safety net

        return () => clearTimeout(safetyTimeout)
    }, [isScrolling])

    // Function to get image animation classes based on scroll direction
    const getImageAnimationClasses = (index) => {
        const isActive = index === currentIndex
        const isPrevious = index < currentIndex
        const isNext = index > currentIndex

        if (isActive) {
            return "opacity-100 translate-y-0 scale-100 z-10"
        }

        // For scroll direction-based animations
        if (scrollDirection === "down") {
            // Scrolling down: next images come from bottom, previous go to top
            if (isNext) {
                return "opacity-0 translate-y-full scale-105 z-0"
            } else {
                return "opacity-0 -translate-y-full scale-95 z-0"
            }
        } else {
            // Scrolling up: previous images come from top, next go to bottom
            if (isPrevious) {
                return "opacity-0 -translate-y-full scale-105 z-0"
            } else {
                return "opacity-0 translate-y-full scale-95 z-0"
            }
        }
    }

    return (
        <>
            <Head>
                <title>Explore Our Modular Home Collection | Modunest</title>
                <meta
                    name="description"
                    content="Swipe through our curated modular home designs and explore beautiful, efficient spaces tailored for modern living."
                />
                <meta property="og:title" content="Explore Our Modular Home Collection | Modunest" />
                <meta property="og:description" content="Explore beautiful, efficient modular home designs." />
                <meta property="og:image" content="https://modunest.co.in/og-collection.jpg" />
                <meta name="robots" content="index, follow" />
            </Head>

            <section
                id="collection"
                ref={containerRef}
                className="relative w-full h-screen overflow-hidden bg-[#F5F3EE] overscroll-none touch-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Images Stack */}
                {homesData.map((home, index) => (
                    <div
                        key={home.id}
                        className={`
                        absolute inset-0 w-full h-full transition-all duration-700 ease-in-out
                        ${getImageAnimationClasses(index)}
                    `}
                    >
                        {/* Background Image with enhanced fade animation */}
                        <div className="relative w-full h-full overflow-hidden">
                            <div
                                className={`
                                w-full h-full transition-all duration-700 ease-out
                                ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"}
                            `}
                            >
                                <Image
                                    src={home.image || "/placeholder.svg"}
                                    alt={home.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                    priority={index <= 1}
                                    quality={90}
                                />
                            </div>

                            {/* Dark Overlay with fade effect */}
                            <div
                                className={`
                                absolute inset-0  bg-gradient-to-b from-black/10 to-black/30 transition-opacity duration-700
                                ${index === currentIndex ? "opacity-100" : "opacity-0"}
                            `}
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                            <div className="max-w-2xl">
                                {/* Title with enhanced animation */}
                                <h1
                                    className={`
                                    text-6xl md:text-7xl lg:text-8xl font-semibold  text-white mb-8
                                    transition-all duration-1000 ease-out
                                    ${index === currentIndex
                                            ? "opacity-100 translate-y-0 delay-300"
                                            : scrollDirection === "down"
                                                ? "opacity-0 translate-y-12 delay-0"
                                                : "opacity-0 -translate-y-12 delay-0"
                                        }
                                `}
                                >
                                    {home.title}
                                </h1>

                                {/* CTA Button with enhanced animation */}
                                <button
                                    onClick={handleCTAClick}
                                    className={`
                                bg-[#484439] hover:bg-[#211F19] text-white font-medium tracking-wide
                                    px-8 py-4 rounded-full text-lg transition-all duration-300
                                    hover:scale-105 active:scale-95 shadow-md focus:outline-none
                                    focus:ring-2 focus:ring-[#B5A58D] focus:ring-offset-2
                                    ${index === currentIndex
                                            ? "opacity-100 translate-y-0 delay-500"
                                            : scrollDirection === "down"
                                                ? "opacity-0 translate-y-8 delay-0"
                                                : "opacity-0 -translate-y-8 delay-0"
                                        }
                                `}
                                >
                                    VIEW HOME
                                </button>

                                {/* Up/Down Navigation Buttons */}
                                <div
                                    className={`
                                        flex items-center space-x-3 mt-6
                                        transition-all duration-1000 ease-out
                                        ${index === currentIndex
                                            ? "opacity-100 translate-y-0 delay-700"
                                            : scrollDirection === "down"
                                                ? "opacity-0 translate-y-8 delay-0"
                                                : "opacity-0 -translate-y-8 delay-0"
                                        }
`}
                                >
                                    {/* Up Button */}
                                    <button
                                        onClick={handleUpClick}
                                        disabled={currentIndex === 0 || isScrolling}
                                        className={`
                                            w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-[#B5A58D]
                                            flex items-center justify-center transition-all duration-300
                                            hover:bg-white hover:scale-110 active:scale-95 shadow-md
                                            ${currentIndex === 0 || isScrolling
                                                ? "opacity-50 cursor-not-allowed"
                                                : "opacity-100 cursor-pointer hover:shadow-xl"
                                            }
    `}
                                        aria-label="Previous image"
                                    >
                                        <ChevronUp className="w-7 h-7 text-black" />
                                    </button>

                                    {/* Down Button */}
                                    <button
                                        onClick={handleDownClick}
                                        disabled={currentIndex === homesData.length - 1 || isScrolling}
                                        className={`
                                            w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-[#B5A58D]
                                            flex items-center justify-center transition-all duration-300
                                            hover:bg-white hover:scale-110 active:scale-95 shadow-md
                                            ${currentIndex === homesData.length - 1 || isScrolling
                                                ? "opacity-50 cursor-not-allowed"
                                                : "opacity-100 cursor-pointer hover:shadow-xl"
                                            }
    `}
                                        aria-label="Next image"
                                    >
                                        <ChevronDown className="w-7 h-7 text-black" />
                                    </button>

                                    {/* Optional: Add current position indicator */}
                                    <div className="ml-4 text-white/80 text-sm font-medium">
                                        {currentIndex + 1} / {homesData.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Indicators */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-20">
                    {homesData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => navigateToIndex(index)}
                            className={`
                            w-3 h-3 rounded-full transition-all duration-300
                            ${currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}
                        `}
                            aria-label={`Go to ${homesData[index].title}`}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default CollectionPage