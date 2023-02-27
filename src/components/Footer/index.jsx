import LogoFooter from '../../assets/LogoFooter.png'
import Copyright from '../../assets/copyright.png'
import FooterCSS from '../../style/Footer.module.css'

function Footer() {
 
  return (

    <footer>

      <img alt="logo de kasa" src={LogoFooter} className={FooterCSS.img} />

      <img alt="all right reserved" src={Copyright} className={FooterCSS.imgFooter} />

    </footer>

  )
}

export default Footer