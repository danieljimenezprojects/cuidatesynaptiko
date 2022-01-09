
import {
    Box,
    Image,
    Button,
    Link,
    Spacer,
    Stack,
    FormLabel,
    Flex,
    Container,
    Heading,
    Text,
    Grid,
    Badge,
    FormControl,
    Input,
  } from '@chakra-ui/react';
  import brandLogo from '../assets/logo.png';
  import illustration from '../assets/landingilustration.png'
  
  
  
  function MainClientInterface() {
    return (
      <>
        <Container maxW="container.xl" alignContent="center" >
          <Flex alignItems="center" justifyContent="center" mt="50px"  py="5" gap="50px" flexDirection={
            {
              sm:"column",
              md:"row",
              lg:"row",
              xl:"row",
              base:"column"
            } 
          }>
            <Box  >
              <Heading as="h1" size="2xl" >
                <Box fontWeight="black" flex="3">
                  Nos adaptamos a lo que es mejor para tí
                </Box>
              </Heading>
              <Box mt="3" fontWeight="regular">
                <Text fontSize="2xl" mt={3} pt={3}>Indica alguna emoción que sientas o algún problema que tengas y te encontraremos el profesional adecuado.
                </Text>
              </Box>
              
            </Box>
            <Spacer/>
            <Box w="80%" h="80%">
      
                  <FormControl id="nombre">
                  <FormLabel htmlFor='email' fontSize="20px">Escribe aquí que sientes</FormLabel>
                  <Input id='text' type='text' borderColor="gray" placeholder="Por ejemplo: siento tristeza..." />
                    
                  </FormControl>
                  <Box align="right">
                  <Button
                        _hover={{ opacity: '0.8' }}
                        mt="3"
                        color="white"
                        bg="red.500"
                        size="sm"
                        
                    >
                    Busca un profesional
                    </Button> 
                    </Box>
             
            </Box>
          </Flex>
        </Container>
        </>
    );
  }
  
  export default MainClientInterface;
  

