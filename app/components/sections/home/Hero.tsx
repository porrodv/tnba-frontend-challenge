import { HeroCard, Carousel } from '~/components';

interface Props {
  carouselImages: string[];
}

export default function Hero({ carouselImages }: Props) {
  return (
    <section id='hero' className='flex flex-col max-lg:flex-col-reverse'>
      <div className='w-full bg-red-600 min-h-16 p-1 flex gap-4 justify-center items-center max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:min-h-60 max-lg:border-y-2'>
        <HeroCard
          image='https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/helmet_who_small_df808830-5195-4ec0-8b15-30ce5229e059_60x55-2M7XWP2M.webp'
          imageDescription='image'
          title='Official Speedglas Distributor'
          resumen='Proudly Australian Owned'
        />
        <HeroCard
          image='https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/delivery_who_60x55-EPX4GBIO.webp'
          imageDescription='image'
          title='Free Delivery anywhere in Aus'
          resumen='For all orders over $200'
        />
        <HeroCard
          image='https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/pricegst_who_60x55-WH3D2WTA.webp'
          imageDescription='image'
          title='All our prices include GST'
          resumen='No hidden costs'
        />
        <HeroCard
          image='https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/call_who_60x55-MPTPDYQF.webp'
          imageDescription='image'
          title='Speedglas & Adflo experts'
          resumen='Ready for your call'
        />
      </div>

      <Carousel
        autoSlide={true}
        autoSlideInterval={3000}
        images={carouselImages}
      />
    </section>
  );
}
