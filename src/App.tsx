import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/layouts/header/Header";
import Home from "@/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-[100px]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
