import products from '../../../public/data/products.json';
import { Product } from '~/interfaces';
import { useParams } from '@remix-run/react';
import { getDiscountedPrice, getFormattedPrice } from '~/utils';
import { Minus, Plus, ShoppingCart, Star } from 'react-feather';
import { useState } from 'react';
import { Comments, Description, Specifications } from '~/components/Product';

interface Section {
  id: number;
  name: string;
}

export const sections: Section[] = [
  { id: 1, name: 'Description' },
  { id: 2, name: 'Specifications' },
  { id: 3, name: 'Comments' },
  { id: 4, name: 'Others' },
];

export default function SingleProduct() {
  const [currentSection, setCurrentSection] = useState(1);

  const { productId } = useParams();

  if (productId === undefined) return;

  const product: Product | undefined = products.find(
    (item) => item.id === parseInt(productId),
  );

  if (product === undefined) return; // TODO: page 404

  const formattedPrice = getFormattedPrice(product.price);
  const formattedDiscountedPrice = getFormattedPrice(
    getDiscountedPrice(product.price, product.discountPercentage),
  );

  const handleToggleSection = (sectionId: number): void => {
    setCurrentSection(sectionId);
  };

  return (
    <>
      <h5 className='px-16 mt-2 text-zinc-600 max-md:mt-6'>
        Home {'>'}
        <strong className='font-semibold text-zinc-700'> {product.name}</strong>
      </h5>

      <section className='grid grid-cols-[7fr_6fr] px-16 mt-12 gap-6 max-md:grid-cols-1'>
        <div className='relative'>
          <div className='absolute flex flex-col gap-1'>
            {[1, 2, 3].map((e) => (
              <button
                key={e}
                className='border border-zinc-500 size-12 rounded-md max-sm:size-10'
              >
                <img
                  src={product.image}
                  alt=''
                  className='w-full h-full rounded-md'
                />
              </button>
            ))}
          </div>
          <img
            src={product.image}
            alt=''
            className='min-h-[400px] max-h-[600px] w-full object-contain'
          />
        </div>
        <aside>
          <h1 className='text-2xl font-semibold'>{product.name}</h1>
          <div className='flex justify-between w-full items-center gap-2 mt-3 xl:flex-row xl:items-center lg:flex-row max-xl:items-start md:flex-col max-sm:flex-col'>
            <div className='grid gap-1'>
              <h3 className='text-zinc-500 text-lg'>{product.branch}</h3>
              <h3 className='text-red-500 text-sm'>
                Part number: {product.partNumber}
              </h3>
            </div>
            <div className='border border-green-500 text-green-500 rounded-lg py-2 px-4 text-sm'>
              <p>3 Remaining in stock</p>
            </div>
          </div>

          <div className='mt-6 inline-flex gap-1 text-yellow-400 text-md'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill='currentColor' size={20} />
            ))}
            <span className='text-zinc-800'>(2)</span>
          </div>

          <div className='mt-10 text-3xl max-lg:mt-4'>
            <del className='text-zinc-500 text-xl'>${formattedPrice}</del>
            <h2 className='text-red-600 font-bold'>
              {formattedDiscountedPrice}{' '}
              <small className='text-zinc-500 font-medium text-lg'>
                (Inc. GST)
              </small>
            </h2>
          </div>

          <div className='mt-6'>
            <p className='text-md'>Quantity</p>
            <div className='flex justify-between mt-1 gap-2 max-lg:flex-col'>
              <div className='h-14 w-44 max-lg:w-full'>
                <div className='flex flex-row w-full h-full relative bg-zinc-100 border border-zinc-300 rounded-xl'>
                  <button
                    data-action='decrement'
                    className='h-full w-36 border border-r-zinc-300 rounded-xl rounded-r-none grid place-items-center text-zinc-500 hover:bg-zinc-200'
                  >
                    <Minus />
                  </button>
                  <input
                    type='text'
                    className='focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none'
                    name='custom-input-number'
                    value='0'
                  ></input>
                  <button
                    data-action='increment'
                    className='h-full w-36 border border-l-zinc-300 rounded-xl rounded-l-none grid place-items-center text-zinc-500 hover:bg-zinc-200'
                  >
                    <Plus />
                  </button>
                </div>
              </div>
              <div className='w-full h-14'>
                <button className='w-full h-full rounded-xl bg-red-500 text-white flex items-center justify-center gap-2 transition-all duration-100 hover:bg-red-600'>
                  <ShoppingCart />
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <article className='px-16 mt-2 mb-10 max-md:mt-10'>
        <div className='w-full grid grid-cols-4 mb-10 max-sm:grid-cols-2'>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                handleToggleSection(section.id);
              }}
              className={`w-full p-1 border-b-2 transition-all ${section.id === currentSection ? 'text-red-500 font-semibold border-b-red-500' : 'border-b-zinc-400 text-zinc-500 border-b-transparent'}`}
            >
              {section.name}
            </button>
          ))}
        </div>
        {currentSection === 1 ? (
          <Description name={product.name} />
        ) : currentSection === 2 ? (
          <Specifications />
        ) : currentSection === 3 ? (
          <Comments />
        ) : (
          <h1>nothing</h1>
        )}
      </article>
    </>
  );
}
