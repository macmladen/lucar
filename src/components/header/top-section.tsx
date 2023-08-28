import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function TopSection() {
  // Keep style, stupid tailwind 'lucide'
  return (
    <section className='bg-lucar-blue p-4 text-sm text-white'>
      <p className='container'>
        <Clock />
        Ponedeljak – petak 09-19, Subota 09-15
        <Phone />
        <Link href='tel:+381642446031'>+381642446031</Link>,{' '}
        <Link href='tel:+381638085113'>+381638085113</Link>
        <Mail />
        <Link href='office@lucar.rs'>office@lucar.rs</Link>
        <MapPin />
        Povrtarska 30, Novi Sad
      </p>
    </section>
  )
}
