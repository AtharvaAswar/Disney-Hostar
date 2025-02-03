import React, { useRef } from 'react'
import GenresList from '../assets/constants/GenresList'
import MovieList from './MovieList'

export default function GenreMovieList() {

    return (
        <div>

            {
                GenresList.genere.map((item, idx) => idx < 5 && (
                    <div className='p-8 px-8 md:px-16'>
                        <h2 className='font-bold text-[20px] text-white'>{item.name}</h2>
                        <MovieList genreId={item.id} i={idx} />
                    </div>
                ))
            }
        </div>
    )
}
