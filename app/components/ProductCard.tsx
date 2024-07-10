import { ShoppingCart } from 'react-feather';
import { Product } from '~/interfaces';
import { getDiscountedPrice, getFormattedPrice } from '~/utils';

export default function ProductCard({
  id,
  name,
  branch,
  category,
  partNumber,
  price,
  discountPercentage,
  image,
}: Product) {
  const formattedPrice = getFormattedPrice(price);
  const formattedDiscountedPrice = getFormattedPrice(
    getDiscountedPrice(price, discountPercentage),
  );

  return (
    <a href={`/products/${id}`} key={id} className='group'>
      <div className='relative flex flex-col h-full justify-between border rounded-xl p-3 text-zinc-800 border-zinc-200 group-hover:shadow-md transition-all'>
        <div className='absolute text-lg text-zinc-100 bg-red-500 rounded-md py-1 px-2 z-10 font-bold right-4'>
          -{discountPercentage}%
        </div>
        <aside className='overflow-hidden'>
          <img
            src={image}
            alt={`Product ${id}`}
            className='size-72 object-contain duration-100 group-hover:drop-shadow-xl group-hover:scale-105 max-md:w-full'
          />
          <h3 className='text-lg font-semibold line-clamp-3 max-lg:line-clamp-4'>
            {name}
          </h3>
          <p className='text-sm text-zinc-500 mt-1'>{branch}</p>
          <p className='text-red-500 text-xs font-semibold mt-1'>
            Part number: {partNumber}
          </p>
        </aside>
        <div>
          <h2 className='text-md text-zinc-500 mt-3'>
            <del>${formattedPrice}</del>
          </h2>
          <h3 className='text-red-600 font-bold text-xl'>
            ${formattedDiscountedPrice}{' '}
            <small className='text-zinc-500 font-medium text-sm'>
              (Inc. GST)
            </small>
          </h3>{' '}
          <button
            onClick={(e) => {
              e.preventDefault();
              alert('Product added to shopping cart');
            }}
            className='inline-flex gap-1 bg-red-600 text-white py-2 px-4 rounded-lg w-full justify-center mt-6 hover:bg-red-700 transition-all'
          >
            <ShoppingCart /> Add to cart
          </button>
        </div>
      </div>
    </a>
  );
}
