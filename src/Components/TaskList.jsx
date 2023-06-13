import { useState, useEffect } from "react"; 
import React from "react";
import Task from "./Task";


function TaskList(props) { 

   const { lista } = props;

   const [listaNueva, setListaNueva] = useState(lista)

   const [agregar, setAgregar] = useState("");

   const [increaserId, setIncreaserID] = useState(0);

   const agregarElemento = () => {
     
       if(agregar.trim() !== ""){
       // agregar al array de lista de tarea.
       setIncreaserID(increaserId + 1);
       let propiedadesElemento = {id: increaserId, task: agregar}
    
       setListaNueva([...listaNueva, propiedadesElemento])
       console.log(listaNueva)
       setAgregar(""); //borra la casilla despues de agregar tarea
       } else {
       alert("por favor escribe una tarea.")
      }
      }
      
      // Este useEffect revisa si localStorage tiene elementos, 
      // si los tiene los establece como parte de la lista
        useEffect(() => {
        let data = localStorage.getItem('tasks')
        if (data) {
          setListaNueva(JSON.parse(data))
        }
        }, [ ])

      // Este useEffect ejecutara un codigo que cambie
        useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(listaNueva))
        }, [ listaNueva ]) // los datos de la lista nueva son los que tendran el cambio

   return(
    <div className="registro-tareas">
      <input 
      id="agrega"
      type="text"
      className="tarea-input"
      placeholder="¿Cual es tú siguiente tarea?"
      value={agregar}
      onChange={(event) => setAgregar(event.target.value)}
      />
        <button onClick={agregarElemento} className="boton">
         <i className="fas fa-plus"></i>
        </button>
      <ul>
        {listaNueva.map(elemento =>(
          <Task taskName={elemento.task} key={elemento.id} />
        ))}
      </ul>
    </div>
    );
}

export default TaskList;
