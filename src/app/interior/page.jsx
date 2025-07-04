import Image from "next/image"

const InteriorPage = () => {
    // Sample interior project data
    const interiorProjects = [
        {
            id: 1,
            title: "Modern Living Room",
            category: "Residential",
            image: "https://picsum.photos/600/400",
        },
        {
            id: 2,
            title: "Minimalist Kitchen",
            category: "Residential",
            image: "https://picsum.photos/600/500",
        },
        {
            id: 3,
            title: "Corporate Office",
            category: "Commercial",
            image: "https://picsum.photos/600/450",
        },
        {
            id: 4,
            title: "Luxury Bedroom",
            category: "Residential",
            image: "https://picsum.photos/600/500",
        },
        {
            id: 5,
            title: "Restaurant Design",
            category: "Hospitality",
            image: "https://picsum.photos/600/550",
        },
        {
            id: 6,
            title: "Boutique Hotel Lobby",
            category: "Hospitality",
            image: "https://picsum.photos/600/480",
        },
        {
            id: 7,
            title: "Contemporary Bathroom",
            category: "Residential",
            image: "https://picsum.photos/600/420",
        },
        {
            id: 8,
            title: "Co-working Space",
            category: "Commercial",
            image: "https://picsum.photos/600/460",
        },
    ]

    return (
         <section id="interior-page" className="bg-[#F5F3EE]">
            {/* Header */}
            <div className="px-6 md:px-8 lg:px-12 pt-28 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
                        <div className="mb-10 lg:mb-0">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#211F19] tracking-tight leading-none">
                                Interior
                            </h1>
                        </div>
                        <div className="lg:max-w-xl">
                            <p className="text-lg md:text-xl text-[#484439] font-light leading-relaxed">
                                A curated collection of projects that blend creativity, innovation, and architectural sensibility.
                            </p>
                            <div className="flex items-center gap-3 mt-6">
                                <div className="w-2 h-2 rounded-full bg-[#484439]"></div>
                                <span className="text-sm font-medium text-[#484439]/80 tracking-wide">
                                    {interiorProjects.length} Projects
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
                        {interiorProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-xl bg-[#EDEAE0] shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Optional overlay */}
                                {/* <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white text-lg font-light drop-shadow-md">{project.title}</h3>
                                    <p className="text-sm text-white/80 drop-shadow">{project.category}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InteriorPage