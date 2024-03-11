import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navegacion.css';

export default function Botonera() {
  const location = useLocation();

  return (
    <nav className='botonera'>
      <ul className='lista'>
        <li>
          <Link to="/" className={`enlace ${location.pathname === '/' ? 'activo' : ''}`}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/Productos" className={`enlace ${location.pathname === '/Productos' ? 'activo' : ''}`}>
            Productos
          </Link>
        </li>
     
        <li>
          <Link to="/Contacto" className={`enlace ${location.pathname === '/Contacto' ? 'activo' : ''}`}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
