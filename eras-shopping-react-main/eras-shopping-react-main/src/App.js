import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Women from "./pages/Women";
import Men from "./pages/Men";
import FindStore from "./pages/FindStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/women" element={<Women />} />

        <Route path="/men" element={<Men />} />

        <Route path="/find-store" element={<FindStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;