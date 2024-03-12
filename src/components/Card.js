// Card.js

import React from 'react';
import './Card.css';

export const CardCompleto = ({ Card }) => (
  <div className="tarjeta">
    <img src={Card.imagen} alt={Card.titulo} />
    <h2>{Card.titulo}</h2>
    <p>{Card.Descripcion}</p>
    <p>Precio: {Card.precio}</p>
  </div>
);

export const CardDestacado = ({ Card }) => (
  <div className="tarjeta destacado">
    <img src={Card.imagen} alt={Card.titulo} />
    <h2>{Card.titulo}</h2>
    <h3>Precio: {Card.precio}</h3>
    <h1>Destacado!!</h1>
  </div>
);
