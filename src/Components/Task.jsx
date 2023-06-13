import React from "react"
import { useState } from "react";

export default function Task({ taskName }) {
   
   const[completado, setCompletada] = useState(false);
   const estaCompletada = () => {
      setCompletada(!completado)
   }
   
      return ( 
         // Utilizando un valor Booleano y un checkbox se podra indicar que una tarea o varias tareas han sido completadas
      <div>
       <li className={completado ? "item-tarea-completada" : "item-tarea"}>
        <input
        type="checkbox"
        id="chequeo"
        checked={completado}
        onChange={estaCompletada}
        /> 

        <label className="etiqueta">{taskName}</label>
            <button className="boton">
               <i className="fas fa-edit"></i>
            </button>
            <button className="boton">
               <i className="fas fa-trash"></i>
            </button>
       </li>  
    </div>
  );
}
