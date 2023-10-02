import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex, Heading, Stack } from "@chakra-ui/react"

export default function Menu() {
  return (

    // Utilizamos el componente <Flex> para crear un contenedor flexible que se alinea 
    // y justifica su contenido en el centro. Además, establecemos 
    // la altura (h) del contenedor en el 100% de la altura de su contenedor padre.
    <Flex 
    align="center"
    justify="center"
    h="100%" 
    pl={4}
    borderBottom="1px solid #ccc">
     
        {/* El elemento <nav> representa la barra de navegación que contiene una lista no ordenada (<ul>) con enlaces a diferentes rutas. */}
        <nav className="Navbar">
        <Stack direction="row" spacing={8}>
                      {/* El componente <NavLink> es un enlace que dirige a la ruta especificada en el atributo "to". 
                      Aquí, el enlace con la clase "menu-link" dirige a la ruta de la página de inicio ("/"). */}
                      <Heading size="xs">
                       <NavLink className="menu-link" to="/">Home</NavLink>
                      </Heading>
                     
                      <Heading size="xs">
                        {/* Otro enlace que dirige a la ruta "/SobreNosotros" */}
                       <NavLink className="menu-link" to="/SobreNosotros">Sobre Nosotros</NavLink>
                      </Heading>
                    
                      <Heading size="xs"> 
                       {/* Otro enlace que dirige a la ruta "/Tareas" */}
                       <NavLink className="menu-link" to="/Tareas">Lista De Tareas</NavLink>
                      </Heading>
                    
                    </Stack>
              
        </nav>
        </Flex>
  )
}