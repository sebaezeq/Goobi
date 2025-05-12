import Link from 'next/link';

export default function Info() {
  return (
    <main>
      <section className="info-local">
        <h2>Horarios y Ubicación</h2>

        <div className="bloque-info">
          <p><strong>Dirección:</strong></p>
          <p>Haedo 4007, Florida Oeste</p>
        </div>

        <hr />

        <div className="bloque-info">
          <p><strong>Horarios:</strong></p>
          <ul>
            <li>Lunes a Viernes: 9:00 – 13:00 y 14:00 – 18:00</li>
            <li>Sábados: 9:00 – 13:00</li>
          </ul>
        </div>

        <hr />

        <div className="mapa-contenedor">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.4458793161376!2d-58.5384!3d-34.6416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8ef98d26b41%3A0xb53d28ebf2d98e44!2sHaedo%204007%2C%20Florida%20Oeste!5e0!3m2!1ses-419!2sar!4v1680000000000"
            width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </section>
    </main>
  );
}
