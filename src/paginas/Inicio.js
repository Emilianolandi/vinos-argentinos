import React from "react";


import Vinos from "../components/vinos_descripcion";
import Presentacion from "../components/presentacion";
import Login from "../components/Login";





export default function Inicio (){
    return(
       <>
       <Presentacion />
       <Vinos/>
       <br></br>
    <Login />
       <br></br>
       
       </>
    )
}

