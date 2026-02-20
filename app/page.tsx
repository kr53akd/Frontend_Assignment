import FeatureSection from "@/components/FeatureSection";
import HeroBanner from "@/components/HeroBanner";
import LetsTalk from "@/components/LetsTalk";
import MaterialsSection from "@/components/MaterialsSection";
import NewsSection from "@/components/NewsSection";
import OurJourney from "@/components/OurJourney";
import Revolution from "@/components/Revolution";
import ScienceSection from "@/components/ScienceSection";
import SustainabilitySection from "@/components/SustainabilitySection";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Banner Section */}
      <HeroBanner
        heading="Future of Advanced Materials"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et ."
        // videoSrc="https://placeholder.com/video.mp4"
        videoThumbnail="https://via.placeholder.com/1920x1080/1e293b/94a3b8?text=Video+Placeholder"
      />

      {/* Additional content sections can go here */}
      <FeatureSection/>

      {/* Our Journey Section */}
      <OurJourney
        heading="Our Journey Towards Innovation and Excellence"
        subheading="Brand is an advanced luminescent materials company, leveraging synergies of cutting-edge chemistries to deliver solutions, not just products."
      />

      {/* Material section */}
      <MaterialsSection/>

       {/* Revolution section */}
      <Revolution
      heading="Revolutionizing luminescence to power the next generation of technology"
      />

      {/* Secience section */}
      <ScienceSection/>

      <SustainabilitySection/>

      <NewsSection/>
      
      <LetsTalk/>
    </main>
  );
}
