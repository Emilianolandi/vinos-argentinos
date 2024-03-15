import React, { useState } from 'react';
import './presentacion.css'; 

export default function Vinos() {
    const [malbecVisible, setMalbecVisible] = useState(false);
    const [cabernetVisible, setCabernetVisible] = useState(false);
  
    const toggleMalbecVisibility = () => {
      setMalbecVisible(!malbecVisible);
      // ocultar la otra descripción al mostrar una
      if (cabernetVisible) {
        setCabernetVisible(false);
      }
    };
  
    const toggleCabernetVisibility = () => {
      setCabernetVisible(!cabernetVisible);
      //  ocultar la otra descripción al mostrar una
      if (malbecVisible) {
        setMalbecVisible(false);
      }
    };
  
    const showAlert = (description) => {
      alert(description);
    };
  
    return (
      <>
        <div className='Resumen'>
          <div className={`Malbec ${malbecVisible ? 'visible' : ''}`}>
            <h1>Vinos Malbec Argentinos</h1>
            
            
            <div className='boton'>

            <button onClick={() => showAlert('El Malbec argentino es un vino tinto que ha alcanzado renombre internacional y se ha convertido en un emblema distintivo de la industria vinícola de Argentina. Originario de la región de Cahors en Francia, el Malbec encontró en Argentina condiciones climáticas y geográficas ideales para prosperar. La uva Malbec se adapta especialmente bien a la altitud y el clima seco de regiones como Mendoza, donde se cultiva la mayoría del Malbec argentino.')}>
              Mostrar Título
            </button>
            </div>
            {malbecVisible && (
              <>
                <p>
                  
                </p>
                <p>
                  El Malbec argentino es un vino tinto que ha alcanzado renombre internacional y se ha convertido en un emblema distintivo de la industria vinícola de Argentina. Originario de la región de Cahors en Francia, el Malbec encontró en Argentina condiciones climáticas y geográficas ideales para prosperar. La uva Malbec se adapta especialmente bien a la altitud y el clima seco de regiones como Mendoza, donde se cultiva la mayoría del Malbec argentino.
                </p>

              </>
            )}
          </div>
  
          <div className={`Cabernet ${cabernetVisible ? 'visible' : ''}`}>
            <h1>Vinos Cabernet Sauvignon</h1>
            <div className='boton'>
            <button onClick={() => showAlert('Descripción del Cabernet Sauvignon')}>
              Mostrar Título
            </button>
            </div>
            {cabernetVisible && (
              <>
                <p>
                  El Cabernet Sauvignon es otra cepa destacada que ha encontrado un hogar exitoso en los viñedos argentinos. Originario de la región de Burdeos en Francia, el Cabernet Sauvignon se ha adaptado bien al clima diverso y a las diferentes altitudes de las regiones vinícolas argentinas. Conocido por su estructura robusta y sus sabores intensos, el Cabernet Sauvignon argentino ofrece vinos tintos complejos y elegantes.
                </p>
               
              </>
            )}
          </div>
        </div>
      </>
    );
}
