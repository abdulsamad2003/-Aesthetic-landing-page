import { Play, ArrowUpRight } from "lucide-react";

const LOGOS = ["AWWWARDS", "SITEINSPIRE", "MINDSPARKLE", "CSSDA", "DEZEEN", "TYPEWOLF"];

const MEDIA = [
    {
        id: 1,
        type: "Article",
        outlet: "Awwwards",
        title: "Behind the design of Maison Dubois: Quiet luxury in digital commerce",
        date: "Feb 2026",
        image:
            "https://static.prod-images.emergentagent.com/jobs/2ca2560f-2f27-4517-979a-04ebe401870a/images/50aaa050819176f2175939d9d561be5581bec1db63ba5f952fa49103eb44f706.png",
    },
    {
        id: 2,
        type: "Video",
        outlet: "Vimeo",
        title: "A quick tour of our design process",
        date: "Jan 2026",
        image:
            "https://static.prod-images.emergentagent.com/jobs/2ca2560f-2f27-4517-979a-04ebe401870a/images/d049994e32925616a8f58af1f7ca492990c92c1a10118a56198ff8d7bfd9ad84.png",
        isVideo: true,
    },
    {
        id: 3,
        type: "Feature",
        outlet: "Typewolf",
        title: "Font Curation in Focus: Aura Studio's typographic spec sheets",
        date: "Dec 2025",
        image:
            "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3Nzg1Njk2MzR8MA&ixlib=rb-4.1.0&q=85",
    },
    {
        id: 4,
        type: "Article",
        outlet: "Dezeen",
        title: "The new wave of digital design tools and custom interfaces",
        date: "Nov 2025",
        image:
            "https://static.prod-images.emergentagent.com/jobs/2ca2560f-2f27-4517-979a-04ebe401870a/images/ca03c3419c880d614ee6bd11513bdc5ff0c39d8a831ce9c89bb0fc45f6da5c46.png",
    },
    {
        id: 5,
        type: "Video",
        outlet: "YouTube",
        title: "A short film about digital craft and art direction",
        date: "Oct 2025",
        image:
            "https://images.unsplash.com/photo-1629922952881-2eed9b2f995b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3Nzg1Njk2MzR8MA&ixlib=rb-4.1.0&q=85",
        isVideo: true,
    },
    {
        id: 6,
        type: "Press",
        outlet: "Mindsparkle Mag",
        title: "Five digital design studios to watch this year",
        date: "Sep 2025",
        image:
            "https://images.unsplash.com/photo-1754473397061-e18dc1091855?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc3ODU2OTYzNHww&ixlib=rb-4.1.0&q=85",
    },
];

export default function OurMedia() {
    return (
        <section
            id="media"
            data-testid="section-our-media"
            className="relative border-t hairline"
        >
            {/* Header */}
            <div className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12 md:pb-16">
                <div className="max-w-3xl">
                    <span
                        data-testid="our-media-eyebrow"
                        className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-muted"
                    >
                        / Our Media
                    </span>
                    <h2
                        data-testid="our-media-heading"
                        className="mt-4 font-serif text-5xl md:text-6xl tracking-tighter leading-[1] text-stone-ink"
                    >
                        Our Media
                    </h2>
                    <p
                        data-testid="our-media-description"
                        className="mt-5 text-base md:text-lg leading-relaxed text-stone-muted font-light max-w-xl"
                    >
                        Articles, video features, and accolades detailing our work—a collection of mentions and features from design publications around the web.
                    </p>
                </div>
            </div>

            {/* Press Logos strip */}
            <div
                data-testid="press-logos-marquee"
                className="border-y hairline py-6 overflow-hidden"
            >
                <div className="marquee">
                    <div className="marquee-track">
                        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                            <span
                                key={i}
                                className="font-serif text-2xl md:text-3xl tracking-tight whitespace-nowrap text-stone-ink/60"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                    <div className="marquee-track" aria-hidden="true">
                        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                            <span
                                key={`b-${i}`}
                                className="font-serif text-2xl md:text-3xl tracking-tight whitespace-nowrap text-stone-ink/60"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Uniform 3-column media grid */}
            <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {MEDIA.map((m) => (
                        <article
                            key={m.id}
                            data-testid={`media-card-${m.id}`}
                            className="group cursor-pointer"
                        >
                            <div className="img-wrap relative aspect-[4/3] border hairline">
                                <img
                                    src={m.image}
                                    alt={m.title}
                                    className="h-full w-full object-cover"
                                />
                                {m.isVideo && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-md bg-white/30 border border-white/40 text-cream group-hover:bg-white/40 transition-all duration-500">
                                            <Play
                                                size={18}
                                                fill="currentColor"
                                                strokeWidth={0}
                                            />
                                        </span>
                                    </div>
                                )}
                                <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cream bg-stone-ink/70 backdrop-blur-sm px-2 py-1">
                                    {m.type}
                                </span>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-stone-muted">
                                    <span>{m.outlet}</span>
                                    <span>{m.date}</span>
                                </div>
                                <h3 className="mt-2 font-serif text-2xl tracking-tight leading-snug group-hover:text-accent-rust transition-colors duration-500">
                                    {m.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
