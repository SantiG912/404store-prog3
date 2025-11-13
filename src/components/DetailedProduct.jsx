import React from 'react'
import { useParams, Link } from 'react-router-dom';
import useFetch from '../api/useFetch';
import GhostIcon from './icons/GhostIcon';

const {VITE_API_URL: url} = import.meta.env;
export default function DetailedProduct() {
    const { id } = useParams();
    const {data, loading, error} = useFetch(`${url}/${id}`);

    if(loading){
        return(
            <section className="loading-container">
                <GhostIcon/>
                <p>Cargando producto...</p>
            </section>
        );
    }

    if(error){
        return <p className="products-error">Error: {error}</p>
    }

    if(!data){
        return <p>No se encontró el producto.</p>
    }
    return (
        <section className="detailed-product-container">
            <article className="detailed-product-card">
                <section className="detailed-product-image">
                    <img 
                    src={data.image} 
                    alt={data.title} 
                    />
                </section>
                <section className="detailed-product-info">
                    <h2 className="detailed-product-title">{data.title}</h2>
                    <p className="detailed-product-price">${data.price}</p>
                    <p className="detailed-product-description">{data.description}</p>
                    <section className="detailed-product-actions">
                        <button className="product-btn add-cart">Añadir al carrito</button>
                        <Link to="/products" className="product-btn back-btn">
                            Volver a productos
                        </Link>
                    </section>
                </section>
            </article>
        </section>
    );
}
