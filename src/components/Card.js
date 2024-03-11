import './Card.css'


export default function Card({Card}) {
    let precio = 1000;
    let envio_gratis = true;
 

    return(
        <div className = "Card">
            
                
           <img className = "Card-img"src={Card.imagen} />
           
           
           <div>
          
             <h2 >{Card.titulo}</h2> 
             <h4>{Card.Descripcion}</h4>
             <h1 className = "card-info_precio">{Card.precio}</h1> 
             {precio > 20000 && 
                <p>Ho por dios</p> 
            }
            {envio_gratis &&
               <h3 className = "gratis">¡Envio gratis!</h3>
            }
            {!envio_gratis &&
                <h1>No es gratis</h1>
            }
            </div>
            </div>
            

            
    )
    
    
}