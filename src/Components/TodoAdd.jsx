import React, { useState } from 'react';
import useForm from '../Hooks/useForm';

export default function TodoAdd ({ handleNewTodo }) {
  // Estado local y funciones del formulario. 
  const { description, descriptionTask, onInputChange, onResetForm } = useForm({
		description: '',
    descriptionTask: '',
	});

  // Estado local para controlar si la tarea es demasiado corta.
  const [isTooShort, setIsTooShort] = useState(false);
  
  // función para manejar el envío del formulario.
  const onFormSubmit = (event) => {
		event.preventDefault();
  
    if (description.length < 3) {
      setIsTooShort(true);
      return;
    }

    // Crear un nuevo objeto de tarea.
		let newTodo = {
			id: new Date().getTime(),
			description: description,
      descriptionTask: descriptionTask,
			done: false,
		};

    // Llamar a la fuunción handleNewTodo pasando la nueva tarea.
    handleNewTodo(newTodo);
    
    // Restablecer el formulario.
		onResetForm();

    // Restablecer la variable de estado isTooShort.
    setIsTooShort(false);
    };

    return(
        <form onSubmit={onFormSubmit}>
          {/* Campo de entrada para la descripción de la tarea. */}
          <input 
          type="text"
          className="input-Agregar"
          name="description"
          value={description}
          onChange={onInputChange}
          placeholder="¿Cual es tú siguiente tarea?"
          />
          {/* Mensaje de error si la tarea es demasiado corta. */}
          {isTooShort && (
            <p className="error-message">Tarea demasiado corto.</p>
          )}

          {/* Campo de entrada para los detalles de la tarea. */}
          <input
          type="text"
          className="input-Detalles"
          name="descriptionTask"
          value={descriptionTask}
          onChange={onInputChange}
          placeholder="Indica los detalles de tú tarea"
          />

          {/* Botón para agregar la tarea. */}
            <button className="boton" type='submit'>
             <i className="fas fa-plus"></i>
            </button>
        </form>
        );
    }

