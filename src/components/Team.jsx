import React from 'react';
import CarouselTeam from './CarouselTeam';

const Team = () => {
  return (
    <>
      <div className='container-team'>
        <div className='container-heading'>
          <h1>Equipe</h1>
          <p>
            Nossos profissionais altamente <span>recomendados</span> e <span>qualificados</span>
          </p>
        </div>
        <div className='container-carousel'>
          <CarouselTeam />
        </div>
      </div>
    </>
  );
};

export default Team;
