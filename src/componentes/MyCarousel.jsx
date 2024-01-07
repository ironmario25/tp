import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';


register();
//https://image.tmdb.org/t/p/original/3UCTls0hVKMCwWtkTmwKcCOzlgu.jpg

const MyCarousel = ({ children, finCarrousel = () => { }, click = (e) => { }, id }) => {
    const swiperElRef = useRef(null);

    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
        console.log('slide changed');
      });
  
      swiperElRef.current.addEventListener('swiperreachend', (e) => {
        // este evento detecta el fin del carrousel
        finCarrousel();
      });
      swiperElRef.current.addEventListener('swiperclick', (e) => {
        // este evento detecta cuando se hace click en un slider
  
        if (e.detail[0].clickedIndex !== undefined) {
          click(e);
        }
  
      });
      const params = {
        slidesPerView: 5,
        breakpoints: {
          280: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },        
          1024: {
            slidesPerView: 5,
          },
          2560: {
            slidesPerView: 5,
          },
        },
      };
  
      // Assign it to swiper element
      Object.assign(swiperElRef.current, params);
      swiperElRef.current.initialize();
    }, []);
  
    return (
      <swiper-container
        ref={swiperElRef}
        slides-per-view="auto"
        navigation="true"
        pagination="true"
        id={id}

      >

        {
          children

        }
      </swiper-container>
    );
}

export default MyCarousel