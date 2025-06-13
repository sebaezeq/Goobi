'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  useEffect(() => {
    const sheetID = '1w5ApAct4PLRCtPGTGe59wqrWoW6EYQb2nktjDe5HoWs';
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;

    axios.get(url).then(res => {
      const raw = res.data;
      const json = JSON.parse(raw.substr(47).slice(0, -2));

      const productosDesdeExcel = json.table.rows.map(row => ({
        nombre: row.c[0]?.v || '',
        descripcion: row.c[1]?.v || '',
        precio: row.c[2]?.v || '',
        imagen: row.c[3]?.v || '',
        stock: row.c[4]?.v || '',
        categoria: row.c[5]?.v || 'Sin categoría', // opcional si agregás categoría en el Excel
      }));

      setProductos(productosDesdeExcel);
    }).catch(err => {
      console.error('Error al cargar productos:', err);
    });
  }, []);

  const filtrarProductos = (productos, filtro, busqueda) => {
    return productos
      .filter(p => (filtro === 'Todos' || p.categoria === filtro))
      .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  };

  const productosFiltrados = filtrarProductos(productos, filtro, busqueda);

  return (
    <main className="catalogo" style={{ padding: 30 }}>
      <h1>🧴 Catálogo de productos</h1>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: 10, width: '100%', maxWidth: 400, marginBottom: 20 }}
      />

      <div id="filtros" style={{ marginBottom: 20 }}>
        <button onClick={() => setFiltro('Todos')}>Todos</button>
        <button onClick={() => setFiltro('Lavandina')}>Lavandina</button>
        <button onClick={() => setFiltro('Perfumina')}>Perfumina</button>
        <button onClick={() => setFiltro('Pisos')}>Pisos</button>
      </div>

      <div id="lista-productos" className="productos" style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((p, i) => (
            <div key={i} className="producto" style={{
              border: '1px solid #ccc',
              padding: 20,
              borderRadius: 10,
              maxWidth: 250
            }}>
              <img src={p.imagen} alt={p.nombre} width={200} height={150} />
              <h3>{p.nombre}</h3>
              <p>{p.descripcion}</p>
              <p><strong>${p.precio}</strong></p>

              {parseInt(p.stock) > 0 ? (
                <a
                  href={`https://wa.me/5491168707724?text=Hola!%20Quiero%20consultar%20por%20el%20producto:%20${encodeURIComponent(p.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boton-consultar"
                  style={{ textDecoration: 'none', background: '#25D366', color: 'white', padding: 10, borderRadius: 5, display: 'inline-block' }}
                >
                  Consultar
                </a>
              ) : (
                <p style={{ color: 'red', fontWeight: 'bold' }}>SIN STOCK</p>
              )}
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </main>
  );
}
