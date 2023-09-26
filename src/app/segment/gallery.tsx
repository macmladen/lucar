'use client'
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

export default function GallerySegmented() {
  const ourWork = [
    { src: '/img/segment/garage-rolo-1a.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-1b.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-2.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-3.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-4.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-big-1a.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-big-1b.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-big-2a.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-big-2b.jpg', width: 800, height: 600 },
    { src: '/img/segment/garage-rolo-window.jpg', width: 800, height: 600 },
  ]
  const netPhotos = [
    { src: '/img/segment/garazna-industr1.jpg', width: 800, height: 600 },
    { src: '/img/segment/garazna-industr2.jpg', width: 800, height: 600 },
    { src: '/img/segment/garazna-oblici.png', width: 800, height: 600 },
    { src: '/img/segment/garazna-segm4.jpg', width: 800, height: 600 },
    {
      src: '/img/segment/garazna-segmentna-vrata1.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/segment/garazna-segmentna-vrata2.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/segment/garazna-segmentna-vrata3.jpg',
      width: 800,
      height: 600,
    },
    { src: '/img/segment/garazna-tipovi.png', width: 800, height: 600 },
    { src: '/img/segment/garazna-vrata.gif', width: 800, height: 600 },
    { src: '/img/segment/garazna-vrata.jpg', width: 800, height: 600 },
  ]
  const [index, setIndex] = useState(-1)
  return (
    <section id='gallery'>
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

      {/*
        <hr />
        <h2>Fotografije sa neta:</h2>
        <PhotoAlbum layout='rows' photos={netPhotos} />
*/}
    </section>
  )
}
