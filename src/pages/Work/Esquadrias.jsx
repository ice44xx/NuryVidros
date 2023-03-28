import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Esquadrias = () => {
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
        <h1><span>Esquadrias</span> em Alumínio</h1>
        <p>Esquadrias com <span>qualidade</span> e preço justo!</p>
      </div>
      <div className="container-content-pics">

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
          <div className="b-g"></div>
          <img src = '../../../public/img/trab/esquadrias/1.jpg' alt="Esquadrias em Alumínio" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
          <img src = '../../../public/img/trab/esquadrias/2.jpg' alt="Esquadrias em Alumínio" className='img-gallery' />
        </div>

        <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
          <img src = '../../../public/img/trab/esquadrias/3.jpg' alt="Esquadrias em Alumínio" className='img-gallery' />
        </div>
        
        <div className="item w-1 h-1" onClick={() => handleToggleLightbox(4)}>
          <img src = '../../../public/img/trab/esquadrias/4.jpg' alt="Esquadrias em Alumínio" className='img-gallery' />
        </div>

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
          <img src = '../../../public/img/trab/esquadrias/5.png' alt="Esquadrias em Alumínio" className='img-gallery' />
        </div>

        <div className="item w-1-h-2" onClick={() => handleToggleLightbox(6)}>
          <img src = '../../../public/img/trab/esquadrias/6.jpg' alt="Esquadrias em Alumínio" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
          <img src = '../../../public/img/trab/esquadrias/7.jpg' alt="Esquadrias em Alumínio" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(8)}>
          <img src = '../../../public/img/trab/esquadrias/8.jpg' alt="Esquadrias em Alumínio" className='img-gallery' />
        </div>
        <FSLightbox
          toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/esquadrias/1.jpg",
              "../../../public/img/trab/esquadrias/2.jpg",
              "../../../public/img/trab/esquadrias/3.jpg",
              "../../../public/img/trab/esquadrias/4.jpg",
              "../../../public/img/trab/esquadrias/5.png",
              "../../../public/img/trab/esquadrias/6.jpg",
              "../../../public/img/trab/esquadrias/7.jpg",
              "../../../public/img/trab/esquadrias/8.jpg",
            ]}
            slide={lightboxController.slide}
          onClose={() => handleToggleLightbox(1)}
        />
      </div>
    </div>
  </>
  )
}

export default Esquadrias