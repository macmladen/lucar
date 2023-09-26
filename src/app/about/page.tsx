import Link from 'next/link'
import Hero from '@/components/blocks/hero'
import Gallery from '@/components/blocks/gallery'

export default function About() {
  const ourWork = [
    { src: '/img/about/lucar-house.jpg', width: 800, height: 600 },
  ]
  return (
    <section id='about'>
      <Hero
        title='SZTR Lucar'
        subtitle='Ugradnja i servis TNG i CNG uređaja, segmentnih i rolo vrata, pergola i komarnika.'
        image='/img/about/lucar-house.jpg'
      />
      <article className='container prose my-20 dark:prose-invert'>
        <p className='mb-4'>
          <strong>SZTR Lucar</strong> je mala porodična firma iz Novog Sada,
          osnovana je 2004. godine kao servis za ugradnju autogas sistema za
          putnička i komercijalna vozila.
        </p>
        <p className='mb-4'>
          Posao širio i naša interesovanja usmerena su i na druge oblasti, pa
          smo 2020. proširili asortiman proizvoda i usluga i počeli da
          proizvodimo i ugrađujemo pergole, garažne i industrijske segmentne
          kapije, rolo vrata i komarnike.
        </p>
        <p>
          Iza nas je decenija uspešno završenih poslova i stotine zadovoljnih
          klijenata.
        </p>
        <p className='mb-4'>
          Sa ponosom možemo reći da smo zalaganjem i kvalitetom izrade i
          ugradnje među vodećima u Novom Sadu.
        </p>
        <h2>Usluge</h2>
        <h3>Autogas (LPG)</h3>
        <p>
          Zbog svojih karakteristika autogas je gorivo koje je najveći prijatelj
          prirode. Vozila s pogonom na autogas, u odnosu na dizel motore, ne
          ispuštaju dim, čvrste čestice i sumporne okside...{' '}
          <Link href='/tng'>Detaljnije</Link>
        </p>
        <h3>Metan (CNG)</h3>
        <p>
          Metan je po ekološkim standardima prirodni gas CNG čije su reserve
          znatno veće u odnosu na rezerve nafte, a eksploatacija znatno
          jeftinija... <Link href='/cng'>Detaljnije</Link>
        </p>
        <h3>Komarnici</h3>
        <p>
          Komarnici su ekološka i trajna zaštita od svih insekata. Vrlo su
          praktični i svedeni, te su gotovo neprimetni u Vašem prostoru. Već
          dugi niz godina za svoje klijente ugrađujemo komarnike po meri...{' '}
          <Link href='/mosquito-net'>Detaljnije</Link>
        </p>
        <h3>Pergole</h3>
        <p>
          Pergole su najsavremeniji i najefikasniji pokretni sistem zaštite od
          spoljnih vremenskih uticaja za bašte restorana, kafića i hotela, kao i
          za terase Vaših kuća ili stanova...{' '}
          <Link href='/pergola'>Detaljnije</Link>
        </p>
        <h3>Segmentna industrijska i garažna vrata</h3>
        <p>
          Popularnost segmentnih vrata značajno je porasla poslednjih godina.
          Popularna su zbog svoje snage i sigurnosti. Naziv segmentna su dobila
          po tome što su u konstrukciji sastavljena od niza segmenata koji su
          međusobno povezani... <Link href='/segment'>Detaljnije</Link>
        </p>
        <hr />
        <Gallery ourWork={ourWork} />
      </article>
    </section>
  )
}
