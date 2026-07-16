import PortfolioPage from '@/components/sections/Portfolio'

export const metadata = {
    title: "Portfolio | Modunest",
    description: "A visual archive of selected projects that reflect our creative direction and philosophy.",
    openGraph: {
        title: "Portfolio | Modunest",
        description: "A visual archive of selected projects that reflect our creative direction and philosophy.",
    },
}

export default function PortfolioRoute() {
    return (
        <main className="min-h-screen bg-[#F5F3EE]">
            <PortfolioPage />
        </main>
    )
}
