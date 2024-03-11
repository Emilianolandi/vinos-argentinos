export default function Eventos(){
    
    function Saludar (){
        alert ("Gracias por Visitarnos");
    }
    
    return(
        <button onClick={Saludar}>
            Cliqueame
        </button>
    )
}