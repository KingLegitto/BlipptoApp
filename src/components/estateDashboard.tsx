import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { ReactComponent as GridView } from "../assets/gridView.svg"
import { ReactComponent as Alarm } from "../assets/Alarm.svg"
import { ReactComponent as Envelope } from "../assets/envelope.svg"
import DoughnutChart from "./doughnutChart";
import { ReactComponent as Bottomsvg } from "../assets/Group3.svg";




export default function EstateDashboard() {
    return (
        <div className="h-full md:h-screen md:overflow-scroll  p-5 pr-5 md:p-6 md:pr-9 bg-background w-full max-w-full md:w-4/5 lg:w-5/6 box-border mb-16">
            <div className="flex flex-col md:flex-row justify-between md:items-center h-[9.7vh] md:h-[4vh]">
                <div className="order-1 md:order-none header">
                    <h1 className="text-xl font-bold md:text-2xl 2xl:text-4xl ">Welcome back, Admin</h1>
                </div>
                <div className="flex flex-row justify-between items-center md:block ">
                    <div className="flex md:hidden w-10 h-10 rounded-full bg-white items-center justify-center ">
                        <PersonIcon />
                    </div>
                    <div className="flex">
                        <div className="bg-background md:bg-white relative shadow-none md:shadow-[0px_3px_5px_rgba(0,0,0,0.24)] rounded-full w-8 h-8 xl:w-10 xl:h-10 mr-2 flex items-center justify-center">
                            <Alarm className="scale-[0.6] xl:scale-75" />
                            <div className="flex items-center justify-center absolute w-5 h-5 rounded-full text-xs bg-accenture -top-3 -right-1.5">
                                21
                            </div>
                        </div>
                        <div className="bg-background md:bg-white relative shadow-none md:shadow-[0px_3px_5px_rgba(0,0,0,0.24)] rounded-full w-8 h-8 xl:w-10 xl:h-10 mr-2 flex items-center justify-center">
                            <Envelope className="scale-[0.6] xl:scale-75" />
                            <div className="flex items-center justify-center absolute w-5 h-5 rounded-full text-xs bg-accenture -top-3 -right-1.5">
                                21
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" my-3 mb-6 md:my-5 bg-white rounded-2xl h-[32vh] md:h-[30vh] lg:h-[42vh] 2xl:h-[30vh] box-border hero ">
                <div className="h-[75%] flex p-4 justify-between relative">
                    <div className="h-full w-[85%] max-w-[85%] ">
                        <DoughnutChart legendPosition={'left'} title={'Traffic Pattern'} width={370} dataset={[700, 300, 500]} label={["Morning 46.7%", "Afternoon 20%", "Evening 33.3%"]} />
                    </div>
                    <div className=" bg-brand rounded-md w-7 h-7 lg:w-9 lg:h-9 2xl:w-11 2xl:h-11  mt-2 xl:mt-1 flex items-center justify-center">
                        <GridView className='scale-[0.6] lg:scale-75' />
                    </div>
                    <Bottomsvg className=" absolute bottomSvg -bottom-12 -right-9 scale-[0.7]" />
                </div>
                <hr className="bg-white" />
                <div className="h-[25%]  rounded-b-2xl bg-brand flex   items-center">
                    <div className="basis-[33.33%] sm:basis-[30%] md:basis-[25%] flex justify-center items-center p-0.5 md:p-2 ">
                        <div className="text-center">
                            <h6 className="text-white text-xs sm:text-sm md:text-md xl:text-base opacity-60">Alarms</h6>
                            <p className="week text-white font-bold text-xs sm:text-sm">Week's Insight(30)</p>
                        </div>
                    </div>
                    <div className="basis-[33.33%] sm:basis-[40%] md:basis-[50%] flex justify-center items-center border-x p-0.5 md:p-2 ">
                        <div className="text-center">
                            <h6 className="text-white text-xs sm:text-sm md:text-md xl:text-base opacity-60">Notifications</h6>
                            <p className="week text-white font-bold text-xs sm:text-sm">Week's Insight(30)</p>
                        </div>
                    </div>
                    <div className="basis-[33.33%] sm:basis-[30%] md:basis-[25%] flex justify-center items-center p-0.5 md:p-2 ">
                        <div className="text-center">
                            <h6 className="text-white text-xs sm:text-sm md:text-md xl:text-base opacity-60">Security Index</h6>
                            <p className="week text-white font-bold text-xs sm:text-sm"> 30%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-3 2xl:gap-5 grid-cols-2 md:grid-cols-3 ">
                <div className="bg-white rounded-2xl p-3 2xl:p-5 h-[22vh] md:h-[25vh] 2xl:h-[27vh] shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,0.15)]">
                    <div className="flex justify-between items-center mb-2 h-[15%] lg:mb-2 xl:mb-5 2xl:mb-6">
                        <h4 className="text-sm md:text-md xl:text-base 2xl:text-xl font-bold">Staff</h4>
                        <p className="hidden md:block text-sm md:text-md xl:text-base">This week <span className="ml-0 lg:ml-1"><KeyboardArrowDownIcon /></span></p>
                        <span className="block md:hidden"><KeyboardArrowDownIcon /></span>
                    </div>
                    <div className="bg-primary p-2 2xl:p-4 rounded-2xl">
                        <ul className="divide-y divide-gray-100">
                            <li className="flex justify-between gap-x-2 md:gap-x-6 py-2 2xl:py-4">
                                <h5 className="text-sm  xl:text-base">
                                    Total
                                </h5>
                                <h5 className="text-sm  xl:text-base">
                                    1000
                                </h5>
                            </li>
                            <li className="flex justify-between gap-x-2 md:gap-x-6 py-2 2xl:py-4">
                                <h5 className="text-sm  xl:text-base">
                                    Checked In
                                </h5>
                                <h5 className="text-sm md:text-md xl:text-base">
                                    40
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white rounded-2xl h-[22vh] md:h-[25vh] 2xl:h-[27vh] p-3 2xl:p-5 shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,0.15)]">
                    <div className="flex justify-between items-center h-[15%] mb-2 2xl:mb-4">
                        <h4 className="text-sm md:text-md xl:text-base 2xl:text-xl font-bold">Services</h4>
                        <div className=" w-5 h-5 box-border p-0.5 2xl:w-8 2xl:h-8 flex justify-center items-center bg-primary rounded-md"><AddIcon className='scale-[0.7] lg:scale-75' /></div>
                    </div>
                    <hr className="bg-primary" />
                    <div className="overflow-y-auto max-h-[80%]">
                        <ul>
                            <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                                <h5 className="text-sm font-normal md:text-md xl:text-base">Plumbers</h5>
                                <h5 className="text-sm md:text-md xl:text-base">
                                    1000
                                </h5>
                            </li>
                            <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                                <h5 className="text-sm md:text-md xl:text-base">Logistics</h5>
                                <h5 className="text-sm md:text-md xl:text-base">
                                    40
                                </h5>
                            </li>
                            <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                                <h5 className=" text-sm md:text-md xl:text-base">Mechanics</h5>
                                <h5 className="text-sm md:text-md xl:text-base">
                                    40
                                </h5>
                            </li>
                            <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                                <h5 className=" text-sm md:text-md xl:text-base">Cleaners</h5>
                                <h5 className="text-sm md:text-md xl:text-base">
                                    40
                                </h5>
                            </li>
                            <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                                <h5 className=" text-sm font-light md:text-md xl:text-base">Cleaners</h5>
                                <h5 className="text-sm md:text-md xl:text-base">
                                    40
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" h-[22vh] md:h-[25vh] 2xl:h-[27vh] box-border">
                    <div className="bg-white flex justify-between items-center mb-1  p-3 rounded-xl h-[23%] 2xl:h-[23%] shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,0.15)]">
                        <h4 className="text-sm md:text-md xl:text-base 2xl:text-xl font-bold">Residents</h4>
                        <p className="text-sm md:text-md xl:text-base">300</p>
                    </div>
                    <div className="bg-white px-3 py-3 lg:py-1 2xl:py-3  rounded-xl h-[75%] shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,0.15)]">
                        <>
                            <div className="flex justify-between mb-2 lg:mb-0.5 xl:mb-1">
                                <span className="text-xs sm:text-sm  xl:text-md opacity-60 ">Storage used:</span>
                                <span className="text-xs sm:text-sm  xl:text-md  opacity-60  ">80%</span>
                            </div>
                            <div className="w-full bg-[#adbded] rounded-full h-1.5 2xl:h-2.5 mb-1 ">
                                <div className="bg-brand h-1.5 2xl:h-2.5 rounded-full" style={{ width: "80%" }}></div>
                            </div>
                        </>
                        <div className="py-1 md:py-2 lg:py-1 xl:py-3 flex justify-between">
                            <h5 className="text-xs sm:text-sm md:text-md xl:text-base">Approved Request</h5>
                            <p className="text-xs sm:text-sm md:text-md xl:text-base">500</p>
                        </div>
                        <div className="py-1 md:py-2 lg:py-1 xl:py-3 flex justify-between">
                            <h5 className="text-xs sm:text-sm md:text-md xl:text-base">Visitation Request</h5>
                            <p className="text-xs sm:text-sm md:text-md xl:text-base">1000</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl h-[22vh] md:h-[25vh] 2xl:h-[27vh] p-3 2xl:p-5 shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,0.15)]">
                    <div className="flex justify-between items-center mb-2 h-[15%]  lg:mb-2 xl:mb-5 2xl:mb-6">
                        <h4 className="text-sm md:text-md xl:text-base 2xl:text-xl font-bold">Guards</h4>
                        <p className="hidden md:block text-sm md:text-md xl:text-base">This week <span className="ml-0 lg:ml-1"><KeyboardArrowDownIcon /></span></p>
                        <span className="block md:hidden"><KeyboardArrowDownIcon /></span>
                    </div>
                    <div className="bg-primary p-2 2xl:p-4 rounded-2xl">
                        <ul className="divide-y divide-gray-100">
                            <li className="flex justify-between gap-x-6 py-2 2xl:py-4">
                                <h5 className="text-sm md:text-md xl:text-base">
                                    Steve K.
                                </h5>
                                <h5 className="text-sm md:text-md xl:text-base">
                                    4hrs
                                </h5>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2 2xl:py-4">
                                <h5 className="text-sm md:text-md xl:text-base">
                                    John R.
                                </h5>
                                <h5 className="text-sm md:text-md xl:text-base">
                                    8hrs
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" bg-white rounded-2xl h-[22vh] md:h-[25vh] 2xl:h-[27vh] p-3 2xl:p-5 shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,0.15)]">
                    <div className="flex justify-between items-center mb-4 h-[15%]">
                        <h4 className="text-sm md:text-md xl:text-base 2xl:text-xl font-bold">Bills</h4>
                        <span><MoreHorizIcon /></span>
                    </div>
                    <div>
                        <h4 className='text-base xl:text-xl font-semibold mb-3'>$6,567</h4>
                        <div className="flex justify-between items-center">
                            <p className="hidden md:block text-sm md:text-md xl:text-base">This month <span className="ml-1"><KeyboardArrowDownIcon /></span></p>
                            <span className="block md:hidden"><KeyboardArrowDownIcon /></span>
                            <h4 className="text-sm font-semibold text-center xl:text-xl bg-primary rounded-xl p-2 lg:w-24 xl:w-32">$1,567</h4>
                        </div>
                    </div>
                </div>
                <div className=" h-[22vh] md:h-[25vh] 2xl:h-[27vh] box-border">
                    <div className="bg-white flex justify-between items-center mb-1  p-3 rounded-xl h-[23%] 2xl:h-[23%] shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,0.15)]">
                        <h4 className="text-sm md:text-md xl:text-base 2xl:text-xl font-bold">Facility</h4>
                        <p className="text-sm md:text-md xl:text-base">300</p>
                    </div>
                    <div className="bg-white px-3 py-1 md:py-3 lg:py-1 xl:py-3 rounded-xl h-[75%] shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,0.15)]">
                        <>
                            <div className="flex justify-between mb-2 lg:mb-0.5 xl:mb-1">
                                <h5 className="text-xs sm:text-sm  xl:text-base font-medium text-black ">Booked</h5>
                                <span className="text-xs sm:text-sm  xl:text-base font-medium text-black ">80%</span>
                            </div>
                            <div className="w-full bg-[#adbded] rounded-full h-1.5 2xl:h-2.5 mb-1 ">
                                <div className="bg-brand h-1.5 2xl:h-2.5 rounded-full" style={{ width: "80%" }}></div>
                            </div>
                        </>
                        <>
                            <div className="flex justify-between mb-2 lg:mb-0.5 xl:mb-1">
                                <h5 className="text-xs sm:text-sm  xl:text-base font-medium text-black ">Out of service</h5>
                                <span className="text-xs sm:text-sm  xl:text-base font-medium text-black ">10%</span>
                            </div>
                            <div className="w-full bg-[#adbded] rounded-full h-1.5 2xl:h-2.5 mb-1 ">
                                <div className="bg-brand h-1.5 2xl:h-2.5 rounded-full" style={{ width: "10%" }}></div>
                            </div>
                        </>
                        <>
                            <div className="flex justify-between mb-2 lg:mb-0.5 xl:mb-1">
                                <h5 className="text-xs sm:text-sm xl:text-base font-medium text-black ">Pending Request</h5>
                                <span className="text-xs sm:text-sm xl:text-base font-medium text-black ">10%</span>
                            </div>
                            <div className="w-full bg-[#adbded] rounded-full h-1.5 2xl:h-2.5 mb-1 ">
                                <div className="bg-brand h-1.5 2xl:h-2.5 rounded-full" style={{ width: "10%" }}></div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}