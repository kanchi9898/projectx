import { addCommas } from '@/app/List/Data'
import { IData } from '@/app/type/type'
import React from 'react'


interface Iprop {
    data: IData
    handle_currentdata: () => void
    index: number
    currentIndex: number
}
const Card: React.FC<Iprop> = ({ handle_currentdata, index, currentIndex, data }) => {
    return (
        <div onClick={() => handle_currentdata()} key={index} className={`bg-fff p-5 rounded-[10px] flex flex-col gap-3 cursor-pointer border-[1px] ${currentIndex === index && "border-[3px] border-blue"}`}>
            <div className="flex items-center gap-5">
                <div className="h-[60px] w-[60px] rounded-[50%] bg-transparent border-[1px] overflow-hidden">
                    <img className="h-full w-full object-contain" src={data?.logo} alt="logo" />
                </div>
                <div>
                    <h1 className="font-medium ">{data?.name}</h1>
                    <p className="text-zinc-400 md:text-[0.9vw]">{data?.address}</p>
                </div>
            </div>
            <div>
                <h1 className="font-bold">{data?.short_name}</h1>
            </div>
            <div className="flex gap-4">
                <h1 className="border-r-[1px] pr-4">{data?.program_level}</h1>
                <p>{data?.duration}</p>
            </div>
            <div className="md:text-[1.5vw] font-medium">
                ${addCommas(data?.price ? data?.price : 0)} USD / Year
            </div>
        </div>
    )
}

export default Card
