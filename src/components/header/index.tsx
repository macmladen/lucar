import Logo from '@/components/header/logo'
import NavMenu from '@/components/header/nav'

export default function Header() {
  return (
    <header className='dark:prose-invert'>
      <div className='container'>
        <Logo />
        <NavMenu />
      </div>
    </header>
  )
}
