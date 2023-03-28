import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Cercamentos = () => {
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
        <h1>Cercamento <span>de Piscinas</span></h1>
        <p>Projetado para proporcionar <span>segurança</span>, conforto e <span>praticidade</span></p>
      </div>
      <div className="container-content-pics">

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
          <div className="b-g"></div>
          <img src = '../../../public/img/trab/piscina/1.jpg' alt="Cercamento de Piscina" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
          <img src = '../../../public/img/trab/piscina/2.jpg' alt="Cercamento de Piscina" className='img-gallery' />
        </div>

        <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
          <img src = '../../../public/img/trab/piscina/3.jpg' alt="Cercamento de Piscina" className='img-gallery' />
        </div>
        
        <div className="item w-1 h-2" onClick={() => handleToggleLightbox(4)}>
          <img src = '../../../public/img/trab/piscina/4.jpg' alt="Cercamento de Piscina" className='img-gallery' />
        </div>

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
          <img src = '../../../public/img/trab/piscina/5.jpg' alt="Cercamento de Piscina" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(6)}>
          <img src = '../../../public/img/trab/piscina/6.jpg' alt="Cercamento de Piscina" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
          <img src = '../../../public/img/trab/piscina/7.jpg' alt="Cercamento de Piscina" className='img-gallery' />
        </div>
        <FSLightbox
          toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/piscina/1.jpg",
              "../../../public/img/trab/piscina/2.jpg",
              "../../../public/img/trab/piscina/3.jpg",
              "../../../public/img/trab/piscina/4.jpg",
              "../../../public/img/trab/piscina/5.jpg",
              "../../../public/img/trab/piscina/6.jpg",
              "../../../public/img/trab/piscina/7.jpg",
            ]}
            slide={lightboxController.slide}
          onClose={() => handleToggleLightbox(1)}
        />
      </div>
    </div>
  </>
  )
}

export default Cercamentos