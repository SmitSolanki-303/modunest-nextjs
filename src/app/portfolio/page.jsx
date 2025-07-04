"use client"
import { useState } from "react"
import Image from "next/image"

const PortfolioPage = () => {
    const [hoveredId, setHoveredId] = useState(null)

    const projects = [
        {
            id: "V",
            title: "Project V",
            subtitle: "Visual Identity & Branding",
            year: "2024",
            image: "https://picsum.photos/600/800?random=1",
        },
        {
            id: "DM",
            title: "Project DM",
            subtitle: "Digital Marketing Campaign",
            year: "2024",
            image: "https://picsum.photos/600/500?random=2",
        },
        {
            id: "BH",
            title: "Project BH",
            subtitle: "Brand Strategy & Design",
            year: "2023",
            image: "https://picsum.photos/600/700?random=3",
        },
        {
            id: "PK",
            title: "Project PK",
            subtitle: "Packaging Design",
            year: "2023",
            image: "https://picsum.photos/600/600?random=4",
        },
        {
            id: "AS",
            title: "Project AS",
            subtitle: "Art Showcase Campaign",
            year: "2022",
            image: "https://picsum.photos/600/550?random=5",
        },
    ]

    return (
        <section id="portfolio" className="bg-[#F5F3EE]">
            {/* Header */}
            <div className="px-6 md:px-8 lg:px-12 pt-28 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
                        <div className="mb-10 lg:mb-0">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#211F19] tracking-tight leading-none">
                                Portfolio
                            </h1>
                        </div>
                        <div className="lg:max-w-xl">
                            <p className="text-lg md:text-xl text-[#484439] font-light leading-relaxed">
                                A visual archive of selected projects that reflect our creative direction and philosophy.
                            </p>
                            <div className="flex items-center gap-3 mt-6">
                                <div className="w-2 h-2 rounded-full bg-[#484439]"></div>
                                <span className="text-sm font-medium text-[#484439]/80 tracking-wide">
                                    {projects.length} Projects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="px-6 md:px-8 lg:px-12 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className={`w-full h-auto object-cover transition-transform duration-700 ease-out ${hoveredId === project.id ? "scale-105" : ""}`}
                                />
                                {/* Optional overlay or caption */}
                                {/* <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white text-lg font-light drop-shadow">{project.title}</h3>
                                    <p className="text-sm text-white/80 drop-shadow">{project.subtitle}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioPage
