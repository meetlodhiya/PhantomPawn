import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Certifications />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
