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

export default function Segmented() {
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
    <section id='segment'>
      <Hero
        title='Segmentna industrijska i garažna vrata'
        subtitle='Sigurno i praktično'
        image='/img/segment/garage-rolo-big-2a.jpg'
      />
      <article className='container prose my-20 dark:prose-invert'>
        <p>
          Popularnost segmentnih vrata značajno je porasla poslednjih godina.
          Popularna su zbog svoje snage i sigurnosti. Naziv segmentna su dobila
          po tome što su u konstrukciji sastavljena od niza segmenata koji su
          međusobno povezani.
        </p>
        <p>
          Segmentna vrata se otvaraju vertikalno i odlaze ispod plafona. Ovom
          konstrukcijom nude maksimalan prostor u garaži i ispred nje. Garažna
          segmentna vrata se mogu ugraditi u bilo koji otvor garaže i nude do 14
          cm veću prolaznu širinu u odnosu na kipujuća garažna vrata. Osim toga,
          zahvaljujući trajno elastičnim, i na atmosferske uticaje otpornim
          dihtung gumama, ona su sa svih strana zaptivena.
        </p>
        <p>
          Sastoje se od bočnog sistema vodilica koje imaju posebnu blokadu, na
          čijem kraju se nalazi aluminijumski profil za puno zatvaranje. Za
          kretanje remenica vrata, posebno konfigurisan zupčanik je čvrsto
          povezan sa omotačem. Uz saglasnost kupca i uzimajući u obzir njegove
          potrebe, donji deo specijalnog zupčanika može biti dodatno obrađen
          tako da doseže do najviše tačke objekta i savršeno se uklapa u
          unutrašnje geometrije zgrade i na taj način uslovljava potpuni
          ergonomski rezultat bez primetne promene u ukupnoj ceni. Odgovarajući
          deo sistema za podizanje je zašrafljen na vrhu zupčanika.
        </p>
        <p>
          Poseban elektromotor sa kočnicom i reduktorom industrijskih standarda
          prenosi kretanje na osovinu preko zubaca i lančanika. Kontroliše se
          upotrebom tastera ili prekidačem, a može se lako povezati daljinski
          prijemnik i fotoćelija. Tasteri kontrole rade na niskom naponu od 24 V
          zbog bezbednosti osoblja.
        </p>
        <p>
          Paneli se sastoje od lima 0,50 mm i ispunjeni su ispunom poliuretanom.
          Oni nose zglobove duž ivica, kao i posebna uzdužna ojačanja. Panel u
          gornjem delu vrata ima specijalni gumeni zatvarač.
        </p>
        <p>Kretanje se vrši preko pogonskog kaiša a ne putem kablova.</p>
        <p>
          Garažna segmentna vrata su testirana i sertifikovana u skladu sa
          zahtevima evropskog standarda za bezbednost. To su moderna vrata za
          uštedu energije: kada je garaža integrisana u kuću, onda se uvek
          preporučuju garažna vrata sa dobrom izolacijom.
        </p>
        <p>
          Nude optimalnu i dugotrajnu zaštitu. Veoma su komforna i bezbedna.
          Konstruisana su tako da je gotovo nemoguće povrediti ruke u bilo kom
          delu. Ukoliko bi prilikom zatvaranja naišla na bilo kakvu prepreku,
          istog trenutka bi se zaustavila i krenula na gore. Elektronski i
          mehanički bezbednosni uređaji onemogućavaju nasilno podizanje vrata.
          Sve ih to čini izuzetno bezbednim.
        </p>
        <p>
          Specifičan način čuvanja prostora čini ih veoma poželjnim za garaže u
          kojima se parkiraju džipovi i kombiji ili bilo koja vrsta velikog
          automobila. Način podizanja i kretanja vrata je uz plafon i pomeranje
          vertikalno uza zid. Pored povoljnosti za velika vozila ostavljaju i
          prostor sa strane, na površini koja bi morala ostati prazna zbog
          vratnica običnih garažnih vrata.
        </p>
        <p>
          Ovakva vrsta garažnih vrata uvek obezbeđuje specifičnu vrstu komfora.
          Prilikom loših vremenskih uslova ili po mraku, nemate potrebe da
          izlazite iz automobila. Garažna vrata se automatski zaključavaju. Mogu
          se otključati mini kodnim tasterom i magnetnim čitačem.
        </p>
        <p>
          Segmentna garažna vrata imaju dosta razvijen sistem izolacije. Otporna
          su na jake udare vetra. Termoizolacija im je na zavidnom nivou.
          Izolacija zvuka takođe. Pored izolacije, imaju i druga pozitivna
          svojstva: nemaju miris, ne trule, ne hvataju se plesni i otporna su na
          vlagu.
        </p>
        <p>
          Svi materijali koji se koriste u izradi garažnih vrata su usaglašeni
          sa Evropskim standardom kvaliteta. Garancija je 5 godina na kompletan
          proizvod. Ukoliko se pravilno održavaju, mogu trajati veoma dugo.
        </p>
        <p>
          Kod nas možete naći veliki izbor motiva, površina i boja čeličnih
          garažnih vrata.
        </p>
        <p>
          Industrijska segmentna vrata se mogu u potpunosti prilagoditi
          arhitektonskim ili funkcionalnim aspektima vašeg objekta. Tiha su,
          izrazito izdržljiva i dugotrajna.
        </p>
        <p>
          Kombinacijom elektromotora sa segmentnim industrijskim vratima
          dobićete integrisani sistem koji povećava performanse i pouzdanost.
        </p>
        <p>
          Mogu se raditi od termoizolovanih panela koji su obostrano od čeličnog
          pocinkovanog i plastificiranog lima sa jezgrom od poliuretana debljine
          40 mm, čime se postiže visoka toplotno izolacijska vrednost. Pored
          standardnih boja možemo ih raditi u skoro svakoj boji iz RAL karte po
          Vašem zahtevu.
        </p>
        <p>
          Problem nedostatka pešačkog prolaza moguće je rešiti ugradnjom sistema
          „vrata u vratima“. Takva vrata se otvaraju ka spolja pri čemu se ne
          gubi na prostoru i funkcionisanju unutar objekta. Na taj način
          industrijska segmentna vrata mogu znatno duže trajati a produžava se i
          vek automatike - motora koji podiže vrata. Nije potrebno dizati ih za
          svaki ulazak u objekat. Takođe, na vrata je moguće ugraditi prozor ili
          ventilacioni otvor.
        </p>
        <p>
          Kod vrata većih gabarita naša preporuka je, uz opciju daljinskih
          upravljača, ugradnja infracrvenih senzora koji, u slučaju nailaska na
          prepreku, vrata vraćaju u otvoren položaj, čime sprečavaju povredu
          ljudi i oštećenje predmeta.
        </p>
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

        {/*
        <hr />
        <h2>Fotografije sa neta:</h2>
        <PhotoAlbum layout='rows' photos={netPhotos} />
*/}
      </article>
    </section>
  )
}
