import React from 'react';
import useForm from '../Hooks/useForm';

export default function TodoAdd ({ handleNewTodo }) { 
  const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});
  
  const onFormSubmit = (event) => {
		event.preventDefault();
  
    if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};
  
    handleNewTodo(newTodo);
		onResetForm();
    };

    return(
        <form onSubmit={onFormSubmit}>
          <input 
          type="text"
          className="input-Agregar"
          name="description"
          value={description}
          onChange={onInputChange}
          placeholder="¿Cual es tú siguiente tarea?"
          />
            <button className="boton" type='submit'>
             <i className="fas fa-plus"></i>
            </button>
        </form>
        );
    }

