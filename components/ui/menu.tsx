import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Menu = () => {
    return (
        <div className="flex items-center justify-between py-2 px-4 border-b-[1px] rounded-lg cursor-pointer hover:bg-lightblue">
            <div className="flex items-center gap-4 font-semibold text-[1.3vw]">
                <CiLocationOn size={30} />
                <p>Location</p>
            </div>
            <MdKeyboardArrowDown size={30} />
        </div>
    )
}

export default Menu
