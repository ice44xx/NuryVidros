import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Box = () => {
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
        <h1><span>Box</span> de vidro</h1>
        <p>Nossos box são produzidos com <span>melhor</span> material e <span>qualidade</span> do mercado.</p>
      </div>
      <div className="container-content-pics">

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
          <div className="b-g"></div>
          <img src = '../../../public/img/trab/box/1.jpg' alt="Box de Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
          <img src = '../../../public/img/trab/box/2.jpg' alt="Box de Vidro" className='img-gallery' />
        </div>

        <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
          <img src = '../../../public/img/trab/box/3.jpg' alt="Box de Vidro" className='img-gallery' />
        </div>
        
        <div className="item w-1 h-1" onClick={() => handleToggleLightbox(4)}>
          <img src = '../../../public/img/trab/box/4.jpg' alt="Box de Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
          <img src = '../../../public/img/trab/box/5.jpg' alt="Box de Vidro" className='img-gallery' />
        </div>

        <div className="item w-1-h-2" onClick={() => handleToggleLightbox(6)}>
          <img src = '../../../public/img/trab/box/6.jpg' alt="Box de Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
          <img src = '../../../public/img/trab/box/7.jpg' alt="Box de Vidro" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(8)}>
          <img src = '../../../public/img/trab/box/8.jpg' alt="Box de Vidro" className='img-gallery' />
        </div>
        <FSLightbox
            toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/box/1.jpg",
              "../../../public/img/trab/box/2.jpg",
              "../../../public/img/trab/box/3.jpg",
              "../../../public/img/trab/box/4.jpg",
              "../../../public/img/trab/box/5.jpg",
              "../../../public/img/trab/box/6.jpg",
              "../../../public/img/trab/box/7.jpg",
              "../../../public/img/trab/box/8.jpg",
            ]}
            slide={lightboxController.slide}
            onClose={() => handleToggleLightbox(1)}
          />
      </div>
    </div>
  </>
  )
}

export default Box