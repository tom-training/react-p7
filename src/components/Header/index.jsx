// Import de style
import HeaderCSS from '../../style/Header.module.css'

// Import d'outils issue des dépendances de l'environnement REACT
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Import de ressources extérieures de déco.
import Logo from '../../assets/LOGO.svg'

const StyledLink = styled(Link)`
  text-decoration: ${(props)=>props.surlignage};
`

function Header(props) {
  
  const accueil = props.accueil
  const aprop = props.aprop
  
  return (
    <nav>

      <Link to="/">
        <img alt="logo de kasa" src={Logo} className={HeaderCSS.logo} />
      </Link>

      <div className={HeaderCSS.lesLiens}>

        {accueil ?(
          
          <StyledLink to="/" className={HeaderCSS.lien} surlignage={"underline"}>Accueil</StyledLink>
        
        ):(
          
          <StyledLink to="/" className={HeaderCSS.lien} surlignage={"none"}>Accueil</StyledLink>
          
        )        
        } 

        {aprop ?(
          
          <StyledLink to="/a_propos" className={HeaderCSS.lien} surlignage={"underline"}>A propos</StyledLink>
          
        ):(
          
          <StyledLink to="/a_propos" className={HeaderCSS.lien} surlignage={"none"}>A propos</StyledLink>
          
        )        
        } 

      </div>  
        
    </nav>
  )
}

export default Header