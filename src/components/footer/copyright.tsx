export default function Copyright() {
  return (
    <section className='bg-lucar-gray p-4 text-white'>
      <p className='container flex'>
        <span className='font-extrabold'>
          © {new Date().getFullYear()} by Lucar.
        </span>{' '}
        <span className='ml-auto p-1 text-sm font-light'>
          Powered by <a href='//macmladen.com'>MacMladen</a>.
        </span>
      </p>
    </section>
  )
}
