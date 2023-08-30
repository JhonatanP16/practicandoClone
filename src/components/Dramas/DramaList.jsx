import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCalendar2Date, BsChevronLeft, BsChevronRight, BsFire, BsHearts, BsPlayBtn, BsPlayCircle, BsStarFill } from "react-icons/bs";
import "swiper/css";
import "./DramaList.css"
import { Link } from 'react-router-dom';
import { titleConvert } from '../../helpers/Title';

const DramaList = ({dramas,nameSection,categorias,changeCategoria,categoriaSelecionada}) => {
  const [swiper,setSwiper] = useState(null);
  const [page,setPage] = useState(1);
  const [total,setTotal] = useState(0);
  const [slidesToShow,setSlidesToShow] = useState(6);
  
    const getTotal = (swiper) => {
        const slidesPorPagina = swiper.params.slidesPerView;
        const totalSlides = swiper.slides.length;
        const paginas = Math.ceil(totalSlides / slidesPorPagina);
        setTotal(paginas)
    }
    
    
    useEffect(() => {
      const updatedSlidesShow = () => {
        if(window.innerWidth >= 1280){
          setSlidesToShow(6);
        }else if(window.innerWidth >= 1024){
          setSlidesToShow(5);
        }else if(window.innerWidth >= 768){
          setSlidesToShow(4);
        }else if(window.innerWidth >= 640){
          setSlidesToShow(3);
        }else if(window.innerWidth >= 0){
          setSlidesToShow(3);
        }
      }
      updatedSlidesShow();
      window.addEventListener('resize',updatedSlidesShow);
      return () => window.removeEventListener('resize',updatedSlidesShow);
    },[])

  const handleNext = () =>{
    swiper.slideNext();
  }
  const handlePrev = () => {
    swiper.slidePrev();
  }

  return (
    <div className='dramaContainer'>
      <div className='actions'>
        <div className='actionsTitle'>
            {
              nameSection == 'Popular hoy' ? <BsFire className='icon'/> : 
              nameSection == 'Romance' ? <BsHearts className='icon'/>: 
              nameSection == 'Familia' ? <BsPlayBtn className='icon'/> : 
              nameSection == 'Emision' ? <BsCalendar2Date className='icon'/> : ''
            }
            <h2>{nameSection}</h2>
            <Link> Más <BsChevronRight/> </Link>
        </div>
      {
        categorias && (
          <div className='categorias'>
            <ul>
            {
              categorias.map(categoria => (
               <li key={categoria}> 
               <button 
               onClick={() => changeCategoria(categoria)} 
               className={(categoriaSelecionada == categoria) ? 'btnActivo' : ''}>
                {categoria}
                </button>
                </li>
              ))
            }
            </ul>
          </div>
        )
      }
     
        <div className='buttons'>
          <button onClick={handlePrev} disabled={page==1}><BsChevronLeft className='arrow arrow-prev'/></button>
          <span>{page}/{total}</span>
          <button onClick={handleNext} disabled={page==total}><BsChevronRight className='arrow arrow-next'/></button>
        </div>

      </div>
        
       <Swiper
       pagination={{
        type:"fraction",
       }}
       onSwiper={(swiper) => [setSwiper(swiper),getTotal(swiper)]}
       onSlideChange={(swiper) => setPage(Math.ceil(swiper.activeIndex / swiper.params.slidesPerGroup)+1)}
       spaceBetween={window.innerWidth <= 400 ? 8 : 15}
       slidesPerView={slidesToShow}
       slidesPerGroup={slidesToShow}
       navigation={true}
       modules={[Navigation]}
       >
        
        {
          dramas && dramas.map((drama,index) => (
            <SwiperSlide className='swiperCard' key={index}>
              <div className='contentCard'>
                <Link
                className='cardLink'
                style={{backgroundImage:`url(${drama.imgUrl})`}}
                title={`${drama.title}`}
                to={`/detalle/${titleConvert(drama.titleUs)}`}
                state={drama}
                >
                  <div className='play'>
                    <BsPlayCircle/>
                  </div>
                  <div className='ribon'>
                     <p>{drama.status}</p>
                  </div>
                  <div className='calificacion'>
                    <p>{drama.rating}</p><BsStarFill/>
                  </div>
                </Link>
                <div className='textDrama'>
                 <span>{drama.title}</span>
                 <span>{drama.titleUs}</span>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
       </Swiper>
    </div>
  )
  
}
DramaList.defaultProps ={
    categorias:null,
    changeCategoria:null,
    categoriaSelecionada:null
}

export default DramaList
