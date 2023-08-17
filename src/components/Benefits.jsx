import React from 'react';

import { BiCubeAlt } from 'react-icons/bi';
import { RiTeamFill } from 'react-icons/ri';
import { BsClock } from 'react-icons/bs';

const Benefits = () => {
  return (
    <>
      <div className='container-benefits'>
        <div className='box'>
          <BiCubeAlt className='icon' />
          <h1>Sob medida</h1>
          <div className='desc'>
            <p>
              Fazemos como o cliente desejar e com <span>qualidade</span>.
            </p>
          </div>
        </div>
        <div className='box'>
          <RiTeamFill className='icon' />
          <h1>Equipe</h1>
          <div className='desc'>
            <p>
              Nossa equipe é formada por profissionais com anos de <span>experiência</span>.
            </p>
          </div>
        </div>
        <div className='box'>
          <BsClock className='icon' />
          <h1>Pontualidade</h1>
          <div className='desc'>
            <p>
              Trabalhamos com a pontualidade e <span>dedicação</span> que o cliente merece.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
