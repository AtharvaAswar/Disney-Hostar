import React from 'react'

export default function HeaderItems({ name, Icon }) {
    const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=2853a9df";
    return (
        <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
            <Icon />
            <h2>{name}</h2>
        </div>
    )
}
