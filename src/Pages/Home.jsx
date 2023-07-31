import { Box, Heading, Image } from "@chakra-ui/react"
import React from "react"

export function Home() {
    return ( 
      <Box p="4" textAlign="center">
          <Heading as="h2" size="lg" mb="4">
            ¡Bienvenido!
          </Heading>
          <Image src="src\Logo\jgagenda-logo.png" alt="Logo" mb="4" maxW="800px" mx="auto" />
      </Box>
    )
}