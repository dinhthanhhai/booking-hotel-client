import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/layouts/header/Header";
import Banner from "@/layouts/banner/Banner";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Header />
      <main className="pt-[136px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
