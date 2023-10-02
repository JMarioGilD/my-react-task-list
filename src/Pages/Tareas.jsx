import React from 'react';
import TaskList from './../Components/TaskList';
import TodoAdd from './../Components/TodoAdd';
import useTodo from './../Hooks/useTodo';
import { Box, Heading, Flex, Divider } from "@chakra-ui/react";

export default function Tareas() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <Box p={4}>
      {/* Encabezado */}
     

      <Flex justifyContent="space-between"  mb={4}>
        {/* Contador de todas las tareas */}
        <Box>
          <Heading size="md" mb={2}>
            N° Tareas: <span>{todosCount}</span>
          </Heading>

          {/* Contador de tareas pendientes */}
          <Heading size="md">
            N° Pendientes: <span>{pendingTodosCount}</span>
          </Heading>
        </Box>

        {/* Componente para agregar una nueva tarea */}
        <TodoAdd handleNewTodo={handleNewTodo} />
      </Flex>

      <Divider mb={4} />

      {/* Lista de tareas */}
      <TaskList 
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </Box>
  );
}
