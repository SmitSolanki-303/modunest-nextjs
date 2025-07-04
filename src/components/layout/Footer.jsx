'use client'

import React, { memo } from 'react'
import Link from 'next/link'

const Footer = memo(() => {
    return (
        <footer 
            className="bg-dark text-grey py-12 px-6 md:px-16"
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <BrandSection />
                <NavigationSection />
                <ContactSection />
            </div>
            <CopyrightSection />
        </footer>
    )
})

const BrandSection = memo(() => (
    <div>
        <h2 className="text-2xl font-semibold text-grey tracking-wide mb-2">
            Modunest
        </h2>
        <p className="text-sm text-grey/80 leading-relaxed max-w-xs">
            Building modular spaces that blend sustainability, design, and efficiency. Crafted for modern living.
        </p>
    </div>
))

const NavigationSection = memo(() => (
    <nav aria-label="Footer navigation">
        <SectionHeading>Navigation</SectionHeading>
        <ul className="space-y-2 text-sm" role="list">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/collection">Collection</NavigationLink>
            <NavigationLink href="/portfolio">Portfolio</NavigationLink>
            <NavigationLink href="/about">About</NavigationLink>
            <NavigationLink href="/contact">Contact</NavigationLink>
        </ul>
    </nav>
))

const ContactSection = memo(() => (
    <div>
        <SectionHeading>Contact</SectionHeading>
        <address className="text-sm text-grey/80 space-y-1 not-italic">
            <ContactInfo 
                href="mailto:hello@modunest.com"
                aria-label="Email Modunest"
            >
                hello@modunest.com
            </ContactInfo>
            <ContactInfo 
                href="tel:+919876543210"
                aria-label="Call Modunest"
            >
                +91 98765 43210
            </ContactInfo>
            <ContactInfo>Navsari, India</ContactInfo>
        </address>
    </div>
))

const SectionHeading = memo(({ children }) => (
    <h3 className="text-sm font-semibold text-grey uppercase mb-4 tracking-wider">
        {children}
    </h3>
))

const NavigationLink = memo(({ href, children }) => (
    <li>
        <Link
            href={href}
            className="hover:text-green-700 transition-colors duration-200 focus:outline-none 
                        focus:underline focus:decoration-2 focus:underline-offset-2"
            prefetch={false} // Optimize prefetching
        >
            {children}
        </Link>
    </li>
))

const ContactInfo = memo(({ href, children, ...props }) => {
    if (href) {
        return (
            <p className="text-sm text-grey/80 mb-1">
                <a 
                    href={href}
                    className="hover:text-green-700 transition-colors duration-200 focus:outline-none 
                                focus:underline focus:decoration-2 focus:underline-offset-2"
                    {...props}
                >
                    {children}
                </a>
            </p>
        )
    }
    
    return (
        <p className="text-sm text-grey/80 mb-1" {...props}>
            {children}
        </p>
    )
})

const CopyrightSection = memo(() => (
    <div className="mt-12 border-t border-grey/30 pt-6 text-sm text-center text-grey/60">
        <p>
            © {new Date().getFullYear()} Modunest. All rights reserved.
        </p>
    </div>
))

// Set display names for better debugging
Footer.displayName = 'Footer';
BrandSection.displayName = 'BrandSection';
NavigationSection.displayName = 'NavigationSection';
ContactSection.displayName = 'ContactSection';
SectionHeading.displayName = 'SectionHeading';
NavigationLink.displayName = 'NavigationLink';
ContactInfo.displayName = 'ContactInfo';
CopyrightSection.displayName = 'CopyrightSection';

export default Footer