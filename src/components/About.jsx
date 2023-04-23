import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#38b6ff]'>About</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Abhay, nice to see you here. Please take a look around.</p>
                </div>
                <div>
                    <p>I'm a web developer with a passion for creating beautiful and functional websites. I've always been fascinated by the intersection of design and technology, and I'm excited to be a part of the fast-paced and ever-evolving world of web development. I'm always looking for new challenges and opportunities to learn, and I'm committed to staying up-to-date with the latest trends and technologies. When I'm not coding, you can usually find me tinkering with new projects or reading up on the latest web development blogs.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
