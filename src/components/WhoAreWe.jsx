import {
    Box,
    Image,
    Button,
    Container,
    Heading,
    Grid,
    Link,
    Text
  } from '@chakra-ui/react';
  import mision from '../assets/imagen1.jpeg';
  import equipo from '../assets/equipo.jpeg';
  import garantias from '../assets/garantias.jpeg';
  
  function WhoAreWe() {
    return (
      <Box>
        <Container maxWidth="container.xl" my="20">
          <Heading align="center" as="h2" size="3xl" pb="2">
            ¿Quiénes somos?
          </Heading>
          <Box align="center" maxW="700px" mx="auto" pb="10">
            <Text p={10}>Somos <Text d="inline" color="red" fontWeight="bold">"Cuidate"</Text>. En Cuidate, tenemos el sueño de que todas y todos nos cuidemos más.
            Ponemos la <strong> salud mental </strong> en primer plano.Pensamos que, seas quien seas, tienes derecho a vivir a gusto con quien eres y con quien quieres ser.
            </Text>
          </Box>
          <Grid templateColumns={{
            sm: 'repeat(1,1fr)',
            md: 'repeat(3,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(3,1fr)',
            base: 'repeat(1,1fr)',
  
          }} gap={6}>
            <Box mx="auto" align="center">
              <Image w="100%"  src={mision} alt="imagen de empresario" />
              <Heading as="h5" fontSize="19px">
                <Link>
                  <Box color="red.300" pb="4" mt="3">
                    Nuestra misión
                  </Box>
                </Link>
              </Heading>
              <Text align="left" fontSize="18px">
                Acercar los cuidados y la salud mental a todo tipo de personas.
              </Text>
            </Box>
  
            <Box mx="auto" align="center">
              <Image w="100%"  src={equipo} alt="equipo" />
              <Heading as="h5" fontSize="19px">
                <Link>
                  {' '}
                  <Box color="red.300" pb="4" mt="3">
                    Nuestro Grupo
                  </Box>{' '}
                </Link>
              </Heading>
              <Text align="left" fontSize="18px">
                Somos una grupo multidisciplinar con psicólogos, psiquiátras, desarrolladores, diseñadores y asesores.
                Todos nuestros profesionales tienen una formación de alto nivel y han pasado una criba en el proceso de selección. 
                
              </Text>
            </Box>
            <Box mx="auto" align="center">
              <Image w="100%"  src={garantias} alt="brand" />
              <Heading as="h5" fontSize="19px">
                <Box color="red.300" pb="4" mt="3">
                  <Link>Garantías</Link>
                </Box>
              </Heading>
             <Text align="left" fontSize="18px">
                Si la primera consulta con su psicólogo o psicóloga no es satisfactoria, 
                prometemos encontrarle otro profesional más adaptado a sus necesidades y sin coste adicional.
                
              </Text>
            </Box>
          </Grid>
          
        </Container>
      </Box>
    );
  }
  
  export default WhoAreWe;
