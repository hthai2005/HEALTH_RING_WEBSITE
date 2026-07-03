import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Storytelling from "@/components/Storytelling";
import Colors from "@/components/Colors";
import Showcase from "@/components/Showcase";
import Specs from "@/components/Specs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Features />
        <Storytelling />
        <Colors />
        <Showcase />
        <Specs />
        <Marquee reverse />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
