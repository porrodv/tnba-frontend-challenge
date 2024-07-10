import dayjs from 'dayjs';
import { BlogArticle } from '~/interfaces';
import { getFormattedDate } from '~/utils';
import { ChevronRight } from 'react-feather';

export default function BlogCard({
  id,
  title,
  description,
  date,
  url,
  image,
}: BlogArticle) {
  return (
    <div className='border rounded-md text-zinc-800 text-start shadow-[4px_4px_6px_1px_#e3e3e3] group cursor-default'>
      <div className='flex flex-col h-full justify-between'>
        <div>
          <div className='overflow-hidden'>
            <img
              src={image}
              alt={`Blog aritcle ${id}`}
              className='rounded-t-md h-52 w-full transition-all duration-200 group-hover:grayscale group-hover:scale-110'
            />
          </div>
          <div className='px-4 pt-4'>
            <h3 className='text-lg font-semibold line-clamp-2'>{title}</h3>
            <h4 className='text-sm text-zinc-500 mt-1 mb-4'>
              {getFormattedDate(dayjs(date))}
            </h4>
          </div>
        </div>
        <aside className='p-4 pt-0'>
          <p className='text-justify line-clamp-6 max-lg:line-clamp-[10]'>
            {description}
          </p>
          <a
            href={url}
            className='text-red-600 inline-flex items-center mt-3 hover:text-blue-500 transition-all'
          >
            Read now <ChevronRight size={20} />
          </a>
        </aside>
      </div>
    </div>
  );
}
