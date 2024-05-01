import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IconType } from 'react-icons';
import { Label } from '@radix-ui/react-label';

const Menu = ({ name, icon }: { name: string, icon: IconType }) => {
    return (
        <div className="flex items-center justify-between py-1 md:py-2 px-4 border-b-[1px] cursor-pointer hover:bg-lightblue">
            <div className="flex items-center gap-4 font-semibold text-[3vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1.3vw]">
                {React.createElement(icon)}
                <Label>{name}</Label>
            </div>
            <MdKeyboardArrowDown size={30} />
        </div>
    )
}

export default Menu
