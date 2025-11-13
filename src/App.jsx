import React, { useState } from 'react';
import Products from './components/Products';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/Index';
import ShippingMethods from './components/ShippingMethods';
import ContactForm from './components/ContactForm';
import DetailedProduct from './components/DetailedProduct';
import { CartProvider } from './components/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <section className="main-section">
          <section className="main-content">
            <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/Products" element={<Products/>}/>
              <Route path="/Products/:id" element={<DetailedProduct/>}/>
              <Route path="/ShippingMethods" element={<ShippingMethods/>}/>
              <Route path="/ContactForm" element={<ContactForm/>}/>
            </Routes>
          </section>
        </section>

        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}
