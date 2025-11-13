import React from 'react'
import GhostIcon from './icons/GhostIcon'
import WhatsappIcon from './icons/WhatsappIcon'
import InstagramIcon from './icons/InstagramIcon'
import TelephoneIcon from './icons/TelephoneIcon'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className="footer-container">
      <section className="footer-content">
        <section className="footer-icon">
          <Link to="/">
            <GhostIcon/>
          </Link>
        </section>
        <section className="footer-contacts">
          <WhatsappIcon/>
          <InstagramIcon/>
          <TelephoneIcon/>
        </section>
      </section>
    </section>
  )
}
