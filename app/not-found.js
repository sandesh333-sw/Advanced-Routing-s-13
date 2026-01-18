import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image src={'/not-found.svg'} alt='Not found' height={400} width={400} />

      <h1 className='mt-5'>404</h1>
    </div>
  )
}

export default NotFound
