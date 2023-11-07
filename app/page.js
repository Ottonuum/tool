'use client'
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import MainImage from "./components/MainImage";
import InfoSection from "./components/InfoSection";
import InfoGrid from "./components/InfoGrid";
import Proactive from "./components/Proactive";


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
    </main>
  );
}