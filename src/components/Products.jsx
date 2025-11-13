import React, { useMemo, useState } from 'react'
import useFetch from '../api/useFetch';
import GhostIcon from './icons/GhostIcon';
import { Link } from 'react-router-dom';
const {VITE_API_URL: url} = import.meta.env;
export default function Products() {
  const {data, loading, error} = useFetch(url);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    if(!data) return [];
    const unique = [... new Set(data.map((p) => p.category))];
    return unique.sort();
  }, [data]);

  const filteredProducts = useMemo(() => {
    if(selectedCategory === "all") return data;
    return data?.filter((p) => p.category === selectedCategory);
  }, [data, selectedCategory]);

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
        <>
        <section className="filter-container">
          <label htmlFor="category-filter">Filtrar por categoría:</label>
          <select 
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Todas</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </section>
        <section className="products-grid">
          {filteredProducts?.length > 0 ? (
              filteredProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <section className="product-image">
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </section>
                  <section className="product-info">
                    <h4 className="product-title">{product.title}</h4>
                    <p className="product-price">$ {product.price}</p>
                    <section className="product-actions">
                      <Link to={`/products/${product.id}`} className="product-btn">
                        Ver más
                      </Link>
                      <button className="product-btn add-cart">
                        Añadir al carrito
                      </button>
                    </section>
                  </section>
                </article>
              ))
            ) : (
              <p>No hay productos en esta categoría.</p>
            )}
        </section>
        </>
      )}
    </section>

  )
}
