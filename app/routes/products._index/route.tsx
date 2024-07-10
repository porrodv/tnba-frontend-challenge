import products from '../../../public/data/products.json';
import { ProductList } from '~/components/sections/home';

export default function Products() {
  return <ProductList title='Products' products={products} url='/products' />;
}
