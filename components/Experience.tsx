import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useState } from 'react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const data = [
  {
    id: 1,
    date: '2015',
    title: 'PT. Huawei Service',
    role: 'Optimization Engineering (Intern)',
  },
  {
    id: 2,
    date: 'October 2016 - July 2017',
    title: 'PT. eBdesk Technology',
    role: 'Frontend Engineer',
  },
  {
    id: 3,
    date: 'July 2018',
    title: 'Telkom DDS (Unify Project)',
    role: 'Application Tester (Freelance)',
  },
  {
    id: 4,
    date: 'November 2019 - March 2020',
    title: 'PT. Gigaming Intermedia Solusindo',
    role: 'Frontend Engineer',
  },
  {
    id: 5,
    date: 'May 2020 - Now',
    title: 'Jabar Digital Service',
    role: 'Frontend Engineer',
  }
]

const Experience: React.FC = () =>{
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className='p-16 bg-white'>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-Roboto-condensed font-bold uppercase'>
          Experience
        </h1>
        <div className='grid grid-cols-2 gap-4'>
          <button ref={(node) => setPrevEl(node)}>
            <Image
              src="icon/Icon-arrow-left.svg"
              alt="Icon Arrow Left"
              width={50}
              height={50}
            />
          </button>
          <button ref={(node) => setNextEl(node)}>
            <Image
              src="icon/Icon-arrow-right.svg"
              alt="Icon Arrow Right"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        className="mt-8"
        spaceBetween={50}
        slidesPerView={4}
        navigation={{ prevEl, nextEl }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.slice(0).reverse().map((item) => (
          <SwiperSlide key={item.id} className="my-4 rounded-lg bg-white shadow w-64 break-words">
            <div className="flex flex-col justify-between h-64 p-6">
              <div className="text-sm font-medium text-gray-500">
                {item.date}
              </div>
              <div className="mt-1 text-2xl text-black font-Roboto-condensed font-bold">
                {item.title}
              </div>
              <div className="text-xs bottom-0">
                {item.role}
              </div>
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
    )
  }
  
  export default Experience;