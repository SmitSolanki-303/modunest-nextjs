'use client'

import React from 'react'
import Image from 'next/image';
import ModunestLogo from '@/assets/images/Modunest-logo.png';
import Navbar from '@/components/layout/Navbar'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Left side */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
                            <Image src={ModunestLogo} alt="Modunest-Logo" className="w-auto h-8" />
                        </a>
                    </div>

                    {/* Navbar - Right Side */}
                    <div className="flex items-center">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header