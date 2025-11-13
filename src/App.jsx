import React from 'react';
import Products from './components/Products';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/Index';
import ShippingMethods from './components/ShippingMethods';
import ContactForm from './components/ContactForm';

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
            <Route path="/ShippingMethods" element={<ShippingMethods/>}/>
            <Route path="/ContactForm" element={<ContactForm/>}/>
          </Routes>
        </section>
      </section>

      <Footer/>
    </BrowserRouter>
    </>
  )
}
