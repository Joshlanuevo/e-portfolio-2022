import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Home from "./pages/Home";
import MyGroup from "./pages/MyGroup";

import './App.css';

function App() {
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/my-group" element={<MyGroup />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;