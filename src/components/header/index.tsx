import NavMenu from '@/components/header/nav'

export default function Header() {
  return (
    <header className='dark:prose-invert'>
      <div className='container'>
        <NavMenu />
      </div>
    </header>
  )
}
