import HeroSection from "./components/Hero";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MegaMenu from "./components/layout/Megamenu";

export default function Home() {
  return (
    <>
      <Header />
      <hr className="border-t-2 border-gray-400 mx-10"></hr>
      <MegaMenu />
      <div className="mt-10"></div>
      <HeroSection />
      <div className="my-12"></div>
      <Footer />
    </>
  );
}
