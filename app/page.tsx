"use client"
import { Datax, Location, datafilter, Discpline, Duration, Program, Price, Intake, Sort, addCommas } from "./List/Data";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaHandHoldingUsd, FaHouseUser, FaSortAmountDown } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { RxExternalLink } from "react-icons/rx";
import { PiCertificate } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { FaSchoolFlag } from "react-icons/fa6";
import { IData } from "./type/type";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,

} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Menu from "@/components/ui/menu";


export default function Home() {
  const [FinalData, setFinaldata] = useState<IData[]>(Datax)
  const [currentIndex, setCurrentindex] = useState(0)
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("Tech")
  const [secondDivHeight, setSecondDivHeight] = useState<number>(0);
  const secondDivRef = useRef<HTMLDivElement>(null);
  const [increase, setIncrease] = useState(false);

  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter();


  const [query, setQuery] = useState({
    location: searchParams.getAll('location') || [],
    program_level: searchParams.getAll('program_level') || [],
    discipline: searchParams.getAll('discipline') || [],
    tuition_price: searchParams.getAll('tuition_price') || [],
    intake: searchParams.getAll('intake') || [],
    duration: searchParams.get('duration') || '',
    sort: searchParams.get('sort') || '',
  });

  useEffect(() => {
    const queryString = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(val => queryString.append(key, val));
      } else {
        queryString.append(key, value);
      }
    });
    router.push(`${pathName}?${queryString.toString()}`);

    if (query.sort === Sort[0]) {
      setFinaldata(Datax.sort((a, b) => a.price - b.price))
    } else if (query.sort === Sort[1]) {
      setFinaldata(Datax.sort((a, b) => b.price - a.price))
    } else if (query.sort === Sort[2]) {
      setFinaldata(Datax.sort((a, b) => a.fee - b.fee))
    } else if (query.sort === Sort[3]) {
      setFinaldata(Datax.sort((a, b) => b.fee - a.fee))
    }
  }, [query, router, pathName]);


  // add & delete Functions
  const handle_location = (item: string) => {
    let updatedLocations = [...query.location];
    if (updatedLocations.includes(item)) {
      updatedLocations = updatedLocations.filter((i) => i !== item);
    } else {
      updatedLocations.push(item);
    }
    setQuery({ ...query, location: updatedLocations });
  };
  const handle_Program = (item: string) => {
    let updatedLocations = [...query.program_level];
    if (updatedLocations.includes(item)) {
      updatedLocations = updatedLocations.filter((i) => i !== item);
    } else {
      updatedLocations.push(item);
    }
    setQuery({ ...query, program_level: updatedLocations });
  };
  const handle_discipline = (item: string) => {
    let updatedLocations = [...query.discipline];
    if (updatedLocations.includes(item)) {
      updatedLocations = updatedLocations.filter((i) => i !== item);
    } else {
      updatedLocations.push(item);
    }
    setQuery({ ...query, discipline: updatedLocations });
  };
  const handle_tution_price = (item: string) => {
    let updatedLocations = [...query.tuition_price];
    if (updatedLocations.includes(item)) {
      updatedLocations = updatedLocations.filter((i) => i !== item);
    } else {
      updatedLocations.push(item);
    }
    setQuery({ ...query, tuition_price: updatedLocations });
  };
  const handle_intake = (item: string) => {
    let updatedLocations = [...query.intake];
    if (updatedLocations.includes(item)) {
      updatedLocations = updatedLocations.filter((i) => i !== item);
    } else {
      updatedLocations.push(item);
    }
    setQuery({ ...query, intake: updatedLocations });
  };
  const handle_duration = (item: string) => {
    if (query.duration.length !== 0 && query.duration === item) {
      setQuery({ ...query, duration: "" })
    } else {
      setQuery({ ...query, duration: item })
    }
  }
  const handle_sort = (item: string) => {
    if (query.sort.length !== 0 && query.sort === item) {
      setQuery({ ...query, sort: "" })
    } else {
      setQuery({ ...query, sort: item })
    }
  }
  const handle_reset = () => {
    setFinaldata(Datax)
    setQuery({
      location: [],
      program_level: [],
      discipline: [],
      tuition_price: [],
      intake: [],
      duration: '',
      sort: ''
    });
  }

  // for mouse on click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setInputFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // for screen height
  useEffect(() => {
    if (secondDivRef.current) {
      const height = secondDivRef.current.offsetHeight;
      setSecondDivHeight(height);
    }
  }, [increase]);

  // Search function
  const handlesearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search) {
      const trimmedSearch = search.trim();
      const searchdata = Datax?.filter((item) =>
        item.name.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
        item.short_name.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
        item.course_name.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
        item.program_level.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
        item.location.toLowerCase().includes(trimmedSearch.toLowerCase())
      );

      if (searchdata.length > 0) {
        setFinaldata(searchdata)
      } else {
        setFinaldata(Datax)
      }

    }
  }

  const allQueryValues = [
    ...query.location,
    ...query.program_level,
    ...query.discipline,
    ...query.tuition_price,
    ...query.intake,
    query.duration
  ]

  useEffect(() => {
    const lowercaseFilters = allQueryValues.map(item => item.toLowerCase());

    const filteredData = Datax.filter(course =>
      lowercaseFilters.includes(course.location.toLowerCase()) ||
      lowercaseFilters.includes(course.duration.toLowerCase()) ||
      lowercaseFilters.includes(course.discipline.toLowerCase()) ||
      lowercaseFilters.includes(course.program_level.toLowerCase()) ||
      course.intake.some(intake => lowercaseFilters.includes(intake.toLowerCase()))
    );

    // Check if the filteredData is different from FinalData before updating the state
    if (JSON.stringify(filteredData) !== JSON.stringify(FinalData) && search.length <= 4) {
      setFinaldata(filteredData?.length ? filteredData : Datax);
    }

  }, [allQueryValues, FinalData, Datax]);


  return (
    <main className="bg-[#f8f9fe] pt-5">
      <Container>
        <form onSubmit={handlesearch} className="flex items-center justify-between gap-3 mb-5 h-[7vh]">
          <div ref={inputRef} className={`${isInputFocused && "border-2 border-blue"} flex items-center w-full gap-3 border-2 px-5 bg-fff rounded py-1 h-full`}>
            <CiSearch size={30} />
            <input type="text" name="search" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} onFocus={() => setInputFocused(true)} placeholder="Search For Schools, Programs or Other Keywords" className="w-full p-2 outline-none h-full bg-transparent" />
            {isInputFocused && search.length > 0 && < IoMdClose size={20} className="cursor-pointer" onClick={() => setSearch("")} />}
          </div>
          <Button variant="outline" className="font-semibold bg-blue text-fff hover:shadow hover:bg-darkblue hover:text-fff h-full">Search</Button>
        </form>
        <div className="flex items-center justify-between h-[7vh]">
          <div className="flex gap-2 h-[7vh]">
            {
              datafilter?.map((item, index) => {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className={`h-full relative 

                      ${(item === "Location") && "hidden xl:flex"
                        }
                      ${(item === "Program Levels") && "hidden xl:flex"
                        }
                      ${(item === "Discipline") && "hidden lg:flex"
                        }
                      ${(item === "Tuition Fee (USD)") && "hidden lg:flex"
                        }
                      ${(item === "Intake") && "hidden md:flex"
                        }
                      gap-1`}>{item}{
                          (item == "Location" && query.location.length > 0) && <GoDotFill size={15} className="text-blue" />}
                        {

                          (item == "Program Levels" && query.program_level.length > 0) && <GoDotFill size={15} className="text-blue" />
                        }
                        {

                          (item == "Discipline" && query.discipline.length > 0) && <GoDotFill size={15} className="text-blue" />
                        }
                        {

                          (item == "Tuition Fee (USD)" && query.tuition_price.length > 0) && <GoDotFill size={15} className="text-blue" />
                        }
                        {

                          (item == "Intake" && query.intake.length > 0) && <GoDotFill size={15} className="text-blue" />
                        }
                        <MdKeyboardArrowDown size={20} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={`w-[21rem] h-max ${item == "Intake" && "w-[10rem]"} ${(item == "Location" || item == "Discipline") && "overflow-y-scroll h-[40vh]"}`}>
                      {item == "Location" &&
                        Location?.map((item, index) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={index}
                              checked={query.location.includes(item)}
                              onClick={() => handle_location(item)}
                            >
                              {item}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }
                      {item == "Program Levels" &&
                        Program?.map((item, idx) => {
                          return (

                            <DropdownMenuCheckboxItem
                              key={idx}
                              checked={query.program_level.includes(item)}
                              onClick={() => handle_Program(item)}
                            >
                              {item}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }

                      {item == "Discipline" &&
                        Discpline?.map((item, idx) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={idx}
                              checked={query.discipline.includes(item)}
                              onClick={() => handle_discipline(item)}

                            >
                              {item}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }
                      {item == "Tuition Fee (USD)" &&
                        Price?.map((item, idx) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={idx}
                              checked={query.tuition_price.includes(item)}
                              onClick={() => handle_tution_price(item)}
                            >
                              {item}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }
                      {item == "Intake" &&
                        Intake?.map((item, idx) => {
                          return (

                            <DropdownMenuCheckboxItem
                              key={idx}
                              checked={query.intake.includes(item)}
                              onClick={() => handle_intake(item)}
                            >
                              {item}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }


                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              })
            }

            <div className="h-[7vh]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-full hidden sm:flex gap-1">Duration {

                    (query.duration.length > 0) && <GoDotFill size={15} className="text-blue" />
                  } <MdKeyboardArrowDown size={20} /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Duration</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={query.duration}>
                    {
                      Duration?.map((item, index) => (
                        <DropdownMenuRadioItem value={item} key={index} className="md:text-[1.2vw] cursor-pointer" onClick={() => handle_duration(item)}
                        >{item}</DropdownMenuRadioItem>
                      ))
                    }
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="h-[7vh] bg-lightblue rounded">
              <Button variant="outline" className="bg-transparent border-2 text-blue font-bold hover:bg-transparent h-[7vh] flex gap-3"><TbAdjustmentsHorizontal size={20} /> All Filter</Button>
            </div>
          </div>

          <div className="h-[7vh]">
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-full flex gap-2">Sort {query.sort.length > 0 && <GoDotFill size={15} className="text-blue" />} <FaSortAmountDown size={17} /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[24rem]">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={query.sort}>
                  {
                    Sort?.map((item, index) => (
                      <DropdownMenuRadioItem value={item} key={index} className="md:text-[1.2vw] cursor-pointer flex gap-2" onClick={() => handle_sort(item)}>
                        {
                          item == Sort[0] || item == Sort[1] ?
                            <AiOutlineDollar size={25} /> :
                            <GrNotes size={25} />
                        }
                        {item}

                      </DropdownMenuRadioItem>
                    ))
                  }

                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>

        {(query.location.length > 0 ||
          query.program_level.length > 0 ||
          query.intake.length > 0 ||
          query.tuition_price.length > 0 ||
          query.duration.length > 0 ||
          query.discipline.length > 0) &&
          <div className="flex gap-3 my-5 flex-wrap">

            {
              query.location?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handle_location(item)} />
                  </div>
                )
              })
            }
            {
              query.program_level?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handle_Program(item)} />
                  </div>
                )
              })
            }
            {
              query.discipline?.map((item: string, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handle_discipline(item)} />
                  </div>
                )
              })
            }
            {
              query.tuition_price?.map((item: string, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handle_tution_price(item)} />
                  </div>
                )
              })
            }
            {
              query.intake?.map((item: string, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handle_intake(item)} />
                  </div>
                )
              })
            }
            {
              query.duration.length > 0 &&
              <div className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                <span>{query.duration}</span>
                <IoMdClose size={20} className="cursor-pointer" onClick={() => setQuery({ ...query, duration: "" })} />
              </div>

            }
            {
              allQueryValues?.length > 2 &&
              <Button className="bg-blue hover:bg-darkblue" onClick={() => handle_reset()}>Clear all</Button>
            }
          </div>}

      </Container>
      <hr className="mt-5" />

      <Container>
        <div className="flex gap-5 w-full mt-5 flex-col-reverse lg:flex-row">
          <div className="first-div flex-1 md:flex-[0.3] ">
            <div className="md:text-[2vw] lg:text-[1.5vw] font-medium h-[50px]">{FinalData.length} programs</div>

            <div className={`flex flex-col gap-3 ${FinalData.length > 5 && "lg:overflow-y-scroll"}`} style={{ height: `${secondDivHeight - 50}px` }}>
              {
                FinalData?.map((item, index: number) => {
                  const { name, short_name, price, logo, program_level, duration, address } = item;
                  return (
                    <div onClick={() => setCurrentindex(index)} key={index} className={`bg-fff p-5 rounded-[10px] flex flex-col gap-3 cursor-pointer border-[1px] ${currentIndex === index && "border-[3px] border-blue"}`}>
                      <div className="flex items-center gap-5">
                        <div className="h-[60px] w-[60px] rounded-[50%] bg-transparent border-[1px] overflow-hidden">
                          <img className="h-full w-full object-contain" src={logo} alt="logo" />
                        </div>
                        <div>
                          <h1 className="font-medium ">{name}</h1>
                          <p className="text-zinc-400 md:text-[0.9vw]">{address}</p>
                        </div>
                      </div>
                      <div>
                        <h1 className="font-bold">{short_name}</h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="border-r-[1px] pr-4">{program_level}</h1>
                        <p>{duration}</p>
                      </div>
                      <div className="md:text-[1.5vw] font-medium">
                        ${addCommas(price ? price : 0)} USD / Year
                      </div>
                    </div>
                  )
                })
              }


            </div>
          </div>

          <div ref={secondDivRef} className="second-div hidden md:block h-max flex-[0.7] rounded-[10px] overflow-hidden border-[1px] bg-fff">
            <div className="h-[30vh]">
              <img className="h-full w-full object-cover" src={FinalData[currentIndex]?.picture} alt="img" />
            </div>
            <div className="p-10 flex flex-col gap-10">
              <div>
                <h1 className="lg:text-[1.3vw] underline text-blue font-semibold mb-2">{FinalData[currentIndex]?.name}</h1>
                <span className="flex items-center gap-2">
                  <CiLocationOn size={30} />
                  <p>{FinalData[currentIndex]?.address}</p>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <p className="sm:text-[2.5vw] lg:text-[1.6vw] underline text-blue font-semibold mb-2">{FinalData[currentIndex]?.course_name}</p>
                <RxExternalLink size={25} className="text-blue cursor-pointer" />
              </div>

              <div>
                <Button className="bg-blue text-fff font-medium">Check Eligibility Now</Button>
              </div>
              <div>
                <h3 className="lg:text-[1.4vw] font-medium mb-4">Program Summary</h3>
                <p className="text-zinc-400">{FinalData[currentIndex]?.summary}</p>
                {increase && <p className="text-zinc-400">{FinalData[currentIndex]?.shortsummary}</p>}
                <div className="w-full flex items-center justify-center mt-2">
                  <Button className="bg-transparent text-black border-2 hover:bg-zinc-200 gap-3" onClick={() => setIncrease(!increase)}>{increase ? "Show Less" : "Show More"} <MdKeyboardArrowDown size={30} className={`${increase ? "rotate-[180deg]" : ""} transform duration-300 ease-linear `} /></Button>
                </div>
              </div>
              <div className="border-2 rounded-[10px] p-5 grid grid-cols-2 gap-6">
                <div className="flex gap-5">
                  <PiCertificate size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">{FinalData[currentIndex]?.discipline}</h1>
                    <p className="text-zinc-500">Program Level</p>
                  </span>
                </div>
                <div className="flex gap-5">
                  <IoCalendarOutline size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">{FinalData[currentIndex]?.duration}</h1>
                    <p className="text-zinc-500">Program Length</p>
                  </span>
                </div>
                <div className="flex gap-5">
                  <FaSchoolFlag size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">${addCommas(FinalData[currentIndex]?.price)} / Year</h1>
                    <p className="text-zinc-500">Tuition</p>
                  </span>
                </div>
                <div className="flex gap-5">
                  <FaHandHoldingUsd size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">${FinalData[currentIndex]?.fee}</h1>
                    <p className="text-zinc-500">Application Fee</p>
                  </span>
                </div>
                <div className="flex gap-5">
                  <FaHouseUser size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">{FinalData[currentIndex]?.cost_of_living}</h1>
                    <p className="text-zinc-500">Cost Of Living</p>
                  </span>
                </div>

              </div>

              <div>
                <h1 className="font-semibold text-[1.4vw]">Admission Requirements</h1>
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
        </div>
      </Container>

      


    </main>
  );
}

