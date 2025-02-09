import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col items-center justify-center '>
      
      <h1 className='text-3xl font-bold -mt-10 mb-10 tracking-wider text-white'>Contact Me</h1>
      
    
     <div className='bg-slate-600 rounded-sm flex items-center justify-center   p-8 shadow-lg'> <div className=' w-64 h-80 '>
      <h2 className='text-center text-pink-950 font-mono font-bold text-2xl mb-3'>Send Your Details</h2>
       <form className='flex flex-col gap-5 ' action="https://getform.io/f/bollpqja" method='POST' required autoComplete='off'>
        <input className='rounded-sm px-4 h-9 ' type="text" placeholder='Enter your full name' name='Username' required />
        <input className='rounded-sm px-4 h-9' type="email" placeholder='Email address' name='Email' required />
        <textarea className='rounded-sm px-4 resize-none' name="message" placeholder='Type your message..' rows={4} autoComplete='false'  required ></textarea>
       <div className='flex items-center justify-center'> <button className='bg-gray-800 mt-4 hover:bg-green-600 shadow-lg w-28 h-9 rounded-3xl text-white font-bold  tracking-widest' type='submit'>Send</button></div>
      </form> </div></div> <br /> <br /> <br /><br />
    </section>
  )
}

export default Contact