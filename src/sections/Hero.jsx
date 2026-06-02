import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
    [
        "Awwwards & CSSDA",
        "★ 4.9/5 Rated",
        "Best UI/UX Award",
    ],
    [
        "Bespoke React Code",
        "Zero Templates Used",
        "Clean Grid Systems",
    ],
    [
        "Designers Trusted",
        "Dubai HQ / Global",
        "Established Q3 2024",
    ]
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="top"
            data-testid="section-hero"
            className="relative px-6 md:px-12 lg:px-24 pt-16 md:pt-24 pb-20 md:pb-28"
        >
            <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
                {/* LEFT — content */}
                <div className="col-span-12 lg:col-span-7">
                    <span
                        data-testid="hero-eyebrow"
                        className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.3em] text-stone-muted border hairline px-2.5 sm:px-3 py-1"
                    >
                        <Sparkles size={12} className="text-accent-rust" />
                        Art Direction & Front-end Craft
                    </span>

                    <h1
                        data-testid="hero-heading"
                        className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-stone-ink"
                    >
                        Crafting the digital
                        <br />
                        presence of modern <span className="text-accent-rust">luxury</span>
                        <span className="text-stone-muted">.</span>
                    </h1>

                    <p
                        data-testid="hero-description"
                        className="mt-6 text-base md:text-lg leading-relaxed text-stone-muted font-light max-w-xl"
                    >
                        Aura Studio is a minimalist design atelier that blends art direction, 
                        front-end craftsmanship, and identity design to build digital sanctuaries 
                        for visionary brands worldwide.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#work"
                            data-testid="hero-cta-primary"
                            className="group inline-flex items-center gap-2 bg-stone-ink text-cream px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] hover:bg-accent-rust transition-colors duration-500"
                        >
                            Explore Work
                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-500 group-hover:rotate-45"
                            />
                        </a>
                        <a
                            href="#contact"
                            data-testid="hero-cta-secondary"
                            className="group inline-flex items-center gap-2 border hairline px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] hover:bg-stone-ink/[0.04] transition-colors duration-500"
                        >
                            Get in touch
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t hairline grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-stone-muted">
                        <span key={`h1-${activeIndex}`} className="fade-up block text-accent-rust">
                            • {HIGHLIGHTS[0][activeIndex]}
                        </span>
                        <span key={`h2-${activeIndex}`} className="fade-up block">
                            • {HIGHLIGHTS[1][activeIndex]}
                        </span>
                        <span key={`h3-${activeIndex}`} className="fade-up block">
                            • {HIGHLIGHTS[2][activeIndex]}
                        </span>
                    </div>
                </div>

                {/* RIGHT — Professional Studio Design Specimen */}
                <div className="col-span-12 lg:col-span-5">
                    <div
                        data-testid="hero-design-specimen"
                        className="relative bg-white border hairline p-6 sm:p-8 shadow-[0_24px_60px_-30px_rgba(26,24,22,0.18)] overflow-hidden h-auto lg:aspect-[4/3] flex flex-col justify-between"
                    >
                        {/* Blueprint grid overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1816_1px,transparent_1px)] [background-size:16px_16px]" />

                        {/* Top Metadata */}
                        <div className="relative flex justify-between items-start border-b hairline pb-4">
                            <div>
                                <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-stone-muted">
                                    Specimen Ref:
                                </span>
                                <span className="block font-mono text-[11px] uppercase tracking-[0.1em] text-stone-ink font-bold mt-1">
                                    AURA-2026-Q3
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-stone-muted">
                                    Aesthetic System:
                                </span>
                                <span className="block font-mono text-[11px] uppercase tracking-[0.1em] text-stone-ink mt-1">
                                    Editorial Minimal
                                </span>
                            </div>
                        </div>

                        {/* Center Specimen Artwork & Graphic */}
                        <div className="relative my-4 flex-1 grid grid-cols-12 gap-4 items-stretch lg:items-center">
                            <div className="col-span-12 lg:col-span-7 h-48 lg:h-full border hairline bg-stone-ink/5 p-1 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
                                    alt="Minimalist Design Specimen"
                                    className="h-full w-full object-cover grayscale brightness-95 opacity-90 hover:grayscale-0 transition-all duration-700"
                                />
                                <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-[0.2em] text-cream bg-stone-ink/80 px-2 py-0.5">
                                    Plate 01 // Identity
                                </span>
                            </div>
                            <div className="col-span-12 lg:col-span-5 flex flex-row lg:flex-col gap-3 justify-center">
                                <div className="border hairline p-3 bg-[#fafafa] flex-1">
                                    <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-stone-muted">
                                        Type Hierarchy
                                    </span>
                                    <span className="block font-serif text-xl tracking-tight text-stone-ink mt-1">
                                        Aa Bb Cc
                                    </span>
                                    <span className="block font-mono text-[9px] text-stone-muted mt-1 leading-none">
                                        Playfair Display
                                    </span>
                                </div>
                                <div className="border hairline p-3 bg-[#fafafa] flex-1">
                                    <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-stone-muted">
                                        Layout System
                                    </span>
                                    <div className="flex gap-1.5 mt-2">
                                        <div className="w-4 h-4 bg-stone-ink" />
                                        <div className="w-4 h-4 bg-accent-rust" />
                                        <div className="w-4 h-4 bg-cream border border-stone-ink/20" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom spec verification */}
                        <div className="relative pt-4 border-t hairline flex justify-between items-center font-mono text-[9px] uppercase tracking-[0.25em] text-stone-muted">
                            <span>Grid alignment: 100%</span>
                            <span>Aura Atelier UAE</span>
                        </div>
                    </div>

                    {/* Caption under card */}
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-stone-muted text-center lg:text-right">
                        Atelier specimen · high-end layout system
                    </p>
                </div>
            </div>
        </section>
    );
}
