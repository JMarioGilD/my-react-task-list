import './App.css';
// import { Menu } from './Routes/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './Routes/Menu';
import { Home } from './Pages/Home';
import SobreNosotros from './Pages/SobreNosotros';
import Tareas from './Pages/Tareas';


export default function App() {

  return (
    <>
    
  {/* Utilizamos el componente BrowserRouter como el enrutador principal que envuelve toda nuestra aplicación. */}
  <BrowserRouter>
  <Menu /> {/* El componente Menu representa el menú de navegación que se muestra en la parte superior de la página. */}
  <div>
    {/* Aquí utilizamos el componente Routes para definir las rutas y los componentes asociados que se renderizarán según la URL actual. */}
      <Routes>
        {/* La primera ruta está configurada para la URL raíz ("/"). 
        Cuando el usuario accede a la página principal, 
        se renderizará el componente <Home />. */}
          <Route
          path="/"
          element={<Home />} />

          {/* La siguiente ruta está configurada para la URL "/SobreNosotros". 
          Cuando el usuario accede a esta URL, se renderizará el componente <SobreNosotros />. */}
          <Route
          path="SobreNosotros"
          element={<SobreNosotros />} />

          {/* La última ruta está configurada para la URL "/Tareas". 
          Cuando el usuario accede a esta URL, se renderizará el componente <Tareas />. */}
          <Route
          path="Tareas"
          element={<Tareas />} />
      </Routes>
  </div>
  </BrowserRouter>
  </>
  )
}

