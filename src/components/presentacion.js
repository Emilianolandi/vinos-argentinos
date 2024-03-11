import './presentacion.css';
import React from 'react';

export default function Presentacion() {
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
       
      </div>
    </>
  );
}
