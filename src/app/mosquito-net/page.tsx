import Hero from '@/components/blocks/hero'
import PhotoAlbum from 'react-photo-album'

export default function mosquitoNet() {
  const ourWork = [
    {
      src: '/img/mosquitonet/mosquito-net-balcony.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/mosquito-net-door-1.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/mosquito-net-door-2a.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/mosquito-net-door-2b.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/mosquito-net-window-1.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/mosquito-net-window-2.jpg',
      width: 800,
      height: 600,
    },
  ]
  const netPhotos = [
    { src: '/img/mosquitonet/komarnici-fixed-1.jpg', width: 800, height: 600 },
    { src: '/img/mosquitonet/komarnici-fixed-2.jpg', width: 800, height: 600 },
    { src: '/img/mosquitonet/komarnici-fixed-3.jpg', width: 800, height: 600 },
    {
      src: '/img/mosquitonet/komarnici-fixed-door-plisse-1.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/komarnici-fixed-door-plisse-2.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/komarnici-fixed-door-plisse-3.jpeg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/komarnici-fixed-door-plisse-4.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/komarnici-fixed-hinge.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/img/mosquitonet/komarnici-fixed-window-plisse-1.jpg',
      width: 800,
      height: 600,
    },
    { src: '/img/mosquitonet/komarnici-rolo-1.jpg', width: 800, height: 600 },
    { src: '/img/mosquitonet/komarnici-rolo-1.png', width: 800, height: 600 },
    { src: '/img/mosquitonet/komarnici-rolo-2.jpg', width: 800, height: 600 },
  ]
  return (
    <section id='mosquito-net'>
      <Hero
        title='Komarnici'
        subtitle='Plise, rolo i fiksni'
        image='/img/mosquitonet/mosquito-net-window-2.jpg'
      />
      <article className='container prose my-20 dark:prose-invert'>
        <h2>Zašto komarnici</h2>
        <p>
          Komarnici su ekološka i trajna zaštita od svih insekata. Vrlo su
          praktični i gotovo neprimetni u Vašem prostoru.{' '}
        </p>
        <p>
          Već dugi niz godina za svoje klijente ugrađujemo komarnike po meri.
          Komarnici su izrađeni od najkvalitetnijih aluminjimskih i PVC
          materijala koji garantuju dug vek trajanja. U našoj ponudi se mogu
          naći jednodelni i dvodelni komarnici za vrata i komarnici za prozore.
        </p>
        <h3>Tipovi komarnika:</h3>
        <ul>
          <li>Plise komarnici</li>
          <li>Rolo komarnici</li>
          <li>Fiksni komarnici</li>
        </ul>
        <p>
          Bilo da vam trebaju komarnici za vrata, prozore ili komarnici za
          balkonska vrata, naš stručni tim će vam pomoći u izboru! Dolazak na
          adresu radi uzimanja mera i montaža komarnika su BESPLATNI!
        </p>
        <video autoPlay loop controls width='360' height='480'>
          <source src='/img/mosquitonet/mosquito-net-door.mp4' />
        </video>
        <h2>Plise komarnici</h2>
        <p>
          Naša topla preporuka za stambeni ili radni prostor su PLISE KOMARNICI.
          Reč je o kliznim komarnicima sa plisiranom mrežom koja se širi i
          skuplja, poput harmonike. Njihovi osnovni delovi su aluminijumsko
          kućište i vođica sa fiberglas mrežicom. Izrađuju se po meri, u
          zavisnosti od toga da li su namenjeni za prozore ili vrata.
        </p>
        <p>
          Plisirana mreža je vrlo izdržljiva, tako da svakodnevnom upotrebom ne
          može da bude oštećena. Korisno je znati da je to jedina plisirana
          mreža koja postoji na tržištu a da se njene ivice ne lome od sunca i
          ne razlažu se od vlage, a takođe ni udari vetra joj ne mogu ništa.
          Pored toga, mrežicu karakteriše izuzetno visok stepen propustljivosti
          svetla i vazduha, na UV zrake je trajno otporna, kao i na koroziju,
          nezapaljiva je i ne bledi od sunca. Mreža je ojačana nitima velike
          izdržljivosti, tako da se neće iskriviti ili deformisati, ni pod jakim
          udarima i naletima vetra, niti oštetiti od svakodnevnog habanja. U
          toku zime, mreža se skupi u svoju aluminijumsku kutiju, pa se na taj
          način štiti od spoljašnjih uticaja. Zatvaranje i otvaranje plise
          komarnika omogućeno je i sa spoljne i sa unutrašnje strane i njima se
          vrlo jednostavno rukuje.
        </p>
        <p>
          Kada je reč o estetskom izgledu plisiranih komarnika, a što je veoma
          bitno kako za enterijer, tako i za eksterijer objekta, naglasićemo da
          se plise komarnici obično izrađuju u beloj i braon boji, a
          plastifikacija se radi po vašem zahtevu. Aluminijumski ram se boji
          prema željama kupca, što daje lepu estetsku notu prostoru. Što se same
          mreže tiče, ona je dostupna u sivoj i crnoj boji. Podela plise
          komarnika može se izvršiti na horizontalne i vertikalne, a postoje i
          dvokrilni, koji su pogodni za velike površine. Mogu da se ugrađuju
          tokom čitave godine, a ne samo u letnjem periodu.
        </p>
        <p>
          Cena plise komarnika zavisi pre svega od dimenizja otvora, ali i od
          toga da li su vam potrebni jednodelni, dvodelni ili slim-plise
          komarnici.{' '}
        </p>
        <h2>Rolo komarnici </h2>
        <p>
          Rolo komarnici predstavljaju pre svega zdravo i izuzetno efikasno i
          dugotrajno rešenje za zaštitu od svih insekata.
        </p>
        <p>
          Mnogi ljudi vole da na svojim prozorima zalivaju cveće, sunčaju
          posteljinu, hrane golubove. U tom smislu rolo komarnici su idealno
          rešenje ako sa tim aktivnostima želite da nastavite i nakon ugradnje.
        </p>
        <p>
          Rolo komarnik funkcioniše jednostavno: kada podignete komarnik, on se
          poput roletne namota u kutiju. Pored sistema otvaranja i zatvaranja,
          kod rolo komarnika je najvažnija mrežica. Ona se izrađuje od
          fiberglasa tako da osigurava optimalnu zategnutost, ali i otpornost i
          stabilnost u odnosu na različite vremenske uslove.
        </p>
        <p>
          Rolo komarnici su izrađeni od aluminijumskih profila sa završnom
          aluminijumskom lajsnom, kao načinom zatvaranja komarnika. Način
          otvaranja rolo komarnika je horizontalno i vertikalno. Vrlo je važno
          naglasiti da mrežica ni na koji način ne sprečava ulazak svetlosti i
          svežeg vazduha u prostor, a dizajn rolo komarnika omogućava
          funkcionalnost i privlačan estetski izgled prozora ili vrata.{' '}
        </p>
        <p>
          Delovi rolo komarnika su i kutija i stubovi, koji se prave od
          aluminijuma, i on se najčešće plastificira u belu, braon ili sivu
          nijansu.{' '}
        </p>
        <p>
          Rolo komarnicima se lako rukuje, montaža je takođe jednostavan
          postupak, a sama mrežica može da poseduje i UV zaštitu.
        </p>
        <p>
          Mrežica ne može da se naglo namotava, pošto ima ugrađen usporivač, a
          ugradnja je direktno na štok sa spoljašnje strane prozora. Spuštanje i
          podizanje je lako, i radi se uz pomoć ručice sa kanapom, i tada se
          mreža namota u svoje kućište, kroz vodilice sa četkicama.
        </p>
        <p>
          Rolo komarnici se izrađuju u dva različita sistema – za vrata i za
          prozore. Ono što čini glavnu razliku, jeste da se kod rolo komarnika
          za balkonska vrata mrežica povlači u smeru levo-desno, dok se kod
          prozorskih rolo komarnika, mrežica povuče na gore ili na dole.
        </p>
        <h2>Fiksni komarnici</h2>
        <p>
          Fiksni komarnici namenjeni su za prozore kod kojih se ne planira
          pomeranje mrežice. Međutim, ostavljena je mogućnost da se oni ipak
          skinu kada prođe sezona i da se kasnije ponovo postave.
        </p>
        <p>
          Jednostavnu montažu ili demontažu fiksnog komarnika osigurava alu
          profil, mrežica i guma koja spaja profil i mrežu. Koriste se mreže od
          fiberglasa ili aluminijumske mreže, radi povećane izdržljivosti.
          Mrežica je skoro nevidljiva, a pri tome izuzetno jaka, tako da joj ne
          mogu ništa udari vetra, jako sunce, sneg ili kiša..
        </p>
        <p>
          Prilikom montaže fiksnih komarnika vrši se njihovo pričvršćivanje za
          prozor metalnim vijcima i silikonom. Montaža je direktno na prozorski
          okvir. Fiksni komarnik poseduje aluminijumski okvir, što znači da
          možete da birate između više nijansi boja.
        </p>
        <p>
          Kod fiksnih komarnika ne postoji mogućnost prolaza (za razliku od rolo
          komarnika), a ukoliko želite da operete prozore, fiksne komarnike
          možete da skinete i da ih kasnije vratite na mesto.
        </p>
        <p>
          Dakle, ako je funkcija prozora samo cirkulacija vazduha, tada je izbor
          fiksnih komarnika prava odluka. Dobra osobina je da omogućavaju
          neometan prodor svetlosti i svežeg vazduha i da je mrežica skoro
          sasvim neprimetna. Na fiksne komarnike se možete osloniti kao na
          pouzdanu zaštitu od komaraca i svih drugih insekata, te imati mirne
          letnje večeri i spokojne noći, bez ikakvih nelagodnosti.
        </p>
        <p>
          Posebnu podvrstu panelnih komarnika predstavlja Američki komarnik –
          koji je ceo pričvršćen za ram a ima mehanizam za otvaranje, tako da je
          dobar izbor za spoljna vrata i terase.{' '}
        </p>
        <hr />
        <h2>Naši projekti</h2>
        <PhotoAlbum layout='rows' photos={ourWork} />
        <hr />
        <h2>Fotografije sa neta:</h2>
        <PhotoAlbum layout='rows' photos={netPhotos} />
      </article>
    </section>
  )
}
