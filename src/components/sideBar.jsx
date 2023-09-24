import React from 'react'
import { ReactComponent as Guard } from "../assets/Guard.svg"
import { ReactComponent as Facilities } from "../assets/Facilities.svg"
import { ReactComponent as Users } from "../assets/Users.svg"
import { ReactComponent as Staffs } from "../assets/Staffs.svg"
import { ReactComponent as Bills } from "../assets/bills.svg"
import { ReactComponent as Keypad } from "../assets/keypad.svg"
import { ReactComponent as Services } from "../assets/Services.svg"
import { ReactComponent as Home } from "../assets/Home.svg"
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Outlet, NavLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const categories = [
    {
        icon: Home,
        title: "Home",
        route: "/dashboard/home"
    },
    {
        icon: Users,
        title: "Residents",
        route: "/dashboard/residents"
    },
    {
        icon: Facilities,
        title: "Facilities",
        route: "/dashboard/facility"
    },
    {
        icon: Keypad,
        title: "Check-In",
        route: "/dashboard/keypad"
    },
    {
        icon: Bills,
        title: "Bills",
        route: "/dashboard/billing"
    },
    {
        icon: Staffs,
        title: "Staffs",
        route: "/dashboard/staffs"
    },
    {
        icon: Guard,
        title: "Guards",
        route: "/dashboard/guards"
    },
    {
        icon: Services,
        title: "Services",
        route: "/dashboard/services"
    },

]

export default function SideBar() {
    return (
        <div className="block md:flex">
            <div className="p-3 xl:p-6 h-screen max-h-screen bg-brand w-1/5 lg:w-1/6 hidden md:flex flex-col justify-between pt-6 sidebar">
                <div className="h-10 2xl:h-14 flex items-center p-1 2xl:p-3 pl-5 xl:pl-7 2xl:pl-8 brand">
                    <Logo alt='sidebar logo' className='mr-1 lg:mr-2 xl:mr-4 inline-block scale-[0.6] xl:scale-75' />
                    <span><h3 className="text-base xl:text-xl font-bold text-white">GateSage</h3></span>
                </div>
                <div className="md:basis-[83%] lg:basis-[77%] xl:basis-[80%] 2xl:basis-[81%] p-3 navlink ">
                    <ul className='h-full flex flex-col justify-start md:gap-y-8 lg:gap-y-5 2xl:gap-y-8 list'>
                        {
                            categories.map((el, key) => {
                                return <NavLink to={el.route} key={key}>
                                    <div className="selected bg-brand  md:h-9 lg:h-8 xl:h-10 2xl:h-13 flex items-center p-2  xl:p-3 xl:pl-5">
                                        <el.icon alt='sidebar logo' className='mr-1 lg:mr-2 xl:mr-4 inline-block scale-[0.6] xl:scale-75' />
                                        <span className="text-white text-sm xl:text-base">{el.title}</span>
                                    </div>
                                </NavLink>
                            })
                        }
                    </ul>
                </div>
                <div className="bg-white p-2 2xl:p-3 flex rounded-md items-center justify-between h-14 2xl:h-auto">
                    <div className="hidden h-8 w-8 xl:w-9 xl:h-9 2xl:w-14 2xl:h-14 mr-1 xl:mr-3 rounded-full bg-gray-400 lg:flex items-center justify-center ">
                        <PersonIcon  className='scale-75 xl:scale-95 2xl:scale-100'/>
                    </div>
                    <div className="flex basis-full lg:basis-[70%] justify-between">
                        <div>
                            <h5 className="text-sm 2xl:text-base">Admin </h5>
                            <p className="text-xs 2xl:text-sm"><span className=' bg-[#4BB543] w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full inline-block mr-0.5 mb-0 xl:mr-1 xl:mb-0.3 2xl:mb-0.5'></span>Online</p>
                        </div>
                        <span>
                            <ArrowDropDownIcon />
                        </span>
                    </div>
                </div>
            </div>
            {/* for mobile screen */}
            <div className="block fixed w-screen bottom-0 left-0 right-0 h-16 z-20 bg-brand md:hidden">
                <ul className='flex w-full justify-around items-center h-16'>
                    {
                        categories.map((el, key) => {
                            if (el.title === "Facilities" || el.title === "Staffs" || el.title === "Service Providers" || el.title === "Bills") return null
                            return <NavLink to={el.route} key={key}>
                                <div className="mobile flex flex-col justify-between items-center rounded-md p-1">
                                    <el.icon alt='sidebar logo' className="visible " />
                                    <div className="activated hidden bg-white absolute bottom-8 w-14 h-14 rounded-full border-[#F8F9FF] border-8 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
                                        <el.icon alt='sidebar logo' className='scale-[0.8]' />
                                    </div>
                                    <span className="text-xs hidden text">{el.title}</span>
                                </div>
                            </NavLink>
                        })
                    }
                </ul>
            </div>
            <Outlet />
        </div>
    )
}