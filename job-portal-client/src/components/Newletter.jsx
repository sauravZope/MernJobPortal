import React from 'react'
import {FaEnvelopeOpenText } from 'react-icons/fa6';

const Newletter = () => {
    return (
        <div>
            <div>
            <h3 className='text-lg font-bold mb-2 flex item-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs</h3>
            <p className='text-primary/75 text-base mb-4'>
                We're excited to offer you a position with our team! Please provide your contact information below for further communication.
            </p>
           <div className='w-full space-y-4'>
            <input tpye="email" name="email" placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
            <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'/>
           </div>
          </div>

          {/* 2nd part */}
          <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex item-center gap-2'>
                <FaEnvelopeOpenText/>
                Get noticed faster</h3>
            <p className='text-primary/75 text-base mb-4'>
              Please Share your Resume with us
            </p>
           <div className='w-full space-y-4'>
            
            <input type='submit' value={"Upload Resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'/>
           </div>
          </div>
        </div>

        
    )
}

export default Newletter