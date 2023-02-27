// Import du fichier de style
import AproposCSS from '../../style/Apropos.module.css'

// Import de composant 
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import Header from '../../components/Header'

// Import de ressources extérieures (liste de données sur les qualités et les valeurs de Kasa)
import { propList } from '../../data/propList'

function Apropos() {
  
    return (

      <div className={AproposCSS.cadreApropos}>

        <Header accueil={false} aprop ={true}/>

        <Banner 
            
            avec = {false}
        
        />

        <div className={AproposCSS.sectionCollapses}>

              {propList.map((propri)=>(

                  <div className={AproposCSS.lesBlocs} key={propri.id}>

                    <Collapse key={propri.id} 
                    
                        nom = {propri.nom}
                        descrip = {propri.definition}
                    
                    />
                    
                  </div>   

              ))}

        </div>

      </div>

    );

  }
  
  export default Apropos;