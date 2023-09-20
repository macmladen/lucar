import Logo from '@/components/header/logo'
import NavMenu from '@/components/header/nav'
import TopSection from '@/components/header/top-section'

export default function Header() {
  return (
    <header id='header' className='dark:prose-invert'>
      <TopSection />
      <section id='navigation' className='container py-4'>
        <Logo />
        <NavMenu />
      </section>
    </header>
  )
}
