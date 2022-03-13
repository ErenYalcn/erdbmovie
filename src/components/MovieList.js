import React from 'react'
import MovieComponent from './MovieComponent'
import axios from 'axios';
import {useState} from 'react'
const API_KEY = 'd0b2b94b';


export default function MovieList() {
    const [movieList, updateMovieList] = useState([]);
    



    const fetchData = async (SearchString) => {
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${SearchString}}&apikey=${API_KEY}`
        );
        updateMovieList(response.data.Search);
    };


 
    



  return (
    <div className='flex flex-col text-[16px] gap-y-2 mt-4'>
        
        {movieList.length ? movieList.map((movie, index) => <MovieComponent key={index} movie={movie} />):"movie not found"}
    </div>
  )
}
