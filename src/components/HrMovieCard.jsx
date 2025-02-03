import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function HrMovieCard(props) {
    return (
        <div className='hover:scale-110 transition-all ease-in duration-150'>
            <img src={IMAGE_BASE_URL + props.movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg 
            hover:border-[4px] hover:scale-110 transition-all ease-in duration-150 border-gray-300 cursor-pointer text-white'
                alt='Image Unavailable' />
            <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{props.movie.title}</h2>
        </div>
    )
}
