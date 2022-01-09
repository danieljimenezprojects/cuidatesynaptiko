
import React,{useState} from 'react'
import{Stack,Image,Heading,Select, Button,Flex,Text, Spacer,Link,Box,Container, FormControl, FormLabel,FormHelperText,Input} from '@chakra-ui/react'
import logo from '../assets/logo.png'

export default function ClientSession(){

    const [day,setDay] = useState('');
    const[hour,setHour] = useState('');
    const[whySession,setWhySession] = useState('');
  
    const handleSignIn = (event) => {
        event.preventDefault();
        console.log('day',day);
        console.log('hour',hour);
        
    }

    return(
    
    
    
    
    <Box marginTop="30px" paddingBottom="20px">
    <Container maxWidth={800} margin="auto" border="1px" borderColor="red" borderRadius="3xl" paddingTop="70px" paddingBottom="10px" >
    <form method="POST" onSubmit={handleSignIn} >
        
        <Stack maxWidth={600} margin="auto" spacing='24px'  >
        <Flex direction="row" gap="5" alignItems="center" marginBottom="10px">
        <Image boxSize='50px' src={logo}/>
        <Heading size='lg' fontSize='50px'>
        Pida su consulta
        </Heading>
        </Flex>
            <Text fontSize="2xl" fontWeight="semibold">Jose Manuel García Pérez - Psicólogo Clínico</Text>
            <FormControl>
            <FormLabel htmlFor='date' fontSize="xl"> Fechas disponibles </FormLabel>
            <Select isRequired id='date' placeholder='Selecciona fecha' value={day} onChange={({target})=>{
                setDay(target.value)
            }
            }>
            <option>12 de Enero</option>
            <option>13 de Enero</option>
            <option>14 de Enero</option>
            <option>15 de Enero</option>
            <option>16 de Enero</option>
            <option>17 de Enero</option>
            <option>18 de Enero</option>
            <option>19 de Enero</option>
            <option>20 de Enero</option>
            <option>21 de Enero</option>
            <option>22 de Enero</option>
            <option>23 de Enero</option>
            </Select>
            </FormControl>
            <FormControl>
            <FormLabel htmlFor="hour" fontSize="xl"> Hora de la cita:</FormLabel>
            <Select isRequired id="hour" placeholder="Hora" value={hour} onChange={({target})=>{
                setHour(target.value)
            }
            }>
            <option>9:00-10:00</option>
            <option>10:00-11:00</option>
            <option>11:00-12:00</option>
            <option>12:00-13:00</option>
            <option>13:00-14:00</option>
            
            </Select>
            </FormControl>
            <FormControl>
            <FormLabel htmlFor="whySession" fontSize="xl" >Razón de la consulta</FormLabel>
            <Input type="text" id="text" aria-describedby="text-helper-text" value={whySession} onChange={({target})=>{
                setWhySession(target.value)
            }
            }/>
             <FormHelperText id="text-helper-text">
            Introduzca el motivo por el que pida esta consulta. Es opcional ponerlo.
            </FormHelperText>
            </FormControl>
            <Text>'Una vez haya enviado sus datos, se lo notificaremos a su profesional
            para que confirme la cita. En caso de que no sea posible esa cita, le ofreceremos 
            una alternativa. Recibirá usted una notificación con la confirmación en su correo y en la página
            web en menos de 24 horas.</Text>
            <FormControl >
            <Flex mt="20px" mb="15px" alignItems="center">
                <Heading size='sm' fontSize='18px' color="red"  ><Link> Volver atrás </Link> </Heading>
                <Spacer/>
                <Button colorScheme='red' type="submit" >
                    Pedir cita
                </Button>
            </Flex>
            </FormControl>
            
        </Stack>
        
    </form>
   
    
    </Container>
    
    </Box>
    )
}