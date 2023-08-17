import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css/bundle';
import 'swiper/scss/controller';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const breakpoints = {
  0: {
    slidesPerView: 1
  },
  450: {
    slidesPerView: 1
  },
  750: {
    slidesPerView: 2
  },
  1180: {
    slidesPerView: 3
  },
  1380: {
    slidesPerView: 4
  }
};

const ContainerSwiper = () => {
  return (
    <>
      <div className='container-swiper'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={4}
          breakpoints={breakpoints}
          navigation
          wrapperTag='div'
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/4-small.png' alt='Janelas' />
              <div className='desc'>
                <h1>Janelas</h1>
                <p>Janelas para um ambiente simples e moderno</p>
                <Link to='/trabalhos/janelas'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/2-small.png' alt='Box da banheiro' />
              <div className='desc'>
                <h1>Box</h1>
                <p>Nossos box são produzidos com melhor material e qualidade do mercado.</p>
                <Link to='/trabalhos/box'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/3-small.png' alt='Portas' />
              <div className='desc'>
                <h1>Portas</h1>
                <p>Portas de vidro de grande resistência, proporcionando claridade e modernidade.</p>
                <Link to='/trabalhos/portas'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/6-small.png' alt='Cobertura em vidro' />
              <div className='desc'>
                <h1>Coberturas</h1>
                <p>Vidros da melhor qualidade e versatilidade.</p>
                <Link to='/trabalhos/coberturas'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/5-small.png' alt='Esquadrias em aluminio' />
              <div className='desc'>
                <h1>Esquadrias</h1>
                <p>Esquadrias com qualidade e preço justo!</p>
                <Link to='/trabalhos/esquadrias'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/1-small.png' alt='Espelhos' />
              <div className='desc'>
                <h1>Espelhos</h1>
                <p>Para ampliar ambientes e proporcionar a luz natural</p>
                <Link to='/trabalhos/espelhos'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/7-small.png' alt='Cercamento de piscinas' />
              <div className='desc'>
                <h1>Cercamentos</h1>
                <p>Projetado para proporcionar segurança, conforto e praticidade</p>
                <Link to='/trabalhos/cercamentos'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/8-small.png' alt='Coberturas em pergolado' />
              <div className='desc'>
                <h1>Pergolados</h1>
                <p>Os pergolados são estruturas projetadas para proteção contra a ação de raios solares e chuvas</p>
                <Link to='/trabalhos/pergolados'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-box'>
              <img src='../../img/trab/home/9-small.png' alt='Portas retrateis' />
              <div className='desc'>
                <h1>Portas Retrateis</h1>
                <p>O sistema retrátil, é uma nova tendência para projetos modernos e inovadores</p>
                <Link to='/trabalhos/portas-retrateis'>
                  <button>Veja mais</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ContainerSwiper;
