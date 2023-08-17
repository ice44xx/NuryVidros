import React from 'react';

const Box = () => {
  return (
    <>
      <div className='container-pics'>
        <div className='container-heading'>
          <h1>
            <span>Box</span> de vidro
          </h1>
          <p>
            Nossos box são produzidos com <span>melhor</span> material e <span>qualidade</span> do mercado.
          </p>
        </div>
        <div className='container-content-pics'>
          <div className='item w-2 h-2'>
            <div className='b-g'></div>
            <img src='/img/trab/box/1.jpg' alt='Box de Vidro' className='img-gallery' />
          </div>
          <div className='item w-2 h-1'>
            <img src='/img/trab/box/2.jpg' alt='Box de Vidro' className='img-gallery' />
          </div>
          <div className='item w-1 h-2'>
            <img src='/img/trab/box/3.jpg' alt='Box de Vidro' className='img-gallery' />
          </div>
          <div className='item w-1 h-1'>
            <img src='/img/trab/box/4.jpg' alt='Box de Vidro' className='img-gallery' />
          </div>
          <div className='item w-2 h-2'>
            <img src='/img/trab/box/5.jpg' alt='Box de Vidro' className='img-gallery' />
          </div>
          <div className='item w-1-h-2'>
            <img src='/img/trab/box/6.jpg' alt='Box de Vidro' className='img-gallery' />
          </div>
          <div className='item w-2 h-1'>
            <img src='/img/trab/box/7.jpg' alt='Box de Vidro' className='img-gallery' />
          </div>
          <div className='item w-2 h-1'>
            <img src='/img/trab/box/8.jpg' alt='Box de Vidro' className='img-gallery' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
