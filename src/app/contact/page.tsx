'use client'
import Hero from '@/components/blocks/hero'
import PhotoAlbum from 'react-photo-album'
import { useState } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

export default function Contact() {
  const ourWork = [
    { src: '/img/about/lucar-house.jpg', width: 800, height: 600 },
  ]
  const [index, setIndex] = useState(-1)
  return (
    <section id='contact'>
      <Hero
        title='Kontakt'
        subtitle='Pozovite nas ili svratite'
        image='/img/about/lucar-house.jpg'
      />
      <article className='container prose my-20 dark:prose-invert'>
        <p>Kontaktirajte nas slobodno!</p>
        <hr />
        <h2>Naši projekti</h2>
        <PhotoAlbum
          layout='rows'
          photos={ourWork}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={ourWork}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </article>
    </section>
  )
}
