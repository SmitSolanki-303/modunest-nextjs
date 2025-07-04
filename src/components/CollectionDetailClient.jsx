"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

// Constants
const OVERLAY_OPACITY = "bg-black/20"
const HERO_SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 mt-10"
const CONTENT_SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

export const metadata = {
    title: "Modular Home Collection Detail | Modunest",
    description: "Detailed view of our modular home collection including specs, video preview, and sustainable design highlights.",
}


// Sub-components for better organization
const BackButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to Collection</span>
    </button>
)

const NavigationButton = ({ onClick, children, variant = "default" }) => {
    const baseClasses = "flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
    const variants = {
        default: "bg-gray-100 hover:bg-gray-200 text-gray-700",
        primary: "bg-green-600 hover:bg-green-700 text-white"
    }

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]}`}
        >
            {children}
        </button>
    )
}

const HeroSection = ({ hero }) => (
    <div className={HERO_SECTION_CLASSES}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                    {hero.mainHeading}
                </h2>
            </div>
            <div>
                <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed">
                    {hero.subHeading}
                </h3>
            </div>
        </div>
    </div>
)

const ImageSection = ({ homeData, videoDetail }) => (
    <div className="w-full">
        <div className="relative w-full h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 z-0">
                <Image
                    src={homeData.image}
                    alt={videoDetail.alt}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className={`absolute inset-0 ${OVERLAY_OPACITY}`} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />

            </div>
        </div>
    </div>
)

const ContentParagraphs = ({ paragraphs }) => (
    <div className="prose prose-lg text-gray-600">
        {paragraphs.map((paragraph, index) => (
            <p
                key={index}
                className={index < paragraphs.length - 1 ? "mb-4" : ""}
            >
                {paragraph}
            </p>
        ))}
    </div>
)

const SidebarSection = ({ section, index }) => (
    <div key={index}>
        <h5 className="text-lg font-medium text-gray-900 mb-3">
            {section.title}
        </h5>
        <ul className="space-y-2 text-gray-600">
            {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>• {item}</li>
            ))}
        </ul>
    </div>
)

const AdditionalContentSection = ({ additionalContent, sidebar }) => (
    <div className={`${CONTENT_SECTION_CLASSES} py-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h4 className="text-xl font-medium text-gray-900 mb-6">
                    {additionalContent.title}
                </h4>
                <ContentParagraphs paragraphs={additionalContent.paragraphs} />
            </div>
            <div className="space-y-8">
                {sidebar.map((section, index) => (
                    <SidebarSection key={index} section={section} index={index} />
                ))}
            </div>
        </div>
    </div>
)

const NavigationSection = ({ onBackClick, homeTitle }) => (
    <div className={`${CONTENT_SECTION_CLASSES} py-10 border-t border-gray-200`}>
        <div className="flex justify-between items-center">
            <NavigationButton onClick={onBackClick}>
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Collection</span>
            </NavigationButton>
            <div className="text-sm text-gray-500">
                {homeTitle} Collection
            </div>
        </div>
    </div>
)

const NotFoundState = ({ onBackClick }) => (
    <div className="w-full min-h-screen bg-[#F5F3EE] flex items-center justify-center">
        <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Collection Not Found
            </h2>
            <NavigationButton onClick={onBackClick} variant="primary">
                Back to Collection
            </NavigationButton>
        </div>
    </div>
)

// Main Component
const CollectionDetailClient = ({ homeData }) => {
    const router = useRouter()

    const handleBackToCollection = () => {
        router.push('/collection')
    }

    // Early return for missing data
    if (!homeData) {
        return <NotFoundState onBackClick={handleBackToCollection} />
    }

    const { detail } = homeData

    return (
        <section className="w-full min-h-screen bg-[#F5F3EE]" id="collection-detail">
            <HeroSection hero={detail.hero} />
            <ImageSection homeData={homeData} videoDetail={detail.video} />
            <AdditionalContentSection
                additionalContent={detail.additionalContent}
                sidebar={detail.sidebar}
            />
            <NavigationSection
                onBackClick={handleBackToCollection}
                homeTitle={homeData.title}
            />
        </section>
    )
}

export default CollectionDetailClient