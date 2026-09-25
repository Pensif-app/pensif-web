import Header from "./components/Header";
import Hero from "./components/Hero";
import AppTour from "./components/AppTour";
import SectionNav from "./components/SectionNav";
import Features from "./components/Features";
import GiftIdeas from "./components/GiftIdeas";
import SmartCapture from "./components/SmartCapture";
import HowItWorks from "./components/HowItWorks";
import EmotionalSection from "./components/EmotionalSection";
import Faq from "./components/Faq";
import Partners from "./components/Partners";
import DownloadCta from "./components/DownloadCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppTour />
        <Features />
        <GiftIdeas />
        <SmartCapture />
        <HowItWorks />
        <EmotionalSection />
        <Faq />
        <DownloadCta />
        <Partners />
      </main>
      <SectionNav />
      <Footer />
    </>
  );
}
