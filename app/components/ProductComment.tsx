import dayjs from 'dayjs';
import { Star, ThumbsDown, ThumbsUp, User } from 'react-feather';
import { getFormattedDate } from '~/utils';

interface Props {
  name: string;
  description: string;
  date: string;
}

export default function Comment({ name, description, date }: Props) {
  return (
    <div className='border border-zinc-300 rounded-lg p-4'>
      <div className='text-zinc-700 text-md flex flex-col justify-between h-full'>
        <article>
          <div className='flex gap-3'>
            <div className='rounded-full bg-zinc-600 text-white min-w-12 size-12 grid place-items-center'>
              <User />
            </div>
            <div>
              <div className='inline-flex gap-1 text-yellow-400'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill='currentColor' size={20} />
                ))}
              </div>
              <h4 className='text-zinc-700 font-semibold'>{name}</h4>
            </div>
          </div>
          <p className='mt-6'>{description}</p>
        </article>
        <div className='inline-flex justify-between items-end mt-10'>
          <h5 className='text-zinc-500 text-sm'>
            {getFormattedDate(dayjs(date))}
          </h5>
          <div className='flex gap-2 text-zinc-500'>
            {['Like', 'Dislike'].map((action, i) => (
              <button
                key={i}
                onClick={() => alert(action)}
                className='hover:text-red-500 hover:scale-105'
              >
                {action === 'Like' ? (
                  <ThumbsUp size={22} />
                ) : (
                  <ThumbsDown size={22} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
