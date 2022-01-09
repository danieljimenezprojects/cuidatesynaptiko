
import {
    Box,
    Image,
    Text,
    Button,
    Link,
    Spacer,
    Flex,
    Container,
    Heading,
    Grid,
    Badge,
    FormControl,
    Input,
  } from '@chakra-ui/react';
  import brandLogo from '../assets/logo.png';
  import psico1 from '../assets/psico1.png'
  import psico2 from '../assets/psico5.png'
  import psico4 from '../assets/psico6.png'

  
  

function MostValuePsyco(){
return(
    <>
    <Container maxW="container.xl" mt={20}  >
          <Box>
          <Heading as="h2" size="lg" marginBottom="40px">
              Los psicólogos mejor valorados de la semana
          </Heading>
          </Box>
          
          
          <Grid mt={1} templateColumns={{

            sm: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(3,1fr)',
            base: 'repeat(1,1fr)',

          }} gap={3} align="center">
            <Box padding={15}>
              <Image
                w="70%"
                borderRadius="lg"
                src={psico1}
                alt="image three"
              />
              
              
            </Box>
            <Box padding={15}>
              <Image
                w="70%"
                borderRadius="lg"
                src={psico2}
                alt="image three"
              />
           
            </Box>
            <Box padding={15}>
              <Image
                w="70%"
                borderRadius="lg"
                src={psico4}
                alt="image three"
              />
             
            </Box>
          </Grid>
        </Container>
        </>
        );
        }
        export default MostValuePsyco;