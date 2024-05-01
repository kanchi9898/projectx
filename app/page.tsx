"use client"
import { Datax, Location, datafilter, Discpline, Duration, Program, Price, Intake, Sort, Allfilterdata } from "./List/Data";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaSortAmountDown } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IData } from "./type/type";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
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
import { useMediaQuery } from "@uidotdev/usehooks";
import Maincard from "@/components/ui/maincard";
import Card from "@/components/ui/Card";
import Querybtn from "@/components/ui/Querybtn";


export default function Home() {
  const [FinalData, setFinaldata] = useState<IData[]>(Datax)
  const [currentIndex, setCurrentindex] = useState(0)
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("Tech")
  const [secondDivHeight, setSecondDivHeight] = useState<number>(0);
  const secondDivRef = useRef<HTMLDivElement>(null);
  const [increase, setIncrease] = useState(false);
  const [openReview, setopenReview] = useState(false);
  const [openFilter, setopenfilter] = useState(false);
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter();


  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 1013px)"
  );

  useEffect(() => {
    if (isMediumDevice) {
      setopenReview(false);
    }
  }, [isMediumDevice]);



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
  const handle_currentdata = (id: number) => {
    setCurrentindex(id)
    if (isMediumDevice) {
      setopenReview(false)
    } else {
      setopenReview(true)
    }
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
            <Suspense fallback={<div>Loading...</div>}>

              {
                datafilter?.map((item, index) => {
                  return (
                    <Suspense key={index} fallback={<div>Loading...</div>}>
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
                        <Suspense fallback={<div>Loading...</div>}>
                        <DropdownMenuContent className={`w-[21rem] h-max ${item == "Intake" && "w-[10rem]"} ${(item == "Location" || item == "Discipline") && "overflow-y-scroll h-[40vh]"}`}>
                          {item == "Location" &&
                            Location?.map((item, index) => {
                              return (
                                <Suspense key={index} fallback={<div>Loading...</div>}>
                                  <DropdownMenuCheckboxItem
                                    key={index}
                                    checked={query.location.includes(item)}
                                    onClick={() => handle_location(item)}
                                  >
                                    {item}
                                  </DropdownMenuCheckboxItem>
                                </Suspense>
                              )
                            })
                          }
                          {item == "Program Levels" &&
                            Program?.map((item, idx) => {
                              return (
                                <Suspense key={index} fallback={<div>Loading...</div>}>
                                  <DropdownMenuCheckboxItem
                                    key={idx}
                                    checked={query.program_level.includes(item)}
                                    onClick={() => handle_Program(item)}
                                  >
                                    {item}
                                  </DropdownMenuCheckboxItem>
                                </Suspense>
                              )
                            })
                          }

                          {item == "Discipline" &&
                            Discpline?.map((item, idx) => {
                              return (
                                <Suspense key={index} fallback={<div>Loading...</div>}>
                                  <DropdownMenuCheckboxItem
                                    key={idx}
                                    checked={query.discipline.includes(item)}
                                    onClick={() => handle_discipline(item)}

                                  >
                                    {item}
                                  </DropdownMenuCheckboxItem>
                                </Suspense>
                              )
                            })
                          }
                          {item == "Tuition Fee (USD)" &&
                            Price?.map((item, idx) => {
                              return (
                                <Suspense key={index} fallback={<div>Loading...</div>}>
                                  <DropdownMenuCheckboxItem
                                    key={idx}
                                    checked={query.tuition_price.includes(item)}
                                    onClick={() => handle_tution_price(item)}
                                  >
                                    {item}
                                  </DropdownMenuCheckboxItem>
                                </Suspense>
                              )
                            })
                          }
                          {item == "Intake" &&
                            Intake?.map((item, idx) => {
                              return (
                                <Suspense key={index} fallback={<div>Loading...</div>}>
                                  <DropdownMenuCheckboxItem
                                    key={idx}
                                    checked={query.intake.includes(item)}
                                    onClick={() => handle_intake(item)}
                                  >
                                    {item}
                                  </DropdownMenuCheckboxItem>
                                </Suspense>
                              )
                            })
                          }

                        </DropdownMenuContent>
                        </Suspense>

                      </DropdownMenu>
                    </Suspense>
                  )
                })
              }

            </Suspense>

            <div className="h-[7vh]">
              <Suspense fallback={<div>Loading...</div>}>

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
                          <Suspense key={index} fallback={<div>Loading...</div>}>
                            <DropdownMenuRadioItem value={item} key={index} className="md:text-[1.2vw] cursor-pointer" onClick={() => handle_duration(item)}
                            >{item}</DropdownMenuRadioItem>
                          </Suspense>
                        ))
                      }
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Suspense>
            </div>
            <div className="bg-lightblue rounded">
              <Suspense fallback={<div>Loading...</div>}>
                <Sheet open={openFilter} onOpenChange={setopenfilter}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="bg-transparent border-2 text-blue font-bold hover:bg-transparent h-[7vh] flex gap-3" ><TbAdjustmentsHorizontal size={20} /> All Filter</Button>
                  </SheetTrigger>
                  <SheetContent className="bg-transparent border-none">
                    <section className="right-0 bottom-0 md:top-0 w-full md:w-[600px] z-[9999] fixed h-[77vh] sm:h-[80vh] md:h-screen flex bg-fff flex-col">
                      <div className="p-5 flex items-center justify-between font-semibold">
                        <p>All filters</p>
                        <span onClick={() => setopenfilter(false)}>
                          <IoMdClose size={40} className="border-2 p-2 rounded cursor-pointer" />
                        </span>
                      </div>
                      <div className="h-full w-full bg-fff right-0 flex flex-col sm:gap-5">
                        <div className="border-t-[1px] border-r-[1px] border-l-[1px] rounded-lg">
                          {
                            Allfilterdata?.map((item: { name: string, icon: any }) => {
                              return (
                                <Menu name={item.name} icon={item.icon} />
                              )
                            })
                          }
                        </div>
                        <div className="relative md:absolute md:bottom-2 border-t-2 border-balck w-full flex p-2 gap-3 pt-2">
                          <Button className="flex-1 full text-black bg-lightblue  hover:bg-lightblue hover:shadow-md font-semibold">Clear All</Button>
                          <Button className="flex-1 w-full bg-blue text-fff hover:bg-darkblue font-semibold">See Programs (10000)</Button>
                        </div>
                      </div>
                    </section>
                  </SheetContent>
                </Sheet>
              </Suspense>
            </div>
          </div>

          <div className="h-[7vh]">
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </div>

        </div>










        <Suspense fallback={<div>Loading...</div>}>
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

                    <Suspense key={index} fallback={<div>Loading...</div>}>
                      <Querybtn item={item} handle_click={() => handle_location(item)} index={index} />
                    </Suspense>
                  )
                })
              }
              {
                query.program_level?.map((item, index) => {
                  return (
                    <Suspense key={index} fallback={<div>Loading...</div>}>
                      <Querybtn item={item} handle_click={() => handle_location(item)} index={index} />
                    </Suspense>

                  )
                })
              }
              {
                query.discipline?.map((item: string, index) => {
                  return (
                    <Suspense key={index} fallback={<div>Loading...</div>}>
                      <Querybtn item={item} handle_click={() => handle_location(item)} index={index} />
                    </Suspense>

                  )
                })
              }
              {
                query.tuition_price?.map((item: string, index) => {
                  return (
                    <Suspense key={index} fallback={<div>Loading...</div>}>
                      <Querybtn item={item} handle_click={() => handle_location(item)} index={index} />
                    </Suspense>

                  )
                })
              }
              {
                query.intake?.map((item: string, index) => {
                  return (
                    <Suspense key={index} fallback={<div>Loading...</div>}>
                      <Querybtn item={item} handle_click={() => handle_location(item)} index={index} />
                    </Suspense>

                  )
                })
              }
              {
                query.duration.length > 0 &&
                <Suspense fallback={<div>Loading...</div>}>
                  <Querybtn item={query.duration} handle_click={() => setQuery({ ...query, duration: "" })} />
                </Suspense>
              }
              {
                allQueryValues?.length > 2 &&
                <Suspense fallback={<div>Loading...</div>}>
                  <Button className="bg-blue hover:bg-darkblue" onClick={() => handle_reset()}>Clear all</Button>
                </Suspense>
              }
            </div>}
        </Suspense>


      </Container>

      <hr className="mt-5" />

      <Container>
        <div className="gap-5 w-full mt-5 flex flex-col-reverse lg:flex-row">
          <div className={`first-div flex-1 md:flex-[0.3] ${openReview ? "hidden" : "h-[80vh]"}`}>
            <div className="md:text-[2vw] lg:text-[1.5vw] font-medium h-[50px]">{FinalData.length} programs</div>
            <div className={`flex flex-col gap-3 ${FinalData.length > 5 && "overflow-y-scroll"}`} style={{ height: `${secondDivHeight - 50}px` }}>
              <Suspense fallback={<div>Loading...</div>}>

                {
                  FinalData?.map((item, index: number) => {
                    return (
                      <Card handle_currentdata={() => handle_currentdata(index)} data={item} currentIndex={currentIndex} index={index} />
                    )
                  })
                }
              </Suspense>
            </div>
          </div>

          <div ref={secondDivRef} className={`second-div ${openReview ? "block absolute top-0 left-0" : "hidden"} lg:block h-max flex-[0.7] rounded-[10px] overflow-hidden border-[1px] bg-fff`}>
            {(openReview) &&
              <div className="flex items-center justify-between p-5 fixed top-0 bg-fff w-full left-0">
                <h1 className="font-semibold">Program Review</h1>
                <Button variant="outline" onClick={() => setopenReview(false)}><IoMdClose /></Button>
              </div>
            }
            <Maincard data={FinalData[currentIndex]} increase={increase} setIncrease={() => setIncrease(!increase)} />
          </div>
        </div>
      </Container>
    </main>

  );
}

