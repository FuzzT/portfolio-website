import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import RealEstate from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#38b6ff]'>Work</p>
            <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#091018] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Node JS Application
                    </span>          
                    <div className='pt-8 text-center'>
                        <a href='http://real-time-chat-web-app.up.railway.app/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/FuzzT/Blog-website'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>    
            </div>
            <div style={{backgroundImage: `url(${RealEstate})`}} className='shadow-lg shadow-[#091018] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Node JS Application
                    </span>          
                    <div className='pt-8 text-center'>
                        <a href='https://blog-production-7148.up.railway.app/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/FuzzT/Blog-website'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>    
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
