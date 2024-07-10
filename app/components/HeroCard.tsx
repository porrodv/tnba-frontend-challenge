interface Props {
  image: string;
  imageDescription?: string;
  title: string;
  resumen: string;
}

export default function HeroCard({
  image,
  imageDescription,
  title,
  resumen,
}: Props) {
  return (
    <div className='flex gap-3 h-full w-full items-center p-3 justify-center max-sm:flex-col'>
      <img className='size-12' src={image} alt={imageDescription} />
      <div className=' text-white text-sm max-sm:text-center'>
        <h3 className='font-semibold'>{title}</h3>
        <p>{resumen}</p>
      </div>
    </div>
  );
}
