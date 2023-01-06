import Image from 'next/image'
import Link from 'next/link'

const data = [
  {
    id: 1,
    title: 'Sapawarga Webadmin',
    description: 'Aplikasi layanan publik digital di Jawa Barat yang terintegrasi',
    link: 'https://sapawarga-staging.jabarprov.go.id/',
    image: 'image/logo-sapawarga.svg'
  },
  {
    id: 2,
    title: 'Desa Digital',
    description: 'Desa Digital merupakan program pemberdayaan masyarakat melalui pemanfaatan teknologi digital dan internet dalam pengembangan potensi desa, pemasaran, dan percepatan akses serta pelayanan informasi. Melalui peningkatan literasi digital, masyarakat dapat memanfaatkan akses internet untuk meningkatkan kualitas hidup masyarakat dalam berbagai aspek, di antaranya pengelolaan lingkungan, ekonomi, pendidikan, peluang inovasi, dan stabilitas sosial.',
    link: 'https://desadigital.jabarprov.go.id/',
    image: 'image/logo-dedi.svg'
  },
  {
    id: 3,
    title: 'Sistem Informasi Manajemen Lab Cov-19',
    description: 'Platform sistem informasi bebasis web untuk menghimpun seluruh data hasil pemeriksaan sampel Covid-19 di Labkes Jabar dan memfasilitasi dokumentasi proses pemeriksaan sampel dari hulu ke hilir.    ',
    link: 'https://lab.pikobar.jabarprov.go.id/',
    image: '/image/logo-lab-covid-jabar.svg'
  },
]

const Project: React.FC = () =>{
  return (
    <div className='bg-black p-16 h-screen overflow-scroll'>
      <h1 className='text-4xl font-Roboto-condensed font-bold uppercase text-white mb-12'>
        Project
      </h1>
      <div className='flex flex-col gap-8'>
        {data.map((item) => (
          <div key={item.id} className='bg-gray-700 p-8 rounded-md grid grid-cols-2 gap-8'>
            <div className='w-full h-64 p-4 flex justify-center items-center bg-white rounded-md'>
              <Image
                alt={`Logo ${item.title}`}
                width="0"
                height="0"
                className="w-fit h-full"
                src={item.image}
              />
            </div>
            <div className='flex flex-col justify-center text-white space-y-6'>
              <h2 className='text-xl font-Roboto-condensed font-bold'>
                {item.title}
              </h2>
              <p className='font-light text-sm'>
                {item.description}
              </p>
              <Link
                href={item.link}
                className='bg-white text-black px-4 py-2 rounded-md w-fit hover:bg-gray-500 hover:text-white'
              >
                Visit Website
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  
  export default Project;