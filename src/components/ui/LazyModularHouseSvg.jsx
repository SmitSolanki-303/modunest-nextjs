'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const ModularHouseSvg = dynamic(() => import('@/components/ui/ModularHouseSvg'), {
    loading: () => <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />,
    ssr: false // SVG can be client-side only if it's interactive
})

export default function LazyModularHouseSvg() {
    return <ModularHouseSvg />
}
