import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from './Header'

export default function Searchbox() {
  return (
      <div className='pt-12 sm:pt-[209px] mx-auto'>
          <div className='flex justify-self-start w-[343px] sm:w-[521px] mx-auto'>
          <Header />
          </div>
    <div className='w-[343px] sm:w-[521px] mx-auto flex flex-col p-4 border-[1px] bg-white border-blacksurface border-opacity-25 rounded hover:shadow-3xl transition-all'>
        
        <h3 className='font-bold text-[16px]'>Movie Title</h3>
        <div className='flex items-center bg-white border-[1px] rounded p-[6px] gap-x-2 hover:shadow-3xl transition-all'>
            <div className='text-[24px] opacity-40'>
            <AiOutlineSearch />
            </div>

            <div className='text-[16px]'>
            <input className='text-black outline-none text-[16px] w-full sm:w-[20rem] placeholder-black placeholder-opacity-80' placeholder='search'></input>
            </div>

        </div>

        <div className='right-0 flex justify-end gap-x-4 my-2'>
            <button className='text-mgreen text-[16px] font-bold hover:bg-mgreen hover:text-white transition-all p-3 tracking-wider rounded-[32px] transition-all'>clear</button>
            <button className='text-white bg-mgreen hover:bg-green-600 transition-all p-3 rounded-[32px] text-[16px] tracking-wider font-bold'>search</button>
        </div>
    </div>
    </div>
  )
}
