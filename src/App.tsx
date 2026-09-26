import Header from "./components/Header";
import Hero from "./components/Hero";
import AppTour from "./components/AppTour";
import SectionNav from "./components/SectionNav";
import GiftIdeas from "./components/GiftIdeas";
import SmartCapture from "./components/SmartCapture";
import Trust from "./components/Trust";
import Faq from "./components/Faq";
import FinalSection from "./components/FinalSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppTour />
        <SmartCapture />
        <GiftIdeas />
        <Trust />
        <Faq />
        <FinalSection />
      </main>
      <SectionNav />
    </>
  );
}
