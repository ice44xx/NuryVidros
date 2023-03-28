import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart} from "react-icons/ai";

const Footer = () => {
  return (
    <>
        <footer>
          <div className="desc">
            <h1><Link to = '/politica-de-privacidade'>Privacy Policy - 2022</Link> | <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5551985981382" target = '_blank'>AMPLIFY-METAS</a><AiOutlineHeart className = 'heart-icon'/></h1>
          </div>
        </footer>
    </>
  )
}

export default Footer