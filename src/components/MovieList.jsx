import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import HrMovieCard from './HrMovieCard';

export default function MovieList(props) {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    const sliderRight = (e) => {
        e.scrollLeft += 500;
    }

    const sliderLeft = (e) => {
        e.scrollLeft -= 500;
    }

    useEffect(() => {
        getMovieByGenreId();
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(props.genreId).then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
    return (
        <div className='relative'>

            <HiOutlineChevronLeft className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer z-10
                ${props.i % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
                onClick={() => sliderLeft(elementRef.current)} />

            <HiOutlineChevronRight className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer 
            right-0 z-10 ${props.i % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
                onClick={() => sliderRight(elementRef.current)} />

            <div className='flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 pt-5 px-3 pb-5' ref={elementRef}>
                {
                    movieList.map((item, idx) => (
                        <>
                            {props.i % 3 == 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                        </>
                    ))
                }
            </div>
        </div>
    )
}
