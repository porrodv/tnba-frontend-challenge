import products from '../../../public/data/products.json';
import { ProductList } from '~/components/sections/home';

export default function Products() {
  return (
    <div className='mb-28 2xl:mx-c2xl xl:mx-cxl lg:mx-clg md:mx-cmd sm:mx-csm max-sm:mx-cxs'>
      <ProductList title='Products' products={products} url='/products' />
    </div>
  );
}
