import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailPage from "./pages/DetailPage";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <MyNavbar />
      <Logo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
