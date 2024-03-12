import './CardWrapper.css';
import Tarjetas from '../Data/Tarjetas.json';
import Card from '../components/Card'


export default function CardWrapper ({Titulo}) {
    console.log(Tarjetas);
    return (
        <>
        <h1 className='Titulo-producto'>NUESTROS PRODUCTOS</h1>
            <div className="grilla">
            

                {Tarjetas.map((Tarjeta, index) => ( 
                    <Card
                        key={index}
                        Card= {Tarjeta}
                        
                    />
                    ))}
              
            </div>

        </>
    )
}