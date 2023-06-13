import './App.css';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import { registroTareas } from './Text-Config/DataBase';

export default function App() {

  return (
    <div className='App'>
       <Header />
       <TaskList lista ={ registroTareas } />
    </div>
  )
}

