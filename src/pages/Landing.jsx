import { useEffect } from "react";
import SiteHeader from "../components/SiteHeader";
import Hero from "../sections/Hero";
import About from "../sections/About";
import OurWork from "../sections/OurWork";
import OurMedia from "../sections/OurMedia";
import OurReview from "../sections/OurReview";
import SiteFooter from "../components/SiteFooter";

export default function Landing() {
    useEffect(() => {
        document.title = "Aura — High-End Digital Design Atelier";
    }, []);

    return (
        <main
            data-testid="landing-page"
            className="relative min-h-screen bg-cream text-stone-ink overflow-x-hidden"
        >
            <SiteHeader />
            <Hero />
            <About />
            <OurWork />
            <OurMedia />
            <OurReview />
            <SiteFooter />
        </main>
    );
}
