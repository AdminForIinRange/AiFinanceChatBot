import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from '@/components/core/carousel';
import Image from 'next/image';


function ThumnailSlider() {
   const imgPreview = {
    img1: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
    img2: 'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
    img3: 'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
    img4: 'https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format',
    img5: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
    img6: 'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format',
    img7: 'https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format',
    img8: 'https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format',
    img9: 'https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format',
    img10:
      'https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format',
    img11:
      'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1200&auto=format',
    img12:
      'https://images.unsplash.com/photo-1546942113-a6c43b63104a?q=80&w=1200&auto=format',
    img13:
      'https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format',
    img14:
      'https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format',
    img15:
      'https://images.unsplash.com/photo-1532423622396-10a3f979251a?q=80&w=1200&auto=format',
    img16:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format',
    img17:
      'https://images.unsplash.com/photo-1496861083958-175bb1bd5702?q=80&w=1200&auto=format',
    img18:
      'https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=1200&auto=format',
  };
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <div className=' 2xl:w-[100%] bg-background sm:w-[100%] w-[100%] mx-auto'>
        <Carousel options={OPTIONS} className=' relative' isAutoPlay={true}>
          <SliderContainer className='gap-2'>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img1}
            >
              <Image
                src={imgPreview.img1}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img2}
            >
              <Image
                src={imgPreview.img2}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img3}
            >
              <Image
                src={imgPreview.img3}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img4}
            >
              <Image
                src={imgPreview.img4}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img5}
            >
              <Image
                src={imgPreview.img5}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img6}
            >
              <Image
                src={imgPreview.img6}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img7}
            >
              <Image
                src={imgPreview.img7}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img8}
            >
              <Image
                src={imgPreview.img8}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className=' xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img9}
            >
              <Image
                src={imgPreview.img9}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className=' xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img10}
            >
              <Image
                src={imgPreview.img10}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </div>
    </>
  );
}

export default ThumnailSlider;
