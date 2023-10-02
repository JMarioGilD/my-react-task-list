import React, { useState } from 'react';
import useForm from '../Hooks/useForm';
import { Input, Button, Text } from '@chakra-ui/react';

export default function TodoAdd({ handleNewTodo }) {
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

  return (
    <form onSubmit={onFormSubmit}>
      {/* Campo de entrada para la descripción de la tarea. */}
      <Input
        type="text"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="¿Cuál es tu siguiente tarea?"
        mb={2} // Márgenes inferiores
        borderColor="green.500" 
        borderRadius="md" 
      />
      {/* Mensaje de error si la tarea es demasiado corta. */}
      {isTooShort && (
        <Text color="red.500" mb={2}>
          Tarea demasiado corta.
        </Text>
      )}

      {/* Campo de entrada para los detalles de la tarea. */}
      <Input
        type="text"
        name="descriptionTask"
        value={descriptionTask}
        onChange={onInputChange}
        placeholder="Indica los detalles de tu tarea"
        mb={2} // Márgenes inferiores
        borderColor="green.500" // Color del borde verde
        borderRadius="md" // Bordes redondeados
      />

      {/* Botón para agregar la tarea. */}
      <Button type="submit" colorScheme="green" mb={2}>
        <i className="fas fa-plus"></i>
      </Button>
    </form>
  );
}

