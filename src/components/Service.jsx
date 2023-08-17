import React from 'react';
import ContainerSwiper from './ContainerSwiper';

const Service = () => {
  return (
    <>
      <div className='container-service' id='service'>
        <div className='container-content-service'>
          <div className='container-heading'>
            <h1>Serviços</h1>
            <p>
              Serviços com <span>agilidade </span> e <span>alta qualidade</span>
            </p>
          </div>
          <div className='container-swiper'>
            <ContainerSwiper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
