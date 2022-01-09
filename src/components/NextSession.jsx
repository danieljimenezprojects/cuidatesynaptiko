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

  
  
  function NextSession() {
    return (
      <>
       <Container maxW="container.xl" mt={20}  paddingBottom={20}>
          <Box>
          <Heading as="h2" size="lg" marginBottom="40px">
              Próximas consultas
          </Heading>
          <Text marginBottom="40px"> Pinchando en el link podrás acceder a la cita en la hora y fecha establecida.</Text>
          </Box>
          <Box>
          <Box>
          <Container maxWidth="container.lg.xl" border="1px" borderColor="red" borderRadius="lg" padding={4} bg="red.100">
          
          <Flex justifyContent="space-around" fontSize="lg"  padding={3} flexDirection={{
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            base: 'column',
              
          }}>
          
          <Text>  <strong>Psicólogo:</strong> David Garcia Garcia </Text>
          <Text>  <strong>Fecha:</strong> 9:00 - 12 Enero 2022 </Text>
          <Text> <strong>Duración:</strong> 50minutos </Text>
          <Text><strong>Link:</strong> <Link color="blue"> https//:soom.com/dsde/7821 </Link></Text>
          <Text><Link color="red">Anular cita</Link></Text>
          </Flex>
          
          </Container>
          </Box>
          </Box>
         
        </Container>
      </>
    );
  }
  
  export default NextSession;
  