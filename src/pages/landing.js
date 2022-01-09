import React from 'react'
import{Stack,Image,Heading,Select, Button,Flex,Text, Spacer,Link,Box,Container, FormControl, FormLabel,FormHelperText,Input} from '@chakra-ui/react'
import logo from '../assets/logo.png'
import Banner from '../components/Banner'
import MainLanding from '../components/MainLanding'
import HowItWorks from '../components/HowItWorks'
import WhoAreWe from '../components/WhoAreWe'
import Footer from '../components/footer'
export default function Landing(){

    return(
    <>
    <Banner/>
    <MainLanding/>
    <HowItWorks/>
    <WhoAreWe/>
    <Footer/>
    </>
     
  
    )
}
