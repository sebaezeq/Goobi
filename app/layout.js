// app/layout.js
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Goobi - Te hacemos más fácil limpiar',
  description: 'Tienda de artículos de limpieza',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
          <Link href="/"> {/* No uses <a> acá */}
            <img src="/images/goobi-logo.png" alt="Goobi Logo" width={150} height={50} />
          </Link>
          
          <nav>
            <ul>
              <Link href="/">Inicio</Link>
              <Link href="/info">Horarios</Link>
<Link href="/contacto">Contacto</Link>

            </ul>
          </nav>

          {/* Redes sociales y contacto */}
            <div className="redes-header">
              <a href="tel:+5491168707724" className="telefono" aria-label="Llamar"><i className="fas fa-phone-alt"></i></a>
              <a href="https://www.facebook.com/goobi.limpieza/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://wa.me/5491168707724" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
        </header>

        <main>{children}</main>

        <footer>
          <p>Haedo 4007, Florida Oeste · Lun-Vie 9 a 13 / 14 a 18 · Sáb 9 a 13</p>
          <p>Todos los derechos reservados © Goobi 2025</p>
          <p>Desarrollado por <a href="https://proyectos-virid.vercel.app/" target="_blank">Iglesias Sebastian</a></p>
        </footer>
      </body>
    </html>
  )
}
