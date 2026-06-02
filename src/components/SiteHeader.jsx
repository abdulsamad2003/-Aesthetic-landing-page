import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            data-testid="site-header"
            className="sticky top-0 z-40 w-full bg-cream/80 backdrop-blur-md border-b hairline"
        >
            <div className="px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#top"
                    data-testid="brand-logo"
                    className="font-serif text-2xl tracking-tight text-stone-ink"
                    onClick={() => setIsOpen(false)}
                >
                    Aura<span className="text-accent-rust">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-stone-muted">
                    <a href="#work" data-testid="nav-work" className="link-underline">
                        Work
                    </a>
                    <a href="#media" data-testid="nav-media" className="link-underline">
                        Media
                    </a>
                    <a href="#reviews" data-testid="nav-reviews" className="link-underline">
                        Reviews
                    </a>
                    <a href="#about" data-testid="nav-about" className="link-underline">
                        About
                    </a>
                </nav>

                {/* Desktop CTA Button */}
                <a
                    href="#contact"
                    data-testid="header-cta"
                    className="hidden sm:group sm:inline-flex items-center gap-2 border hairline px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] hover:bg-stone-ink hover:text-cream transition-colors duration-500"
                >
                    Inquire
                    <ArrowUpRight
                        size={14}
                        className="transition-transform duration-500 group-hover:rotate-45"
                    />
                </a>

                {/* Mobile Menu Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center justify-center w-10 h-10 border hairline text-stone-ink focus:outline-none hover:bg-stone-ink/5 transition-colors duration-300"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown Overlay */}
            {isOpen && (
                <div className="md:hidden absolute inset-x-0 top-16 bg-cream/95 backdrop-blur-md border-b hairline shadow-lg z-30 fade-up">
                    <nav className="flex flex-col p-6 gap-5 font-mono text-xs uppercase tracking-[0.2em] text-stone-ink">
                        <a
                            href="#work"
                            onClick={() => setIsOpen(false)}
                            className="border-b border-stone-ink/5 pb-2 text-stone-muted hover:text-stone-ink"
                        >
                            Work
                        </a>
                        <a
                            href="#media"
                            onClick={() => setIsOpen(false)}
                            className="border-b border-stone-ink/5 pb-2 text-stone-muted hover:text-stone-ink"
                        >
                            Media
                        </a>
                        <a
                            href="#reviews"
                            onClick={() => setIsOpen(false)}
                            className="border-b border-stone-ink/5 pb-2 text-stone-muted hover:text-stone-ink"
                        >
                            Reviews
                        </a>
                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="border-b border-stone-ink/5 pb-2 text-stone-muted hover:text-stone-ink"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="group flex items-center justify-center gap-2 bg-stone-ink text-cream py-3 tracking-[0.25em] hover:bg-accent-rust transition-colors duration-500 mt-2"
                        >
                            Inquire
                            <ArrowUpRight size={14} />
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
