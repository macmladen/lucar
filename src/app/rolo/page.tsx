import Hero from '@/components/blocks/hero'
import PhotoAlbum from 'react-photo-album'

export default function roloDoor() {
  const photos = [
    { src: '/img/rolo/garage-rolo-1a.jpg', width: 800, height: 600 },
    { src: '/img/rolo/garage-rolo-1b.jpg', width: 800, height: 600 },
    { src: '/img/rolo/garage-rolo-2.jpg', width: 800, height: 600 },
    { src: '/img/rolo/garage-rolo-3.jpg', width: 800, height: 600 },
    { src: '/img/rolo/garage-rolo-4.jpg', width: 800, height: 600 },
  ]
  return (
    <section id='rolo'>
      <Hero
        title='Rolo vrata'
        subtitle='Rolo sigurnosna vrata'
        image='/img/rolo/garage-rolo-3.jpg'
      />
      <article className='container prose pt-8 dark:prose-invert'>
        <p>
          Rolo aluminijumska vrta izrađujemo od aluminijumskih lamela širine
          77mm koje su punjene poliuretanom. Rolo aluminijumska vrata se
          uglavnom koriste kao garažna vrata bez obzira na oblik otvora na samom
          objektau aluminijumska rolo vrata imaju svoju kutiju u koju se
          namotavaju po sistemu roletni. Ova vrsta garažnih vrata omogućavaju
          vam sistem zaštite kao i sistem termo izolacije.
        </p>
        <p>
          Mehaizam koji ugradjujemo može biti po principu kurble i
          elektromotora. Elektro motor se može pokrenuti po principu prekidača
          ili po principu daljinskog upravljača tako da omogućavaju podizanje i
          spuštanje rolo aluminijumskih vrata na brz i efikasan način. U slučaju
          nestanka struje moguće je otvoriti vrata kurblom.
        </p>
        <p>
          Ovakav vid garažnih rolo vrata su laka za upravljanje i možemo
          slobodno reći tiha jer ispuna kojom su napunjena ne izaziva veliku
          buku prilikom skalpanja tj rolanja. Ukoliko želite kutiju od garažnih
          aluminijumskih rolo vrat amožemo postaviti unutar objekta ali I spolja
          sve u zavisnosti od vaših esteckih želja,
        </p>
        <hr />
        <h2>Fotografije koje imamo:</h2>
        <PhotoAlbum layout='rows' photos={photos} />
      </article>
    </section>
  )
}
