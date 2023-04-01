import React from 'react'
import { Link } from 'react-router-dom'

const NavbarWorks = () => {
  return (
    <div>
        <nav className='NavbarWork'>
        <Link to = '/'>
          <img src="/img/logo/arrow-left.png" alt="flecha pra voltar a home" className='arrow-left' /> Voltar
        </Link>
        </nav>
    </div>
  )
}

export default NavbarWorks