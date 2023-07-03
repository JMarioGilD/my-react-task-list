
import './App.css';
import Header from './Components/Header';
import TaskList from './Components/TaskList';


export default function App() {

  return (
    <div className='App'>
      <Header />
           <input type='text' className='tarea-input' placeholder='Cual es la tarea de hoy?'/>
             <button className='tarea-btn'>Agregar Tarea</button>
       <TaskList />
    </div>
  )
}

