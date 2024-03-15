import React from 'react';
import './CardWrapper.css';
import Tarjetas from '../Data/Tarjetas.json';
import { CardDestacado, CardCompleto } from '../components/Card';

export default function CardWrapper() {
    console.log(Tarjetas);

    return (
        <>
            <h1 className='Titulo-producto'>NUESTROS PRODUCTOS</h1>
            <div className="grilla">
                {Tarjetas.map((Tarjeta, index) => (
                    Tarjeta.destacado ? (
                        <CardDestacado
                            key={index}
                            card={Tarjeta}
                        />
                    ) : (
                        <CardCompleto
                            key={index}
                            card={Tarjeta}
                        />
                    )
                ))}
            </div>
        </>
    );
}
