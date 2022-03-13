import React from 'react'

export default function Results() {
  return (
    <div className='w-[343px] sm:w-[521px] mx-auto flex flex-col p-4 mb-[209px] border-[1px] bg-white border-blacksurface border-opacity-25 rounded hover:shadow-3xl transition-all'>
        
    <h3 className='font-bold text-[16px]'>Results for "search"</h3>
    <p className='text-xs mt-1'>click on a movie title to learn more about it.</p>

    <div className='flex flex-col text-[16px] gap-y-2 mt-4'>
    <p>Movie 1</p>
    <p>Movie 2</p>
    <p>Movie 3</p>
    </div>

</div>
  )
}
