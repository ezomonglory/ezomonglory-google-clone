import React from 'react'
import SingleHeaderOptions from './SingleHeaderOptions'
import {EllipsisVerticalIcon, MapIcon, MagnifyingGlassIcon, PlayCircleIcon, NewspaperIcon, PhotoIcon} from "@heroicons/react/24/solid"

function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
        {/* Left */}
        <div className='space-x-6 flex'>
        <SingleHeaderOptions Icon={MagnifyingGlassIcon} title="All" selected/>
        <SingleHeaderOptions Icon={PhotoIcon} title="images" />
        <SingleHeaderOptions Icon={PlayCircleIcon} title="Videos" />
        <SingleHeaderOptions Icon={NewspaperIcon} title="News"/>
        <SingleHeaderOptions Icon={MapIcon} title="Maps" />
        <SingleHeaderOptions Icon={EllipsisVerticalIcon} title="More" />
        </div>

        {/* Right */}
        <div className='flex space-x-4'>
            <p className='link'> Settings </p>
            <p className='link'>Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions