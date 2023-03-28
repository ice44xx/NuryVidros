import React, {useEffect} from 'react'

const Navbar = () => {
  const handleClick = () => {
    const wall = document.getElementById('wall');
    const start = document.getElementById('start');
    const mid = document.getElementById('mid') ;
    const end = document.getElementById('end')
    start.classList.toggle('active')
    mid.classList.toggle('active')
    end.classList.toggle('active')
    wall.classList.toggle('open');
  }

  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll' , () => {
      navbar.classList.toggle('fixed', window.scrollY > 0)
    })
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <nav id = 'navbar' onScroll = {handleScroll}>
      <div className="container-desktop">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Empresa</a></li>
          <li><a href="#service">Serviços</a></li>
          <li><a href="#contact">Orçamento</a></li>
        </ul>
      </div>
      <div className="container-mobile">
        <div className="hamburger-line" id = 'hamburger-line' onClick = {handleClick}>
          <span className='start' id = 'start'></span>
          <span className='mid' id = 'mid'></span>
          <span className='end' id = 'end'></span>
        </div>
        <div id = 'wall'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Empresa</a></li>
            <li><a href="#service">Serviços</a></li>
            <li><a href="#contact">Orçamento</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar