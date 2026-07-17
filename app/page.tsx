import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Leadership from "@/components/sections/Leadership";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/layout/Footer";
import EngineeringHighlights from "@/components/sections/EngineeringHighlights";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <EngineeringHighlights /> */}
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}