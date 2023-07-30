import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex, Heading, Stack } from "@chakra-ui/react"

export default function Menu() {
  return (

    // Utilizamos el componente <Flex> para crear un contenedor flexible que se alinea 
    // y justifica su contenido en el centro vertical y horizontal. Además, establecemos 
    // la altura (h) del contenedor en el 100% de la altura de su contenedor padre.
    <Flex
    align="center"
    justify="center"
    h="100%">
    
    {/* El componente <Stack> es un contenedor apilado que permite apilar elementos uno encima del otro.
        Aquí, se utiliza para apilar los elementos verticalmente, ya que hemos configurado su dirección a "column". */}
    <Stack direction={{x1: "column"}}>
     <div>
           <div className="Logo">
                <h2>JGAgenda</h2>
            </div>
        {/* El elemento <nav> representa la barra de navegación que contiene una lista no ordenada (<ul>) con enlaces a diferentes rutas. */}
        <nav className="Navbar">
          {/* El componente <div> con la clase "display-menu" se utiliza para alinear los elementos de la barra de navegación horizontalmente. */}
                <div className="display-menu">
                  {/* La lista no ordenada contiene varios elementos de lista (<li>) que contienen enlaces a diferentes rutas. 
                      Cada enlace se representa mediante el componente <NavLink> de React Router, que permite navegar a las rutas correspondientes. */}
                    <ul>
                     <li>
                      {/* El componente <NavLink> es un enlace que dirige a la ruta especificada en el atributo "to". 
                      Aquí, el enlace con la clase "menu-link" dirige a la ruta de la página de inicio ("/"). */}
                      <Heading size="xs">
                       <NavLink className="menu-link" to="/">Home</NavLink>
                      </Heading>
                     </li>
                    
                     <li>
                      <Heading size="xs">
                        {/* Otro enlace que dirige a la ruta "/SobreNosotros" */}
                       <NavLink className="menu-link" to="/SobreNosotros">Sobre Nosotros</NavLink>
                      </Heading>
                    </li>

                    <li> 
                      <Heading size="xs"> 
                       {/* Otro enlace que dirige a la ruta "/Tareas" */}
                       <NavLink className="menu-link" to="/Tareas">Lista De Tareas</NavLink>
                      </Heading>
                    </li>
                    </ul>
                </div>
        </nav>
     </div>
     </Stack>
    </Flex>
  )
}