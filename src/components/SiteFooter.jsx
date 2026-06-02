import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";

export default function SiteFooter() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            // Dubai is in Gulf Standard Time (GST), which is UTC+4
            const now = new Date();
            const gstTime = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Dubai",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            }).format(now);
            setTime(gstTime);
        };

        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            data-testid="site-footer"
            className="relative bg-cream border-t hairline px-6 md:px-12 lg:px-24 pt-20 pb-12"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
                {/* Brand and dynamic clock */}
                <div className="col-span-1 lg:col-span-4">
                    <a
                        href="#top"
                        onClick={scrollToTop}
                        className="font-serif text-3xl tracking-tight text-stone-ink"
                    >
                        Aura<span className="text-accent-rust">.</span>
                    </a>
                    <p className="mt-4 text-sm text-stone-muted font-light max-w-sm">
                        A minimalist design and development atelier crafting digital flagships, design systems, and identity frameworks for visionary brands.
                    </p>

                    {/* Active Dubai HQ clock */}
                    <div className="mt-8">
                        <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-stone-muted">
                            HQ Local Time · Dubai (GST)
                        </span>
                        <span className="block font-serif text-lg text-stone-ink mt-1 font-light tracking-wide">
                            {time || "12:00:00 PM"}
                        </span>
                    </div>
                </div>

                {/* Navigation Columns */}
                <div className="col-span-1 lg:col-span-2 lg:col-start-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-muted block mb-6">
                        / Platform
                    </span>
                    <ul className="space-y-3 font-mono text-xs uppercase tracking-[0.2em] text-stone-ink">
                        <li>
                            <a href="#top" className="hover:text-accent-rust transition-colors duration-300">
                                Top
                            </a>
                        </li>
                        <li>
                            <a href="#work" className="hover:text-accent-rust transition-colors duration-300">
                                Selected Work
                            </a>
                        </li>
                        <li>
                            <a href="#media" className="hover:text-accent-rust transition-colors duration-300">
                                Press & Media
                            </a>
                        </li>
                        <li>
                            <a href="#reviews" className="hover:text-accent-rust transition-colors duration-300">
                                Partners
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-muted block mb-6">
                        / Studio
                    </span>
                    <ul className="space-y-3 font-mono text-xs uppercase tracking-[0.2em] text-stone-ink">
                        <li>
                            <a href="#about" className="hover:text-accent-rust transition-colors duration-300">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-accent-rust transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="https://maps.google.com/?q=Bahar+1+Jumeirah+Beach+Residence+Dubai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent-rust transition-colors duration-300">
                                Directions <ArrowUpRight size={12} />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-muted block mb-6">
                        / Inquiries
                    </span>
                    <p className="text-xs text-stone-muted font-light mb-4">
                        Join our mailing list to receive design thoughts and updates on our Q3/Q4 studio slots.
                    </p>
                    <form className="relative border-b border-stone-ink/30 pb-2 flex items-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent text-sm w-full focus:outline-none pr-10 text-stone-ink placeholder:text-stone-muted/50 font-sans"
                            required
                        />
                        <button
                            type="submit"
                            aria-label="Subscribe"
                            className="absolute right-0 hover:text-accent-rust transition-colors duration-300 text-stone-ink"
                        >
                            <Mail size={16} />
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Copyright & Back to Top */}
            <div className="border-t hairline pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-muted text-center md:text-left">
                    © 2026 Aura Studio. All rights reserved. Designed in Dubai.
                </p>
                <a
                    href="#top"
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-2 border hairline px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] bg-white hover:bg-stone-ink hover:text-cream transition-colors duration-500"
                >
                    Back to Top
                    <ArrowUp size={12} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </footer>
    );
}
