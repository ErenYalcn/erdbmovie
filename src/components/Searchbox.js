import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from './Header'
import {useState} from 'react'
import axios from 'axios';
import MovieComponent from './MovieComponent'



const API_KEY = 'd0b2b94b';

export default function Searchbox() {
    const [search, setSearch] = useState();
    

    const [timeoutId, setTimeoutId] = useState();

    const [movieList, updateMovieList] = useState([]);

    const fetchData = async (SearchString) => {
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${SearchString}}&apikey=${API_KEY}&type=movie`
        );
        updateMovieList(response.data.Search);
    };

    const onTextChange =(e) => {
        clearTimeout(timeoutId);
        setSearch(e.target.value);

        
    };


    const Clearbtn = () => {
        console.log('temizledi');
        setSearch('');
        }
        
    const Searchbtn = (e) => {
        console.log('arabutona basıldı');
        fetchData(search);
        }
    

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
            <input className='text-black outline-none text-[16px] w-full sm:w-[20rem] placeholder-black placeholder-opacity-80' onChange={onTextChange} value={search} placeholder='search'></input>
            </div>

        </div>
        


        <div className='right-0 flex justify-end gap-x-4 my-2'>
            <button className='text-mgreen text-[16px] font-bold hover:bg-mgreen hover:text-white transition-all p-3 tracking-wider rounded-[32px] transition-all' onClick={Clearbtn}>clear</button>
            <button className='text-white bg-mgreen hover:bg-green-600 transition-all p-3 rounded-[32px] text-[16px] tracking-wider font-bold'type='submit' onClick={Searchbtn}>search</button>
        </div>
    </div>

    <div className='mt-8 w-[343px] sm:w-[521px] mx-auto flex flex-col p-4 mb-[209px] border-[1px] bg-white border-blacksurface border-opacity-25 rounded hover:shadow-3xl transition-all'>
        
        <h3 className='font-bold text-[16px]'>Results for {search}</h3>
        
        <p className='text-xs mt-1'>hover on a movie title to learn more about it.</p>
    
        <div className='flex flex-col text-[16px] gap-y-6 mt-4'>
        
        {movieList.length ? movieList.map((movie, index) => <MovieComponent key={index} movie={movie} />):"movie not found"}
    </div>
    
    </div>
    </div>
  )
}
