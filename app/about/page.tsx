import Image from "next/image";
import GlassMorphicCard from "../components/GlassMorphicCard";
import Navbar from "../components/Navbar";
import avatar from "../../public/avatar.webp";
import { getMemories } from "../lib/notion";

export default async function AboutPage() {
    const memories = await getMemories();

    const achievements = [
        {
            title: "LeetCode Contest Excellence",
            description: "Top 2.4% in LeetCode Biweekly Contest 162 (2025)",
            icon: "🏆"
        },
        {
            title: "Problem Solving Mastery",
            description: "600+ coding problems solved across platforms; 5-star SQL on HackerRank",
            icon: "💻"
        },
        {
            title: "Technical Writing Recognition",
            description: "2× recognized by GeeksforGeeks as an Exemplary Tech Writer",
            icon: "✍️"
        },
        {
            title: "Open Source Mentorship",
            description: "Mentored 35+ students in open-source (GSSoC 2022 & 2023)",
            icon: "🎓"
        },
        {
            title: "Hackathon Success",
            description: "Semi-finalist in intra-college Hackathon (Top 5/100 teams)",
            icon: "🚀"
        }
    ];

    const publications = [
        {
            title: "5G: The Stimulant to Digital Uprising in India",
            authors: "Tarun Singh, M. Dahiya",
            venue: "International Conference on Machine Learning, Big Data, Cloud and Parallel Computing (COM-IT-CON)",
            year: "2022",
            pages: "pp. 726-730",
            abstract: "The main objective of the paper is to discuss the role of 5G in Indian telecom sector and in other sectors too. It was expected that all 5G mobile technologies may be functional and operational by 2020. 5G comprises of advanced features and support advanced technologies, therefore its demand is much more awaited in the market, and it is the commanding technology in coming future which governs the telecom sector. This paper also discusses the key factors that can enable so that the rise in IoT devices and growth in supporting technologies can be seen. This paper also reviews the generations of mobile communication with their respective advantages and disadvantages. The paper also examines the impacts of 5G technologies on various sectors like industries, commerce, education, healthcare, agriculture, finance and social sectors.",
            link: "https://www.researchgate.net/publication/362706049_5G_The_Stimulant_to_Digital_Uprising_in_India"
        },
        {
            title: "An Analysis on Recommendation Systems in Machine Learning",
            authors: "Tarun Singh, Anees Ahmed Choudhary, Akash",
            venue: "International Research Journal of Engineering and Technology (IRJET)",
            year: "2021",
            pages: "",
            abstract: "With the increase in growth of the digital world and the influx of huge amount of information availability, a method to find the right choice in selecting and filtering an item to choose the right product from the pool of information has become necessary. To solve this problem, recommendations systems have been developed which can help the users in getting recommendations utilizing their previous searches and purchases. Recommendation systems are used in many areas which include and not limited to online shopping, news articles, and entertainment platforms.",
            link: "https://www.researchgate.net/publication/354527303_An_Analysis_on_Recommendation_Systems_in_Machine_Learning"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900/20">
            <Navbar />

            <main className="container mx-auto px-4 py-12 space-y-16">
                {/* About Me Section */}
                <section id="about-intro" className="pt-8">
                    <div className="flex gap-3 container mx-auto items-center mb-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-8">
                            About
                        </h1>
                        <div className="w-full h-1 bg-white/10 my-8"></div>
                    </div>
                    <GlassMorphicCard>
                        <div className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                {/* Image */}
                                <div className="shrink-0">
                                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                                        <Image
                                            src={avatar}
                                            alt="Tarun Singh"
                                            width={224}
                                            height={224}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-6">
                                    <div>
                                        <div className="space-y-4 text-lg text-zinc-200/90 leading-relaxed">
                                            <p>
                                                I'm a passionate developer and technical writer who recently completed an <span className="underline">MCA in Software Engineering</span> (with a <span className="underline">BCA</span> background).
                                                I love building performant, accessible products and sharing what I learn through writing and open-source contributions.
                                            </p>
                                            <p>
                                                Beyond coding, I'm deeply involved in creating educational content. I love making YouTube videos
                                                that break down complex technical concepts and sharing insights through LinkedIn posts to help the developer community grow.
                                            </p>
                                            <p>
                                                My journey in tech has been driven by curiosity, continuous learning, and a genuine desire to make
                                                technology more accessible to everyone. Whether it's through code, content, or community engagement,
                                                I strive to contribute meaningfully to the tech ecosystem.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <div className="px-4 py-2 bg-emerald-400/10 rounded-lg border border-emerald-400/20">
                                            <span className="text-emerald-300 font-medium">📚 MCA in Software Engineering</span>
                                        </div>
                                        <div className="px-4 py-2 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                                            <span className="text-cyan-300 font-medium">🎥 YouTube Creator</span>
                                        </div>
                                        <div className="px-4 py-2 bg-purple-400/10 rounded-lg border border-purple-400/20">
                                            <span className="text-purple-300 font-medium">💼 LinkedIn Content Creator</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassMorphicCard>
                </section>

                {/* Achievements Section */}
                <section id="achievements" >
                    <div className="flex gap-3 container mx-auto items-center mb-8">
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white">
                            Achievements
                        </h2>
                        <div className="w-full h-1 bg-white/10 my-8"></div>
                    </div>

                    <div className="space-y-4">
                        {achievements.map((achievement, idx) => (
                            <GlassMorphicCard key={idx}>
                                <div className="p-6 md:p-8">
                                    <div className="flex gap-6 items-start">
                                        {/* Icon */}
                                        <div className="shrink-0">
                                            <div className="w-16 h-16 rounded-xl bg-linear-to-br from-emerald-400/20 to-cyan-400/20 flex items-center justify-center text-3xl border border-white/10">
                                                {achievement.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                                {achievement.title}
                                            </h3>
                                            <p className="text-lg text-zinc-200/90">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </GlassMorphicCard>
                        ))}
                    </div>
                </section>

                {/* Research & Publications Section */}
                <section id="publications">
                    <div className="flex gap-3 container mx-auto items-center mb-8">
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-8">
                            Research & Publications
                        </h2>
                        <div className="w-full h-1 bg-white/10 my-8"></div>
                    </div>

                    <div className="space-y-6">
                        {publications.map((paper, idx) => (
                            <GlassMorphicCard key={idx}>
                                <div className="p-6 md:p-8">
                                    <div className="space-y-4">
                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                            {paper.title}
                                        </h3>

                                        {/* Authors */}
                                        <p className="text-lg text-emerald-300">
                                            {paper.authors}
                                        </p>

                                        {/* Venue & Year */}
                                        <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
                                            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                                {paper.venue}
                                            </span>
                                            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                                {paper.year}
                                            </span>
                                            {paper.pages && (
                                                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                                    {paper.pages}
                                                </span>
                                            )}
                                        </div>

                                        {/* Abstract */}
                                        <div className="pt-2">
                                            <h4 className="text-sm uppercase tracking-wider text-zinc-400 mb-2">Abstract</h4>
                                            <p className="text-zinc-200/80 leading-relaxed">
                                                {paper.abstract}
                                            </p>
                                        </div>

                                        {/* View Paper Link */}
                                        <div className="pt-2">
                                            <a
                                                href={paper.link}
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 rounded-lg border border-emerald-400/20 transition-all duration-300 font-medium"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                View Paper
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </GlassMorphicCard>
                        ))}
                    </div>
                </section>

                {/* Memories Section */}
                <section id="memories">
                    <div className="flex gap-3 container mx-auto items-center mb-8">
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-8">
                            Memories
                        </h2>
                        <div className="w-full h-1 bg-white/10 my-8"></div>
                    </div>

                    {memories.length > 0 ? (
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                            {memories.map((memory: any, idx: number) => (
                                <div
                                    key={memory.id || idx}
                                    className="break-inside-avoid"
                                >
                                    <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-400/30 transition-all duration-300">
                                        <Image
                                            src={memory.image}
                                            alt={`Memory ${idx + 1}`}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <GlassMorphicCard>
                            <div className="p-12 text-center">
                                <p className="text-zinc-400 text-lg">
                                    No memories available yet. Add images to your Notion database to see them here!
                                </p>
                            </div>
                        </GlassMorphicCard>
                    )}
                </section>

                {/* Back to Home */}
                <section className="text-center pb-8">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all duration-300 font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                </section>
            </main>
        </div>
    );
}
