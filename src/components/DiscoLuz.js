import './DiscoLuz.css';
import React from 'react';

export default function Disco() {
  return (
    <>
      <div className='Caja'>
        <h1 className='title-prin'> el Malbec y el Cabernet Sauvignon </h1>
        <div className='Enlace'>
          <button>
            <iframe
              title='LUZ Album'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/URupM8Ip5GM'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </button>
        </div>
        <br></br>
        <div className='Resumen'>
          El 7 de mayo de 2021 sale LUZ, nuestro décimo disco de estudio producido por Héctor Castillo. Fue grabado en José Ignacio, Uruguay, en donde montamos un estudio de cero en el medio del campo en uno de los lugares más lindos del país. Fueron 20 días de convivencia en un entorno soñado en el cual, rodeados de paz y naturaleza, respiramos música las 24 horas del día y trabajamos en detalle sobre cada idea que surgía dando como resultado estas nuevas 12 canciones. LUZ es un disco de rock directo, contundente, con el sello de la banda y con búsquedas completamente nuevas. Un disco con invitados de primer nivel que reflejan la amplitud perseguida durante nuestros más de 26 años de carrera.
        </div>
        <br></br>
      </div>
    </>
  );
}
