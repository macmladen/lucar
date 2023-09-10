import Hero from '@/components/blocks/hero'
import PhotoAlbum from 'react-photo-album'

export default function Contact() {
  const photos = [
    { src: '/img/about/lucar-house.jpg', width: 800, height: 600 },
  ]
  return (
    <section id='contact'>
      <Hero
        title='Kontakt'
        subtitle='Pozovite nas ili svratite'
        image='/img/about/lucar-house.jpg'
      />
      <article className='container prose pt-8 dark:prose-invert'>
        <p>Kontaktirajte nas slobodno!</p>
        <hr />
        <h2>Fotografije koje imamo:</h2>
        <PhotoAlbum layout='rows' photos={photos} />
      </article>
    </section>
  )
}
