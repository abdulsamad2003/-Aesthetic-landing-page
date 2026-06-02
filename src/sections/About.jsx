import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            data-testid="section-about"
            className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t hairline"
        >
            {/* Header */}
            <div className="max-w-3xl mb-16 md:mb-20">
                <span
                    data-testid="about-eyebrow"
                    className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-muted"
                >
                    / About The Studio
                </span>
                <h2
                    data-testid="about-heading"
                    className="mt-4 font-serif text-5xl md:text-6xl tracking-tighter leading-[1] text-stone-ink"
                >
                    Get to know the team
                    <br />
                    behind the <span className="text-stone-muted">craft.</span>
                </h2>
                <p
                    data-testid="about-intro"
                    className="mt-5 text-base md:text-lg leading-relaxed text-stone-muted font-light max-w-2xl"
                >
                    Aura Studio is a digital design and development atelier. We build tailormade online storefronts, design systems, and art direction for luxury fashion, fine architecture, and cultural institutions.
                </p>
            </div>

            {/* Aura Studio description block */}
            <div className="grid grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-24 pb-16 md:pb-20 border-b hairline">
                <div className="col-span-12 md:col-span-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-muted">
                        Who we are
                    </span>
                    <h3 className="mt-3 font-serif text-3xl md:text-4xl tracking-tight leading-tight">
                        Aura Studio
                    </h3>
                </div>
                <div className="col-span-12 md:col-span-9">
                    <p
                        data-testid="about-description"
                        className="text-lg md:text-xl leading-relaxed text-stone-ink font-light"
                    >
                        Aura Studio replaces generic digital templates with custom design environments that articulate a brand's heritage. Founded by{" "}
                        <span className="text-stone-ink font-medium">Elena Rostova</span>{" "}
                        and{" "}
                        <span className="text-stone-ink font-medium">Marcus Vance</span>,
                        Aura Studio helps visionaries bridge the gap between creative expression and digital execution by providing bespoke design solutions, custom development, and interactive art direction.
                    </p>
                </div>
            </div>

            {/* Mission / Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-ink/10 border hairline mb-20 md:mb-24">
                <div
                    data-testid="about-mission"
                    className="bg-cream p-8 md:p-12"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-rust">
                        / Mission
                    </span>
                    <h3 className="mt-4 font-serif text-3xl md:text-4xl tracking-tight leading-tight">
                        Mission
                    </h3>
                    <p className="mt-5 text-base md:text-lg leading-relaxed text-stone-muted font-light">
                        Our mission is to craft elevated digital environments that respect brand heritage, prioritize visual poetry, and perform with modern front-end precision.
                    </p>
                </div>
                <div
                    data-testid="about-vision"
                    className="bg-cream p-8 md:p-12"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-rust">
                        / Vision
                    </span>
                    <h3 className="mt-4 font-serif text-3xl md:text-4xl tracking-tight leading-tight">
                        Vision
                    </h3>
                    <p className="mt-5 text-base md:text-lg leading-relaxed text-stone-muted font-light">
                        We envision a web that is more intentional, beautiful, and tactile—where every digital experience is as refined as a physical luxury flagship.
                    </p>
                </div>
            </div>

            {/* Contact */}
            <div id="contact" data-testid="about-contact">
                <div className="mb-10 md:mb-12">
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-muted">
                        / Contact
                    </span>
                    <h3 className="mt-3 font-serif text-3xl md:text-4xl tracking-tight leading-tight">
                        Get in touch
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-ink/10 border hairline">
                    {/* HQ */}
                    <div
                        data-testid="contact-hq"
                        className="bg-cream p-8 md:p-10 flex flex-col justify-between min-h-[220px]"
                    >
                        <div>
                            <MapPin
                                size={20}
                                className="text-accent-rust"
                                strokeWidth={1.5}
                            />
                            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-stone-muted">
                                Headquarters
                            </p>
                            <p className="mt-3 font-serif text-xl md:text-2xl leading-snug tracking-tight text-stone-ink">
                                3806, Bahar 1,
                                <br />
                                Jumeirah Beach Residence,
                                <br />
                                Dubai, UAE
                            </p>
                        </div>
                        <a
                            href="https://maps.google.com/?q=Bahar+1+Jumeirah+Beach+Residence+Dubai"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="contact-directions"
                            className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] link-underline w-fit"
                        >
                            Directions
                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-500 group-hover:rotate-45"
                            />
                        </a>
                    </div>

                    {/* Email */}
                    <a
                        href="mailto:hello@aurastudio.design"
                        data-testid="contact-email"
                        className="bg-cream p-8 md:p-10 flex flex-col justify-between min-h-[220px] group hover:bg-stone-ink/[0.03] transition-colors duration-500"
                    >
                        <div>
                            <Mail
                                size={20}
                                className="text-accent-rust"
                                strokeWidth={1.5}
                            />
                            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-stone-muted">
                                Email
                            </p>
                            <p className="mt-3 font-serif text-2xl md:text-3xl leading-snug tracking-tight text-stone-ink">
                                hello@aurastudio.design
                            </p>
                        </div>
                        <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-stone-muted">
                            Reply in &lt; 24 hours
                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-500 group-hover:rotate-45 text-stone-ink"
                            />
                        </span>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+971585408987"
                        data-testid="contact-phone"
                        className="bg-cream p-8 md:p-10 flex flex-col justify-between min-h-[220px] group hover:bg-stone-ink/[0.03] transition-colors duration-500"
                    >
                        <div>
                            <Phone
                                size={20}
                                className="text-accent-rust"
                                strokeWidth={1.5}
                            />
                            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-stone-muted">
                                Phone
                            </p>
                            <p className="mt-3 font-serif text-2xl md:text-3xl leading-snug tracking-tight text-stone-ink">
                                +971 58 540 8987
                            </p>
                        </div>
                        <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-stone-muted">
                            Mon–Fri · 9am to 6pm GST
                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-500 group-hover:rotate-45 text-stone-ink"
                            />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
