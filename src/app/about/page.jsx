"use client"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const AboutPage = () => {
    const imageRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start start", "end end"],
    })

    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    // const y = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section id="about" className="bg-[#F5F3EE] px-6 md:px-10 lg:px-20 pt-28 pb-28">
            {/* Hero Text */}
            <motion.div
                className="max-w-4xl mx-auto pt-28 pb-20"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light  text-[#211F19] leading-tight tracking-tight">
                    We’re a new-age housing studio blending design, craft, and innovation under one roof.
                </h1>
            </motion.div>

            {/* Parallax Hero Image */}
            <div className="max-w-7xl mx-auto mb-24">
                <div
                    className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-xl shadow-md"
                    ref={imageRef}
                >
                    <motion.div
                        // style={{ scale, y }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/Modunest-Hero.png"
                            alt="Modern housing aerial view"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* 2-column About Section */}
            <motion.div
                className="max-w-7xl mx-auto mb-32"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light text-[#211F19] leading-tight">
                            A team of architects, engineers, and makers.
                        </h2>
                    </div>
                    <div className="space-y-6 text-lg md:text-xl text-[#484439] leading-relaxed font-light">
                        <p>
                            Our modular approach simplifies complex housing processes using a digital-first system and traditional craftsmanship.
                        </p>
                        <p>
                            We believe standardizing the foundation allows creativity to thrive—making design-led living accessible.
                        </p>
                        <p>
                            Inspired by heritage materials and human-centric architecture, we create spaces that feel like home—forever.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Journal Section */}
            <motion.div
                className="max-w-7xl mx-auto mb-32"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-light text-[#211F19] mb-12 underline">Our journal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[1, 2, 3, 4].map((num) => (
                        <motion.div key={num} className="group cursor-pointer" variants={fadeInUp}>
                            <div className="relative w-full h-64 md:h-80 mb-4 overflow-hidden rounded-xl shadow-sm">
                                <Image
                                    src={`https://picsum.photos/480/320?random=${num}`}
                                    alt={`Journal ${num}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h4 className="text-xl font-light text-[#211F19] mb-1">
                                Journal Title {num}
                            </h4>
                            <p className="text-sm text-[#484439]">Category</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
                className="max-w-4xl mx-auto mb-32 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-light text-[#211F19] mb-12">
                    Let's redefine home together—through intentional design and timeless execution.
                </h2>
            </motion.div>

            {/* Commitments */}
            <motion.div
                className="max-w-7xl mx-auto mb-32"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <h3 className="text-3xl md:text-4xl font-light text-[#211F19] mb-6">Our Commitments</h3>
                <p className="text-lg text-[#484439] mb-16">
                    With every project, we focus on outcomes that last beyond trends.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#484439]">
                    {[
                        ["Design-First Thinking", "We combine aesthetics and usability for elevated everyday living."],
                        ["Craft with Intent", "Each detail is curated and measured for long-term value."],
                        ["Streamlined Process", "Clear timelines, honest pricing, and zero ambiguity."],
                        ["Built to Endure", "Homes that retain beauty, function, and integrity over decades."]
                    ].map(([title, desc], i) => (
                        <div key={i}>
                            <h4 className="text-xl font-medium text-[#211F19] mb-3">{title}</h4>
                            <p className="leading-relaxed text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default AboutPage
