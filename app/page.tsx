import Banner from "./components/Banner";
import TopBanner from "./components/TopBanner";
import About from "./components/About";
import Why from "./components/Why";
import Stats from "./components/Stats";
import Network from "./components/Network";


export default function Home() {
  return (
    <main>
      <Banner />
      <TopBanner />
      <About />
      <Stats />
      <Why />
      <Network />
    </main>
  );
}
