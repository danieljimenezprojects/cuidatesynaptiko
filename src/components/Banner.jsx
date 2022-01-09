import {
    Box,
    Image,
    Button,
    Link,
    Container,
    Heading,
    Grid,
    Badge,
    FormControl,
    Input,
  } from '@chakra-ui/react';
  import brandLogo from '../assets/logo.png';
  
  
  
  function Banner() {
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
              <Button pr={5} color="gray.600" fontSize="md" variant="link">
                Trabaja con nosotros
              </Button>
              <Button color="gray.600" fontSize="md" variant="link">
                Inicia sesión
              </Button>
            </Box>
          </Box>
        </header> 
      </>
    );
  }
  
  export default Banner;
  