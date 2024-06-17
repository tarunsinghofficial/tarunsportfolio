import React from 'react'

function Footer() {

  return (
    <footer className='my-5'>
        <p className='text-gray-500 text-center'>&copy; {( new Date().getFullYear() )} - Tarun Singh </p>
    </footer>
  )
}

export default Footer