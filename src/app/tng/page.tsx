import Hero from '@/components/blocks/hero'
import Gallery from '@/components/blocks/gallery'

const meta = {
  title: 'TNG - Tečni naftni gas',
  description:
    'Ugrađujemo plinske sisteme u vozila koja koriste benzin ili dizel kao primarni energent.',
  keywords: [
    'TNG',
    'LPG',
    'Ugradnja gasnog uređaja',
    'servis gasnog uređaja',
    'atest gasnih uređaja',
  ],
  image: {
    url: '/img/tng/tng.jpg',
    width: 1200,
    height: 675,
    alt: 'Ugradnja i održavanje TNG uređaja',
  },
}
export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.image],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: [meta.image],
  },
}

export default function Tng() {
  const ourWork = [{ src: '/img/tng/tng.jpg', width: 800, height: 600 }]
  return (
    <section id='tng'>
      <Hero
        image='/img/tng/tng.jpg'
        title='TNG'
        subtitle='(tečni naftni gas)'
      />
      <article className='container prose my-20 dark:prose-invert'>
        <h2>Šta je lpg (liquefied petroleum gas)/tng (tečni naftni gas)?</h2>
        <p>
          Tečni naftni gas se proizvodi u rafinerijama nafte kao nusproizvod
          naftnih derivata benzina, dizela, ulja za loženje i pri preradi tečnog
          sirovog plina. On je je mešavina trgovačkog propana i butana, sa
          zanemarljivim količinama vode, azota, kiseonika, amonijaka i sumpora.
        </p>
        <h2>Uticaj gasa na prirodu</h2>
        <p>
          Vozila s pogonom na autogas, u odnosu na dizel motore, ne ispuštaju
          dim, čvrste čestice i sumporne okside. U odnosu na benzinske motore ne
          ispuštaju olovo, proizvode manje ugljen-dioksida i nerazgradivih
          ugljovodonika. Svojim emisijama neuporedivo manje utiče na okolinu od
          bilo koje vrste benzina.
        </p>
        <h2>Ugradnja plina</h2>
        <p>
          Ugradnja plinskih sistema danas se može uraditi na više od 95 %
          automobila koja koriste benzin ili dizel kao primarni energent. Sistem
          korišćenja benzina vašeg vozila određuje koji će autogas sistem biti
          ugrađen.
        </p>
        <p>(slika sertifikata)</p>
        <p>
          Oprema za ugradnju benzina mora biti u skladu sa odgovarajućim
          standardima (67R01). Ugradnja te opreme takođe mora teći po strogo
          utvrđenim (67R01) pravilima. Po završenoj ugradnji u „Lucaru“ ćete
          dobiti uverenje (atest) nadležne institucije kao potvrdu da su svi
          sklopovi proizvedeni i ugrađeni po 67R01 standardima koji se
          primenjuje na teritoriji EU.
        </p>
        <h2>Proizvođači</h2>
        <p>(slika sertifikata/ugovora)</p>
        <p>
          Pravilnu ugradnju sistema za autogas obavlja servis i serviseri
          obučeni od strane proizvođača. Onda možete biti sigurni da serviser
          sarađuje direktno sa proizvođačem i ima podršku u slučaju fabričke
          greške.
        </p>
        <p>
          „Lucar“ poseduje sertifikate za ugradnju i održavanje autogas sistema.
        </p>
        <h2>Atest i reatest</h2>
        <p>
          Kod nas možete uraditi atest ili reatest bez obzira da li je ugradnja
          plinskog sistema urađena kod nas ili u nekom drugom servisu.
        </p>
        <p>
          Sva motorna vozila na kojima su instalirani sistemi moraju biti
          usklađena sa propisanim tehničkim uslovima - pre puštanja navedenih
          vozila u saobraćaj mora se utvrditi da li vozila ispunjavaju propisane
          uslove u skladu sa Zakonom o bezbednosti saobraćaja na putevima.
        </p>
        <p>
          Da biste dobili atest i reatest vozila, ključno je da ugradnja u
          vozilo ili prepravka budu urađeni u skladu sa postojećim propisima,
          uključujući prateću dokumentaciju.
        </p>
        <h2>Kako uraditi atest/reatest za plin?</h2>
        <p>
          „Lucar“ će vam obezbediti svu potrebnu dokumentaciju za vozila za koja
          je ugradnja plina urađena u našem servisu. Vaše je samo da obezbedite
          saobraćajnu dozvolu i uplatite uplatnice.
        </p>
        <p>
          Za atestiranje vozila u koja ugradnja nije izvršena u našem servisu,
          potrebno je da imate svu neophodnu dokumentaciju.
        </p>
        <p>
          Za reatestiranje takođe je potrebno da donesete propratnu
          dokumentaciju na uvid.
        </p>
        <h2>Servisiranje i redovno održavanje</h2>
        <p>
          Kada je sistem pravilno montiran i podešen, on zahteva samo redovno
          održavanje, i to na svakih 10.000 km. U to spada zamena gasnog filtera
          na svakom servisu. Čišćenje isparivača i zamena membrana su na 60.000
          km. Kontrole instalacije i uređaja se obavljaju jednom godišnje.
          Potrebno je izvršiti štelovanje autogasa nakon svake zamene filtera za
          vazduh jer se tom prilikom menja odnos vazduha i gasa, što dovodi do
          toga da automobil ima manju snagu.
        </p>
        <p>
          Boce ne zahtevaju nikakvo održavanje. Kutiju multiventila treba čuvati
          od direktnih udara težih predmeta a sam multiventil treba da je uvek
          zaštićen.
        </p>
        <hr />
        <h2>Ugradnja TNG sistema</h2>
        <Gallery ourWork={ourWork} />
      </article>
    </section>
  )
}
