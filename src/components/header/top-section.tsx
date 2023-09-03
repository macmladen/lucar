import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function TopSection() {
  // Keep style, stupid tailwind 'lucide'
  return (
    <section id='top-section' className='bg-lucar-blue p-4 text-sm text-white'>
      <p className='container'>
        <span>
          <Clock /> Ponedeljak – petak 09-19, Subota 09-15
        </span>
        <span className='ml-4'>
          <Phone /> <a href='tel:+381642446031'>+381642446031</a>,{' '}
          <a href='tel:+381638085113'>+381638085113</a>
        </span>
        <span className='ml-4'>
          <Mail />{' '}
          <a href='mailto:info@lovato-srbija.rs'>info@lovato-srbija.rs</a>
        </span>
        <span className='ml-4'>
          <MapPin /> <a href='#map'>Povrtarska 30, Novi Sad</a>
        </span>
      </p>
    </section>
  )
}
