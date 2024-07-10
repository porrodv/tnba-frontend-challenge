import { BlogArticle } from '~/interfaces';
import { BlogCard } from '~/components';
import { ChevronRight } from 'react-feather';

interface Props {
  articles: BlogArticle[];
  url: string;
}

export default function Blog({ articles, url }: Props) {
  return (
    <section id='blog' className='w-full text-center mb-4 p-6'>
      <h1 className='text-3xl text-zinc-700 font-bold my-4 mb-6 font-mont'>
        CHECK OUR WELDING HELMET BLOG
      </h1>
      <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
        {articles.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            url={item.url}
            image={item.image}
          />
        ))}
      </div>
      <div className='w-full text-center mt-10'>
        <a
          href={url}
          className='text-red-600 font-semibold inline-flex items-center hover:scale-110 duration-75'
        >
          See more <ChevronRight size={20} />
        </a>
      </div>
    </section>
  );
}
