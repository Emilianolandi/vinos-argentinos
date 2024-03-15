import React from "react";

import Presentacion from "../components/presentacion"
import CardWrapper from "../components/CardWrapper"
import Vinos from "../components/vinos_descripcion";

export default function Productos(){
    return(
      <>
  <Presentacion />
  
        <CardWrapper
        titulo = {"Productos"}
        />
   <Vinos/>
    
        </>
    )
}