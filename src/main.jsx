import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
   // Utilizamos el componente ChakraProvider como el proveedor de estilos y temas para toda nuestra aplicación.
   <ChakraProvider>
      {/* El componente <ColorModeScript> establece el modo de color inicial para la aplicación, que aquí se configura en "light" (modo claro). */}
    <ColorModeScript initialColorMode="light" />
     <App />
   </ChakraProvider>
)