import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Retrateis = () => {
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
        <h1>Portas <span>Retráteis</span></h1>
        <p>O sistema retrátil, é uma nova tendência para projetos <span>modernos</span> e <span>inovadores</span></p>
      </div>
      <div className="container-content-pics">

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
          <div className="b-g"></div>
          <img src = '../../../public/img/trab/retra/1.jpg' alt="Porta Retrátil de Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
          <img src = '../../../public/img/trab/retra/2.jpg' alt="Porta Retrátil de Vidro" className='img-gallery' />
        </div>

        <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
          <img src = '../../../public/img/trab/retra/3.jpg' alt="Porta Retrátil de Vidro" className='img-gallery' />
        </div>
        
        <div className="item w-1 h-1" onClick={() => handleToggleLightbox(4)}>
          <img src = '../../../public/img/trab/retra/4.gif' alt="Porta Retrátil de Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
          <img src = '../../../public/img/trab/retra/5.gif' alt="Porta Retrátil de Vidro" className='img-gallery' />
        </div>

        <div className="item w-1-h-2" onClick={() => handleToggleLightbox(6)}>
          <img src = '../../../public/img/trab/retra/6.gif' alt="Porta Retrátil de Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
          <img src = '../../../public/img/trab/retra/7.jpg' alt="Porta Retrátil de Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(8)}>
          <img src = '../../../public/img/trab/retra/8.jpg' alt="Porta Retrátil de Vidro" className='img-gallery' />
        </div>
        <FSLightbox
          toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/retra/1.jpg",
              "../../../public/img/trab/retra/2.jpg",
              "../../../public/img/trab/retra/3.jpg",
              "../../../public/img/trab/retra/4.gif",
              "../../../public/img/trab/retra/5.gif",
              "../../../public/img/trab/retra/6.gif",
              "../../../public/img/trab/retra/7.jpg",
              "../../../public/img/trab/retra/8.jpg",
            ]}
            slide={lightboxController.slide}
          onClose={() => handleToggleLightbox(1)}
        />
      </div>
    </div>
  </>
  )
}

export default Retrateis