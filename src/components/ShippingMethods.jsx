import React from 'react'
import HomeIcon from './icons/HomeIcon'
import TruckIcon from './icons/TruckIcon'
import FastTruckIcon from './icons/FastTruckIcon'

export default function ShippingMethods() {
  const shippingOptions = [
    {
      id: 1,
      title: "Retiro en sucursal",
      description: "Podés retirar tu pedido en nuestra tienda sin costo adicional.",
      icon: <HomeIcon/>
    },
    {
      id: 2,
      title: "Envío estándar",
      description: "Recibí tu compra en 3 a 5 días hábiles en todo el país.",
      icon: <TruckIcon/>
    },
    {
      id: 3,
      title: "Envío express",
      description: "Entregamos tu pedido en menos de 48 horas.",
      icon: <FastTruckIcon/>
    },
  ];
  return (
    <section className="shipping-container">
      <h3 className="shipping-title">Métodos de envío</h3>
      <section className="shipping-cards">
        {shippingOptions.map((option) => (
          <article className="shipping-card" key={option.id}>
            <section className="shipping-icon">{option.icon}</section>
            <h4>{option.title}</h4>
            <p>{option.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
