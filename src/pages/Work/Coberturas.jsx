import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Coberturas = () => {
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
        <h1><span>Coberturas</span> em Vidro</h1>
        <p>Vidros da melhor <span>qualidade</span> e <span>versatilidade</span>.</p>
      </div>
      <div className="container-content-pics">

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
          <div className="b-g"></div>
          <img src = '../../../public/img/trab/cobertura/1.jpg' alt="Cobertura em Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
          <img src = '../../../public/img/trab/cobertura/2.jpg' alt="Cobertura em Vidro" className='img-gallery' />
        </div>

        <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
          <img src = '../../../public/img/trab/cobertura/3.jpg' alt="Cobertura em Vidro" className='img-gallery' />
        </div>
        
        <div className="item w-1 h-1" onClick={() => handleToggleLightbox(4)}> 
          <img src = '../../../public/img/trab/cobertura/4.jpg' alt="Cobertura em Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
          <img src = '../../../public/img/trab/cobertura/5.jpg' alt="Cobertura em Vidro" className='img-gallery' />
        </div>

        <div className="item w-1-h-2" onClick={() => handleToggleLightbox(6)}>
          <img src = '../../../public/img/trab/cobertura/6.jpg' alt="Cobertura em Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
          <img src = '../../../public/img/trab/cobertura/7.png' alt="Cobertura em Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(8)}>
          <img src = '../../../public/img/trab/cobertura/8.png' alt="Cobertura em Vidro" className='img-gallery' />
        </div>
        <FSLightbox
          toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/cobertura/1.jpg",
              "../../../public/img/trab/cobertura/2.jpg",
              "../../../public/img/trab/cobertura/3.jpg",
              "../../../public/img/trab/cobertura/4.jpg",
              "../../../public/img/trab/cobertura/5.jpg",
              "../../../public/img/trab/cobertura/6.jpg",
              "../../../public/img/trab/cobertura/7.png",
              "../../../public/img/trab/cobertura/8.png",
            ]}
            slide={lightboxController.slide}
          onClose={() => handleToggleLightbox(1)}
        />
      </div>
    </div>
  </>
  )
}

export default Coberturas