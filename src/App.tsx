import Header from "./components/Header";
import Hero from "./components/Hero";
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
        <Features />
        <GiftIdeas />
        <SmartCapture />
        <HowItWorks />
        <EmotionalSection />
        <Faq />
        <DownloadCta />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
