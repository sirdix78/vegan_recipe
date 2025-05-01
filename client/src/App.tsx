import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import MyNavbar from "./components/MyNavbar";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailPage from "./pages/DetailPage";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      <MyNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Logo />
      <Routes>
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
