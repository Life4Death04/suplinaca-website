import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import InfoBoxes from "./components/InfoBoxes";
import Company from "./components/Company";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import QualityBanner from "./components/QualityBanner";
import Brands from "./components/Brands";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <InfoBoxes />
        <Company />
        <Stats />
        <Solutions />
        <QualityBanner />
        <Brands />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
