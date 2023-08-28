import Link from 'next/link'

export default function NavMenu() {
  return (
    <nav className='text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200'>
      <ul className='flex space-x-8'>
        <li>
          <Link
            href='/tng'
            className='hover:text-sky-500 dark:hover:text-sky-400'
          >
            TNG
          </Link>
        </li>
        <li>
          <Link
            href='/cng'
            className='hover:text-sky-500 dark:hover:text-sky-400'
          >
            CNG
          </Link>
        </li>
        <li>
          <Link
            href='/mosquito-net'
            className='hover:text-sky-500 dark:hover:text-sky-400'
          >
            Komarnici
          </Link>
        </li>
        <li>
          <Link
            href='/rolo-door'
            className='hover:text-sky-500 dark:hover:text-sky-400'
          >
            Rolo vrata
          </Link>
        </li>
        <li>
          <Link
            href='/pergola'
            className='hover:text-sky-500 dark:hover:text-sky-400'
          >
            Pergole
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='hover:text-sky-500 dark:hover:text-sky-400'
          >
            O nama
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className='hover:text-sky-500 dark:hover:text-sky-400'
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  )
}
