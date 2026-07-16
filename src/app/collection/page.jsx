import CollectionSlider from "@/components/sections/CollectionSlider"

export const metadata = {
    title: "Explore Our Modular Home Collection | Modunest",
    description: "Swipe through our curated modular home designs and explore beautiful, efficient spaces tailored for modern living.",
    openGraph: {
        title: "Explore Our Modular Home Collection | Modunest",
        description: "Explore beautiful, efficient modular home designs.",
        images: [
            {
                url: "https://modunest.co.in/og-collection.jpg",
                width: 1200,
                height: 630,
                alt: "Modunest Collection",
            }
        ],
    },
    robots: {
        index: true,
        follow: true,
    }
}

export default function CollectionPage() {
    return (
        <main>
            <CollectionSlider />
        </main>
    )
}