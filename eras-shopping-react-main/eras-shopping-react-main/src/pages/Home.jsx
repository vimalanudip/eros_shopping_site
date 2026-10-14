import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import PromoBanner from "../components/PromoBanner";
import ProductTypes from "../components/ProductTypes";
import FeaturedProducts from "../components/FeaturedProducts";
import Subscribe from "../components/Subscribe";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Categories />

      <ProductGrid />

      <PromoBanner />

      <ProductTypes />

      <FeaturedProducts />

      <Subscribe />

      <Blogs />

      <Footer />
    </>
  );
}

export default Home;