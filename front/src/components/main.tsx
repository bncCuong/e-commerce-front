import React, { useState } from 'react';
import { useMediaQuery } from '@/hooks';
import Image from 'next/image';
import { SwiperCompo } from './swiperSlide';

type Props = {};

export const Main = (props: Props) => {
  const mediaQuery = useMediaQuery('(min-width: 1066px)');
  return (
    <>
      <div className=" w-full relative">
        <div className="absolute text-white top-20 text-center left-[50%] translate-x-[-50%]">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-bold ">
            iPhone 14 Pro
          </p>
          <p className="text-2xl  ">Pro.Beyond</p>
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
          priority
        />
      </div>

      <div className="relative mt-4 w-[100%]">
        <div className="absolute text-black top-16 text-center left-[50%] translate-x-[-50%]">
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
          priority
        />
      </div>

      <div
        className={`relative mt-4 w-[120%] h-[640px] bg-black animation ${
          mediaQuery ? 'flex justify-center' : 'block'
        }`}
      >
        <div
          className={`${
            mediaQuery
              ? 'absolute text-white top-[50%] translate-y-[-50%] left-[20%]'
              : 'absolute text-white top-16 text-center left-[40%] translate-x-[-50%] '
          }  `}
        >
          <p className="text-3xl sm:text-4xl xl:text-5xl font-semibold ">
            iPad Pro
          </p>
          <p className="text-2xl flex children-center ">
            Supercharged by{' '}
            <span>
              <Image
                src="https://www.apple.com/v/home/ba/images/logos/ipad-pro/hero_m2_chip__elhl46h8tbwy_mediumtall_2x.png"
                alt="logo-chipM2"
                width={50}
                height={50}
                priority
              />
            </span>
          </p>
        </div>
        <Image
          src="https://www.apple.com/v/home/ba/images/heroes/ipad-pro/hero_ipadpro__bpt7a9d8sh42_mediumtall_2x.jpg"
          alt="banner_3"
          width={100000}
          height={1}
          className={` object-contain  w-[120%]  ${
            mediaQuery
              ? 'ml-32 pb-[200px] h-[740px]'
              : 'h-[640px] w-[120%] object-scale-down pr-[80px] sm:pr-[150px] '
          } `}
        />
      </div>

      <div className="w-full ">
        <div className="w-full md:flex md:m-4 gap-4 space-y-4 md:space-y-0 mb-4 md:mb-0">
          <div className="w-full relative">
            <div className="absolute top-10 left-[60%] translate-x-[-50%]">
              <div>
                <Image
                  className="w-auto h-auto"
                  priority
                  width={170}
                  height={200}
                  alt="logo apple"
                  src="https://www.apple.com/v/home/ba/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_medium_2x.png"
                />
              </div>
              <p className="text-xl mt-2 translate-x-[-20%] w-[290px]">
                Upgrade and save. It's that easy.
              </p>
            </div>
            <Image
              priority
              className="object-cover w-[100%] h-[600px]"
              width={10000}
              height={10000}
              alt="banner"
              src="https://www.apple.com/v/home/ba/images/promos/iphone-tradein/iphone_tradein_promo__d5au3rkw5kuq_medium_2x.jpg"
            />
          </div>
          <div className="w-full relative">
            <div className="absolute bottom-10 text-white left-[57%] md:left-[65%] translate-x-[-50%]">
              <div>
                <Image
                  className="w-auto h-auto"
                  priority
                  width={170}
                  height={200}
                  alt="logo apple"
                  src="https://www.apple.com/v/home/ba/images/logos/wwdc23-announce/promo_logo_wwdc23__gcsmmrgbhlme_medium_2x.png"
                />
              </div>
              <p className="text-xl mt-2 translate-x-[-24%] w-[250px] md:w-[350px] text-center">
                Watch online June 5 at 10:00 am.P.T
              </p>
            </div>
            <Image
              priority
              className="object-cover w-[100%] h-[600px]"
              alt="banner"
              width={1000}
              height={1000}
              src="https://www.apple.com/v/home/ba/images/promos/wwdc23-announce/promo_wwdc23_apple__cgwckch5cjf6_medium_2x.jpg"
            />
          </div>
        </div>

        <div className="w-full md:flex md:m-4 gap-4 space-y-4 md:space-y-0 mb-4 md:mb-0">
          <div className="w-full relative">
            <div className="absolute top-14 left-[50%] translate-x-[-50%]">
              <div>
                <Image
                  priority
                  className="w-auto h-auto"
                  width={150}
                  height={200}
                  alt="logo apple"
                  src="https://www.apple.com/v/home/ba/images/logos/apple-watch-pride/logo_promo_pride23__cnampkeybsty_medium_2x.png"
                />
              </div>
              <p className="text-xl mt-2 translate-x-[10%]  w-[130px]">
                Pride in the air
              </p>
            </div>
            <Image
              priority
              className="object-cover w-[100%] h-[600px]"
              width={10000}
              height={1}
              alt="banner"
              src="https://www.apple.com/v/home/ba/images/promos/apple-watch-pride/promo_pride23__cnpic94fthle_medium_2x.jpg"
            />
          </div>

          <div className="w-full relative ">
            <div className="absolute top-16 text-white left-[55%] md:left-[55%] translate-x-[-50%]">
              <h1 className="text-white text-5xl">MacBook Pro</h1>
              <p className="text-xl mt-2 translate-x-[-8%]  w-[320px]">
                Supercharge by M2 Pro and M2 Max
              </p>
            </div>
            <Image
              priority
              className="object-cover w-[100%] h-[600px]"
              alt="banner"
              width={1000}
              height={1000}
              src="https://www.apple.com/v/home/ba/images/promos/macbook-pro-14-and-16/promo_mbp__ek7p477bkp6q_medium_2x.jpg"
            />
          </div>
        </div>

        <div className="w-full md:flex md:m-4 gap-4 space-y-4 md:space-y-0 mb-4 md:mb-0 ">
          <div className="w-full relative">
            <div className="absolute top-16 text-white left-[60%] md:left-[59%] translate-x-[-50%]">
              <h1 className="text-white text-5xl">HomePod</h1>
              <p className="text-xl mt-2 translate-x-[10%]  w-[320px]">
                Profound Sound
              </p>
            </div>
            <Image
              priority
              className="object-cover w-[100%] h-[600px]"
              width={10000}
              height={10000}
              alt="banner"
              src="https://www.apple.com/v/home/ba/images/promos/homepod/promo_homepod__f7jnolq94m2y_medium.jpg"
            />
          </div>
          <div className="w-full relative">
            <div className="absolute top-14 left-[60%] translate-x-[-50%]">
              <div>
                <Image
                  className="w-auto h-auto"
                  priority
                  width={130}
                  height={200}
                  alt="logo apple"
                  src="https://www.apple.com/v/home/ba/images/logos/apple-card/logo__dcojfwkzna2q_medium_2x.png"
                />
              </div>
              <p className="text-xl mt-2 translate-x-[-25%] text-center w-[320px]">
                Get up to 3% Daily Cash back with every purchase
              </p>
            </div>
            <Image
              priority
              className="object-cover w-[100%] h-[600px]"
              alt="banner"
              width={1000}
              height={1000}
              src="https://www.apple.com/v/home/ba/images/promos/apple-card/tile__cauwwcyyn9hy_medium_2x.jpg"
            />
          </div>
        </div>
      </div>

      <SwiperCompo />
    </>
  );
};
