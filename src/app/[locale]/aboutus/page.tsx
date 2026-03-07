import Team from "../(home)/components/Team";
import Cta from "./components/Cta";
import Mission from "./components/Mission";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";



function AboutUS() {
  return (
    <main className="w-screen overflow-x-hidden text-(--text) mt-50">
      <Stats />
      <Mission />
      <WhyUs />
      <Team />
      <Cta />
    </main>
  );
}

export default AboutUS;