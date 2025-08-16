import React from "react";
import { Routes, Route } from "react-router-dom";
import BrowserFrame from "./components/BrowserFrame.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <BrowserFrame />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}
