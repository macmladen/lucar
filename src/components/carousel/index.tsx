'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image' // Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation' // import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export default function Carousel() {
  return (
    <section id='carousel'>
      <Swiper
        style={{
          //@ts-ignore
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
          height: 'clamp(300px, 50vw, 600px)',
        }}
        speed={600}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='hero'
      >
        <SwiperSlide>
          <Image
            src='/img/tng/tng.jpg'
            width={1200}
            height={675}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'clamp(300px, 50vw, 600px)',
              position: 'absolute',
            }}
            alt='Ugradnja i održavanje TNG uređaja'
            loading='lazy'
          />
          <div className='container relative bg-white/70 p-8'>
            <h2 className='pb-8 pt-4 text-6xl font-black'>TNG</h2>
            <p className='text-2xl'>Ugradnja i održavanje TNG uređaja</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/cng/cng.jpg'
            width={1200}
            height={675}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'clamp(300px, 50vw, 600px)',
              position: 'absolute',
            }}
            alt='Ugradnja i održavanje CNG uređaja'
            loading='lazy'
          />
          <div className='container relative bg-white/70 p-8'>
            <h2 className='pb-8 pt-4 text-6xl font-black'>CNG</h2>
            <p className='text-2xl'>Ugradnja i održavanje CNG uređaja</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/mosquitonet/mosquito-net-window-2.jpg'
            width={1200}
            height={675}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'clamp(300px, 50vw, 600px)',
              position: 'absolute',
            }}
            alt='Ugradnja i izrada komarnika'
            loading='lazy'
          />
          <div className='container relative bg-white/70 p-8'>
            <h2 className='pb-8 pt-4 text-6xl font-black'>Komarnici</h2>
            <p className='text-2xl'>Ugradnja i izrada komarnika</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/rolo/garage-rolo-3.jpg'
            width={1200}
            height={675}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'clamp(300px, 50vw, 600px)',
              position: 'absolute',
            }}
            alt='Rolo vrata'
            loading='lazy'
          />
          <div className='container relative bg-white/70 p-8'>
            <h2 className='pb-8 pt-4 text-6xl font-black'>Rolo vrata</h2>
            <p className='text-2xl'>Ugradnja i izrada rolo segmentnih vrata</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/segment/garage-rolo-big-2a.jpg'
            width={1200}
            height={675}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'clamp(300px, 50vw, 600px)',
              position: 'absolute',
            }}
            alt='Segmentna vrata'
            loading='lazy'
          />
          <div className='container relative bg-white/70 p-8'>
            <h2 className='pb-8 pt-4 text-6xl font-black'>Segmentna vrata</h2>
            <p className='text-2xl'>Ugradnja i izrada rolo segmentnih vrata</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/img/pergola/pergola-3a.jpg'
            width={1200}
            height={675}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'clamp(300px, 50vw, 600px)',
              position: 'absolute',
            }}
            alt='Ugradnja i izrada pergola'
            loading='lazy'
          />
          <div className='container relative bg-white/70 p-8'>
            <h2 className='pb-8 pt-4 text-6xl font-black'>Pergola</h2>
            <p className='text-2xl'>Ugradnja i izrada pergola</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
