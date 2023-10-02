import React from "react";
import { ChakraProvider, CSSReset, extendTheme, Flex } from "@chakra-ui/react";
import NavBar from "./Components/Navbar";

// Definir colores personalizados para el tema
const theme = extendTheme({
  colors: {
    // Agregar tus colores personalizados aquí si es necesario
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <NavBar />
      <Flex direction="row"  minH="100vh" >
        
        
      </Flex>
    </ChakraProvider>
  );
}