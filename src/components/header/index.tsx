import Logo from '@/components/header/logo'
import NavMenu from '@/components/header/nav'
import TopSection from '@/components/header/top-section'

export default function Header() {
  return (
    <header className='dark:prose-invert'>
      <TopSection />
      <div className='container'>
        <Logo />
        <NavMenu />
      </div>
    </header>
  )
}
