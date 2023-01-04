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
  return (
    <div className='h-screen relative bg-white'>
      <div className='p-16'>
        <h1 className='text-4xl font-Roboto-condensed font-bold uppercase'>
          Experience
        </h1>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.slice(0).reverse().map((item) => (
            <li key={item.id} className="col-span-1 rounded-lg bg-white shadow w-64 break-words">
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
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }
  
  export default Experience;