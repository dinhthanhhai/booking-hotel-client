import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@/layouts/footer/Footer";
import Banner from "@/layouts/banner/Banner";
import HomePage from "@/pages/HomePage";
import SearchPage from "@/pages/SearchPage";
import HotelPage from "@/pages/HotelPage";
import HotelHomePage from "@/pages/HotelHomePage";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <div className="pt-9">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/khach-san" element={<HotelHomePage />} />
          <Route path="/khach-san/123" element={<HotelPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
