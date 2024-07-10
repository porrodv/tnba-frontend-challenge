import { ProductList } from '~/components/Pages/Home';
import products from '../../../public/data/products.json';

export default function Products() {
  return <ProductList title='Products' products={products} url='/products' />;
}
