import React from 'react'
import { AiOutlineHeart} from "react-icons/ai";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer>
          <div className="desc">
            <h1><Link to = "politica-de-privacidade"><span>Privacy Policy - 2022</span></Link>| <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5551993347391" target = '_blank'>NSHCODE </a><AiOutlineHeart className = 'heart-icon'/></h1>
          </div>
        </footer>
    </>
  )
}

export default Footer