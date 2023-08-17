import React from 'react';
import '../sass/components.scss';

function video() {
  return (
    <div className='bg-video'>
      <video autoPlay muted loop poster='/img/logo/work-moment.jpg' playsInline>
        <source src='/video/video.mp4' type='video/mp4' />
      </video>
    </div>
  );
}

export default video;
