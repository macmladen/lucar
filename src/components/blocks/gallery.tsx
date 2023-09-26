'use client'
import PhotoAlbum from 'react-photo-album'
import { useState } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css' // import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

type GalleryPhoto = {
  src: string
  width: number
  height: number
}
export default function Gallery({
  ourWork,
  netPhotos,
}: {
  ourWork: Array<GalleryPhoto>
  netPhotos?: Array<GalleryPhoto>
}) {
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
