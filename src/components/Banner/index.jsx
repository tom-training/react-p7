import BannerImgSlogan from '../../assets/BannerSloganMob.svg'
import BannerImg from '../../assets/Banner.png'
import BannerCSS from '../../style/Banner.module.css'


import PropTypes from 'prop-types'

function Banner(props){

    const avec = props.avec

    return(

            <div className = {BannerCSS.cadreBanner}>
                    
                {avec && 
                
                <div className={BannerCSS.ssCadreBanner}>
                    <img src={BannerImgSlogan} alt="Chez vous partout et ailleurs!" className={BannerCSS.imgBanner} />
                    
                    <p className={BannerCSS.imgTexte}>Chez vous, partout et ailleurs</p>
                </div>    
                }
                            
                {avec === false && <img src={BannerImg} alt="Chez vous partout et ailleurs!" className={BannerCSS.imgBanner} />} 

            </div>
    )
}

Banner.propTypes = {

    avec: PropTypes.bool
}

export default Banner