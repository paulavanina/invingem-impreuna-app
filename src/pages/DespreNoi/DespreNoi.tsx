import { FeaturesImages } from "../../components/Features/FeaturesImages"
import { FooterLinks } from "../../components/Footer/FooterLinks"
import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu"
import { HeroContentLeft } from "../../components/HeroContentLeft/HeroContent"
import { HeroBullets } from "../../components/HeroHeader/HeroHeader"
import { useState,useEffect } from "react"

const DespreNoi = () => {

//incercare conectare backend cu frontend
const [message,setMessage]=useState('');

useEffect(()=>{
  fetch('http://localhost:5000/api/message')
  .then(response=>response.json())
  .then(data=>setMessage(data.message));
},[]);

  return (
<>
    <HeaderMegaMenu />
    <HeroContentLeft/>
    <FeaturesImages />
    <HeroBullets/>
    <p>{message}</p>
    <FooterLinks/>
   </>
  )
}

export default DespreNoi
