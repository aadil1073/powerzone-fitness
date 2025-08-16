import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import TrainerSection from "../components/TrainerSection.jsx";
import CallToActionSection from "../components/CallToActionSection.jsx";

export default function Home() {
    return (
        <>
            <section id="hero">
                <HeroSection />
            </section>
            <section id="about">
                <AboutSection />
            </section>
            <section id="trainers">
                <TrainerSection />
            </section>
            <section id="cta">
                <CallToActionSection />
            </section>
        </>
    );
}
