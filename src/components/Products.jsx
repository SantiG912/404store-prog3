import React from 'react'
import useFetch from '../api/useFetch';
import GhostIcon from './icons/GhostIcon';
import { Link } from 'react-router-dom';
const {VITE_API_URL: url} = import.meta.env;
export default function Products() {
  const {data, loading, error} = useFetch(url);
  return (
    <section className="products-container">
      <h3>Productos</h3>

      {error && <p className="products-error">Error: {error}</p>}

      {loading ? (
        <section className="loading-container">
          <GhostIcon/>
          <p>Cargando productos...</p>
        </section>
      ) : (
        <section className="products-grid">
          {data?.map((product) => (
            <article key={product.id} className="product-card">
              <section className="product-image">
                <img
                  src={product.image || "https://via.placeholder.com/300x200?text=Producto"}
                  alt={product.title}
                />
              </section>
              <section className="product-info">
                <h4 className="product-title">{product.title}</h4>
                <p className="product-price">$ {product.price}</p>
                  <section className="product-actions">
                    <Link to={`/Products/${product.id}`} className="product-btn">
                      Ver más
                    </Link>
                    <button className="product-btn add-cart">
                      Añadir al carrito
                    </button>
                  </section>
              </section>
            </article>
          ))}
        </section>
      )}
    </section>

  )
}
