import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center bg-[#0B0B22] h-auto text-white'>
            <div className='w-full lg:w-1/4 flex flex-col items-center justify-center py-4'>
                <b className='text-2xl'>Company</b>
                <p>about us</p>
                <p>careers</p>
            </div>
            <div className='w-full lg:w-1/4 flex flex-col items-center justify-center py-4'>
                <b className='text-2xl'>Language</b>
                <p>english</p>
                <a href="https://github.com/AtharvaAswar" className='hover:underline underline-offset-3'>@AtharvaAswar</a>
            </div>
            <div className='w-full lg:w-1/4 flex flex-col items-center justify-center py-4'>
                <b className='text-2xl'>Need help?</b>
                <p>visit help center</p>
                <p>give feedback</p>
            </div>
            <div className='w-full lg:w-1/4 flex flex-col items-center justify-center py-4'>
                <b className='text-2xl'>Connect with us</b>
                <div className='flex gap-5 justify-center items-center h-10'>
                    <FaFacebook className='hover:scale-250 cursor-pointer' />
                    <FaXTwitter className='hover:scale-250 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
