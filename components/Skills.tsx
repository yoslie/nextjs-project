import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: {id: number, open: number}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const data = [
  {
    id: 1,
    title: 'Languages',
    detail: 'HTML, CSS, and Javascript.',
  },
  {
    id: 2,
    title: 'Libraries / Framework',
    detail: 'jQuery, React, Vue.',
  },
  {
    id: 3,
    title: 'Soft Skills',
    detail: ' Agile working, Problem Solving, Critical Thinking, Communicative and Responsive.',
  }
]

const Skills: React.FC = () =>{
  const [open, setOpen] = useState(0);
  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  }
  
  return (
    <div id='skills' className='p-8 bg-white lg:p-16'>
      <h1 className='text-4xl font-Roboto-condensed font-bold uppercase'>
        My Skills
      </h1>
      <div className='mt-8 p-8 border'>
        {data.map((item) => (
          <Accordion
            key={item.id}
            open={open === item.id}
            icon={<Icon id={item.id}open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(item.id)}>
              {item.title}
            </AccordionHeader>
            <AccordionBody className='bg-yellow-400 text-black mt-2 p-4'>
              {item.detail}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default Skills;