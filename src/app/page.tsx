import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SplineHero from "@/components/SplineHero";
import Skills from "@/components/Skills";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SplineHero />
        <Skills />
        <ProjectsShowcase />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
