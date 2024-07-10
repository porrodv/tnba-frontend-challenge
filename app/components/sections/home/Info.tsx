export default function Info() {
  return (
    <section
      id='info'
      className='w-full text-zinc-800 mt-28 bg-gradient-to-t from-white via-zinc-100 to-white'
    >
      <article className='w-full text-center flex flex-col items-center'>
        <div className='w-1/2 max-md:w-full'>
          <h1 className='text-3xl text-zinc-700 font-bold font-mont'>
            SHOP WELDING HELMETS BY MOST POPULAR WELDING HELMET BRANDS
          </h1>
        </div>
        <div className='grid place-items-center'>
          <div className='grid grid-cols-2 gap-4 place-items-center max-sm:grid-cols-1'>
            <a href='.'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCahrBTaI9BIMtbyzcSSU4mIoMVMSXm2l-g&s'
                alt='Speedglass Logo'
                className='w-52 h-28 object-contain'
              />
            </a>
            <a href='.'>
              <img
                src='https://1000marcas.net/wp-content/uploads/2020/05/Logo-3M.png'
                alt='Speedglass Logo'
                className='w-52 h-14 object-contain'
              />
            </a>
          </div>
        </div>
      </article>

      <article className='w-full text-center flex flex-col items-center mt-32'>
        <div className='w-1/2 max-md:w-full'>
          <h1 className='text-3xl text-zinc-700 font-bold font-mont'>
            OUR PARTNERS
          </h1>
        </div>
        <div className='grid place-items-center'>
          <div className='grid grid-cols-2 gap-4 place-items-center max-sm:grid-cols-1'>
            <a href='.'>
              <img
                src='https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/weldinghelmetsonline-speedglas-UYQ76BIG.avif'
                alt='Speedglass Logo'
                className='w-52 h-28 object-contain'
              />
            </a>
            <a href='.'>
              <img
                src='https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/weldinhelmetsonline-clearwelding-OTHGTLRF.avif'
                alt='Speedglass Logo'
                className='w-52 h-28 object-contain'
              />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
