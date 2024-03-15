import React, { useState } from 'react';
import './Card.css';

export const CardCompleto = ({ card }) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const toggleMostrarInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  return (
    <div className="tarjeta">
      <img src={card.imagen} alt={card.titulo} />
      <h2>{card.titulo}</h2>
      {mostrarInfo && (
        <>
          <p>{card.Descripcion}</p>
          <p>Precio: {card.precio}</p>
        </>
      )}
      <button onClick={toggleMostrarInfo}>
        {mostrarInfo ? 'Ocultar Info' : 'Mostrar Info'}
      </button>
    </div>
  );
};

export const CardDestacado = ({ card }) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const toggleMostrarInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  return (
    <div className={card.destacado ? "tarjeta destacado" : "tarjeta"}>
      <img src={card.imagen} alt={card.titulo} />
      <h2>{card.titulo}</h2>
      {card.destacado && <h1>Producto Destacado!!</h1>}
      {mostrarInfo && (
        <>
          <p>{card.Descripcion}</p>
          <p>Precio: {card.precio}</p>
        </>
      )}
      <button onClick={toggleMostrarInfo}>
        {mostrarInfo ? 'Ocultar Info' : 'Mostrar Info'}
      </button>
    </div>
  );
};
