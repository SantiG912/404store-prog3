import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faStore} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <section className="header-container">
        <section className="header-content">
          <section className="header-icon">
            <Link className="header-links" to="/">
              <img src={null} alt="404store Icon" />
              <h3>404 Store</h3>
            </Link>
            <section className="header-menu-container">
              <ul className="header-menu">
                <li>
                  <Link className="header-links" to="/">
                    <FontAwesomeIcon icon={faHouse}/>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link className="header-links" to="/Products">
                    <FontAwesomeIcon icon={faStore}/>
                    Productos
                    </Link>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}
