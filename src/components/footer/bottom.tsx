export default function Bottom() {
  return (
    <section className='bg-lucar-blue text-white'>
      <div className='container flex gap-5 py-8'>
        <div className='flex-1'>
          <h3>O nama</h3>
          <p>"Lucar" SZTR je mala porodična firma iz Novog Sada.</p>
          <p>
            Osnovana je 1997. kao servis za ugradnju autogas sistema za
            automobile.
          </p>
          <p>
            Otada se posao širio, naša interesovanja su bila usmerena i na druge
            stvari, pa smo 2011. počeli da proizvodimo i ugrađujemo segmentna
            industrijska i garažna vrata.
          </p>
        </div>
        <div className='flex-1'>
          <h3>Usluge</h3>
          <ul>
            <li>
              <a href='/tng'>TNG uređaji</a>
            </li>
            <li>
              <a href='/cng'>CNG uređaji</a>
            </li>
            <li>
              <a href='/mosquito-net'>Komarnici</a>
            </li>
            <li>
              <a href='/rolo'>Rolo vrata</a>
            </li>
            <li>
              <a href='/segment'>Segmentna</a>
            </li>
            <li>
              <a href='/pergola'>Pergole</a>
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3>Kontakt</h3>
          <p>tel +381642446031, +381638085113</p>
          <p>
            Povrtarska 30,
            <br />
            Novi Sad
          </p>
        </div>
        <div className='flex-1'>
          <h3>Radno vreme</h3>
          <p>Ponedeljak – petak 09-19</p>
          <p>Subota 09-15</p>
          <p>Nedeljom ne radimo</p>
        </div>
      </div>
    </section>
  )
}
