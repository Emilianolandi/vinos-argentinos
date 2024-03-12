import React from "react";


import Vinos from "../components/vinos_descripcion";
import Presentacion from "../components/presentacion";
import Login from "../components/Login";
import ProductosDestacados from "../components/PoductosDestacados";





export default function Inicio (){
    return(
       <>

       <Presentacion />
       <ProductosDestacados/>
       <Vinos/>
       

       <br></br>
       
       </>
    )
}

