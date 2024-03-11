import './CardWrapper.css';
import Tarjetas from '../Data/Tarjetas.json';
import Card from '../components/Card'


export default function CardWrapper ({titulo}) {
    console.log(Tarjetas);
    return (
        <>
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