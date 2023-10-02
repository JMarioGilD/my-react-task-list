import React, { useRef, useState } from "react";
import useForm from "../Hooks/useForm";
import { DeleteIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";

export default function Task({
   todo,
   handleUpdateTodo,
   handleDeleteTodo,
   handleCompleteTodo,
}) {
   const { updateDescription, updateDescriptionTask, onInputChange } = useForm({
      updateDescription: todo.description,
      updateDescriptionTask: todo.descriptionTask,
   });

   const [disabled, setDisabled] = useState(true);
   const focusInputRef = useRef();

   const handleEditTask = () => {
      if (disabled) {
      setDisabled(false);
      focusInputRef.current.focus();
      } else {
      onSubmitUpdate();
      }
   };

   const onSubmitUpdate = (event) => {
      event.preventDefault();
      const id = todo.id;
      const description = updateDescription;
      const descriptionTask = updateDescriptionTask;

      handleUpdateTodo(id, description, descriptionTask);

      setDisabled(true);
      focusInputRef.current.blur();
      };

      const onDeleteTask = () => {
      handleDeleteTodo(todo.id);
   };

   return (
      <form onSubmit={onSubmitUpdate}>
      <input
         type="text"
         className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
         name="updateDescription"
         value={updateDescription}
         onChange={onInputChange}
         placeholder="Corregir tarea"
         readOnly={disabled}
         ref={focusInputRef}
      />

      <input
         type="text"
         className="input-updatedescription"
         name="updateDescriptionTask"
         value={updateDescriptionTask}
         onChange={onInputChange}
         placeholder="Corregir detalles"
         readOnly={disabled}
         ref={focusInputRef}
      />

      <Button className="boton" type="button" onClick={handleEditTask}>
         {disabled ? <i className="fas fa-edit"></i> : "Guardar"}
      </Button>

      {/* Botón para eliminar la tarea */}
      <IconButton
         icon={<DeleteIcon />}
         onClick={onDeleteTask}
         colorScheme="red"
         aria-label="Eliminar tarea"
      />
      </form>
   );
};
