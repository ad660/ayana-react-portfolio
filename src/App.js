// import logo from './logo.svg';
import { Routes, Route,} from "react-router-dom";
import './App.css';
import Footer from "./components/footer/footer"
import Landing from "./pages/landing/landing";
import Contact from "./pages/contact/contact"
import Navbar from "./components/navbar/navbar"


function App() {
  return (
    <>
    <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
