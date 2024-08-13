import { CommCard } from "../../components/CommCard/CommCard"
// import { CommentCard } from "../../components/CommentCard/CommentCard"
import ComunityContent from "../../components/ComunityContent/ComunityContent"
import { FooterLinks } from "../../components/Footer/FooterLinks"
import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu"

const Comunitate = () => {
  return (
    <div className="comunity">
      <HeaderMegaMenu/>
      <ComunityContent/>
      <CommCard/>
      {/* <CommentCard/> */}
      
      <FooterLinks/>
    </div>
  )
}

export default Comunitate
