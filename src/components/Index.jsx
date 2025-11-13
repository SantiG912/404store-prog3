import React from 'react'
import GhostIcon from './icons/GhostIcon';
import Featured from './Featured';
import Hero from './Hero';
import { useCart } from './CartContext';

export default function Index() {
  const { allProducts, countProducts, total, removeProduct, clearCart } = useCart();
  
  return (
    <>
    <Hero/>
    <Featured/>
    </>
  )
}
