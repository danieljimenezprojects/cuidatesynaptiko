
import React,{useState} from 'react'
import{Stack,Image,Heading, Button,Flex, Spacer,Link,Box,Container, FormControl, FormLabel,FormHelperText,Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import logo from '../assets/logo.png'

export default function Register(){
    const [user,setUser] = useState('');
    const [emailAddress,setEmailAddress] = useState('');
    const[password,setPassword] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');
  
    const handleSignIn = (event) => {
        event.preventDefault();

        console.log('email',emailAddress);
        console.log('password',password);
    }

    return(
    
    
    
    
    <Box marginTop="50px" paddingBottom="20px" >
    <Container maxWidth={800} margin="auto" border="1px" borderColor="red" borderRadius="3xl" paddingTop="80px" >
    <form method="POST" onSubmit={handleSignIn} >
        
        <Stack maxWidth={600} margin="auto" spacing='24px'  >
        <Flex direction="row" gap="5" alignItems="center" marginBottom="10px">
        <Image boxSize='50px' src={logo}/>
        <Heading size='lg' fontSize='50px'>
        Crea una cuenta nueva
        </Heading>
        </Flex>
            <FormControl>
                <FormLabel htmlFor="email" fontSize="xl"> Usuario </FormLabel>
                <Input isRequired type="text" id="text" aria-describedby="text-helper-text" value={user} onChange={({target})=>{
                setUser(target.value)
            }
            }/>
          
            <FormHelperText id="text-helper-text">
            Introduzca un usuario de al menos cinco caractéres/letras
            </FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="email" fontSize="xl"> Email </FormLabel>
                <Input isRequired type="text" id="email" aria-describedby="email-helper-text" value={emailAddress} onChange={({target})=>{
                setEmailAddress(target.value)
            }
            }/>
          
            <FormHelperText id="email-helper-text">
            Introduzca su correo electrónico
            </FormHelperText>
            </FormControl>
            <FormControl>
            <FormLabel htmlFor="password" fontSize="xl"> Contraseña</FormLabel>
            
            <Input isRequired type='password' id="password"  value={password} onChange={({target})=>{
                setPassword(target.value)
            }
            }/>
              <FormHelperText id="email-helper-text">
            Introduzca una contraseña con 7 caractéres y con una combinación de letras y números.
            </FormHelperText>
        
           </FormControl>
           <FormControl>
            <FormLabel htmlFor="password" fontSize="xl"> Repetir Contraseña</FormLabel>
            
            <Input isRequired type='password' id="confirmPassword"  value={confirmPassword} onChange={({target})=>{
                setConfirmPassword(target.value)
            }
            }/>
            
           </FormControl>
            <FormControl >
            <Flex mt="50px" alignItems="center">
                <Heading size='sm' fontSize='18px' color="red"  ><Link> Ya tengo cuenta </Link> </Heading>
                <Spacer/>
                <Button colorScheme='red' type="submit" >
                    Enviar
                </Button>
            </Flex>
            </FormControl>
            
        </Stack>
        
    </form>
    <Flex paddingTop="90px" marginBottom="5px" justifyContent="right"  >
        <Link marginRight='10px'>Ayuda</Link>
        <Link marginRight='10px'>Privacidad</Link>
        <Link marginRight='10px'>Información</Link>
        
       
    </Flex>
    
    </Container>
    
    </Box>
    )
}