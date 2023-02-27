// Import d'outil de la bibliothèque REACT
import { useState} from 'react'

// Import d'images
import Vector from '../../assets/Vector.svg'
import OpenVector from '../../assets/OpenVector.png'

// Import de fichier de style
import CollapseCSS from '../../style/Collapse.module.css'

function Collapse({nom, descrip}){

    const [display, setDisplay] = useState(false)

    return(

                <div className={`${CollapseCSS.lesSousBlocs} ${CollapseCSS.leSousBlocDesc}`}>

                      <div className= {CollapseCSS.boutonPlusInfo} onClick={()=>{
                        if(display){setDisplay(false)}
                        else{setDisplay(true)}
                      }}> 
                      
                            <div className={CollapseCSS.descDiv}> {nom} </div>

                        
                            {display? (<img src = {OpenVector} alt="vector icon open" className={CollapseCSS.imaVector}/>):
              
                            (<img src = {Vector} alt="vector icon closed" className={CollapseCSS.imaVector}/>) 
                            } 
                       
                      </div>

                      {display ?
                        (<div className={CollapseCSS.textDisplayed}> 
                          <div className={CollapseCSS.lineText}>
                            {descrip} 
                          </div>
                        </div>)
                        :(null)
                      }

                </div>     
    )
}

export default Collapse