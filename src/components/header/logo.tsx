import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <section id='logo' className='flex'>
      <Link href='/'>
        <Image
          src='/img/lucar_logo.png'
          width={1200}
          height={675}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: 'clamp(40px, 10vw, 70px)',
          }}
          alt='We are Lucar'
        />
      </Link>
    </section>
  )
}
