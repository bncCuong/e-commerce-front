import { useMediaQuery } from '@/hooks';
import Image from 'next/image';
import React from 'react';

type Props = {};

export const Main = (props: Props) => {
  const mediaQuery = useMediaQuery('(min-width: 1066px)');
  return (
    <>
      <div className=" w-full relative">
        <div className="absolute text-white top-10 text-center left-[30%] sm:left-[33%] md:left-[38%] lg:left-[42%]">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
            iPhone 14 Pro
          </p>
          <p className="text-xl  ">Pro.Beyond</p>
        </div>
        <Image
          src={
            mediaQuery
              ? 'https://www.apple.com/v/home/ba/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_largetall_2x.jpg'
              : 'https://www.apple.com/v/home/ba/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small_2x.jpg'
          }
          alt="banner"
          className="object-cover w-[100%] h-[740px]"
          width={10000}
          height={10000}
        />
      </div>

      <div className="relative mt-4 w-[100%]">
        <div className="absolute text-black top-16 text-center left-[36%] sm:left-[40%] md:left-[44%] lg:left-[42%]">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
            iPhone 14
          </p>
          <p className="text-xl  ">Wonderfull</p>
        </div>
        <Image
          src="https://www.apple.com/v/home/ba/images/heroes/iphone-14/hero_iphone14_yellow__eun20sn4imi6_largetall_2x.jpg"
          alt="banner_2"
          width={10000}
          height={1}
          className="object-cover w-[100%] h-[640px]"
        />
      </div>
    </>
  );
};
