
import { HeaderMegaMenu } from '../../components/Header/HeadeMegaMenu'
import { FooterLinks } from '../../components/Footer/FooterLinks'

import { BlogCard } from '../../components/BlogCard/BlogCard'
import DetaliiCont from '../../components/DetaliiCont/DetaliiCont'
import { useState } from 'react'

const ContulMeu = () => {

  return (
    <div>
      <HeaderMegaMenu/>
      <DetaliiCont />
      <BlogCard />
      <FooterLinks/>
    </div>
  )
}

export default ContulMeu
