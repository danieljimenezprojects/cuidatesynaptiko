
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
  import signin from '../assets/signin2.jpg'
  import help from '../assets/help.png'
  import psychologist from '../assets/psychologist.jpg'
  

function HowItWorks(){
return(
    <>
    <Container maxW="container.xl" mt={6} padding={15} ml={{
      sm: '5',
      md: '5',
      lg: '30',
      xl: '30',
      base: '5',
    }}>
          <Box align="center">
          <Heading as="h2" size="2xl" marginBottom="80px">
              ¿Cómo funciona?
          </Heading>
          </Box>
          
          
          <Grid mt={30} templateColumns={{

            sm: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(3,1fr)',
            base: 'repeat(1,1fr)',

          }} gap={4}>
            <Box padding={15}>
              <Image
                w="90%"
                borderRadius="lg"
                src={signin}
                alt="image three"
              />
              <Flex flexDirection="row" mt={5} alignItems="center" >
              <Box bg="red.300" borderRadius="3xl" w="20px" h="22px" mr={2}>
              <Text align="center" color="white" margin="auto">1</Text>
              </Box>
              <Heading as="h4" fontSize="20px" >
                  
                  Inicia Sesión
              </Heading>
              </Flex>
              <Box mt={8}>
                <Text fontSize="18px"> Lo primero que debe hacer es registrarse. !Se tarda <strong>menos de 10 segundos</strong>! Sus datos serán privados y no recibirá correos promocionales.</Text>
              </Box>
            </Box>
            <Box padding={15}>
              <Image
                w="90%"
                borderRadius="lg"
                src={help}
                alt="image three"
              />
            <Flex flexDirection="row" mt={5} alignItems="center" >
              <Box bg="red.300" borderRadius="3xl" w="20px" h="22px" mr={2}>
              <Text align="center" color="white" margin="auto">2</Text>
              </Box>
              <Heading as="h4" fontSize="19px" >
                  
                  Consulta profesionales de tu gusto
              </Heading>
              </Flex>
              <Box mt={8}>
                <Text fontSize="18px"> Podrá ver a los <strong> psicólogos y psicólogas</strong> más talentosos de España. Tendrás un <strong> buscador con inteligencia artificial </strong> para ofrecerte el mejor profesional. En caso de necesitar ayuda, tenemos <strong> asistentes </strong> listos para ti a los que puedes consultar.</Text>
              </Box>
            </Box>
            <Box padding={15}>
              <Image
                w="90%"
                borderRadius="lg"
                src={psychologist}
                alt="image three"
              />
             <Flex flexDirection="row" mt={5} alignItems="center" ml={9}>
              <Box bg="red.300" borderRadius="3xl" w="20px" h="22px" mr={2}>
              <Text align="center" color="white" margin="auto">3</Text>
              </Box>
              <Heading as="h4" fontSize="19px" >
                  
                  Terapia Online
              </Heading>
              </Flex>
              <Box mt={8} ml={9}>
                <Text fontSize="18px"> Elige tu psicólogo o psicóloga, el día, la hora y ¡todo estaría listo!. Puedes enviar un mensaje a nuestros psicólogos antes para cualquier duda.</Text>
              </Box>
            </Box>
          </Grid>
        </Container>
        </>
        );
        }
        export default HowItWorks;