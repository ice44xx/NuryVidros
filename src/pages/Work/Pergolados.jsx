import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Pergolados = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  const handleToggleLightbox = (slide) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slide
    });
  };

  return (
    <>
    <div className="container-pics">
      <div className="container-heading">
        <h1>Cobertura em <span>Pergolado</span></h1>
        <p>Os pergolados são estruturas projetadas para <span>proteção</span> contra a ação de <span>raios solares</span> e <span>chuvas</span></p>
      </div>
      <div className="container-content-pics">

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
          <div className="b-g"></div>
          <img src = '../../../public/img/trab/pergolado/1.jpg' alt="Cobertura em Pergolado" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
          <img src = '../../../public/img/trab/pergolado/2.jpg' alt="Cobertura em Pergolado" className='img-gallery' />
        </div>

        <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
          <img src = '../../../public/img/trab/pergolado/3.jpg' alt="Cobertura em Pergolado" className='img-gallery' />
        </div>
        
        <div className="item w-1 h-1" onClick={() => handleToggleLightbox(4)}>
          <img src = '../../../public/img/trab/pergolado/4.jpg' alt="Cobertura em Pergolado" className='img-gallery' />
        </div>

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
          <img src = '../../../public/img/trab/pergolado/5.jpg' alt="Cobertura em Pergolado" className='img-gallery' />
        </div>

        <div className="item w-1-h-2" onClick={() => handleToggleLightbox(6)}>
          <img src = '../../../public/img/trab/pergolado/6.jpg' alt="Cobertura em Pergolado" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
          <img src = '../../../public/img/trab/pergolado/7.jpg' alt="Cobertura em Pergolado" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(8)}>
          <img src = '../../../public/img/trab/pergolado/8.jpg' alt="Cobertura em Pergolado" className='img-gallery' />
        </div>
        <FSLightbox
          toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/pergolado/1.jpg",
              "../../../public/img/trab/pergolado/2.jpg",
              "../../../public/img/trab/pergolado/3.jpg",
              "../../../public/img/trab/pergolado/4.jpg",
              "../../../public/img/trab/pergolado/5.jpg",
              "../../../public/img/trab/pergolado/6.jpg",
              "../../../public/img/trab/pergolado/7.jpg",
              "../../../public/img/trab/pergolado/8.jpg",
            ]}
            slide={lightboxController.slide}
          onClose={() => handleToggleLightbox(1)}
        />
      </div>
    </div>
  </>
  )
}

export default Pergolados