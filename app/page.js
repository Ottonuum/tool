'use client'
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import MainImage from "./components/MainImage";
import InfoSection from "./components/InfoSection";
import InfoGrid from "./components/InfoGrid";
import Proactive from "./components/Proactive";
import Modes from "./components/Modes"
import ModesAdd from "./components/ModesAdd";
import PersonalizedAi from "./components/PersonalizedAi";
import PerAiGrid from "./components/PerAiGrid";
import Testimonals from "./components/Testimonals";
import TestimonalsGrid from "./components/TestimonalsGrid";
import CompanyTitle from "./components/CompanyTitle";
import Plans from "./components/Plans";
import PlansGrid from "./components/PlansGrid";
import End from "./components/End";
import Footer from "./components/footer";
import FooterTitle from "./components/FooterTitle";



export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <HeaderSection />
      </div>
      <div className="">
        <MainImage />
      </div>
      <div>
        <InfoSection />
      </div>
      <div>
        <InfoGrid />
      </div>
      <div>
        <Proactive />
      </div>
      <div>
        <Modes />
      </div>
      <div>
        <ModesAdd />
      </div>
      <div>
        <PersonalizedAi />
      </div>
      <div>
        <PerAiGrid />
      </div>
      <div>
        <Testimonals />
      </div>
      <div>
        <TestimonalsGrid />
      </div>
      <div>
        <CompanyTitle />
      </div>
      <div>
        <Plans />
      </div>
      <div>
        <PlansGrid />
      </div>
      <div>
        <End />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <FooterTitle />
      </div>
    </main>
  );
}