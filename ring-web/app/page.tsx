import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import CustomCursorLoader from "@/components/CustomCursorLoader";

const Features = dynamic(() => import("@/components/Features"));

const Storytelling = dynamic(() => import("@/components/Storytelling"));

const Colors = dynamic(() => import("@/components/Colors"));

const Showcase = dynamic(() => import("@/components/Showcase"));

const Specs = dynamic(() => import("@/components/Specs"));

const Newsletter = dynamic(() => import("@/components/Newsletter"));

export default function Home() {
  return (
    <>
      <CustomCursorLoader />
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
