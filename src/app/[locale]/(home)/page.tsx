import ShootingStar from "@/components/GlobalBackground";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import AnimatedSection from "@/components/AnimationSection";

function Home() {
  return (
    <main className="w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Process />
      <Testimonial />
      <Contact />
    </main>
  );
}

export default Home;
