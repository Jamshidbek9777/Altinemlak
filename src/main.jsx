import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import AboutUs from "./pages/aboutus.jsx";
import Properties from "./pages/properties.jsx";
import Franchize from "./pages/franchize.jsx";
import Services from "./pages/services.jsx";

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes className="min-h-screen">
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/franchize" element={<Franchize />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
