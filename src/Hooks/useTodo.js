import { useEffect, useReducer } from "react";
import { todoReducer } from './../todoReducer';


export default function useTodo() {
  const initialState = [];

  // Este useEffect revisa si localStorage tiene elementos, 
  // si los tiene los establece como parte de la lista
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

  const [todos, dispatch] = useReducer(
    todoReducer,
    initialState,
    init
  );

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter(todo => !todo.done).length

      // Este useEffect ejecutara un codigo que cambie
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
      // los datos de la lista nueva son los que tendran el cambio

      const handleNewTodo = todo => {
        const action = {
          type: "Add Todo",
          payload: todo,
        };
    
        dispatch(action);
      };
    
      const handleDeleteTodo = id => {
        const action = {
          type: "Delete Todo",
          payload: id,
        };
    
        dispatch(action);
      };
    
      const handleCompleteTodo = id => {
        const action = {
          type: "Complete Todo",
          payload: id,
        };
    
        dispatch(action);
      };
    
      const handleUpdateTodo = (id, description) => {
        const action = {
          type: "Update Todo",
          payload: {
            id,
            description,
          }
        };
    
        dispatch(action);
      };

      return{
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }
};
