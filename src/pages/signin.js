
import React,{useState} from 'react'
import{Stack,Image,Heading, Button,Flex, Spacer,Link,Box,Container, FormControl, FormLabel,FormHelperText,Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import logo from '../assets/logo.png'
import imageBg from '../assets/bg.svg'
export default function PrettyForm(){

    const [emailAddress,setEmailAddress] = useState('');
    const[password,setPassword] = useState('');
    const[showPassword,setShowPassword] = useState(false);
  
    const handleSignIn = (event) => {
        event.preventDefault();

        console.log('email',emailAddress);
        console.log('password',password);
    }

    return(
    
    
    
    
    <Box marginTop="50px" >
    <Container maxWidth={800} margin="auto" border="1px" borderColor="red" borderRadius="3xl" paddingTop="120px" marginBottom="20px" >
    <form method="POST" onSubmit={handleSignIn} >
        
        <Stack maxWidth={600} margin="auto" spacing='24px'  >
        <Flex direction="row" gap="5" alignItems="center" marginBottom="10px">
        <Image boxSize='50px' src={logo}/>
        <Heading size='lg' fontSize='50px'>
        Iniciar sesión
        </Heading>
        </Flex>
            <FormControl>
                <FormLabel htmlFor="email" fontSize="xl"> Usuario o correo electrónico </FormLabel>
                <Input isRequired type="text" id="email" aria-describedby="email-helper-text" value={emailAddress} onChange={({target})=>{
                setEmailAddress(target.value)
            }
            }/>
          
            
            </FormControl>
            <FormControl>
            <FormLabel htmlFor="password" fontSize="xl"> Contraseña</FormLabel>
            <InputGroup>
            <Input isRequired type={showPassword ? 'text' : 'password'} id="password" aria-describedby="password-helper-text" value={password} onChange={({target})=>{
                setPassword(target.value)
            }
            }/>
            <InputRightElement width="4.5rem" marginRight="15px">
            <Button
                height="1.75rem"
                size="md"
                borderRadius="xl"
                onClick={()=>setShowPassword(!showPassword)}
            >
                {showPassword ? 'Ocultar ':'Mostrar '}
            </Button>
            </InputRightElement>
            </InputGroup>
            

            <FormHelperText id="password-helper-text" color='red' align="right" mr="15px">
            <Link>¿Olvidaste la contraseña?</Link>
            </FormHelperText>
           </FormControl>
            <FormControl >
            <Flex mt="50px" alignItems="center">
                <Heading size='sm' fontSize='18px' color="red"  ><Link> Crea una cuenta nueva</Link> </Heading>
                <Spacer/>
                <Button colorScheme='red' type="submit" >
                    Enviar
                </Button>
            </Flex>
            </FormControl>
            
        </Stack>
        
    </form>
    <Flex paddingTop="110px" marginBottom="5px" justifyContent="right"  >
        <Link marginRight='10px'>Ayuda</Link>
        <Link marginRight='10px'>Privacidad</Link>
        <Link marginRight='10px'>Información</Link>
        
       
    </Flex>
    
    </Container>
    
    </Box>
    )
}