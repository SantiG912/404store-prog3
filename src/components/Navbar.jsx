import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faPencil, faStore, faTruck} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Darkmode from './Darkmode';
import GhostIcon from './icons/GhostIcon';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <>
      <section className="header-container">
        <section className="header-content">
          <section className="header-icon">
            <Link className="header-links" to="/">
              <GhostIcon/>
              <h3>404 Store</h3>
            </Link>
          </section>
          <section className="darkmode-container">
            <Darkmode/>
          </section>
          <section className="header-menu-container">
            <button 
            className={`menu-toggle ${menuOpen ? "open": ""}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
            >
              <span className="hamburger"></span>
            </button>
            <nav className={`header-menu ${menuOpen ? "open" : ""}`}>
              <Link className="header-links" to="/">
                <FontAwesomeIcon icon={faHouse}/>
                Inicio
              </Link>
              <Link className="header-links" to="/Products">
                <FontAwesomeIcon icon={faStore}/>
                Productos
              </Link>
              <Link className="header-links" to="/ShippingMethods">
                <FontAwesomeIcon icon={faTruck}/>
                Métodos de envío
              </Link>
              <Link className="header-links" to="/ContactForm">
                <FontAwesomeIcon icon={faPencil}/>
                Formulario de Contacto
              </Link>
            </nav>
          </section>
        </section>
      </section>
    </>
  )
}
