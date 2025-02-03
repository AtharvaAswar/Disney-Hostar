import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieCard(props) {
    return (
        <>
            <img src={IMAGE_BASE_URL + props.movie.poster_path} className='w-[110px] md:w-[200px] rounded-lg 
            hover:border-[4px] hover:scale-110 transition-all ease-in duration-150 border-gray-300 cursor-pointer text-white'
                alt='Image Unavailable' />
        </>
    )
}
