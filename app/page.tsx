import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import FeaturesSection from "./components/Project";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Education />
      <FeaturesSection />
      <ContactMe />
    </>
  );
}
