import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Portas = () => {
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
          <h1><span>Portas</span> de vidro</h1>
          <p>Portas de vidro de grande resistência, proporcionando <span>claridade</span> e <span>modernidade</span>.</p>
        </div>
        <div className="container-content-pics">

          <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
            <div className="b-g"></div>
            <img src = '../../../public/img/trab/portas/1.jpg' alt="Porta de Vidro" className='img-gallery' />
          </div>

          <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
            <img src = '../../../public/img/trab/portas/2.jpg' alt="Porta de Vidro" className='img-gallery' />
          </div>

          <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
            <img src = '../../../public/img/trab/portas/3.jpg' alt="Porta de Vidro" className='img-gallery' />
          </div>
          
          <div className="item w-1 h-1" onClick={() => handleToggleLightbox(4)}>
            <img src = '../../../public/img/trab/portas/4.webp' alt="Porta de Vidro" className='img-gallery' />
          </div>

          <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
            <img src = '../../../public/img/trab/portas/5.jpg' alt="Porta de Vidro" className='img-gallery' />
          </div>

          <div className="item w-1-h-2" onClick={() => handleToggleLightbox(6)}>
            <img src = '../../../public/img/trab/portas/6.jpg' alt="Porta de Vidro" className='img-gallery' />
          </div>

          <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
            <img src = '../../../public/img/trab/portas/7.jpg' alt="Porta de Vidro" className='img-gallery' />
          </div>

          <div className="item w-2 h-1" onClick={() => handleToggleLightbox(8)}>
            <img src = '../../../public/img/trab/portas/8.jpg' alt="Porta de Vidro" className='img-gallery' />
          </div>
          <FSLightbox
          toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/portas/1.jpg",
              "../../../public/img/trab/portas/2.jpg",
              "../../../public/img/trab/portas/3.jpg",
              "../../../public/img/trab/portas/4.webp",
              "../../../public/img/trab/portas/5.jpg",
              "../../../public/img/trab/portas/6.jpg",
              "../../../public/img/trab/portas/7.jpg",
              "../../../public/img/trab/portas/8.jpg",
            ]}
            slide={lightboxController.slide}
          onClose={() => handleToggleLightbox(1)}
        />
        </div>
      </div>
    </>
  )
}

export default Portas