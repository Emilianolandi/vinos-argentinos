// ProductosDestacados.js

import React from 'react';
import './CardWrapper.css';
import Tarjetas from '../Data/Tarjetas.json';
import { CardDestacado } from '../components/Card';

export default function ProductosDestacados() {
  // Filtrar solo los productos destacados
  const productosDestacados = Tarjetas.filter((tarjeta) => tarjeta.destacado);

  return (
    <>
      <h1 className='Titulo-producto'>PRODUCTOS DESTACADOS</h1>
      <div className="grilla">
        {productosDestacados.map((Tarjeta, index) => (
          <CardDestacado
            key={index}
            Card={Tarjeta}
            destacado={true}
          />
        ))}
      </div>
    </>
  );
}
