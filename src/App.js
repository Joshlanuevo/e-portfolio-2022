import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Seminars from "./pages/Seminars";
import Certificates from './pages/Certificates';
import Home from "./pages/Home";

import './App.css';
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/seminars" element={<Seminars />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
