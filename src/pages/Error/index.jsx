import Header from '../../components/Header'
import ErrorCSS from '../../style/Error.module.css'
import { Link } from 'react-router-dom'

function Error() {

    return (
    
        <div className={ErrorCSS.cadreError}>

            <Header accueil={false} aprop={false}/>

            <div className={ErrorCSS.leCadre}>

                <h1 className={ErrorCSS.title}>404</h1>

                <p className={ErrorCSS.texteError}> Oups! La page que vous demandez n'existe pas. </p>

                <Link to="/react-p7/" className={ErrorCSS.lien}>Retourner sur la page d'accueil</Link>

            </div>
            
        </div>
    )
}
 
export default Error