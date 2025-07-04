'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

// Constants
const NAV_ITEMS = [
    {
        name: 'Collection',
        href: '/collection',
        description: 'By pre-constructing our homes offsite, we save valuable resources and reduce construction time significantly.',
        active: true,
    },
    {
        name: 'Interiors',
        href: '/interior',
        description: 'By pre-constructing our homes offsite, we save valuable resources and reduce construction time significantly.',
        active: false,
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
        description: 'By pre-constructing our homes offsite, we save valuable resources and create environmentally friendly solutions for modern living.',
        active: false,
    },
    {
        name: 'About',
        href: '/about',
        description: 'Learn more about our company, our mission, and how we are revolutionizing the construction industry with innovative approaches.',
        active: false,
    },
]

const MOBILE_BREAKPOINT = 768
const HOVER_DELAY = 150

const Navbar = () => {
    // State management
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(null)
    const [isDropdownHovered, setIsDropdownHovered] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Refs
    const navbarContentRef = useRef(null)
    const hoverTimeoutRef = useRef(null)

    // Optimized event handlers with useCallback
    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])
    const closeMenu = useCallback(() => setIsOpen(false), [])

    const handleMouseEnter = useCallback((index) => {
        if (isMobile) return
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
        setHoveredItem(index)
    }, [isMobile])

    const handleMouseLeave = useCallback(() => {
        if (isMobile) return
        hoverTimeoutRef.current = setTimeout(() => {
            if (!isDropdownHovered) setHoveredItem(null)
        }, HOVER_DELAY)
    }, [isMobile, isDropdownHovered])

    const handleDropdownEnter = useCallback(() => {
        if (isMobile) return
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
        setIsDropdownHovered(true)
    }, [isMobile])

    const handleDropdownLeave = useCallback(() => {
        if (isMobile) return
        setIsDropdownHovered(false)
        setHoveredItem(null)
    }, [isMobile])

    // Optimized resize handler
    const handleResize = useCallback(() => {
        const mobile = window.innerWidth < MOBILE_BREAKPOINT
        setIsMobile(mobile)
        if (!mobile && isOpen) setIsOpen(false)
    }, [isOpen])

    // Optimized outside click handler
    const handleClickOutside = useCallback((event) => {
        if (navbarContentRef.current &&
            !navbarContentRef.current.contains(event.target) &&
            isOpen) {
            setIsOpen(false)
        }
    }, [isOpen])

    // Effects
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, handleClickOutside])

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current)
            }
        }
    }, [])

    // Memoized style calculations
    const dropdownStyles = useMemo(() => ({
        width: navbarContentRef.current
            ? `${Math.min(navbarContentRef.current.offsetWidth, 400)}px`
            : '350px',
        marginTop: '8px',
    }), [navbarContentRef.current])

    // Memoized class generators
    const getNavItemClasses = useCallback((item) =>
        `inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-grey/10 ${item.active ? 'text-brown' : 'text-grey hover:text-brown'
        }`, [])

    const getMobileNavItemClasses = useCallback((item) =>
        `flex items-center px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${item.active
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'text-grey hover:text-brown hover:bg-grey/10'
        }`, [])

    // Memoized component render functions
    const renderDesktopNavItem = useCallback((item, index) => (
        <div
            key={item.name}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
        >
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={getNavItemClasses(item)}
            >
                {item.name}
                <ChevronDown className="ml-1 h-3 w-3 opacity-60" />
            </a>
        </div>
    ), [handleMouseEnter, handleMouseLeave, getNavItemClasses])

    const renderMobileNavItem = useCallback((item) => (
        <div key={item.name} className="space-y-2">
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={getMobileNavItemClasses(item)}
                onClick={closeMenu}
            >
                {item.name}
            </a>
            <p className="px-3 pb-2 text-sm text-grey leading-relaxed">
                {item.description}
            </p>
        </div>
    ), [getMobileNavItemClasses, closeMenu])

    const renderDesktopNavigation = useMemo(() => (
        <div className="hidden md:block relative">
            <div className="flex items-center justify-center">
                {NAV_ITEMS.map(renderDesktopNavItem)}
                <button
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ml-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label="Contact us"
                >
                    Contact
                </button>
            </div>
        </div>
    ), [renderDesktopNavItem])

    const renderMobileMenuButton = useMemo(() => (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-grey hover:text-brown hover:bg-grey/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
            >
                {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
            </button>
        </div>
    ), [toggleMenu, isOpen])

    return (
        <nav className="relative z-50" ref={navbarContentRef}>
            <div className="w-full max-w-fit mx-auto">
                <div className="flex justify-center items-center bg-white rounded-lg shadow-sm border border-grey/30 p-1 transition-all duration-300 ease-in-out">
                    {renderDesktopNavigation}
                    {renderMobileMenuButton}
                </div>
            </div>

            {/* Mobile Overlay */}
            <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                <div
                    className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
                    onClick={closeMenu}
                />
                <div className={`absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="flex flex-col h-full">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-4 border-b border-grey/40">
                            <h2 className="text-lg font-semibold text-brown">Menu</h2>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md text-grey hover:text-brown hover:bg-grey/10 focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Mobile Navigation Items */}
                        <div className="flex-1 overflow-y-auto py-4">
                            <div className="space-y-1 px-4">
                                {NAV_ITEMS.map(renderMobileNavItem)}
                            </div>
                        </div>

                        {/* Mobile Footer */}
                        <div className="p-4 border-t border-grey/40">
                            <button
                                className="w-full bg-green-700 hover:bg-green-800 text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                onClick={closeMenu}
                                aria-label="Contact us"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Dropdown */}
            <div
                className={`hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-grey/40 p-6 transition-all duration-300 ease-out z-30 ${hoveredItem !== null
                        ? 'opacity-100 translate-y-2'
                        : 'opacity-0 translate-y-0 pointer-events-none'
                    }`}
                style={dropdownStyles}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
            >
                {hoveredItem !== null && (
                    <div className="space-y-3">
                        <h3 className="font-semibold text-brown text-base">
                            {NAV_ITEMS[hoveredItem]?.name}
                        </h3>
                        <p className="text-sm text-grey leading-relaxed">
                            {NAV_ITEMS[hoveredItem]?.description}
                        </p>
                        <div className="pt-2">
                            <a
                            href={NAV_ITEMS[hoveredItem]?.href}
                            className="inline-flex items-center text-sm font-medium text-green-700 hover:text-green-800 transition-colors duration-200"
                        >
                            Learn more →
                        </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar