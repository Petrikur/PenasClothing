import HeroSection from "./components/Hero";
import Header from "./components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <hr className="border-t-2 border-gray-400 mx-10"></hr>
      <div className="mt-10"></div>
      <HeroSection />
    </>
  );
}
