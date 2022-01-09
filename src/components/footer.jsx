import {
    Badge,
    Input,
    Stack,
    FormControl,
    Box,
    Image,
    Button,
    Container,
    Heading,
    Grid,
    Link,
    FormLabel,
    Textarea,
    FormHelperText,
    Text
  } from '@chakra-ui/react';

 
  
  function Footer() {
    return (
    <Box pb={100} bg="gray.200">
        <Container maxW="container.xl" mt="20" >
          <Grid templateColumns={{
            sm: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(2,1fr)',
            xl: 'repeat(2,1fr)',
            base: 'repeat(1,1fr)',
          }} gap={30} >
            <Box mt={20} ml={{
              sm: '15',
            md: '15',
            lg: '30',
            xl: '30',
            base: '15',
            }}>
              <Heading as="h3" size="lg" mb="7">
                Contácte con nosotros
              </Heading>
              <Box >
                <Stack space={2}>
                  <FormControl id="nombre">
                  <FormLabel htmlFor='email'>Nombre</FormLabel>
                  <Input id='email' type='text' borderColor="white" />
                    
                  </FormControl>

                
                  <FormControl id="email">
                    <FormLabel htmlFor='email'>Correo Electrónico</FormLabel>
                  <Input id='email' type='email' borderColor="white"/>
                    
                  </FormControl>
                  <FormControl id="consulta">
                    <FormLabel htmlFor='consulta'>Consúltenos lo que quiera</FormLabel>
                  <Textarea placeholder="Escriba aquí lo que le preocupa" borderColor="white"/>
                    
                  </FormControl>
               </Stack>
              </Box>
              <Button
                _hover={{ opacity: '0.8' }}
                mt="5"
                pt="6"
                pb="6"
                w="100%"
                color="white"
                bg="red.600"
                fontSize="lg"
              >
                <Box fontWeight="black">Enviar</Box>
              </Button>
            </Box>
            <Box mt={20} ml={{
              sm: '45',
            md: '45',
            lg: '90',
            xl: '90',
            base: '45',
            }}>
              <Heading as="h3" size="lg" mb="7">
                Dónde Encontrarnos
              </Heading>
                <Text> <strong>Teléfono:</strong> +34 977 89 89 89</Text>
                <Text> <strong>Correo Electrónico:</strong> direccion@cuidate.com</Text>
                <Text> <strong>Dirección:</strong> Calle de Gracia Nº 3, Barcelona, España </Text>
                <Text> <strong>Instagram:</strong> @cuidate.psicología</Text>
                <Heading as="h3" size="lg" mb="7" mt="8">
                Información
              </Heading>
                <Link d="block"> Preguntas Frecuentes</Link>
                <Link d="block"> Privacidad</Link>
                <Link d="block"> Información</Link>
                <Link d="block"> Seguridad</Link>
            </Box>
          </Grid>
        </Container>
      
    </Box>  
                     
              
    );
    }
    export default Footer;