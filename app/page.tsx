import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="how_hilink_work">
        <Camp />
      </div>
      <div id="services">
        <Guide />
      </div>
      <div id="pricing">
        <Features />
      </div>
      <div id="contact_us">
        <GetApp />
      </div>
    </>
  );
}
