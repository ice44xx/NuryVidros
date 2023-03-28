import React from 'react'
import '../sass/components.scss'

function video (){
  return (
    <div className='bg-video'>
      <video autoPlay muted loop>
        <source src = '../../public/video/video.mp4'/>
      </video>
    </div>
    
  )
}

export default video