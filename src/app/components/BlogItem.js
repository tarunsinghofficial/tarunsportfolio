import Link from 'next/link'
import React from 'react'

function BlogItem({title, publisher, link}) {
  return (
    <Link href={link} className='flex h-full w-[100%] flex-col gap-3 rounded-[7px] bg-[#18191E] p-[30px] border-[0.8px] border-gray-800'>
        <h2 className='text-xl text-primary-blue'>{title}</h2>
        <p className='text-white'>{publisher}</p>
    </Link>
  )
}

export default BlogItem