import './App.css';
import React from 'react';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import TodoAdd from './Components/TodoAdd';
import useTodo from './Hooks/useTodo';

export default function App() {
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
    <div className='App'>
      
       <Header />

       <div className='counter-todos'>
        <h3>
          N° Tareas: <span>{todosCount}</span>
        </h3>
        <h3>
          N° Pendientes: <span>{pendingTodosCount}</span>
        </h3>
       </div>

       <div className='add-tarea'>
        <h3>Agregar Tarea</h3>
        <TodoAdd handleNewTodo={handleNewTodo} />
       </div>

       <TaskList 
       todos={todos}
       handleUpdateTodo={handleUpdateTodo}
       handleDeleteTodo={handleDeleteTodo}
       handleCompleteTodo={handleCompleteTodo}
       />
    </div>
  )
}

