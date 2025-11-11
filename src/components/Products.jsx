import React from 'react'
import useFetch from '../api/useFetch';
const {VITE_API_URL: url} = import.meta.env;
export default function Products() {
  const {data} = useFetch(url);
  return (
    <>
    <section className="products-container">
      <h3>Productos</h3>
      <ul>
        {data?.map((product) => {
          return <li key={product.id}>{product.title}</li>
        })}
      </ul>
    </section>
    </>
  )
}
