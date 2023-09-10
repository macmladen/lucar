import Hero from '@/components/blocks/hero'
import Link from 'next/link'

export default function About() {
  return (
    <section id='about'>
      <Hero
        title='SZTR Lucar'
        subtitle='Ugradnja i servis TNG, CNG, segmentnih, rolo vrata i komarnika'
        image='/img/about/lucar-house.jpg'
      />
      <article className='container prose pt-8 dark:prose-invert'>
        <p>"Lucar" SZTR je mala porodična firma iz Novog Sada.</p>
        <p>
          Osnovana je 2004. kao servis za ugradnju autogas sistema za
          automobile.
        </p>
        <p>
          Otada se posao širio, naša interesovanja su bila usmerena i na druge
          stvari, pa smo 2020. počeli da proizvodimo i ugrađujemo segmentna
          industrijska i garažna vrata.
        </p>
        <p>
          Od 2021. zvanični smo zastupnici kompanije koja pravi i ugrađuje
          pergole, a od 2022. asortiman proizvoda proširili smo prodajom i
          ugradnjom komarnika.
        </p>
        <p>
          Iza nas su decenije uspešno završenih poslova i stotine zadovoljnih
          klijenata. Sa ponosom možemo reći da smo zalaganjem i kvalitetom
          izrade i ugradnje među vodećima u Novom Sadu.
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
      </article>
    </section>
  )
}
