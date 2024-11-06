import { Link } from 'lucide-react'
import React from 'react'

const Custom404 = () => {
  return (
    <div className='text-center h-full flex w-full justify-center items-center'>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <a className='text-blue-500'>Go back to Home</a>
      </Link>
    </div>
  )
}

export default Custom404
