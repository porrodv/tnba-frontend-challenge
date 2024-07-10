import { Comment } from '~/components/Product/Sections/';
import { Star } from 'react-feather';

export default function Comments() {
  return (
    <section id='comments'>
      <h2 className='text-xl text-zinc-700 font-semibold'>10 Reviews</h2>
      <div className='border border-zinc-300 rounded-lg w-full p-4 mt-4 mb-14'>
        <div className='grid grid-cols-2 gap-10 text-zinc-700 max-sm:grid-cols-1'>
          <div className='w-full flex flex-col justify-between'>
            <div>
              <h2 className='text-6xl font-semibold text-zinc-800 mb-2'>4.4</h2>
              <div className='inline-flex gap-1 text-yellow-400 text-md'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill='currentColor' size={30} />
                ))}
              </div>
            </div>
            <p className='text-zinc-500 text-lg max-md:text-sm'>
              Everything from verified purchases
            </p>
          </div>
          <main className='space-y-2'>
            {[...Array(5)].map((_, i) => (
              <div key={i} className='flex w-full gap-2 items-center'>
                <div className='inline-flex gap-1 text-yellow-400 text-md'>
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      fill={j < 5 - i ? 'currentColor' : 'white'}
                      size={15}
                    />
                  ))}
                </div>
                <div className='inline-flex w-full items-center justify-between gap-2'>
                  <div id='stroke' className='h-1 bg-zinc-500 w-full'></div>
                  10
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3 max-sm:grid-cols-1'>
        <Comment
          name='Paddy E.'
          description='Just did a solid week gouging and welding wearing this mask at
            Groote Eylandt mine in the NT, 38 degrees and very humid pretty much
            every day, not only is the ADFLO good for the lungs, it’s also much
            cooler and less sweaty wearing this mask compared to a non air fed
            mask, should have bought one years ago. Andrew is also a top bloke,
            I phoned him on a Saturday to ask a few questions before ordering
            and he was more than helpful and got it out the door quickly to me,
            arriving in Darwin just over a week from ordering it, will be
            recommending him to lots of other boilermakers. Cheers mate.'
          date='2018-12-10T13:45:00.000Z'
        />
        <Comment
          name='Gayle K.'
          description={`I'm sorry I didn't buy this helmet years ago! It's easy and conformable to wear once on you hardly notice it the back pack, the safety glass is very clear and good wide vision. Feel good on way home after work,  no red face. I don't get  dirty and breathing clean air makes a big difference, don't get tired any more. Long life battery. Good for all types of welding.  I've been wearing this helmet for many weeks now and  found no down side to this product , it should be compulsory for the industry. `}
          date='2018-12-10T13:45:00.000Z'
        />
        <Comment
          name='Trent G.'
          description='G1-05vc 3M speedglas adflow welding helmet has to be one of the best purchases I have made in my career as a boilermaker absolutely love it wish I had done it years ago.'
          date='2018-12-10T13:45:00.000Z'
        />
        <Comment
          name='Glenn C.'
          description='Great deal and very fast delivery!'
          date='2018-12-10T13:45:00.000Z'
        />
      </div>
    </section>
  );
}
