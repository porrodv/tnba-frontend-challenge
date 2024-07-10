import { Product } from '~/interfaces/product.interface';
import { ProductCard } from '~/components/Product';

interface Props {
  title: string;
  products: Product[];
  url: string;
}

export default function ProductList({ title, products, url }: Props) {
  return (
    <section className='text-zinc-700 p-6 mt-14'>
      <h1 className='text-center my-4 mb-6 text-3xl font-bold font-mont'>
        {title}
      </h1>
      <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            branch={item.branch}
            category={item.category}
            partNumber={item.partNumber}
            price={item.price}
            discountPercentage={item.discountPercentage}
            image={item.image}
          />
        ))}
      </div>
      <div className='w-full text-center mt-10'>
        <a
          href={url}
          className='rounded-full py-2 px-6 text-lg border border-zinc-600 text-zinc-600 font-semibold hover:bg-zinc-600 hover:text-white transition-all duration-100'
        >
          View all
        </a>
      </div>
    </section>
  );
}
