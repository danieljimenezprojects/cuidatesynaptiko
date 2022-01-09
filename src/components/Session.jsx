import {
    Box,
   
    Container,
    Heading,
    Text,
    Flex,
    Link,
    Stack,
    HStack,
   
  } from '@chakra-ui/react';

  
  
  function Session() {
    return (
      <>
       <Container maxW="container.xl" mt={20}  paddingBottom={10}>
          <Box>
          <Heading as="h2" size="lg" marginBottom="40px">
               Consultas
          </Heading>
          <Text marginBottom="40px"> Pinchando en el link podrás acceder a la cita en la hora y fecha establecida.</Text>
          </Box>
          <Box>
          <Stack spacing={7}>
          <Box>
           <Container maxWidth="container.lg.xl" border="1px" borderColor="red" borderRadius="lg" padding={4} bg="red.100">
          
          <Flex justifyContent="space-around" fontSize="sm" padding={3} fontWeight="medium"
          flexDirection={{
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            base: 'column',
              
          }}>
          
          <Text>  <strong>Nombre:</strong> María Garcia Garcia </Text>
          <Text>  <strong>Fecha:</strong> 9:00 - 12 Enero 2022 </Text>
          <Text> <strong>Duración:</strong> 50minutos </Text>
          <Text><strong>Historial:</strong> <Link color="blue"> https//:cuidate/CRUD/David.pdf </Link></Text>
          <Text><strong>Link:</strong> <Link color="blue"> https//:soom.com/dsde/7821 </Link></Text>
          <Text><Link color="red">Anular cita</Link></Text>
          </Flex>
          
          </Container>
          </Box>
          <Box>
           <Container maxWidth="container.lg.xl" border="1px" borderColor="red" borderRadius="lg"  bg="red.100" padding={4}>
          
          <Flex justifyContent="space-around" fontSize="sm" padding={3} fontWeight="medium" flexDirection={{
              sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            base: 'column',
          }}>
          
          <Text>  <strong>Nombre:</strong> David Garcia Garcia </Text>
          <Text>  <strong>Fecha:</strong> 10:00 - 12 Enero 2022 </Text>
          <Text> <strong>Duración:</strong> 50minutos </Text>
          <Text><strong>Historial:</strong> <Link color="blue"> https//:cuidate/CRUD/David.pdf </Link></Text>
          <Text><strong>Link:</strong> <Link color="blue"> https//:soom.com/dsde/7821 </Link></Text>
          <Text><Link color="red">Anular cita</Link></Text>
          </Flex>
          
          </Container>
          </Box>
          </Stack>
          </Box>
         
        </Container>
      </>
    );
  }
  
  export default Session;
  