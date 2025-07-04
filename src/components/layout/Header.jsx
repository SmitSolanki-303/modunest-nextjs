'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ModunestLogo from '@/assets/images/Modunest-logo.png'
import Navbar from '@/components/layout/Navbar'

const Header = memo(() => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 ">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 z-50">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                            aria-label="Modunest Home"
                            prefetch={true}
                        >
                            <Image
                                src={ModunestLogo}
                                alt="Modunest Logo"
                                className="w-auto h-6 sm:h-8 md:h-10"
                                priority
                                quality={90}
                                sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, 40px"
                            />
                        </Link>
                    </div>

                    {/* Navigation Section */}
                    <div className="flex items-center relative">
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    )
})

Header.displayName = 'Header'

export default Header