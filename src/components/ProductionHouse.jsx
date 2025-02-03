import React from 'react'
import disney from './../assets/img/disney.png'
import marvel from './../assets/img/marvel.png'
import nationalG from './../assets/img/nationalG.png'
import pixar from './../assets/img/pixar.png'
import starwar from './../assets/img/starwar.png'

import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalGV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import starWarsV from './../assets/videos/star-wars.mp4'

export default function ProductionHouse() {

    const productionHouseList = [
        {
            id: 1,
            image: disney,
            vid: disneyV
        },
        {
            id: 2,
            image: marvel,
            vid: marvelV
        },
        {
            id: 3,
            image: nationalG,
            vid: nationalGV
        },
        {
            id: 4,
            image: pixar,
            vid: pixarV
        },
        {
            id: 5,
            image: starwar,
            vid: starWarsV
        }
    ];

    return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
            {
                productionHouseList.map((item) => (
                    <div className='border-[2px] border-gray-600 rounded-lg 
                    hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>

                        <video src={item.vid} autoPlay loop playsInline muted
                            className='absolute z-0  top-0 rounded-md opacity-0 hover:opacity-50' />
                        <img src={item.image} className='w-full z-1' />
                    </div>

                ))
            }
        </div>
    )
}
