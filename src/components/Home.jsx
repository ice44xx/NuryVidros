import React from 'react'
import Video from './video'
const Home = () => {
  return (
    <>  
        <div className="home" id = 'home'>
            
            <div className="container-fixed">
                <a href="http://api.whatsapp.com/send?1=pt_BR&phone=555197945224" target="_blank"><img src = '/img/logo/whats.png' alt="Whatsapp" /></a>
                <div className="neon"></div>
            </div>
            <div className="container-home-video">
                <Video/>
            </div>
            <div className="container-logo">
                <img src = '/img/logo/logo-home.png' alt="Nury Vidros logo" className='logo' id = 'logo'/>
                <h1>Experiência e <span>Qualidade</span></h1>
                <button><a href="#contact">Faça seu orçamento</a></button>
            </div>
        </div>
    </>
  )
}


export default Home