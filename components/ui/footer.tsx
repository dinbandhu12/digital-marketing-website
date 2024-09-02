import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t'>
        <div className='flex flex-col justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto text-center'>
          <h1 className='text-3xl md:text-5xl font-medium'>
            <Image
              src={'/logo/logo.svg'}
              width={1000}
              height={1000}
              className='w-40'
              alt='image'
            />{' '}
          </h1>
          <p className='text-left  text-xl  text-gray-500'>123-456-7890</p>
          <p className='text-left  text-xl  text-gray-500'>
            admin@marketminds.ca 
          </p>

        </div>

    </footer>
  )
}

export default Footer
