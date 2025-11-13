import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useCart } from './CartContext';

export default function Cart() {
  const [active, setActive] = useState(false);
  const { allProducts, addProducts, countProducts, total, removeProduct, clearCart } = useCart();

  return (
    <>
      <section className="cart-container">
        <section className="cart-icon" onClick={() => setActive(!active)}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="cart-counter">{countProducts}</span>
        </section>
      </section>

      <section className={`cart-products-container ${active ? '' : 'hidden-cart'}`}>
        {allProducts.length ? (
          <>
            <section className="cart-product-row">
              {allProducts.map((product) => (
                <section className="cart-product" key={product.id}>
                  <span className="cart-product-quantity">{product.quantity}</span>
                  <section className="info-cart-product">
                    <p className="cart-product-title">{product.title}</p>
                    <span className="cart-product-price">${product.price}</span>
                  </section>
                  <FontAwesomeIcon icon={faTrash} onClick={() => removeProduct(product.id)} />
                </section>
              ))}
            </section>

            <section className="cart-total">
              <h3>Total:</h3>
              <span className="cart-total-to-pay">${total.toFixed(2)}</span>
            </section>

            <button className="btn-clear" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </>
        ) : (
          <p className="cart-empty">El carrito está vacío</p>
        )}
      </section>
    </>
  );
}
