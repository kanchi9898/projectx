import React from 'react'
import { IoMdClose } from 'react-icons/io'


interface Iprop {
    index?: number
    handle_click: () => void
    item: string
}
const Querybtn: React.FC<Iprop> = ({ index, handle_click, item }) => {
    return (
        <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
            <span>{item}</span>
            <IoMdClose size={20} className="cursor-pointer" onClick={() => handle_click()} />
        </div>
    )
}

export default Querybtn