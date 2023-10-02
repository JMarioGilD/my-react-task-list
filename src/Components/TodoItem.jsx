import React from "react";
import Task from "./Task";

export default function TodoItem({
    todo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
}) {
    return (
    <li style={{ listStyle: "none" }}>
      {/* Componente de la tarea. */}
        <Task
        todo={todo}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        />
    </li>
    );
}
