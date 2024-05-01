import { IData } from '@/app/type/type'
import React from 'react'
import { RxExternalLink } from 'react-icons/rx'
import { Button } from './button'
import { IoCalendarOutline } from 'react-icons/io5'
import { FaSchoolFlag } from 'react-icons/fa6'
import { FaHandHoldingUsd, FaHouseUser } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { addCommas } from '@/app/List/Data'
import { PiCertificate } from 'react-icons/pi'
import { CiLocationOn } from 'react-icons/ci'

interface Iprop {
    data: IData
    increase: boolean
    setIncrease: () => void
}

const Maincard: React.FC<Iprop> = ({ data, increase, setIncrease }) => {
    return (
        <div>

            <div className="h-[30vh]">
                <img className="h-full w-full object-cover" src={data?.picture} alt="img" />
            </div>
            <div className="p-3 md:p-10 flex flex-col gap-10">
                <div>
                    <h1 className="lg:text-[1.3vw] underline text-blue font-semibold mb-2">{data?.name}</h1>
                    <span className="flex items-center gap-2">
                        <CiLocationOn size={30} />
                        <p>{data?.address}</p>
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <p className="sm:text-[2.5vw] lg:text-[1.6vw] underline text-blue font-semibold mb-2">{data?.course_name}</p>
                    <RxExternalLink size={25} className="text-blue cursor-pointer" />
                </div>

                <div>
                    <Button className="bg-blue text-fff font-medium">Check Eligibility Now</Button>
                </div>
                <div>
                    <h3 className="lg:text-[1.4vw] font-medium mb-4">Program Summary</h3>
                    <p className={`text-zinc-400 ${increase ? "line-clamp-none" : "line-clamp-2"}`}>{data?.summary}</p>
                    <div className="w-full flex items-center justify-center mt-2">
                        <Button className="bg-transparent text-black border-2 hover:bg-zinc-200 gap-3" onClick={() => setIncrease()}>{increase ? "Show Less" : "Show More"} <MdKeyboardArrowDown size={30} className={`${increase ? "rotate-[180deg]" : ""} transform duration-300 ease-linear `} /></Button>
                    </div>
                </div>
                <div className="border-2 rounded-[10px] p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-5">
                        <PiCertificate size={50} className="text-blue" />
                        <span>
                            <h1 className="font-semibold">{data?.discipline}</h1>
                            <p className="text-zinc-500">Program Level</p>
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <IoCalendarOutline size={50} className="text-blue" />
                        <span>
                            <h1 className="font-semibold">{data?.duration}</h1>
                            <p className="text-zinc-500">Program Length</p>
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <FaSchoolFlag size={50} className="text-blue" />
                        <span>
                            <h1 className="font-semibold">${addCommas(data?.price ? data?.price : 0)} / Year</h1>
                            <p className="text-zinc-500">Tuition</p>
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <FaHandHoldingUsd size={50} className="text-blue" />
                        <span>
                            <h1 className="font-semibold">${data?.fee}</h1>
                            <p className="text-zinc-500">Application Fee</p>
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <FaHouseUser size={50} className="text-blue" />
                        <span>
                            <h1 className="font-semibold">{data?.cost_of_living}</h1>
                            <p className="text-zinc-500">Cost Of Living</p>
                        </span>
                    </div>

                </div>

                <div>
                    <h1 className="font-semibold md:text-[1.4vw]">Admission Requirements</h1>
                </div>

                <div>
                    <h1 className="text-zinc-400 font-semibold">Academic Background
                        Minimum Level of Education Completed
                        Minimum GPA
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <Button className="bg-lightblue hover:shadow-xl hover:bg-lightblue text-blue font-bold">Log in to View All Requirements</Button>
                </div>
            </div>
        </div>
    )
}

export default Maincard
