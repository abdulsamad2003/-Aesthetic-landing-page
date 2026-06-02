import { Layout, Compass, Feather } from "lucide-react";

const PROJECTS = [
    {
        id: 1,
        title: "A Digital Flagship Store",
        category: "Digital Commerce / Identity",
        client: "Maison Dubois",
        metric: "Awwwards Site of the Day",
        desc: "Designed and engineered a minimalist digital flagship store that translates Maison Dubois' tactile architectural fabrics into a fluid online shopping experience.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "The Architectural Index",
        category: "Web Direction / Portfolio",
        client: "Studio Nord",
        metric: "CSSDA Best UI Design",
        desc: "A custom web index designed for a Stockholm-based architectural firm, featuring raw layout structures, spatial navigation, and smooth media loading.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Tactile Brand System",
        category: "Branding / Web Experience",
        client: "Vespera Atelier",
        metric: "Red Dot Design Winner",
        desc: "Created a comprehensive brand identity and e-commerce portal, including an interactive product selector and editorial custom-sizing config.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    },
];

export default function OurWork() {
    return (
        <section
            id="work"
            data-testid="section-our-work"
            className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t hairline"
        >
            {/* Header */}
            <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
                <div className="col-span-12 lg:col-span-6">
                    <span
                        data-testid="work-eyebrow"
                        className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-muted"
                    >
                        / Selected Case Studies
                    </span>
                    <h2
                        data-testid="work-heading"
                        className="mt-4 font-serif text-5xl md:text-6xl tracking-tighter leading-[1] text-stone-ink"
                    >
                        Selected design
                        <br />
                        active in the <span className="text-stone-muted">wild.</span>
                    </h2>
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col justify-end">
                    <p
                        data-testid="work-description"
                        className="text-base md:text-lg leading-relaxed text-stone-muted font-light max-w-xl"
                    >
                        Explore our curation of digital brand experiences, customized e-commerce, and art direction systems built for clients who value aesthetic integrity and front-end performance.
                    </p>
                </div>
            </div>

            {/* Project List / Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone-ink/10 border hairline">
                {PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        data-testid={`work-card-${project.id}`}
                        className="bg-cream group flex flex-col justify-between hover:bg-stone-ink/[0.015] transition-colors duration-500"
                    >
                        {/* Image wrapped with scale zoom on hover */}
                        <div className="img-wrap relative aspect-[16/10] border-b hairline">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                            <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cream bg-stone-ink/75 backdrop-blur-sm px-2 py-1">
                                {project.category}
                            </span>
                        </div>

                        {/* Card Info */}
                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-stone-muted">
                                    <span>Client · {project.client}</span>
                                </div>
                                <h3 className="mt-4 font-serif text-2xl md:text-3xl tracking-tight leading-snug text-stone-ink group-hover:text-accent-rust transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-stone-muted font-light">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Metric Badge */}
                            <div className="mt-8 pt-6 border-t hairline">
                                <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-stone-muted">
                                    Accolade
                                </span>
                                <span className="block font-serif text-lg text-accent-rust mt-0.5">
                                    {project.metric}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick benefits/trust badges */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t hairline">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-ink/5 border hairline text-accent-rust flex items-center justify-center flex-shrink-0">
                        <Layout size={16} />
                    </div>
                    <div>
                        <h4 className="font-serif text-lg tracking-tight text-stone-ink">Bespoke Layouts</h4>
                        <p className="mt-2 text-xs leading-relaxed text-stone-muted font-light">
                            We do not use standard templates or boilerplates. Every web layout is hand-designed to suit the unique visual hierarchy and tone of your brand.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-ink/5 border hairline text-accent-rust flex items-center justify-center flex-shrink-0">
                        <Compass size={16} />
                    </div>
                    <div>
                        <h4 className="font-serif text-lg tracking-tight text-stone-ink">Front-End Detail</h4>
                        <p className="mt-2 text-xs leading-relaxed text-stone-muted font-light">
                            Smooth, custom canvas rendering, delicate micro-animations, and performant asset loading optimized for gorgeous transitions.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-ink/5 border hairline text-accent-rust flex items-center justify-center flex-shrink-0">
                        <Feather size={16} />
                    </div>
                    <div>
                        <h4 className="font-serif text-lg tracking-tight text-stone-ink">Aesthetic Authority</h4>
                        <p className="mt-2 text-xs leading-relaxed text-stone-muted font-light">
                            We align your web architecture with clean, print-informed typography systems that project quiet confidence and high quality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
