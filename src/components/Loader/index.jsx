import LoaderCSS from '../../style/Loader.module.css'

function Loader()
    {

        return(

            <div className={LoaderCSS.launcher}>
              
                <div className={LoaderCSS.launcherTitre}> 
                    
                    <div className={LoaderCSS.launcherTitre__text}> Vos données sont en cours de chargement </div>
                    
                </div> 

                <div className={LoaderCSS.progressBar}>  
                    
                    <div className={LoaderCSS.progressBar__grey}> </div>
                    <div className={LoaderCSS.progressBar__orange}> </div>  

                </div>

                <div className={LoaderCSS.launcherCountdown}> 

                    <span> Veuillez patienter </span>                  
                
                </div>

            </div>
        )
    }

export default Loader