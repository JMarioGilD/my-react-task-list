import { Heading, Box, Text, Image, Flex } from "@chakra-ui/react";

function SobreNosotros() {

    const paragraphStyle = {
        textAlign: 'justify'
    };

    return (
        
            <Box p="4">
            
            <Heading as="h2" size="lg" mb="4" textAlign="center">
                Descripción de la aplicación
            </Heading>
            
             <Text style={paragraphStyle} mb="4">
             La aplicación de lista de tareas es una herramienta útil para ayudarte a organizar tu vida y a mantenerte al día con 
             tus pendientes. Con la aplicación, puedes crear listas de tareas, agregar tareas, editar tareas, eliminar tareas y 
             marcar tareas como completadas. La aplicación también te indica el número de tareas que tienes pendientes, y te 
             muestra un aviso de error si intentas agregar una tarea que es demasiado corta. Además, puedes agregar una 
             descripción a cada tarea, aunque esta no es obligatoria.
             </Text>
             
             <Heading as="h2" size="lg" mb="4" textAlign="center">
                Cómo usar la app
            </Heading>
             
             <Text style={paragraphStyle} mb="4">
             Para usar la aplicación, simplemente crea una nueva lista de tareas y agrega las tareas que quieras. Puedes editar 
             las tareas, eliminarlas o marcarlas como completadas en cualquier momento. La aplicación también te mostrará el
             número de tareas pendientes, por lo que siempre sabrás cuánto trabajo tienes por delante.
             </Text>
             
             <Heading as="h2" size="lg" mb="4" textAlign="center">
                Tecnologías usadas
            </Heading>
             
            <Text style={paragraphStyle} mb="4">
                La aplicación de lista de tareas está creada con las siguientes tecnologías:
            </Text>

            <Flex align="center" mb="4">
               <Image src="src/Logo/html.png" alt="Logo" boxSize="25px" mr="2" />
               <Text style={paragraphStyle} mb="4">HTML5</Text>
            </Flex>
            
            <Flex align="center" mb="4">
               <Image src="src\Logo\javascript.png" alt="Logo" boxSize="25px" mr="2" />
               <Text style={paragraphStyle} mb="4">JavaScript</Text>
            </Flex>

            <Flex align="center" mb="4">
               <Image src="src\Logo\stylelint.png" alt="Logo" boxSize="25px" mr="2" />
               <Text style={paragraphStyle} mb="4">CSS</Text>
            </Flex>

            <Flex align="center" mb="4">
               <Image src="src\Logo\react.png" alt="Logo" boxSize="25px" mr="2" />
               <Text style={paragraphStyle} mb="4">React</Text>
            </Flex>
             
        </Box>
        
    )
  }
  
  export default SobreNosotros;