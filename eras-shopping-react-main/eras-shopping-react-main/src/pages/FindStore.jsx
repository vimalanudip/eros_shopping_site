import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function FindStore() {
  return (
    <>
      <Navbar />

      <main>
        <section className="find-store">
          <h1>FIND STORE</h1>

          <p>
            Find a store near you and explore our latest fashion
            collections.
          </p>

          <div className="store-box">
            <input
              type="text"
              placeholder="Enter your city"
            />

            <button>SEARCH STORE</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FindStore;