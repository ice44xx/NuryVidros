import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineInstagram} from "react-icons/ai";

const Redes = () => {
  return (
    <>
        <div className="container-redes">
            <div className="container-heading">
                <h1>Redes Sociais</h1>
            </div>
            <div className="container-content-redes">
                <div className="box">
                    <a href="https://m.facebook.com/nuryvidross/" target = '_blank'><FaFacebookF className='icon'/></a>
                    <span>Facebook</span>
                </div>

                <div className="box">
                    <a href="https://www.instagram.com/nuryvidros/" target = '_blank'><AiOutlineInstagram className='icon'/></a>
                    <span>@Nuryvidros</span>
                </div>

                <div className="box">
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=555197945224" target = '_blank'><BsWhatsapp className='icon'/></a>
                    <span>Whatsapp</span>
                </div>

                <div className="box">
                    <a href="https://www.google.com/maps/place/Nury+Vidros/@-29.8966058,-50.2668988,15z/data=!4m2!3m1!1s0x0:0xdba5b7767d9a70de?sa=X&ved=2ahUKEwjGlMSbwfv9AhVXHrkGHX1pBNIQ_BJ6BAhWEAg" target = '_blank'><FaMapMarkerAlt className='icon'/></a>
                    <span>R.Barão do Rio Branco</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Redes