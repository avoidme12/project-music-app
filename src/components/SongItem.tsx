'use client'

import React, {useContext} from 'react';
import {PlayerContext} from "../context/PlayerContext.tsx";


export default function SongItem({name, image, desc, id}){

    const {playWithId} = useContext(PlayerContext)

    return (
        <div onClick={() => playWithId(id)} className='min-w-[180px] p-1 px-3 rounded duration-150 ease-in cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt=""/>
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    );
};
