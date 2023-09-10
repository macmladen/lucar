import Hero from '@/components/blocks/hero'
import PhotoAlbum from 'react-photo-album'

export default function Pergola() {
  const photos = [
    { src: '/img/pergola/pergola-1a.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-1b.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-1c.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-1d.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-2a.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-2b.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-2c.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-3a.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-3b.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-3c.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-3d.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-3e.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-3f.jpg', width: 800, height: 600 },
    { src: '/img/pergola/pergola-3g.jpg', width: 800, height: 600 },
  ]
  const photos2 = [
    { src: '/img/pergola/nastresnica-1.jpg', width: 800, height: 600 },
    { src: '/img/pergola/nastresnica-2.jpg', width: 800, height: 600 },
    { src: '/img/pergola/nastresnica-bio3.jpg', width: 800, height: 600 },
    {
      src: '/img/pergola/nastresnica-bioklimatska-sa-pokretnim-krovom.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/pergola/nastresnica-laka-tekstilna.png',
      width: 800,
      height: 600,
    },
    {
      src: '/img/pergola/nastresnica-lucna-tekstilna.jpg',
      width: 800,
      height: 600,
    },
    { src: '/img/pergola/nastresnica-obična.jpg', width: 800, height: 600 },
    { src: '/img/pergola/nastresnica-oktavus.jpg', width: 800, height: 600 },
    {
      src: '/img/pergola/nastresnica-sa-zategama.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/pergola/nastresnica-samostojeca.jpg',
      width: 800,
      height: 600,
    },
    { src: '/img/pergola/nastresnica-standardna.jpg', width: 800, height: 600 },
    { src: '/img/pergola/nastresnica-tekstilne.jpg', width: 800, height: 600 },
    {
      src: '/img/pergola/nastresnica-ugostiteljstvo1.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/pergola/nastresnica-ugostiteljstvo2.jpg',
      width: 800,
      height: 600,
    },
  ]
  return (
    <section id='pergola'>
      <Hero
        title='Pergole'
        subtitle='Najbolja zaštita od sunca'
        image='/img/pergola/pergola-3a.jpg'
      />
      <article className='container prose pt-8 dark:prose-invert'>
        <h2>Pergole</h2>
        <p>
          Pergole su najsavremeniji i najefikasniji pokretni sistem zaštite od
          spoljnih vremenskih uticaja za bašte restorana, kafića i hotela, kao i
          za terase vaših kuća ili stanova. Pergole vas čuvaju od sunca i kiše,
          daju novu atmosferu prostoru i dodatnu privatnost. Svojom
          jednostavnošću u pogledu rukovanja i održavanja čine da se uvek
          osećate ugodno i prijatno. Njihove mogućnosti primene su brojne – od
          lake pergole kao letnje zasene do sistema aluminijumske konstrukcije
          na motorni pogon sa pokretnim lamelama koje regulišu sunčevu svetlost.
        </p>
        <p>
          Osim što predstavljaju funkcionalno i kvalitetno rešenje za uređenje
          dvorišta, estetski su uklopive, budući da postoji mogućnost odabira
          boje pergole po želji.
        </p>
        <p>
          Napravljene su od materijala na bazi PVC-a (3D blockout) ili od
          aluminijuma, koji ne propuštaju vodu, štite od vetra i sunčevih zraka
          tokom cele godine. Krov može biti od PVC troslojnog platna ili od
          aluminijumskih lamela, koje mogu biti ispunjene termoizolacionom
          penom.
        </p>
        <p>
          Sve naše pergole su opremljene elektromotorom sa daljinskom komandom.
          Dodatnu automatiku pružaju senzori za sunce i kišu koji regulišu
          otvaranje/zatvaranje pergola. Pergole mogu biti kontrolisane i SMART
          HOME sistemima što pruža apsolutni komfor za korisnike.
        </p>
        <p>
          LED rastaveta ima mogućnost pojačavanja i smanjivanja intenziteta
          svetla. Imamo više modela koji se razlikuju po nameni, konstrukciji i
          dezenu i odgovaraju različitim potrebama.
        </p>
        <h2>Pergole za ugostiteljstvo</h2>
        <p>
          Pružajući zaštitu od sunca i kiše tokom cele godine, tekstilne i
          bioklimatske pergole postale su neizostavna oprema ekstrerijera
          ugostiteljskih objekata. Sve češće se bočne stranice zatvaraju
          staklenim panelima koji pružaju dodatnu zaštitu, posebno tokom zimske
          sezone.
        </p>
        <p>
          Bioklimatske pergole obezbeđuju idealne svetlosne i ventilacione
          uslove tako da prostor pod pergolom postaje prijatniji, bez obzira na
          spoljnu temperaturu.
        </p>
        <h2>Modeli</h2>
        <h3>Samostojeća bioklimatska pergola</h3>
        <p>
          Konstrukcija je napravljena od aluminijumskih stubova i greda sa
          pokretnim lamelama. Promena nagiba lamela vrši se pomoću upravljačkog
          mehanizma. Sistem poseduje integrisani sistem odvođenja vode kroz
          oluke i stubove.
        </p>
        <h3>Bioklimatska pergola sa pokretnim krovom</h3>
        <p>
          Konstrukcija je napravljena od aluminijumskih stubova i greda sa
          skupljajućim lamelama. Promena nagiba lamela vrši se pomoću
          upravljačkog mehanizma. Sistem poseduje integrisani sistem odvođenja
          vode kroz oluke i stubove.
        </p>
        <h3>Standardna pergola (tekstilna)</h3>
        <p>
          Funkcionalna i napredna tehnologija sistema pergola koje se mogu
          automatski otvorati i zatvarati u odnosu na vremenske uslove.
          Konstrukcija je ekstrudirani aluminijum. Kombinacija kvaliteta,
          komfora i modernog dizajna nudi vam prijatan prostor tokom cele
          godine.
        </p>
        <h3>Pergola sa zategama (tekstilna)</h3>
        <p>
          Konzolna pergola bez sistema stubova omogućava prijatan ambijent
          korisniku zahvaljujući svojoj jednostavnoj funkciji automatskog
          sklapanja (folding structure). Pogodna je za stambene objekte sa
          projekcijom do 600 cm.
        </p>
        <h3>Lučna tekstilna pergola</h3>
        <p>
          Vrhunski kvalitet i jednostavnost upotrebe. Ovalna struktura unosi
          arhitektonsku estetiku u svakoj primeni. Jedinstveni dizajn i laka
          konstrukcija.
        </p>
        <h3>Laka tekstilna pergola</h3>
        <p>
          Prozračni i lagani dizajn, maksimalna površina jednog polja je 60m².
          Patentirana tehnologija i laka ugradnja.
        </p>
        <h2>Dodatna oprema</h2>
        <ul>
          <li>Sistem LED rasvete sa daljinskom regulacijom</li>
          <li>
            Zastakljivanje klizno / podiznim mehanizmom na ručni ili motorni
            pogon
          </li>
          <li>Zaštita od sunca uz pomoć ZIP SCREEN sistema</li>
          <li>Klizni paneli sa skrin platnom</li>
          <li>Klizni paneli sa ispunom od aluminjumskih lamela (žaluzine)</li>
        </ul>
        <p>
          Pogledajte pergole iz naše ponude i odaberite adekvatnu zaštitu za
          vaše dvorište, terasu, lokal ili poslovni prostor. Saradnju zasnivamo
          na izradi kvalitetnih pergola, kombinujući vaše želje i stručne
          savete, kako bismo dobili idealan gotov proizvod.
        </p>
        <hr />
        <h2>Fotografije koje imamo:</h2>
        <PhotoAlbum layout='rows' photos={photos} />
        <hr />
        <h2>Fotografije sa neta:</h2>
        <PhotoAlbum layout='rows' photos={photos2} />
      </article>
    </section>
  )
}
