
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () =>{
  return (
    <footer id="footer" className='p-16'>
      <div className='flex flex-col gap-10 mt-8'>
        <div className='flex flex-row gap-3'>
          <Image
            src="/icon/Icon-mail.png"
            alt="Icon Mail"
            width={24}
            height={24}
          />
          <p className='font-Josefin'>Feel free to contact me at</p>
        </div>
        <p className='text-4xl uppercase font-Roboto-condensed underline decoration-yellow-300'>
          yoslie.tan@gmail.com
        </p>
      </div>
      <div className="flex flex-row justify-between mt-16 pt-6 border-t-2">
        <div className="flex flex-row gap-2">
          <Link href='/'>
            <Image
              alt="Yoslie logo"
              width={24}
              height={24}
              src='/image/logo-black.svg'
            />
          </Link>
          <Link href='https://github.com/yoslie'>
            <Image
              src="/icon/Icon-github.png"
              alt="Icon Github"
              width={24}
              height={24}
            />
          </Link>
          <Link href='https://www.linkedin.com/in/yoslie/'>
            <Image
              src="/icon/Icon-linkedin.png"
              alt="Icon Linkedin"
              width={24}
              height={24}
            />
          </Link>
          <Link href='https://www.instagram.com/yoslitanuwijaya/'>
            <Image
              src="/icon/Icon-instagram.png"
              alt="Icon Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href='https://twitter.com/YosliTanuwijaya'>
            <Image
              src="/icon/Icon-twitter.png"
              alt="Icon Twitter"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className='flex'>
          <p className='ml-2 text-xs'>
            &copy;2023 Yoslie, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;