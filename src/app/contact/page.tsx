import Hero from '@/components/blocks/hero'

export default function Contact() {
  return (
    <section id='contact'>
      <Hero
        title='Kontakt'
        subtitle='Pozovite nas ili svratite'
        image='/img/about/lucar-house.jpg'
      />
      <article className='container prose pt-8 dark:prose-invert'>
        <p>Kontaktirajte nas slobodno!</p>
      </article>
    </section>
  )
}
