// Import des outils des bibliothèques React et autres dépendances de React
import { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Import de composants
import Collapse from '../../components/Collapse'
import Loader from '../../components/Loader'
import Header from '../../components/Header'


// Import d'images
import StarImg from '../../assets/star.svg'
import GreyStarImg from '../../assets/GreyStar.svg'
import Arrowfd from '../../assets/arrowfd.svg'
import Arrowbck from '../../assets/arrowbck.svg'

// Import de fichier de style
import CardCSS from '../../style/Card.module.css'


function Card(){

    // pour récupérer l'id passé en paramètre dans l'URL
    const appartId  = useParams()
    
    // mes useState()
    const [appartData, setAppartData] = useState([])
    const [pictures, setPictures] = useState([])
    const [equipments, setEquipments] = useState([])
    const [host, setHost] = useState([])
    const [tagos, setTagos] = useState([])
    const [rating, setRating] = useState([])

    const [isDataLoading, setDataLoading] = useState(false)
    const [pos, setPos] = useState(0);

    // mon useNavigate()
    const navigate = useNavigate();  
    
    // le fichier json en mode url pour pouvoir être exploité via une fetch
    const url = '../liste.json'

    useEffect(() => {  
         
      async function fetchSurvey(){
        
        setDataLoading(true)
        
        try{
          const response = await fetch(url)
          const allAppart  = await response.json()

          const singleAppart = allAppart.find((apt)=> apt.id === appartId.id)
          if(!singleAppart) navigate("/error")
          
          setAppartData(singleAppart)
          setPictures(singleAppart.pictures)
          setEquipments(singleAppart.equipments)
          setHost(singleAppart.host)
          setTagos(singleAppart.tags)
          setRating(parseInt(singleAppart.rating))
        }
        catch(err){
          console.log(err)
        }
        finally{
          setDataLoading(false)
        }

      }

      // on lance la fonction asynchrone fetchSurvey()
      fetchSurvey()

       
    }, [appartId.id, navigate])
   
    const range = [1, 2, 3, 4, 5]

    return(

      <div className={CardCSS.cardCadre}>

        <Header accueil={false} aprop={false}/>
        
        <div>

            {isDataLoading ?(<Loader />):
            
            ( <div key={appartData.id} className={CardCSS.leCadre}>

                  <div className={CardCSS.leCadrePhoto}> 

                    <img src={Arrowbck} alt="previous flat" className={CardCSS.arrowleftStyle} 

                        onClick = {()=>{
                          (pos === 0)?(setPos(pictures.length - 1)):
                          setPos(pos-1)
                        }}
                    />

                    <p className={CardCSS.chiffragePhoto}> {pos + 1}/{pictures.length} </p>
                        
                    <img src={pictures[pos]} alt="montre l'appart" className={CardCSS.photoStyle} />
                      
                    <img src={Arrowfd} alt="next flat" className={CardCSS.arrowrightStyle} 
                    
                        onClick = {()=>{

                          (pos === pictures.length - 1)?(setPos(0)):
                          setPos(pos+1)
                        }}
                    
                    /> 

                  </div>
                  
                  <div className={CardCSS.blocIntermediaire}> 
                       
                    <div className={CardCSS.titleLocTago}>  

                      <h1 className={CardCSS.titleStyle}> {appartData.title} </h1> 

                      <div className={CardCSS.locationStyle}> {appartData.location} </div>

                      <div className={CardCSS.lesTags}>
                        {tagos.map((tago)=>(<div key={tago} className={CardCSS.leTag}> {tago} </div>))}
                      </div>

                    </div>

                    <div className={CardCSS.propLeRating}>    

                      <div className={CardCSS.propStyle}> 
                        
                        <div className={CardCSS.propName}> {host.name} </div>
                        <img src={host.picture} alt="le propriétaire" className={CardCSS.propPix} />
                      
                      </div>

                      <div className={CardCSS.leRating}>
                        {range.map((count, index)=>(
                          rating >= count?(
                            <img src={StarImg} alt="star de rating" 
                                 className={CardCSS.starImg} 
                                 key={`${count}-${index}`}        
                            />
                          ):(null)
                        ))}

                        {range.map((count, index)=>(
                          count > rating && count < 6 ?(
                            <img src={GreyStarImg} alt="star de rating" 
                                 className={CardCSS.starImg} 
                                 key={`${count}-${index}`}      
                            />
                          ):(null)
                        ))}

                      </div>  

                    </div>    
                 
                  </div>

                  <div className={CardCSS.lesDeuxBlocs}>
                    
                      <Collapse key={`${appartData.index} description`} nom = "Description" 
                                descrip = {appartData.description}/>
                      
                      <Collapse key={`${appartData.index} Equipements`} nom = "Équipements" 
                                descrip = {equipments.map((eqt)=>(

                                  <p> {eqt} </p>
                    
                                ))}/>     
                  </div>
                  
              </div> 

            )
            }
                       
        </div>
        
      </div>

    )

}


export default Card