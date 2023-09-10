export default function Hero({ image, title, subtitle }) {
  return (
    <header
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
      }}
      className='bg-cover text-white'
    >
      <div className='flex h-72 items-center bg-lucar-blue/75'>
        <h1 className='m-auto text-center'>
          <span className='text-4xl font-black'>{title}</span>
          <br />
          <br />
          <span className='text-2xl'>{subtitle}</span>
        </h1>
      </div>
    </header>
  )
}
