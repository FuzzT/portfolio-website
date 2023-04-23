import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Github from '../assets/github.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#38b6ff]'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#091018] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML Icon'></img>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#091018] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS Icon'></img>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#091018] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt='Javascript Icon'></img>
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#091018] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='ReactImg Icon'></img>
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#091018] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='Github Icon'></img>
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[#091018] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='Node Icon'></img>
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-[#091018] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind Icon'></img>
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#091018] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Bootstrap} alt='Bootstrap Icon'></img>
            <p className='my-4'>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills