"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"
import { getCollectionData } from "@/data/homesData"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

// Extract configurations outside the component so their references NEVER change on re-render.
const creativeEffectConfig = {
    prev: {
        shadow: true,
        translate: [0, '-100%', 0],
        scale: 0.95,
        opacity: 0
    },
    next: {
        translate: [0, '100%', 0],
        scale: 1.05,
        opacity: 0
    },
};

const paginationConfig = {
    el: '.custom-pagination',
    clickable: true,
    renderBullet: function (index, className) {
        return `<span class="${className} w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 mx-0 my-1.5 block cursor-pointer"></span>`;
    },
};

const navigationConfig = {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
};

export default function CollectionSlider() {
    const [scrollDirection, setScrollDirection] = useState("down")
    const [swiperInstance, setSwiperInstance] = useState(null)
    const router = useRouter()
    const homesData = getCollectionData()
    const isScrolling = useRef(false)

    const handleCTAClick = (id) => {
        router.push(`/collection-detail/${id}`)
    }

    // Restore exact keyboard arrow functionality globally
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!swiperInstance) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                swiperInstance.slideNext();
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                swiperInstance.slidePrev();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [swiperInstance]);

    // Custom Robust Mousewheel Handler
    useEffect(() => {
        const handleWheel = (e) => {
            if (!swiperInstance) return;
            
            if (Math.abs(e.deltaY) < 5) return;
            if (isScrolling.current) return;
            
            if (e.deltaY > 0) {
                swiperInstance.slideNext();
            } else if (e.deltaY < 0) {
                swiperInstance.slidePrev();
            }

            isScrolling.current = true;
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [swiperInstance]);

    return (
        <section
            id="collection"
            className="relative w-full h-screen overflow-hidden bg-[#F5F3EE] overscroll-none"
            aria-label="Modular Homes Collection Slider"
        >
            <Swiper
                onSwiper={setSwiperInstance}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                modules={[Pagination, Navigation, EffectCreative]}
                effect="creative"
                creativeEffect={creativeEffectConfig}
                onSlideChange={(swiper) => {
                    const direction = swiper.activeIndex > swiper.previousIndex ? "down" : "up";
                    setScrollDirection(direction);
                }}
                pagination={paginationConfig}
                navigation={navigationConfig}
                className="w-full h-full"
            >
                {homesData.map((home, index) => (
                    <SwiperSlide key={home.id}>
                        {({ isActive }) => {
                            const yTranslateClasses = isActive
                                ? "translate-y-0"
                                : scrollDirection === "down"
                                    ? "translate-y-12"
                                    : "-translate-y-12";

                            return (
                                <div className="relative w-full h-full overflow-hidden">
                                    <div className={`w-full h-full transition-all duration-1000 ease-out ${isActive ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}>
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

                                    <div className={`absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`} />

                                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16 pointer-events-none">
                                        <div className="max-w-2xl pointer-events-auto">
                                            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-8 transition-all duration-1000 ease-out ${isActive ? "opacity-100 delay-300" : "opacity-0 delay-0"} ${yTranslateClasses}`}>
                                                {home.title}
                                            </h1>

                                            <button
                                                onClick={() => handleCTAClick(home.id)}
                                                className={`bg-[#484439] hover:bg-[#211F19] text-white font-medium tracking-wide px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-[#B5A58D] focus:ring-offset-2 ${isActive ? "opacity-100 delay-500" : "opacity-0 delay-0"} ${isActive ? "translate-y-0" : scrollDirection === "down" ? "translate-y-8" : "-translate-y-8"}`}
                                            >
                                                VIEW HOME
                                            </button>

                                            <div className={`flex items-center space-x-3 mt-6 transition-all duration-1000 ease-out ${isActive ? "opacity-100 delay-700" : "opacity-0 delay-0"} ${isActive ? "translate-y-0" : scrollDirection === "down" ? "translate-y-8" : "-translate-y-8"}`}>
                                                <button
                                                    className="custom-prev w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-[#B5A58D] flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronUp className="w-7 h-7 text-black" />
                                                </button>
                                                <button
                                                    className="custom-next w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-[#B5A58D] flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronDown className="w-7 h-7 text-black" />
                                                </button>
                                                <div className="ml-4 text-white/80 text-sm font-medium">
                                                    {index + 1} / {homesData.length}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .custom-pagination .swiper-pagination-bullet-active {
                    background-color: white !important;
                    transform: scale(1.25);
                    opacity: 1;
                }
            `}</style>
            <div className="custom-pagination absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20" />
        </section>
    )
}
