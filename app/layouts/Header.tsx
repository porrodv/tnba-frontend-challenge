import { useState } from 'react';
import {
  ChevronDown,
  Menu,
  MessageSquare,
  Search,
  ShoppingCart,
  X,
} from 'react-feather';

interface Link {
  name: string;
  url: string;
  items?: Link[];
}

const links: Link[] = [
  {
    name: 'Welding Helmets',
    url: '/',
    items: [
      { name: 'Link 1', url: '/' },
      { name: 'Link 2', url: '/' },
    ],
  },
  {
    name: 'Welding Helmets Parts',
    url: '.',
    items: [
      { name: 'Link 1', url: '/' },
      { name: 'Link 2', url: '/' },
    ],
  },
  { name: 'Square Pants Bundles', url: '.' },
  { name: 'Welding Gloves', url: '.' },
  { name: 'Quotes, Bulk buys and Tenders', url: '.' },
  { name: 'Special Offers', url: '.' },
  {
    name: 'Free delivery policy',
    url: '/free-delivery-and-welding-helmet-support',
  },
  { name: 'About', url: '.' },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className='pt-4 pb-1 px-5 font-roboto'>
      {/* Menú backdrop */}
      <div
        id='menu-backdrop'
        className={`inset-0 bg-gray-800 opacity-25 z-50 ${showMenu ? 'fixed' : 'hidden'}`}
      ></div>

      <div className='inline-flex justify-between w-full gap-2 max-lg:grid max-lg:grid-cols-[1fr_4fr_1fr] max-lg:grid-rows-3'>
        <div id='hamburger' className='flex items-center'>
          <button
            onClick={openMenu}
            type='button'
            className='relative bg-white p-1 rounded-full text-gray-800 hover:bg-zinc-200 hover:text-gray-900 transition-all lg:hidden'
          >
            <Menu size={30} />
          </button>
        </div>

        <a href='/' className='h-auto flex items-center justify-center'>
          <img
            className='h-14 max-w-[800px] max-sm:w-full'
            src='https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/logo_weldinghelmetsonline-C2VEEW2E.webp'
            alt='Welding Helmets Online logo'
          />
        </a>

        <div className='relative w-full flex items-center max-lg-absolute max-lg:col-span-3'>
          <form action='' className='w-full h-14 flex shadow-sm'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search by part number or product name'
              className='w-full h-full p-3 border rounded-l-md px-5'
            />
            <button className='bg-red-600 text-white p-4 rounded-r-md'>
              <Search />
            </button>
          </form>
        </div>

        <a
          href='/'
          className='inline-flex min-w-64 gap-3 text-zinc-700 items-center justify-center max-lg:col-span-3'
        >
          <MessageSquare size={25} />
          <div className='min-w-36 max-lg:flex max-lg:gap-2 max-lg:items-center max-sm:flex-col'>
            <p className='font-bold'>Speak to an Expert</p>
            <p className='text-xs'>1800 HELMET (1800 435 638)</p>
          </div>
        </a>

        <div className='flex items-center justify-end px-1 max-lg:col-start-3 max-lg:row-start-1 group'>
          <a
            className='relative flex items-center justify-center text-zinc-700 transition-all duration-75 group-hover:scale-110 size-12'
            href='/cart'
          >
            <ShoppingCart size={30} />
            <div className='absolute top-0 right-0 bg-red-600 rounded-full size-5 text-white grid place-items-center text-xs font-semibold'>
              <span>0</span>
            </div>
          </a>
        </div>
      </div>

      {/* Menú */}
      <div
        id='menu'
        className={`fixed inset-0 z-50 transition-all duration-150 ease-out transform ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <section className='fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-6 px-5 bg-zinc-800 overflow-y-auto'>
          <div className='flex items-center mb-8'>
            <button
              className='text-zinc-200 rounded-full p-1 hover:text-zinc-300 hover:bg-zinc-600 transition-all'
              onClick={closeMenu}
            >
              <X size={30} />
            </button>
          </div>
          <div className='text-zinc-400'>
            <ul>
              {links.map((item) => (
                <li key={item.name} className='mb-1'>
                  {item.items === undefined ? (
                    <a
                      href={item.url}
                      className='flex items-center gap-2 p-4 text-sm font-semibold rounded hover:bg-zinc-500 hover:text-white'
                    >
                      {item.name}
                    </a>
                  ) : (
                    <div className='text-sm font-semibold rounded hover:bg-zinc-500 hover:text-white'>
                      <>
                        <button
                          className='flex items-center gap-1 w-full p-4'
                          onClick={() => alert('hola')}
                        >
                          {item.name}
                          <span>
                            <ChevronDown size={15} />
                          </span>
                        </button>

                        {/* terminar */}
                        <div className='invisible absolute z-50 flex w-full flex-col bg-zinc-100 py-1 px-2 shadow-xl group-hover:visible'>
                          {item.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.url}
                              className='my-2 block border-b border-gray-100 py-1  text-zinc-600 hover:text-gray-500 transition-all duration-[50ms] hover:scale-110 hover:translate-x-2'
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Links */}
      <nav className='w-full'>
        <ul className='flex items-center gap-8 text-sm font-semibold px-3 py-6 max-lg:hidden'>
          {links.map((item) => (
            <li key={item.name}>
              {item.items === undefined ? (
                <a
                  href={item.url}
                  className='flex items-center transition-all duration-[50ms] hover:text-gray-500 hover:scale-110'
                >
                  {item.name}
                </a>
              ) : (
                <div className='flex items-center justify-center'>
                  <div className='group relative cursor-pointer'>
                    <a
                      href='/'
                      className='flex items-center gap-1 group-hover:text-gray-500'
                    >
                      {item.name}
                      <span>
                        <ChevronDown size={15} />
                      </span>
                    </a>

                    <div className='invisible absolute z-50 flex w-full flex-col bg-zinc-100 py-1 px-4 shadow-xl group-hover:visible'>
                      {item.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          className='my-2 block border-b border-none py-1  text-zinc-600 hover:text-gray-500 transition-transform duration-[50ms] hover:scale-110 hover:translate-x-2'
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
