
import {
    Box,
    Image,
    Button,
    Link,
    Spacer,
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
  
  
  
  function MainLanding() {
    return (
      <>
        <Container maxW="container.xl" alignContent="center" >
          <Flex alignItems="center" justifyContent="center" ml="80px" py="5" gap="50px" flexDirection={
            {
              sm:"column",
              md:"row",
              lg:"row",
              xl:"row",
              base:"column"
            } 
          }>
            <Box mr="30" >
              <Heading as="h1" size="3xl" >
                <Box fontWeight="black" flex="3">
                  Te mereces que te cuiden
                </Box>
              </Heading>
              <Box mt="3" fontWeight="regular">
                <Text fontSize="20px">Nuestro equipo ofrece profesionales de la psicología que se adaptan a tí y a tus necesidades. 
                </Text>
              </Box>
              <Button colorScheme = "red" mt="25px">
                  Contáctenos
              </Button>
            </Box>
            <Spacer/>
            <Box w="80%" h="80%">
              <Image w="100%" src={illustration} alt="illustration" />
            </Box>
          </Flex>
        </Container>
        </>
    );
  }
  
  export default MainLanding;
  

