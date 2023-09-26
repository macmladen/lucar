import Hero from '@/components/blocks/hero'
import Gallery from '@/components/blocks/gallery'

export default function Contact() {
  const ourWork = [
    { src: '/img/about/lucar-house.jpg', width: 800, height: 600 },
  ]
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
        <Gallery ourWork={ourWork} />
      </article>
    </section>
  )
}
