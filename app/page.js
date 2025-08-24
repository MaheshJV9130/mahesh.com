import About from "@/components/sections/About";
import ContactMe from "@/components/sections/ContactMe";
import Eduction from "@/components/sections/Eduction";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Eduction />
      <Projects />
      <ContactMe />
    </main>
  );
}
