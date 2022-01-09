import React from 'react'
import BannerClient from '../components/BannerClient'
import Footer from '../components/footer'
import LastPsyco from '../components/lastPsyco'
import MainClientInterface from '../components/MainClientInterface'
import MostValuePsyco from '../components/mostValuePsyco'
import NextSession from '../components/NextSession'

export default function ClientInterface(){

    return(
    <>
     <BannerClient/>
     <MainClientInterface/>
     <MostValuePsyco/>
     <NextSession/>
     <LastPsyco/>
     <Footer/>
    </>
     
  
    )
}