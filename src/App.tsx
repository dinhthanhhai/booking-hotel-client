import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@/layouts/footer/Footer";
import Banner from "@/layouts/banner/Banner";
import HomePage from "@/pages/HomePage";
import SearchPage from "@/pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <main className="pt-9">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
