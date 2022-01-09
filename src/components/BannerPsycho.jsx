import {
    Box,
    Image,
    Button,
    Text,
    Link,
    Flex,
    Spacer,
    Container,
    Heading,
    Grid,
    Badge,
    FormControl,
    Input,
  } from '@chakra-ui/react';
  import brandLogo from '../assets/logo.png';
  import information from '../assets/information.png'
  import notification from '../assets/notifications.png'
  import man from '../assets/man.png'
  
  function BannerPsycho() {
    return (
      <>
        <header>
          <Box
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            ml={{
              sm: '5',
            md: '5',
            lg: '10',
            xl: '10',
            base: '5',
            }}
            mr={10}
            mt={3}
            
          >
            <Box>
              <Link><Image boxSize="50px" src={brandLogo} alt="logo cuidate" /></Link>
            </Box>
            <Box>
            <Flex gap={{
              sm: '1',
            md: '1',
            lg: '3',
            xl: '3',
            base: '2',
            }} justifyContent="center" alignItems="center">
              <Text pr={3} color="gray.600" fontSize={{
                sm:"sm",
                md:"md",
                lg:"md",
                xl:"md",
                base:"sm",
              }} cursor="pointer">
                Consultas
              </Text>
              <Text pr={3} color="gray.600" fontSize={{
                sm:"sm",
                md:"md",
                lg:"md",
                xl:"md",
                base:"sm",}} cursor="pointer">
                 Calendario
              </Text>
              <Spacer/>
              <Image src={information} w="30px" h="30px" cursor="pointer"/>
              <Spacer/>
              <Image src={notification} w="30px" h="30px" cursor="pointer"/>
              <Spacer/>
              <Image src={man} w="30px" h="30px" cursor="pointer"/>
              </Flex>
            </Box>
          </Box>
        </header> 
      </>
    );
  }
  
  export default BannerPsycho;
  