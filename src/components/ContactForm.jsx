import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
    setFormData({name:"", email:"", message:""});
  };

  return (
    <section className="contact-container">
      <h3 className="contact-title">Contacto</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <section className="form-group">
          <label htmlFor="name">Nombre</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required 
          />
        </section>
        <section className="form-group">
          <label htmlFor="email">Correo</label>
          <input 
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            required 
          />
        </section>
        <section className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
            required 
          />
        </section>
        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
    </section>
  )
}
