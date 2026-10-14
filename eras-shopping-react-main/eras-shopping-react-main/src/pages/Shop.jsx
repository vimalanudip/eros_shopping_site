import { useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ShopProducts from "../components/ShopProducts";
import Footer from "../components/Footer";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Navbar />

      <main>
      

        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ShopProducts
          selectedCategory={selectedCategory}
        />
      </main>

      <Footer />
    </>
  );
}

export default Shop;