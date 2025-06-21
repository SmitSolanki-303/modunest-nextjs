"use client"

import { useState, useRef } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(null)
    const navbarContentRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navItems = [
        {
            name: "Collection",
            href: "/collection",
            description:
                "By pre-constructing our homes offsite, we save valuable resources and reduce construction time significantly.",
            active: true,
        },
        {
            name: "Interiors",
            href: "/interiors",
            description:
                "By pre-constructing our homes offsite, we save valuable resources and reduce construction time significantly.",
            active: false,
        },
        {
            name: "Portfolio",
            href: "/portfolio",
            description:
                "By pre-constructing our homes offsite, we save valuable resources and create environmentally friendly solutions for modern living.",
            active: false,
        },
        {
            name: "About",
            href: "/about",
            description:
                "Learn more about our company, our mission, and how we are revolutionizing the construction industry with innovative approaches.",
            active: false,
        },
    ]

    return ( 
        <div className="relative">
            <nav className="fixed top-5 right-0 z-50">
                <div className="w-fit px-4 sm:px-6 lg:px-8">
                    <div
                        className="flex justify-center items-center bg-white rounded-lg shadow-sm p-1 transition-all duration-300 ease-in-out   "
                        ref={navbarContentRef}
                    >
                        {/* Desktop Navigation */}
                        <div className="hidden md:block relative">
                            <div className="flex items-center justify-center space-x-8">
                                {navItems.map((item, index) => (    
                                    <div
                                        key={item.name}
                                        className="relative m-0 px-4"
                                        onMouseEnter={() => setHoveredItem(index)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a
                                            href={item.href}
                                            className={`text-sm font-urbanist transition-colors duration-200 ${item.active ? "text-gray-900" : "text-gray-400 hover:text-gray-900"
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                ))}
                                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                                    Contact
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200 w-screen">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${item.active ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:text-indigo-600 hover:bg-white"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="w-full text-left bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2">
                            Contact
                        </button>
                    </div>
                </div>

                {/* Hover Dropdown */}
                <div
                    className={`absolute top-10 right-8 bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-out z-40 min-h-fit ${hoveredItem !== null ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    style={{
                        width: navbarContentRef.current ? `${navbarContentRef.current.offsetWidth}px` : "auto",
                        marginTop: "2px",
                    }}
                    onMouseEnter={() => setHoveredItem(hoveredItem)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {hoveredItem !== null && (
                        <div className="space-y-3">
                            {/* <h3 className="font-medium text-gray-900 text-base">{navItems[hoveredItem]?.name}</h3> */}
                            <p className="text-sm text-gray-600 leading-relaxed">{navItems[hoveredItem]?.description}</p>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
