import React, { useRef, useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

export default function Slider() {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        GlobalApi.getTrendingVideos.then((r) => {
            console.log(r.data.results);
            setMovieList(r.data.results);
        });
    }

    const sliderRight = (e) => {
        if (e) e.scrollLeft += screenWidth - 110;
    }

    const sliderLeft = (e) => {
        if (e) e.scrollLeft -= screenWidth - 110;
    }

    return (
        <div>
            <HiOutlineChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'
                onClick={() => sliderLeft(elementRef.current)} />
            <HiOutlineChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
                onClick={() => sliderRight(elementRef.current)} />

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
                {
                    movieList.map((item, idx) => (
                        <img src={IMAGE_BASE_URL + item.backdrop_path}
                            className='min-w-full md:h-[310px] object-cover-wrap object-left-top mr-5 rounded-md 
                            hover:border-4 border-gray-200 transition-all duration-100 ease-in-out' />
                    ))
                }
            </div>
        </div>
    )
}

