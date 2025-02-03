import React, { useState } from 'react'
import logo from './../assets/img/disney.png'
import profile from './../assets/img/profile.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';

export default function Header() {

    const [toggle, setToggle] = useState(true);
    const menu = [
        {
            name: "Home",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINALS",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-8'>
                <img src={logo} alt="Disney" className='w-[80px] md:w-[115px] object-cover' />
                <div className='hidden md:flex gap-8'>
                    {
                        menu.map(item => <HeaderItems name={item.name} Icon={item.icon} />)
                    }
                </div>
                <div className='flex md:hidden gap-8'>
                    {
                        menu.map((item, index) => index < 3 && (
                            <HeaderItems name={''} Icon={item.icon} />
                        ))
                    }
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItems name={''} Icon={HiDotsVertical} />
                        {toggle ?
                            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                                {
                                    menu.map((item, index) => index > 2 && (
                                        <HeaderItems name={item.name} Icon={item.icon} />
                                    ))
                                }
                            </div>
                            : null}
                    </div>
                </div>
            </div>
            <img src={profile} alt="profile" className='w-[40px] rounded-full' />
        </div>
    )
}
