// Importation du style
import HomeCSS from '../../style/Home.module.css'

// Importation des composants
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Appart from '../../components/Appart'
import Banner from '../../components/Banner'

// Utilisation d'outils issue de la "React library", le HOOK useState et le useEffect
import { useState, useEffect } from 'react'

function Home() {

  const [appartData, setAppartData] = useState([])

  const [isDataLoading, setDataLoading] = useState(false)  



  useEffect(() => {    

    
      setDataLoading(true)

      fetch("liste.json")
        .then((response) => response.json())
        .then((appartData) => {
                  setAppartData(appartData)
                  setDataLoading(false)
              })
        .catch((error)=> console.log(error))

    }, [])

    return (
      <div className={HomeCSS.homeCadre}>

        <Header accueil={true} aprop={false}/>

        <Banner 
            
            avec = {true}
        
        />

        <div className={HomeCSS.sHomeCadre}>
          
          {isDataLoading ? (
            <Loader/>
          ) : (
            <div className={HomeCSS.homeStyle}> 
              
              {
              
                appartData.map((logement) => (

                  <Appart
                    key = {logement.id}
                    id = {logement.id}
                    titre = {logement.title}
                    cover = {logement.cover}
                  />  
                ))
                
              }  
              
            </div>

          )}

        </div>

      </div>

    )
    
  }
  
  export default Home;