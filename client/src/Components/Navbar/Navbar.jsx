import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex flex-row justify-around  items-center'>
        <div  className='font-bold text-lg'>asimsafar</div>
      <ul className='flex flex-row justify-around  items-center p-5 gap-x-4'>
        <button className='bg-orange-700 text-orange-50 h-8 w-12 rounded-sm hover:bg-pink-700'><NavLink to='/login'>Login</NavLink></button>
        <button className='bg-orange-400  text-orange-50 h-8 w-16 rounded-sm hover:bg-pink-400'><NavLink to='/register'>Register</NavLink></button>
      </ul>
    </nav>
  )
}

export default Navbar
