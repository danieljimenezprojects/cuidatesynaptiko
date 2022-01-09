import React from 'react'
import BannerPsycho from '../components/BannerPsycho'
import Calendar from '../components/Calendar'
import Session from '../components/Session'
import Footer from '../components/footer'

export default function PsychoInterface(){

    return(
    <>
        <BannerPsycho/>
        <Session/>
        <Calendar/>
        <Footer/>
     
  </>
    )
}