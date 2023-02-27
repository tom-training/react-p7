import { Link } from 'react-router-dom';
import AppartCSS from '../../style/Appart.module.css'

function Appart({titre, id, cover}){

    return(

            <Link to ={"/card/" + id} className={AppartCSS.appartBulle}>
                <p className={AppartCSS.appartTexte}>{titre}</p>

                <img src={cover} alt="première vue sur l'appartement" className={AppartCSS.appartImage} />    
            </Link>        
            
    )
}

export default Appart