import React from 'react'

const About = () => {
  return (
    <>
        <div className="container-about" id = "about">
            <div className="container-heading">
                <h1>Sobre nós</h1>
                <p>Nossa empresa é totalmente <span>focada</span> na dedicação e <span>qualidade</span> que o cliente merece</p>
            </div>
            <div className="container-content-about">
                <h1>Nury <span>Vidros</span></h1>
                <p>A empresa é <span>especializada</span> em vidros temperados e comuns, espelhos e esquadrias em alumínio, com mais de <span>15 anos</span> de experiência. Atendemos todo litoral e região metropolitana!</p>
            </div>
        </div>
    </>
  )
}

export default About