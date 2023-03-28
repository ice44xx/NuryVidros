import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



const CarouselTeam = () => {
    return (
        <Carousel indicators = {false}>
          <Carousel.Item >
            <div className="box">
                <img src="../../img/person/1.png" alt="Equipe Alan Sant Helena" />
                <div className="desc">
                    <a href="https://www.instagram.com/tanianury/" target = '_blank'><p>@Tanianury</p></a>
                </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="box">
                <img src="../../img/person/2.png" alt="Equipe Tânia Nury" />
                <div className="desc">
                    <a href="https://www.instagram.com/nuryvidros/" target = '_blank'><p>@NuryVidros</p></a>
                </div>
            </div>
          </Carousel.Item>
        </Carousel>
    );
}

export default CarouselTeam