import HeroSection from "./components/Hero";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MegaMenu from "./components/layout/Megamenu";
import PopularProducts from "./components/products/PopularProducts";
import ProductList from "./components/products/ProductList";

export default function Home() {
  return (
    <>
      <Header />
      <hr className="border-1 border-black mx-12"></hr>
      <MegaMenu />
      <div className="mt-10"></div>
      <HeroSection />
      <div className="my-12"></div>

      <hr className="border-1 border-black mx-12"></hr>
      <div className="my-12">
        <h2 className="text-center text-3xl ">Popular products</h2>
        <p className="text-center">See what other customers are bying</p>
      </div>
      {/* <ProductList /> */}
      <PopularProducts />
      <div className="mb-24 "></div>
      <Footer />
    </>
  );
}
