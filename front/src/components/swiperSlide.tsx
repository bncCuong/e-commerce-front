import { Button } from 'antd';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Navigation,
  Pagination,
  EffectCreative,
  Keyboard,
  FreeMode,
  Autoplay,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { PlayCircleFilled } from '@ant-design/icons';

const listUrl = [

  
  {
    id: 1,
    src: 'https://is3-ssl.mzstatic.com/image/thumb/CvNCk6LFQGbwX_XWcd7gag/1378x774.jpg',
  },
  {
    id: 2,
    src: 'https://is2-ssl.mzstatic.com/image/thumb/divxDY27bQOH7PPRX2wfJQ/1378x774.jpg',
  },
  {
    id: 3,
    src: 'https://is3-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1378x774.jpg',
  },
  {
    id: 4,
    src: 'https://is2-ssl.mzstatic.com/image/thumb/IhM297t5x6MNs-i8sRqCaA/1378x774.jpg',
  },
  {
    id: 5,
    src: 'https://www.apple.com/v/home/ba/images/tv-plus-gallery/fnb__brvfy48gzsz6_medium_2x.jpg',
  },
  {
    id: 6,
    src: 'https://is2-ssl.mzstatic.com/image/thumb/JdmLVQN99mIa15_uECg4uw/1378x774.jpg',
  },
  {
    id: 7,
    src: 'https://is2-ssl.mzstatic.com/image/thumb/A_R7PS9DPKeHWxifN_JHFg/1378x774.jpg',
  },
  {
    id: 8,
    src: 'https://is1-ssl.mzstatic.com/image/thumb/qL-yBoKCFztx-kDyvIXlHw/1378x774.jpg',
  },
  {
    id: 9,
    src: 'https://is5-ssl.mzstatic.com/image/thumb/vkV13QebT23nTZQu-DpqDg/1378x774.jpg',
  },
  {
    id: 10,
    src: ' https://is3-ssl.mzstatic.com/image/thumb/Ze8uZ-TWJ2JMbqmtcz8_BA/1378x774.jpg',
  },
];

export const SwiperCompo = () => {
  return (
    <div className="w-[100%] h-[320px] md:h-[523px] mt-4 relative ">
      <Swiper
        centeredSlides={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={16}
        freeMode={true}
        navigation={true}
        modules={[
          Pagination,
          Navigation,
          EffectCreative,
          Keyboard,
          FreeMode,
          Autoplay,
        ]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          800: {
            slidesPerView: 1.5,
          },
        }}
      >
        {listUrl.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <Image
              src={item.src}
              alt="swiper image"
              width={10000}
              height={1}
              className="md:object-cover w-[100%] h-[450%] md:h-[523px] object-contain "
              priority
            />
            <div className="absolute bottom-3 md:bottom-10 left-5 md:left-10">
              <button
                className="px-2 py-1 md:px-4 md:py-2 bg-white text-black text-sm md:text-lg rounded-[40px] flex children-center gap-2
              hover:bg-white/80 animate duration-200 "
              >
                Stream now{' '}
                <PlayCircleFilled
                  style={{ fontSize: '16px', marginTop: '2px' }}
                />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
