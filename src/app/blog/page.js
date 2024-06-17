import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center'>
        <h2 className="text-center text-3xl">
            This page is under construction
        </h2>
        <Link href='/' className='text-gray-200 hover:underline'>
            Back to home
        </Link>
    </div>
  )
}

export default page