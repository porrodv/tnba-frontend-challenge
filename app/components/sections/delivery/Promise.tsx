import { MapPin } from 'react-feather';

const locations = [
  { location: 'NSW', minDays: 1, maxDays: 2 },
  { location: 'Victoria', minDays: 1, maxDays: 2 },
  { location: 'Tasmania', minDays: 2, maxDays: 3 },
  { location: 'Queensland', minDays: 1, maxDays: 3 },
  { location: 'South Australia', minDays: 4, maxDays: 6 },
  { location: 'Northen Territory', minDays: 4, maxDays: 6 },
  { location: 'Western Australia', minDays: 5, maxDays: 6 },
];

export default function Promise() {
  return (
    <section
      id='delivery-promise'
      className='text-center w-full text-zinc-700 mt-44'
    >
      <h1 className='text-3xl font-semibold font-mont'>Our delivery promise</h1>

      <div className='w-full grid grid-cols-2 gap-14 mt-14 max-md:grid-cols-1'>
        <article className='text-justify flex flex-col justify-center'>
          <h3 className='text-lg'>
            Welding Helmets Online attempt to carry all core and fast moving
            products in stock.{' '}
            <strong className='text-yellow-300'>
              We are generally able to dispatch the same day you order
            </strong>{' '}
            (if you order before midday Monday - Friday).
          </h3>
          <h4 className='mt-3 text-lg'>
            With some less common parts, or if we have just fulfilled large
            orders, we sometimes need to order stock in which generally only
            takes 24 hours. In this case we move quickly to ensure you don’t
            wait longer than you need to and{' '}
            <strong className='text-yellow-300'>
              keep you up-to-date throughout the entire process.
            </strong>
          </h4>
        </article>
        <div className='flex flex-col justify-center items-center text-center gap-6'>
          <div>
            <h4 className='text-lg font-semibold'>Estimated delivery times</h4>
            <h5 className='text-sm text-zinc-500'>(via Australia Post)</h5>
          </div>
          <div className='text-sm grid grid-cols-2 w-full gap-x-20 gap-y-2 max-xl:gap-x-8 max-lg:grid-cols-1'>
            {locations.map(({ location, minDays, maxDays }, index) => (
              <h5
                key={index}
                className='inline-flex w-full items-center justify-between text-zinc-500'
              >
                <strong className='inline-flex items-center text-start gap-2 font-medium text-zinc-700'>
                  <MapPin /> {location}
                </strong>{' '}
                {minDays}-{maxDays} days
              </h5>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
