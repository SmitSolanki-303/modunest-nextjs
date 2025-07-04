import { homesData } from "@/data/homesData"
import CollectionDetailClient from "@/components/CollectionDetailClient"

export async function generateStaticParams() {
    return homesData.map((home) => ({
        id: home.id,
    }))
}

export default async function CollectionDetailPage({ params }) {
    // Await params before using its properties
    const { id } = await params
    const homeData = homesData.find((home) => home.id === id)

    if (!homeData) {
        return (
            <div className="text-center py-20 text-xl text-gray-600">
                Collection not found.
            </div>
        )
    }

    return <CollectionDetailClient homeData={homeData} />
}