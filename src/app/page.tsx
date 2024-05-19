"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { About } from "../components/About";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Pricing } from "../components/Pricing";
import { ScrollToTop } from "../components/ScrollToTop";
import { Gallery } from "../components/Sponsors";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <HowItWorks />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
