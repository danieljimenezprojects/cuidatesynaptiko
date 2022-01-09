
import React,{useState} from 'react'
import{Stack,HStack,VStack,Image,Heading,Select, Button,Flex,Text, Spacer,Link,Box, CheckboxGroup, Checkbox,Container, FormControl, FormLabel,FormHelperText,Input} from '@chakra-ui/react'
import logo from '../assets/logo.png'

export default function Calendar(){

    const [day,setDay] = useState('');
    const[hour,setHour] = useState('');
    
  
    const handleSignIn = (event) => {
        event.preventDefault();
        console.log('day',day);
        console.log('hour',hour);
        
    }

    return(
    
    
    
    
    <Box marginTop="30px" paddingBottom="20px" >
    <Container maxWidth={800} margin="auto" border="1px" borderColor="red" borderRadius="3xl" paddingTop="70px" paddingBottom="10px" >
    <form method="POST" onSubmit={handleSignIn} >
        
        <Stack maxWidth={600} margin="auto" spacing='24px'  >
        <Flex direction="row" gap="5" alignItems="center">
        <Image boxSize='50px' src={logo}/>
        <Heading size='lg' fontSize='50px'>
        Establezca su horario
        </Heading>
        </Flex>
            <Text fontSize={{
                sm: 'sm',
      md: 'md',
      lg: 'xl',
      xl: 'xl',
      base: 'md',
            }} fontWeight="regular"  color="gray">Haga click en los días y horas en las que quiere que reserven sus clientes. </Text>
            <FormControl>
            <FormLabel htmlFor='date' fontSize="xl"> Días de la semana: </FormLabel>
            <CheckboxGroup > 
            <VStack spacing="20px" >
                <HStack spacing='54px'>
                    <Checkbox colorScheme='red' value=''>Lunes</Checkbox>
                    <Checkbox colorScheme='red' value=''>Martes</Checkbox>
                    <Checkbox colorScheme='red' value=''>Miércoles</Checkbox>
                    <Checkbox colorScheme='red' value=''>Jueves</Checkbox>
                </HStack>
                <HStack spacing="54px">
                    <Checkbox colorScheme='red' value=''>Viernes</Checkbox>
                    <Checkbox colorScheme='red' value=''>Sábado</Checkbox>
                    <Checkbox colorScheme='red' value=''>Domingo</Checkbox>
                </HStack>
            </VStack>
            </CheckboxGroup>
            </FormControl>
            <FormControl paddingBottom="30px">
            <FormLabel htmlFor='hour' fontSize="xl"> Horas: </FormLabel>
            <Text marginBottom="30px" color="gray" fontStyle="italic">Cada valor señala el comienzo de la consulta.</Text>
            <CheckboxGroup id="hour" marginTop="10px" marginBottom="40px"> 
            <VStack spacing="20px">
            <HStack spacing='54px' direction="row">
                    <Checkbox colorScheme='red' value=''>09:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>10:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>11:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>12:00</Checkbox>
            </HStack>
            <HStack spacing='54px'direction='row'>
                    
                    <Checkbox colorScheme='red' value=''>13:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>14:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>15:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>16:00</Checkbox>
            </HStack>
            <HStack spacing='54px'direction='row'>
                    <Checkbox colorScheme='red' value=''>17:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>18:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>19:00</Checkbox>
                    <Checkbox colorScheme='red' value=''>20:00</Checkbox>
                    
                
            </HStack>
            </VStack>
            </CheckboxGroup>
            
            </FormControl>

            <FormControl >
            <Flex mt="20px" mb="15px" alignItems="center">
                <Heading size='sm' fontSize='18px' color="red"  ><Link> Volver atrás </Link> </Heading>
                <Spacer/>
                <Button colorScheme='red' type="submit" >
                    Confirmar
                </Button>
            </Flex>
            </FormControl>
            
        </Stack>
        
    </form>
   
    
    </Container>
    
    </Box>
    )
}