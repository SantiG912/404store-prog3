import React from 'react';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Products" element={<Products/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
