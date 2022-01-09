import {
    Box,
   Image,
    Container,
    Heading,
    Text,
    Flex,
    Link,
    Stack,
    HStack,
   
  } from '@chakra-ui/react';

  import calendar from '../assets/calendar.png'
  
  function Calendar() {
    return (
      <>
       <Container maxW="container.xl" mt={20}  paddingBottom={20}>
          <Box>
          <Heading as="h2" size="lg" marginBottom="20px">
               Calendario
          </Heading>
          <Text marginBottom="40px" color="red"> <Link> Establecer nuevo horario para calendario </Link> </Text>
          
          </Box>
          <Box align="center">
          <Image src={calendar} alt="calendario" w="70%"/>
          </Box>
          
         
        </Container>
      </>
    );
  }
  
  export default Calendar;
  