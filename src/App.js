import * as React from 'react'
import { ChakraProvider,Box,Image } from '@chakra-ui/react'
import Signin from './pages/signin';
import imageBg from './assets/bg.svg'
import Register from './pages/register'
import ClientSession from './pages/clientsession'
import Calendar from './pages/calendar'
import Landing from './pages/landing';
import ClientInterface from './pages/clientInterface';
import PsychoInterface from './pages/psychoInterface';

function App({ Component }) {

  return (
    <ChakraProvider>

     <Signin/>
    
    </ChakraProvider>
  )
}
export default App;