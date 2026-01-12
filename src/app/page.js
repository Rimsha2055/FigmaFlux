
import Header from "./components/Header";
import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import LatestNews from "./components/LatestNews";
import RegionalResults from "./components/RegionalResults";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FCFAF6', minHeight: '100vh' }}>
      <Header />
      <Announcement />
      <Hero />
      <WhatWeDo />
      <LatestNews />
      <RegionalResults />
      <Footer />
    </main>
  );
}
