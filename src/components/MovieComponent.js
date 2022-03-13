import React from 'react'

const MovieComponent = (props) =>{
    const {Title, Poster, Year, Type} = props.movie;
    return  <div className='flex justify-between group'>
        <img className='w-16 h-auto invisible group-hover:visible' src={Poster} alt={Title}/>
        <span className='text-sm font-bold'>{Title}</span>
        <div className='flex flex-col'>
        
        <span className='text-sm font-bold invisible group-hover:visible'>{Year}</span>
        <span className='text-sm font-bold invisible group-hover:visible'>{Type}</span>
        </div>

        
    </div>
}
export default MovieComponent;
