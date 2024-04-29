"use client"
import { Datax, Location, datafilter, Discpline, Duration, Program, Price, Intake, Sort, addCommas } from "./List/Data";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import React, { useEffect, useRef, useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
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

type Checked = DropdownMenuCheckboxItemProps["checked"]



export default function Home() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [selectlocation, setSelectlocation] = useState<string[]>([])
  const [selectprogram, setSelectprogram] = useState<string[]>([])
  const [selectdiscipline, setSelectdiscipline] = useState<string[]>([])
  const [selectIntake, setSelectIntake] = useState<string[]>([])
  const [selectprice, setSelectprice] = useState<string[]>([])
  const [duration, setduration] = useState("")
  const [sort, setsort] = useState("")
  const [FinalData, setFinaldata] = useState<IData[]>(Datax)
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [indexnum, setIndexnum] = useState(0)
  const [search, setSearch] = useState("Tech")
  const [secondDivHeight, setSecondDivHeight] = useState<number>(0);
  const secondDivRef = useRef<HTMLDivElement>(null);

  const allData = [
    ...selectlocation,
    ...selectprogram,
    ...selectdiscipline,
    ...selectIntake,
    ...selectprice,
    duration
  ];

  //  Add duration in localstorage
  const addsort = (item: string) => {
    if (item) {
      const store = localStorage.getItem("Sort")
      setsort(item)
      if (store) {
        if (store === item) {
          setsort("")
          localStorage.removeItem('Sort');
        } else {
          localStorage.setItem("Sort", item)
        }
      } else {
        localStorage.setItem("Sort", item)
      }
    }

    if (item === Sort[0]) {
      setFinaldata(Datax.sort((a, b) => a.price - b.price))
    } else if (item === Sort[1]) {
      setFinaldata(Datax.sort((a, b) => b.price - a.price))
    } else if (item === Sort[2]) {
      setFinaldata(Datax.sort((a, b) => a.fee - b.fee))
    }
    else if (item === Sort[3]) {
      setFinaldata(Datax.sort((a, b) => b.fee - a.fee))
    }

  }


  useEffect(() => {
    const lowercaseFilters = allData.map(item => item.toLowerCase());

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

  }, [allData, FinalData, Datax]);

  useEffect(() => {
    const storagedata = localStorage.getItem("Location")
    if (storagedata) {
      setSelectlocation(JSON.parse(storagedata))
    }
    const storagedataprogram = localStorage.getItem("Program")
    if (storagedataprogram) {
      setSelectprogram(JSON.parse(storagedataprogram))
    }
    const storagedatadiscipline = localStorage.getItem("Discipline")
    if (storagedatadiscipline) {
      setSelectdiscipline(JSON.parse(storagedatadiscipline))
    }
    const storagedataprice = localStorage.getItem("Price")
    if (storagedataprice) {
      setSelectprice(JSON.parse(storagedataprice))

    }
    const storageIntake = localStorage.getItem("Intake")
    if (storageIntake) {
      setSelectIntake(JSON.parse(storageIntake))
    }
    const storagetime = localStorage.getItem("Duration")
    if (storagetime) {
      setduration(storagetime)
    }
    const storagesort = localStorage.getItem("Sort")
    if (storagesort) {
      setsort(storagesort)
      if (storagesort === Sort[0]) {
        setFinaldata(Datax.sort((a, b) => a.price - b.price))
      } else if (storagesort === Sort[1]) {
        setFinaldata(Datax.sort((a, b) => b.price - a.price))
      } else if (storagesort === Sort[2]) {
        setFinaldata(Datax.sort((a, b) => a.fee - b.fee))
      } else if (storagesort === Sort[3]) {
        setFinaldata(Datax.sort((a, b) => b.fee - a.fee))
      }
    }
  }, [])



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

  useEffect(() => {
    if (secondDivRef.current) {
      const height = secondDivRef.current.offsetHeight;
      setSecondDivHeight(height);
    }
  }, []);

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

  //  Add location in localstorage
  const addlocation = (id: number) => {
    if (id >= 0) {
      const storelocation = localStorage.getItem("Location")
      if (storelocation) {
        const old_data = JSON.parse(storelocation)
        if (old_data.includes(Location[id])) {
          const newdata = old_data.filter((item: string, index: number) => item !== Location[id])
          localStorage.setItem("Location", JSON.stringify(newdata))
          setSelectlocation(newdata)

        } else {
          const new_data = [...old_data, Location[id]]
          localStorage.setItem("Location", JSON.stringify(new_data))
          setSelectlocation(new_data)
        }


      } else {
        localStorage.setItem("Location", JSON.stringify([Location[id]]))
        setSelectlocation([Location[id]])

      }
    }
  }
  //  delete location from localstorage
  const handledeletelocation = (Item: string) => {
    const storelocation = localStorage.getItem("Location")
    if (storelocation) {
      const old_data = JSON.parse(storelocation)
      const newdata = old_data.filter((item: string, index: number) => item !== Item)
      localStorage.setItem("Location", JSON.stringify(newdata))
      setSelectlocation(newdata)
    }
  }

  //  Add Program in localstorage
  const addprogram = (id: number) => {
    if (id >= 0) {
      const storeprogram = localStorage.getItem("Program")
      if (storeprogram) {
        const old_data = JSON.parse(storeprogram)
        if (old_data.includes(Program[id])) {
          const newdata = old_data.filter((item: string, index: number) => item !== Program[id])
          localStorage.setItem("Program", JSON.stringify(newdata))
          setSelectprogram(newdata)

        } else {
          const new_data = [...old_data, Program[id]]
          localStorage.setItem("Program", JSON.stringify(new_data))
          setSelectprogram(new_data)
        }


      } else {
        localStorage.setItem("Program", JSON.stringify([Program[id]]))
        setSelectprogram([Program[id]])

      }
    }
  }
  //  delete program from localstorage
  const handledeleteprogram = (Item: string) => {
    const store = localStorage.getItem("Program")
    if (store) {
      const old_data = JSON.parse(store)
      const newdata = old_data.filter((item: string, index: number) => item !== Item)
      localStorage.setItem("Program", JSON.stringify(newdata))
      setSelectprogram(newdata)
    }
  }

  //  Add Discipline in localstorage
  const adddiscipline = (id: number) => {
    if (id >= 0) {
      const storediscipline = localStorage.getItem("Discipline")
      if (storediscipline) {
        const old_data = JSON.parse(storediscipline)
        if (old_data.includes(Discpline[id])) {
          const newdata = old_data.filter((item: string, index: number) => item !== Discpline[id])
          localStorage.setItem("Discipline", JSON.stringify(newdata))
          setSelectdiscipline(newdata)

        } else {
          const new_data = [...old_data, Discpline[id]]
          localStorage.setItem("Discipline", JSON.stringify(new_data))
          setSelectdiscipline(new_data)
        }


      } else {
        localStorage.setItem("Discipline", JSON.stringify([Discpline[id]]))
        setSelectdiscipline([Discpline[id]])

      }
    }
  }
  //  delete discipline from localstorage
  const handledeletediscipline = (Item: string) => {
    const store = localStorage.getItem("Discipline")
    if (store) {
      const old_data = JSON.parse(store)
      const newdata = old_data.filter((item: string, index: number) => item !== Item)
      localStorage.setItem("Discipline", JSON.stringify(newdata))
      setSelectdiscipline(newdata)
    }
  }

  //  Add Price in localstorage
  const addprice = (id: number) => {
    if (id >= 0) {
      const storePrice = localStorage.getItem("Price")
      if (storePrice) {
        const old_data = JSON.parse(storePrice)
        if (old_data.includes(Price[id])) {
          const newdata = old_data.filter((item: string, index: number) => item !== Price[id])
          localStorage.setItem("Price", JSON.stringify(newdata))
          setSelectprice(newdata)

        } else {
          const new_data = [...old_data, Price[id]]
          localStorage.setItem("Price", JSON.stringify(new_data))
          setSelectprice(new_data)
        }


      } else {
        localStorage.setItem("Price", JSON.stringify([Price[id]]))
        setSelectprice([Price[id]])

      }
    }
  }
  //  delete price from localstorage
  const handledeleteprice = (Item: string) => {
    const store = localStorage.getItem("Price")
    if (store) {
      const old_data = JSON.parse(store)
      const newdata = old_data.filter((item: string, index: number) => item !== Item)
      localStorage.setItem("Price", JSON.stringify(newdata))
      setSelectprice(newdata)
    }
  }

  //  Add Intake in localstorage
  const addintake = (id: number) => {
    if (id >= 0) {
      const storeIntake = localStorage.getItem("Intake")
      if (storeIntake) {
        const old_data = JSON.parse(storeIntake)
        if (old_data.includes(Intake[id])) {
          const newdata = old_data.filter((item: string, index: number) => item !== Intake[id])
          localStorage.setItem("Intake", JSON.stringify(newdata))
          setSelectIntake(newdata)

        } else {
          const new_data = [...old_data, Intake[id]]
          localStorage.setItem("Intake", JSON.stringify(new_data))
          setSelectIntake(new_data)
        }


      } else {
        localStorage.setItem("Intake", JSON.stringify([Intake[id]]))
        setSelectIntake([Intake[id]])

      }
    }
  }
  //  delete intake from localstorage
  const handledeleteintake = (Item: string) => {
    const store = localStorage.getItem("Intake")
    if (store) {
      const old_data = JSON.parse(store)
      const newdata = old_data.filter((item: string, index: number) => item !== Item)
      localStorage.setItem("Intake", JSON.stringify(newdata))
      setSelectIntake(newdata)
    }
  }

  //  Add duration in localstorage
  const addduration = (item: string) => {
    if (item) {
      const store = localStorage.getItem("Duration")
      setduration(item)
      if (store) {
        if (store == item) {
          setduration("")
          localStorage.removeItem('Duration');
        } else {
          localStorage.setItem("Duration", item)
        }
      } else {
        localStorage.setItem("Duration", item)
      }


    }
  }


  // delete duration
  const handledeleteduration = () => {
    setduration("")
    localStorage.removeItem('Duration');
  }
  // reset
  const handlereset = () => {
    setduration("")
    setsort("")
    setSelectIntake([])
    setSelectdiscipline([])
    setSelectlocation([])
    setSelectprice([])
    setSelectprogram([])
    setFinaldata(Datax)
    localStorage.removeItem('Duration');
    localStorage.removeItem('Location');
    localStorage.removeItem('Program');
    localStorage.removeItem('Price');
    localStorage.removeItem('Intake');
    localStorage.removeItem('Discipline');
    localStorage.removeItem('Sort');

  }


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
                      <Button variant="outline" className={`h-full relative hidden lg:flex gap-2`}>{item} {

                        (item == "Location" && selectlocation.length > 0) && <GoDotFill size={15} className="text-blue" />}
                        {

                          (item == "Program Levels" && selectprogram.length > 0) && <GoDotFill size={15} className="text-blue" />
                        }
                        {

                          (item == "Discipline" && selectdiscipline.length > 0) && <GoDotFill size={15} className="text-blue" />
                        }
                        {

                          (item == "Tuition Fee(USD)" && selectprice.length > 0) && <GoDotFill size={15} className="text-blue" />
                        }
                        {

                          (item == "Intake" && selectIntake.length > 0) && <GoDotFill size={15} className="text-blue" />
                        }



                        <MdKeyboardArrowDown size={20} /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={`w-[21rem] h-max ${item == "Intake" && "w-[10rem]"} ${(item == "Location" || item == "Discipline") && "overflow-y-scroll h-[40vh]"}`}>
                      {item == "Location" &&
                        Location?.map((i: any, id) => {
                          return (
                            <DropdownMenuCheckboxItem
                              checked={selectlocation.includes(i)}
                              onCheckedChange={setShowStatusBar}
                              onClick={() => addlocation(id)}
                            >
                              {i}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }
                      {item == "Program Levels" &&
                        Program?.map((i: any, id) => {
                          return (

                            <DropdownMenuCheckboxItem
                              checked={selectprogram.includes(i)}
                              onCheckedChange={setShowStatusBar}
                              onClick={() => addprogram(id)}
                            >
                              {i}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }

                      {item == "Discipline" &&
                        Discpline?.map((i: any, id) => {
                          return (

                            <DropdownMenuCheckboxItem
                              checked={selectdiscipline.includes(i)}
                              onCheckedChange={setShowStatusBar}
                              onClick={() => adddiscipline(id)}
                            >
                              {i}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }
                      {item == "Tuition Fee (USD)" &&
                        Price?.map((i, id) => {
                          return (

                            <DropdownMenuCheckboxItem
                              checked={selectprice.includes(i)}
                              onCheckedChange={setShowStatusBar}
                              onClick={() => addprice(id)}
                            >
                              {i}
                            </DropdownMenuCheckboxItem>
                          )
                        })
                      }
                      {item == "Intake" &&
                        Intake?.map((i, id) => {
                          return (

                            <DropdownMenuCheckboxItem
                              checked={selectIntake.includes(i)}
                              onCheckedChange={setShowStatusBar}
                              onClick={() => addintake(id)}
                            >
                              {i}
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
                  <Button variant="outline" className="h-full">Duration {
                    duration && <GoDotFill size={15} className="text-blue" />

                  } <MdKeyboardArrowDown size={20} /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Duration</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={duration}>
                    {
                      Duration?.map((item, index) => (
                        <DropdownMenuRadioItem value={item} key={index} className="text-[1.2vw] cursor-pointer" onClick={() => addduration(item)}>{item}</DropdownMenuRadioItem>
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
                <Button variant="outline" className="h-full flex gap-2">Sort <GoDotFill size={15} className="text-blue" /> <FaSortAmountDown size={17} /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[24rem]">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sort}>
                  {
                    Sort?.map((item, index) => (
                      <DropdownMenuRadioItem value={item} key={index} className="text-[1.2vw] cursor-pointer flex gap-2" onClick={() => addsort(item)}>
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

        {(selectlocation.length > 0 ||
          selectprogram.length > 0 ||
          selectIntake.length > 0 ||
          selectprice.length > 0 ||
          duration.length > 0 ||
          selectdiscipline.length > 0) &&
          <div className="flex gap-3 my-5 flex-wrap">

            {
              selectlocation?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handledeletelocation(item)} />
                  </div>
                )
              })
            }
            {
              selectprogram?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handledeleteprogram(item)} />
                  </div>
                )
              })
            }
            {
              selectdiscipline?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handledeletediscipline(item)} />
                  </div>
                )
              })
            }
            {
              selectprice?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handledeleteprice(item)} />
                  </div>
                )
              })
            }
            {
              selectIntake?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                    <span>{item}</span>
                    <IoMdClose size={20} className="cursor-pointer" onClick={() => handledeleteintake(item)} />
                  </div>
                )
              })
            }
            {
              duration.length > 0 &&
              <div className="flex items-center gap-2 bg-fff p-2 rounded-lg w-max border-[1px]">
                <span>{duration}</span>
                <IoMdClose size={20} className="cursor-pointer" onClick={() => handledeleteduration()} />
              </div>

            }
            {
              allData?.length > 2 &&
              <Button className="bg-blue hover:bg-darkblue" onClick={handlereset}>Clear all</Button>
            }
          </div>}

      </Container>
      <hr className="mt-5" />

      <Container>
        <div className="flex gap-8 w-full mt-5">
          <div className="first-div flex-[0.3]">
            <div className="text-[1.5vw] font-medium h-[50px]">{FinalData.length} programs</div>

            <div className={`flex flex-col gap-3 ${FinalData.length > 5 && "overflow-y-scroll"}`} style={{ height: `${secondDivHeight - 50}px` }}>
              {
                FinalData?.map((item, index: number) => {
                  const { name, short_name, price, logo, program_level, duration, address } = item;
                  return (
                    <div key={index} onClick={() => setIndexnum(index)} className={`bg-fff p-5 rounded-[10px] flex flex-col gap-3 cursor-pointer border-[1px] ${indexnum === index ? "border-[2px] border-blue" : ""}`}>
                      <div className="flex items-center gap-5">
                        <div className="h-[60px] w-[60px] rounded-[50%] bg-transparent border-[1px] overflow-hidden">
                          <img className="h-full w-full object-contain" src={logo} alt="logo" />
                        </div>
                        <div>
                          <h1 className="font-medium">{name}</h1>
                          <p className="text-zinc-400 text-[0.9vw]">{address}</p>
                        </div>
                      </div>
                      <div>
                        <h1 className="font-bold">{short_name}</h1>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="border-r-[1px] pr-4">{program_level}</h1>
                        <p>{duration}</p>
                      </div>
                      <div className="text-[1.5vw] font-medium">
                        ${addCommas(price ? price : 0)} USD / Year
                      </div>
                    </div>
                  )
                })
              }


            </div>
          </div>

          <div ref={secondDivRef} className="second-div h-max flex-[0.7] rounded-[10px] overflow-hidden border-[1px] bg-fff">
            <div className="h-[30vh]">
              <img className="h-full w-full object-cover" src={FinalData[indexnum]?.picture} alt="img" />
            </div>
            <div className="p-10 flex flex-col gap-10">
              <div>
                <h1 className="text-[1.3vw] underline text-blue font-semibold mb-2">{FinalData[indexnum]?.name}</h1>
                <span className="flex items-center gap-2">
                  <CiLocationOn size={30} />
                  <p>{FinalData[indexnum]?.address}</p>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-[1.6vw] underline text-blue font-semibold mb-2">{FinalData[indexnum]?.course_name}</p>
                <RxExternalLink size={25} className="text-blue cursor-pointer" />
              </div>

              <div>
                <Button className="bg-blue text-fff font-medium">Check Eligibility Now</Button>
              </div>
              <div>
                <h3 className="text-[1.4vw] font-medium mb-4">Program Summary</h3>
                <p className="text-zinc-400">{FinalData[indexnum]?.summary}</p>
                <div className="w-full flex items-center justify-center mt-2">
                  <Button className="bg-transparent text-black border-2 hover:bg-zinc-200 gap-3">Show Less <MdKeyboardArrowDown size={30} className="rotate-[180deg]" /></Button>
                </div>
              </div>
              <div className="border-2 rounded-[10px] p-5 grid grid-cols-2 gap-6">
                <div className="flex gap-5">
                  <PiCertificate size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">{FinalData[indexnum]?.program_level}</h1>
                    <p className="text-zinc-500">Program Level</p>
                  </span>
                </div>
                <div className="flex gap-5">
                  <IoCalendarOutline size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">{FinalData[indexnum]?.duration}</h1>
                    <p className="text-zinc-500">Program Length</p>
                  </span>
                </div>
                <div className="flex gap-5">
                  <FaSchoolFlag size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">${addCommas(FinalData[indexnum]?.price ? FinalData[indexnum]?.price : 0)} / Year</h1>
                    <p className="text-zinc-500">Tuition</p>
                  </span>
                </div>
                <div className="flex gap-5">
                  <FaHandHoldingUsd size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">${FinalData[indexnum]?.fee}</h1>
                    <p className="text-zinc-500">Application Fee</p>
                  </span>
                </div>
                <div className="flex gap-5">
                  <FaHouseUser size={50} className="text-blue" />
                  <span>
                    <h1 className="font-semibold">{FinalData[indexnum]?.cost_of_living}</h1>
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

