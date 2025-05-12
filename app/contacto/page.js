'use client';

import { useState } from 'react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario, como una API o un servicio de email.
    alert('Mensaje enviado');
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <main className="seccion-contacto">
      <h1>Contacto</h1>

      {/* Formulario de contacto */}
      <form className="form-contacto" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          rows="5"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="btn-enviar">
          Enviar mensaje
        </button>
      </form>

      {/* Acciones de contacto */}
      <div className="contacto-acciones">
        <a
          href="https://wa.me/5490000000000"
          className="btn-contacto whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> Escribir por WhatsApp
        </a>

        <a
          href="tel:+541168707493"
          className="btn-contacto llamar"
        >
          <i className="fas fa-phone-alt"></i> Llamar al local
        </a>
      </div>
    </main>
  );
}
