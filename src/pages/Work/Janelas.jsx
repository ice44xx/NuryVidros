import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Janelas = () => {
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
          <h1>Janelas em <span>Vidro</span></h1>
          <p>Janelas de vidro são adequadas para um <span>ambiente</span> simples e <span>moderno</span>.</p>
        </div>
        <div className="container-content-pics">

          <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
            <div className="b-g"></div>
            <img src = '../../../public/img/trab/janelas/1.jpg' alt="Janelas em Vidro" className='img-gallery' />
          </div>

          <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
            <img src = '../../../public/img/trab/janelas/2.jpg' alt="Janelas em Vidro" className='img-gallery' />
          </div>

          <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
            <img src = '../../../public/img/trab/janelas/3.webp' alt="Janelas em Vidro" className='img-gallery' />
          </div>
          
          <div className="item w-1 h-1" onClick={() => handleToggleLightbox(4)}>
            <img src = '../../../public/img/trab/janelas/4.jpg' alt="Janelas em Vidro" className='img-gallery' />
          </div>

          <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
            <img src = '../../../public/img/trab/janelas/5.jpg' alt="Janelas em Vidro" className='img-gallery' />
          </div>

          <div className="item w-1-h-2" onClick={() => handleToggleLightbox(6)}>
            <img src = '../../../public/img/trab/janelas/6.jpg' alt="Janelas em Vidro" className='img-gallery' />
          </div>

          <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
            <img src = '../../../public/img/trab/janelas/7.jpg' alt="Janelas em Vidro" className='img-gallery' />
          </div>

          <div className="item w-2 h-1" onClick={() => handleToggleLightbox(8)}>
            <img src = '../../../public/img/trab/janelas/8.jpg' alt="Janelas em Vidro" className='img-gallery' />
          </div>

          <FSLightbox
            toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/janelas/1.jpg",
              "../../../public/img/trab/janelas/2.jpg",
              "../../../public/img/trab/janelas/3.webp",
              "../../../public/img/trab/janelas/4.jpg",
              "../../../public/img/trab/janelas/5.jpg",
              "../../../public/img/trab/janelas/6.jpg",
              "../../../public/img/trab/janelas/7.jpg",
              "../../../public/img/trab/janelas/8.jpg",
            ]}
            slide={lightboxController.slide}
            onClose={() => handleToggleLightbox(1)}
          />
        </div>
      </div>
    </>
  )
}

export default Janelas