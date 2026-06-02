import { Star } from "lucide-react";

const REVIEWS = [
    {
        id: 1,
        author: "Charlotte Dubois",
        role: "Creative Director",
        company: "Maison Dubois",
        rating: 5,
        quote: "Aura Studio did not just build a website; they captured the architectural soul of our brand. The typesetting layout, the silent grids, and the custom transitions make our digital flagship feel like a high-end physical space.",
        verified: true,
    },
    {
        id: 2,
        author: "Marcus Vance",
        role: "Founder",
        company: "Studio Nord",
        rating: 5,
        quote: "The visual precision and front-end rigor of the Aura team are outstanding. They translated our extensive portfolio index into a structured, highly responsive digital system that perfectly represents our architectural work.",
        verified: true,
    },
    {
        id: 3,
        author: "Elena Rostova",
        role: "Brand Director",
        company: "Vespera Atelier",
        rating: 5,
        quote: "Aura Studio possesses a rare authority on web design. Their grid systems, clean typographic scales, and meticulous coding practices elevated our online print shop experience and converted interest immediately.",
        verified: true,
    },
];

export default function OurReview() {
    return (
        <section
            id="reviews"
            data-testid="section-our-review"
            className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t hairline"
        >
            {/* Header */}
            <div className="max-w-3xl mb-16 md:mb-20">
                <span
                    data-testid="reviews-eyebrow"
                    className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-muted"
                >
                    / Partner Voices
                </span>
                <h2
                    data-testid="reviews-heading"
                    className="mt-4 font-serif text-5xl md:text-6xl tracking-tighter leading-[1] text-stone-ink"
                >
                    Trusted by builders
                    <br />
                    and leading <span className="text-stone-muted">studios.</span>
                </h2>
                <p
                    data-testid="reviews-intro"
                    className="mt-5 text-base md:text-lg leading-relaxed text-stone-muted font-light max-w-xl"
                >
                    Read how brand leaders, creative directors, and architects collaborate with Aura Studio to design their bespoke web flagship presences.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-ink/10 border hairline">
                {REVIEWS.map((review) => (
                    <div
                        key={review.id}
                        data-testid={`review-card-${review.id}`}
                        className="bg-cream p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:bg-stone-ink/[0.01] transition-colors duration-500"
                    >
                        <div>
                            {/* Stars & Verified badge */}
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1 text-accent-rust">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            fill="currentColor"
                                            strokeWidth={0}
                                        />
                                    ))}
                                </div>
                                {review.verified && (
                                    <span
                                        data-testid="verified-badge"
                                        className="font-mono text-[9px] uppercase tracking-[0.1em] border border-stone-ink/10 px-2 py-0.5 text-stone-muted bg-white/50"
                                    >
                                        ✓ Verified Partner
                                    </span>
                                )}
                            </div>

                            {/* Quote */}
                            <blockquote className="mt-8 font-serif text-lg md:text-xl leading-relaxed text-stone-ink font-light">
                                &ldquo;{review.quote}&rdquo;
                            </blockquote>
                        </div>

                        {/* Author info */}
                        <div className="mt-10 pt-6 border-t hairline">
                            <cite className="not-italic">
                                <span className="block font-sans font-medium text-sm text-stone-ink">
                                    {review.author}
                                </span>
                                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-stone-muted mt-1">
                                    {review.role} · {review.company}
                                </span>
                            </cite>
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust statement */}
            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 px-6 py-4 border hairline bg-white/40">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-stone-muted">
                    Bespoke design systems · Tailored code implementations
                </span>
                <a
                    href="#contact"
                    className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-rust hover:text-stone-ink link-underline"
                >
                    Start a project with us →
                </a>
            </div>
        </section>
    );
}
