import React, { useMemo } from 'react';
import useFetch from '../api/useFetch'
import GhostIcon from './icons/GhostIcon';
const {VITE_API_URL: url} = import.meta.env;

export default function Featured() {
    const {data, loading, error} = useFetch(url);
    
    const featured = useMemo(() => {
    if(!data){
        return [];
    }
    return [...data].sort(() => 0.5 - Math.random()).slice(0, 3);
    }, [data]);

    return (
        <section className="featured-container">
        <h3 className="featured-title">Productos destacados</h3>
        {loading && (
          <div className="loading-container">
            <GhostIcon />
            <p>Cargando productos...</p>
          </div>
        )}

        {error && <p>Error al cargar los productos destacados</p>}

        {!loading && !error && (
          <section className="products-grid">
            {featured.map((product) => (
              <article key={product.id} className="product-card featured-card">
                <span className="product-badge">Destacado</span>

                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="product-info">
                  <h4 className="product-title">{product.title}</h4>
                  <p className="product-price">$ {product.price}</p>

                  <div className="product-actions">
                    <button className="product-btn">Ver más</button>
                    <button className="product-btn add-cart">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </section>
    )
}
