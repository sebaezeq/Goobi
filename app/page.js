'use client';

import { useState } from 'react';

export default function Home() {
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  const productos = [
    { id: 1, nombre: 'Lavandina Clásica', categoria: 'Lavandina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 650, descripcion: 'Lavandina clásica para uso general.' },
    { id: 2, nombre: 'Perfumina Floral', categoria: 'Perfumina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 800, descripcion: 'Aroma floral duradero para ambientes.' },
    { id: 3, nombre: 'Limpiador de Pisos', categoria: 'Pisos', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 700, descripcion: 'Limpieza profunda y aroma fresco.' },
    { id: 4, nombre: 'Lavandina con Cloro', categoria: 'Lavandina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 720, descripcion: 'Desinfectante potente para superficies.' },
    { id: 5, nombre: 'Perfumina Citrus', categoria: 'Perfumina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 810, descripcion: 'Fragancia cítrica para el hogar.' },
    { id: 6, nombre: 'Desinfectante Multiuso', categoria: 'Pisos', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 890, descripcion: 'Ideal para baños, cocinas y pisos.' },
    { id: 7, nombre: 'Jabón Líquido Concentrado', categoria: 'Pisos', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 950, descripcion: 'Fórmula concentrada, más rendimiento.' },
    { id: 8, nombre: 'Perfumina Lavanda', categoria: 'Perfumina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 820, descripcion: 'Relajante aroma a lavanda.' },
    { id: 9, nombre: 'Lavandina Extra Fuerte', categoria: 'Lavandina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 760, descripcion: 'Para desinfección profunda.' },
    { id: 10, nombre: 'Limpiador Antibacterial', categoria: 'Pisos', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 870, descripcion: 'Elimina el 99.9% de bacterias.' },
    { id: 11, nombre: 'Perfumina Vainilla', categoria: 'Perfumina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 850, descripcion: 'Fragancia dulce y reconfortante.' },
    { id: 12, nombre: 'Limpiavidrios', categoria: 'Pisos', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 730, descripcion: 'Para vidrios y superficies brillantes.' },
    { id: 13, nombre: 'Lavandina Limón', categoria: 'Lavandina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 690, descripcion: 'Desinfección con aroma cítrico.' },
    { id: 14, nombre: 'Desengrasante Cocina', categoria: 'Pisos', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 920, descripcion: 'Ideal para hornos, mesadas y más.' },
    { id: 15, nombre: 'Perfumina Frutos Rojos', categoria: 'Perfumina', imagen: 'https://ardiaprod.vtexassets.com/arquivos/ids/348619-500-auto?v=638794440997300000&width=500&height=auto&aspect=true', precio: 840, descripcion: 'Aroma intenso y frutal.' }
  ];

  const filtrarProductos = (productos, filtro, busqueda) => {
    return productos
      .filter(producto => (filtro === 'Todos' || producto.categoria === filtro))
      .filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  };

  const productosFiltrados = filtrarProductos(productos, filtro, busqueda);

  return (
    <main className="catalogo">
      <h1>Catálogo de productos</h1>

      <input
        type="text"
        id="buscador"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div id="filtros">
        <button onClick={() => setFiltro('Todos')}>Todos</button>
        <button onClick={() => setFiltro('Lavandina')}>Lavandina</button>
        <button onClick={() => setFiltro('Perfumina')}>Perfumina</button>
        <button onClick={() => setFiltro('Pisos')}>Pisos</button>
      </div>

      <div id="lista-productos" className="productos">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(producto => (
            <div key={producto.id} className="producto">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p><strong>${producto.precio}</strong></p>
              <a
                href={`https://wa.me/5491168707724?text=Hola!%20Quiero%20consultar%20por%20el%20producto:%20${encodeURIComponent(producto.nombre)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="boton-consultar"
              >
                Consultar
              </a>
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </main>
  );
}
