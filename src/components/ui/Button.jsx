'use client'

import React, { useCallback } from 'react'
import Link from 'next/link'

export default function Button({ 
    children, 
    href, 
    onClick, 
    className = "", 
    variant = "primary", 
    ariaLabel 
}) {
    const handleClick = useCallback((e) => {
        if (onClick) {
            onClick(e);
        }
        
        // Example global tracking if needed
        if (typeof window !== 'undefined' && window.gtag && href) {
            window.gtag('event', 'click', {
                event_category: 'CTA',
                event_label: ariaLabel || 'Button Click'
            });
        }
    }, [onClick, href, ariaLabel]);

    const baseStyles = "group relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
    
    const variants = {
        primary: "px-8 py-4 md:px-10 md:py-5 text-white text-lg md:text-xl rounded-full shadow-lg hover:shadow-2xl bg-[#484439] hover:bg-[#211F19] focus:ring-[#B5A58D]",
        secondary: "px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 border-b-2 border-gray-900 focus:ring-gray-900",
        outline: "px-6 py-3 text-gray-900 hover:text-gray-700 border-b-2 border-gray-300 hover:border-gray-900 focus:ring-gray-900"
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    const innerContent = (
        <>
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <>
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #B5A58D20, #21231920)' }} />
                    <div className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: '#B5A58D' }} />
                </>
            )}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                onClick={handleClick}
                className={combinedStyles}
                aria-label={ariaLabel}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
            >
                {innerContent}
            </Link>
        )
    }

    return (
        <button
            onClick={handleClick}
            className={combinedStyles}
            aria-label={ariaLabel}
        >
            {innerContent}
        </button>
    )
}
