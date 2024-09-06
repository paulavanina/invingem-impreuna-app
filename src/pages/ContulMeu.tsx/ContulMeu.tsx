
import { HeaderMegaMenu } from '../../components/Header/HeadeMegaMenu'
import { FooterLinks } from '../../components/Footer/FooterLinks'
import DetaliiCont from '../../components/DetaliiCont/DetaliiCont'
import { BlogCard } from '../../components/BlogCard/BlogCard'

const ContulMeu = () => {
  return (
    <div>
      <HeaderMegaMenu/>
      <DetaliiCont/>
   <BlogCard/>
      <FooterLinks/>
    </div>
  )
}

export default ContulMeu
