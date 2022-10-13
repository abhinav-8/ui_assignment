import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className='flex justify-between'>
    <div className='flex items-center w-[900px] font-bold '>
      <h2 className='font-bold text-xl'>dribbble</h2>
      <ul className='flex flex-1 text-gray-600 justify-between ml-8 w-[1%] '>  
        <li className='dropdown'>
            <button type='button'>Inspiration</button>
        </li>
        <li className='dropdown'>
            <button type='button'>Find Work</button>
        </li>
        <li className='dropdown'>
            <button type='dropdown'>Learn Design</button>
        </li>
        <li className='dropdown'>
            <button type='button'>Go Pro</button>
        </li>
        <li className='dropdown'>
            <button type='button'>Design Files</button>
        </li>
        <li className='dropdown'>
            <button type='button'>Hire Designers</button>
        </li>        
      </ul>
      </div>
        <div className='flex items-center justify-evenly w-[13%]'>
        
        <SearchIcon className='h4'/>
        <button className='text-gray-600'>Sign in</button>
    
        <button className='px-[4px] py-[4px] bg-pink-500 text-white font-bold rounded-md hover:bg-pink-400' margin='right'>Share my work</button>
        </div>
    
    </div>
  )
}

export default Navbar
