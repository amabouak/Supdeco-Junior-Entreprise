import Banner from "./components/Banner";
import TopBanner from "./components/TopBanner";
import About from "./components/About";
import Process from "./components/Process";
import Why from "./components/Why";
import Stats from "./components/Stats";
import CTASection from "./components/CTASection";
import Network from "./components/Network";


export default function Home() {
  return (
    <main>
      <Banner />
      <TopBanner />
      <About />
      <Process />
      <Stats />
      <Why />
      <CTASection />
      <Network />
    </main>
  );
}
