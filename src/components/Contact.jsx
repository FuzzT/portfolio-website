import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-fu;; h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form action='' method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#38b6ff] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form velow or send me an email - xyz@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6]' p-2 name='message' rows='10' placeholder='  Message'></textarea>
        <button className='text-white border-2 hover:bg-[#38b6ff] hover:border-[#38b6ff] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
