import React from 'react'
import { useState } from "react";
import FSLightbox from 'fslightbox-react';

const Espelhos = () => {
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
        <h1><span>Espelhos</span></h1>
        <p>Para ampliar ambientes e proporcionar a luz <span>natural</span></p>
      </div>
      <div className="container-content-pics">

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(1)}>
          <div className="b-g"></div>
          <img src = '../../../public/img/trab/espelhos/1.jpg' alt="Espelhos" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(2)}>
          <img src = '../../../public/img/trab/espelhos/2.jpg' alt="Espelhos" className='img-gallery' />
        </div>

        <div className="item w-1 h-2" onClick={() => handleToggleLightbox(3)}>
          <img src = '../../../public/img/trab/espelhos/3.jpg' alt="Espelhos" className='img-gallery' />
        </div>
        
        <div className="item w-1 h-1" onClick={() => handleToggleLightbox(4)}>
          <img src = '../../../public/img/trab/espelhos/4.webp' alt="Espelhos" className='img-gallery' />
        </div>

        <div className="item w-2 h-2" onClick={() => handleToggleLightbox(5)}>
          <img src = '../../../public/img/trab/espelhos/5.jpg' alt="Espelhos" className='img-gallery' />
        </div>

        <div className="item w-1-h-2" onClick={() => handleToggleLightbox(6)}>
          <img src = '../../../public/img/trab/espelhos/6.jpg' alt="Espelhos" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(7)}>
          <img src = '../../../public/img/trab/espelhos/7.png' alt="Espelhos" className='img-gallery' />
        </div>

        <div className="item w-2 h-1" onClick={() => handleToggleLightbox(8)}>
          <img src = '../../../public/img/trab/espelhos/8.png' alt="Espelhos" className='img-gallery' />
        </div>
        <FSLightbox
          toggler={lightboxController.toggler}
            sources={[
              "../../../public/img/trab/espelhos/1.jpg",
              "../../../public/img/trab/espelhos/2.jpg",
              "../../../public/img/trab/espelhos/3.jpg",
              "../../../public/img/trab/espelhos/4.webp",
              "../../../public/img/trab/espelhos/5.jpg",
              "../../../public/img/trab/espelhos/6.jpg",
              "../../../public/img/trab/espelhos/7.png",
              "../../../public/img/trab/espelhos/8.png",
            ]}
            slide={lightboxController.slide}
          onClose={() => handleToggleLightbox(1)}
        />
      </div>
    </div>
  </>
  )
}

export default Espelhos