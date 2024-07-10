export default function Free() {
  return (
    <section
      id='free-delivery'
      className='text-center w-full text-zinc-700 mt-14'
    >
      <h1 className='text-3xl font-semibold font-mont'>Free delivery</h1>
      <h3 className='text-lg text-zinc-500 font-mont'>In orders over $200</h3>

      <div className='w-full grid grid-cols-2 gap-14 mt-6 max-md:grid-cols-1'>
        <img
          src='/images/delivery.png'
          alt='Free delivery'
          className='w-full min-h-[300px]'
        />
        <article className='flex flex-col text-justify justify-center'>
          <h3 className='text-lg font-medium'>
            When you purchase over $200 you pay nothing to have your{' '}
            <strong className='text-yellow-300'>welding helmet, PAPR</strong> or{' '}
            <strong className='text-yellow-300'>spare parts</strong> delivered
            directly to your door anywhere in Australia saving you time, hassle,
            petrol and expense.
          </h3>
          <h3 className='text-lg pt-3'>
            If you only need a few bits and pieces under $200, don’t stress, a
            small fee of $20 will still see the products turn up at your door
            anywhere in Australia in a few days.
          </h3>
          <div className='inline-flex gap-6 mt-6 text-center max-md:justify-center max:sm:flex max-sm:flex-col'>
            <a
              href='/'
              className='rounded-full py-2 px-6 text-md border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-all duration-100'
            >
              Welding helmets
            </a>
            <a
              href='/'
              className='rounded-full py-2 px-6 text-md border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-all duration-100'
            >
              Welding PAPRs
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
