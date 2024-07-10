import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface Props {
  images: string[];
  autoSlide: boolean;
  autoSlideInterval: number;
}

export default function Carrousel({
  images,
  autoSlide = false,
  autoSlideInterval = 3000,
}: Props) {
  const [current, setCurrent] = useState(0);

  const setPrevios = () =>
    setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const setNext = () =>
    setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  const setByIndex = (index: number) => setCurrent(index);

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(setNext, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500 max-lg:h-[400px] w-full'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider ${index}`}
            className='w-full h-full object-fill'
          />
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={setPrevios}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-all'
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={setNext}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-all'
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {images.map((i, index) => (
            <button
              key={index}
              onClick={() => setByIndex(index)}
              className={`transition-all size-3 bg-white rounded-full  ${current === index ? 'p-0.5' : 'bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
