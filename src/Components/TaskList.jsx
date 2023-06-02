import Task from './Task';
import { useState } from 'react';


function TaskList() {
  const [items, setItems] = useState([
    {
      content: "📘 Aprender React",
      isCompleted: false
    },
    {
      content: "⚛️ Crear mi primera aplicación",
      isCompleted: false
    },
    {
      content: "🚀 Subirla a GitHub",
      isCompleted: false
    }
  ]);

  const completeTarea = index => {
    const newTarea = [...items];
    newTarea[index].isCompleted = !newTarea[index].isCompleted;
    setItems(newTarea); 
  }

  const TaskList = (content) => {
    const newTarea = [...items]; 
    newTarea.unshiff({ content: content, isCompleted: false });
    setItems(newItems);
  };
 
    return (
        
      <div className="App">
      <ul className="ItemList">
        {items.map((item, index) => (
          <li key={index} className="Item">
            {item.content}
          </li>
        ))}
      </ul>
    </div>

    )
}
<Task />
export default TaskList;
