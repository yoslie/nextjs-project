import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroBanner: React.FC = () =>{
  return (
    <div className='h-screen relative bg-white'>
      <div className='absolute inset-y-0 left-0 w-full'>
        <div className='w-3/4 h-full bg-gradient-to-r from-black via-black to-transparent py-8 px-8'>
          <div className='flex items-center'>
            <Image
              alt="Yoslie logo"
              width={24}
              height={24}
              src='/image/logo-black.svg'
            />
            <div className='pl-2 text-white'>
              Personal Portofolio
            </div>
          </div>
          <div className='mt-32 pl-12'>
            <h1 className='text-xl text-white'>
              Frontend Engineer
            </h1>
            <div className='bg-yellow-500 h-[2px] w-3/4 my-4' />
            <div className='text-gray-400 w-1/2 font-Josefin'>
              <TypeAnimation
                sequence={[
                  'First, solve the problem.',
                  2000,
                  'First, solve the problem. Then, write the code.',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className='mt-48 pl-12'>
            <div className='text-4xl text-gray-400 font-Roboto-condensed font-medium'>
              HI, I AM
            </div>
            <div className='text-8xl text-white font-Roboto-condensed font-semibold'>
              YOSLIE
            </div>
          </div>
        </div>
        </div>
      <div
        className='right-panel bg-no-repeat bg-right'
        style={{
          backgroundImage: `url('/image/profile.jpg')`,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

export default HeroBanner;