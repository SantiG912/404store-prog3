import React from 'react';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/Index';
import Darkmode from './components/Darkmode';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <section className="main-section">
        <section className="main-content">
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/Products" element={<Products/>}/>
          </Routes>
        </section>
      </section>

      <Footer/>
    </BrowserRouter>
    </>
  )
}
