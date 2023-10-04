import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as GridView } from "../assets/gridView.svg";
import DoughnutChart from "./doughnutChart";
import { ReactComponent as Bottomsvg } from "../assets/Group3.svg";
import NotificationIcons from "./Notifications/notificationsIcons";
import Select from "./utils/select";

export default function EstateDashboard() {
  const selectedAction = function (value: string) {
    alert(value);
  };

  return (
    <div className="h-full md:h-screen md:overflow-scroll  p-5 pr-5 md:p-6 md:pr-9 bg-background w-full max-w-full md:w-4/5 lg:w-5/6 box-border mb-16 md:mb-0">
      <div className="flex flex-col md:flex-row justify-between md:items-center h-[13vh] md:h-[4vh]">
        <div className="order-1 md:order-none header">
          <h1 className="text-xl font-bold md:text-2xl 2xl:text-4xl ">
            Welcome back, Admin
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center md:block ">
          <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400  items-center justify-center ">
            <PersonIcon />
          </div>
          <NotificationIcons />
        </div>
      </div>
      <div className=" my-3 mb-6 md:my-5 bg-white rounded-2xl h-[32vh] md:h-[30vh] lg:h-[42vh] 2xl:h-[30vh] box-border hero ">
        <div className="h-[75%] flex p-4 justify-between relative">
          <div className="h-full w-[50%] sm:w-[75%] ">
            <DoughnutChart
              legendPosition="left"
              title="Traffic Pattern"
              width={370}
              dataset={[700, 300, 500]}
              label={["Morning 46.7%", "Afternoon 20%", "Evening 33.3%"]}
            />
          </div>
          <div className="relative z-10">
          <Select
            data={[{ name: "this week" }, { name: "this month" }]}
            border={true}
            onClick={(value: string) => selectedAction(value)}
          />
          </div>
          <Bottomsvg className="absolute bottomSvg -bottom-12 -right-9 scale-[0.7]" />
        </div>
        <hr className="bg-white" />
        <div className="h-[25%]  rounded-b-2xl bg-brand flex items-center">
          <div className="basis-[33.33%] sm:basis-[30%] md:basis-[25%] flex justify-center items-center p-0.5 md:p-2 ">
            <div className="text-center">
              <h6 className="text-white text-xs sm:text-sm md:text-md xl:text-base opacity-60">
                Alarms
              </h6>
              <p className="week text-white font-bold text-xs sm:text-sm">
                Week's Insight(30)
              </p>
            </div>
          </div>
          <div className="basis-[33.33%] sm:basis-[40%] md:basis-[50%] flex justify-center items-center border-x border-x-slate-400 sm:border-x-slate-300 p-0.5 md:p-2 ">
            <div className="text-center">
              <h6 className="text-white text-xs sm:text-sm md:text-md xl:text-base opacity-60">
                Notifications
              </h6>
              <p className="week text-white font-bold text-xs sm:text-sm">
                Week's Insight(30)
              </p>
            </div>
          </div>
          <div className="basis-[33.33%] sm:basis-[30%] md:basis-[25%] flex justify-center items-center p-0.5 md:p-2 ">
            <div className="text-center">
              <h6 className="text-white text-xs sm:text-sm md:text-md xl:text-base opacity-60">
                Security Index
              </h6>
              <p className="week text-white font-bold text-xs sm:text-sm">
                {" "}
                30%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3 2xl:gap-5 grid-cols-2 md:grid-cols-3 ">
        <div className="bg-white rounded-lg sm:rounded-2xl p-2 sm:p-3 2xl:p-5 h-[22vh] md:h-[25vh] lg:h-[28vh] xl:h-[27vh] shadow-[2.4px_2.4px_3.2px_rgba(100,132,230,0.20)]">
          <div className="flex justify-between items-center mb-2 h-[15%] lg:mb-5 ">
            <h4 className="text-sm md:text-md xl:text-base  font-bold">
              Staff
            </h4>
            <p className="hidden md:block text-sm md:text-md xl:text-sm">
              This week{" "}
              <span className="ml-0 lg:ml-1">
                <KeyboardArrowDownIcon />
              </span>
            </p>
            <span className="block md:hidden">
              <KeyboardArrowDownIcon />
            </span>
          </div>
          <div className="bg-primary p-2 rounded-2xl">
            <ul className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-2 md:gap-x-6 py-2 2xl:py-4">
                <h5 className="text-xs xl:text-sm">Total</h5>
                <h5 className="text-xs xl:text-sm">1000</h5>
              </li>
              <li className="flex justify-between gap-x-2 md:gap-x-6 py-2 2xl:py-4">
                <h5 className="text-xs xl:text-sm">Checked In</h5>
                <h5 className="text-xs xl:text-sm">40</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg sm:rounded-2xl p-2 sm:p-3 h-[22vh] md:h-[25vh] lg:h-[28vh] xl:h-[27vh] 2xl:p-5 shadow-[2.4px_2.4px_3.2px_rgba(100,132,230,0.20)]">
          <div className="flex justify-between items-center h-[15%] mb-2 2xl:mb-4">
            <h4 className="text-sm md:text-md xl:text-sm  font-bold">
              Services
            </h4>
            <div className=" w-5 h-5 box-border p-0.5 2xl:w-8 2xl:h-8 flex justify-center items-center bg-primary rounded-md">
              <AddIcon className="scale-[0.7] lg:scale-75" />
            </div>
          </div>
          <hr className="bg-primary" />
          <div className="overflow-y-auto max-h-[80%]">
            <ul>
              <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                <h5 className="text-xs xl:text-sm">Plumbers</h5>
                <h5 className="text-sm  xl:text-sm">1000</h5>
              </li>
              <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                <h5 className="text-xs  xl:text-sm">Logistics</h5>
                <h5 className="text-xs  xl:text-sm">40</h5>
              </li>
              <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                <h5 className=" text-xs  xl:text-sm">Mechanics</h5>
                <h5 className="text-xs  xl:text-sm">40</h5>
              </li>
              <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                <h5 className=" text-xs  xl:text-sm">Cleaners</h5>
                <h5 className="text-xs  xl:text-sm">40</h5>
              </li>
              <li className="flex justify-between gap-x-2 lg:gap-x-6 py-2 lg:py-1 xl:py-2 w-full">
                <h5 className=" text-xs font-light  xl:text-sm">Cleaners</h5>
                <h5 className="text-xs  xl:text-sm">40</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className=" h-[22vh] md:h-[25vh] lg:h-[28vh] xl:h-[27vh] box-border">
          <div className="bg-white flex justify-between items-center mb-1  rounded-lg sm:rounded-xl p-2 sm:p-3 h-[23%] 2xl:h-[23%] shadow-[2.4px_2.4px_3.2px_rgba(100,132,230,0.20)]">
            <h4 className="text-sm md:text-md xl:text-sm  font-bold">
              Residents
            </h4>
            <p className="text-xs font-bold xl:text-sm">300</p>
          </div>
          <div className="bg-white px-2 sm:px-3 py-2 sm:py-3 lg:py-1 xl:py-3  rounded-lg sm:rounded-xl h-[75%] shadow-[2.4px_2.4px_3.2px_rgba(100,132,230,0.20)]">
            <>
              <div className="flex justify-between mb-2 lg:mb-0.5 xl:mb-1">
                <span className="text-xs xl:text-sm  xl:text-md opacity-60 ">
                  Storage used:
                </span>
                <span className="text-xs xl:text-sm  xl:text-md  opacity-60  ">
                  80%
                </span>
              </div>
              <div className="w-full bg-[#adbded] rounded-full h-1.5 2xl:h-2.5 mb-1 ">
                <div
                  className="bg-brand h-1.5 2xl:h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </>
            <div className="py-1 md:py-2 lg:py-1 2xl:py-2 flex justify-between mt-2 lg:mt-[3vh] xl:mt-[2vh]">
              <h5 className="text-xs xl:text-sm">Approved Request</h5>
              <p className="text-xs xl:text-sm">500</p>
            </div>
            <div className="py-1 md:py-2 lg:py-1 2xl:py-2 flex justify-between">
              <h5 className="text-xs xl:text-sm">Visitation Request</h5>
              <p className="text-xs xl:text-sm">1000</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg sm:rounded-2xl h-[22vh] md:h-[25vh] lg:h-[28vh] xl:h-[27vh] p-2 sm:p-3 2xl:p-5 shadow-[2.4px_2.4px_3.2px_rgba(100,132,230,0.20)]">
          <div className="flex justify-between items-center mb-2 h-[15%]  lg:mb-2 xl:mb-5">
            <h4 className="text-xs  xl:text-sm  font-bold">Guards</h4>
            <p className="hidden md:block text-xs md:text-md xl:text-sm">
              This week{" "}
              <span className="ml-0 lg:ml-1">
                <KeyboardArrowDownIcon />
              </span>
            </p>
            <span className="block md:hidden">
              <KeyboardArrowDownIcon />
            </span>
          </div>
          <div className="bg-primary p-2  rounded-2xl">
            <ul className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-2 2xl:py-4">
                <h5 className="text-xs xl:text-sm">Steve K.</h5>
                <h5 className="text-xs xl:text-sm">4hrs</h5>
              </li>
              <li className="flex justify-between gap-x-6 py-2 2xl:py-4">
                <h5 className="text-xs xl:text-sm">John R.</h5>
                <h5 className="text-xs xl:text-sm">8hrs</h5>
              </li>
            </ul>
          </div>
        </div>

        <div className=" bg-white rounded-lg sm:rounded-2xl h-[22vh] md:h-[25vh] lg:h-[28vh] xl:h-[27vh] p-2 sm:p-3 2xl:p-5 shadow-[2.4px_2.4px_3.2px_rgba(100,132,230,0.20)]">
          <div className="flex justify-between items-center mb-4 h-[15%]">
            <h4 className="text-xs xl:text-sm  font-bold">Bills</h4>
            <span>
              <MoreHorizIcon />
            </span>
          </div>
          <div>
            <h4 className="text-base xl:text-xl font-semibold mb-3">$6,567</h4>
            <div className="flex justify-between items-center">
              <p className="block text-xs xl:text-sm">
                This month{" "}
                <span className="ml-0 sm:ml-1">
                  <KeyboardArrowDownIcon fontSize="small" />
                </span>
              </p>
              {/* <span className="block md:hidden"><KeyboardArrowDownIcon /></span> */}
              <h4 className="text-sm font-semibold text-center xl:text-xl bg-primary rounded-xl p-2 lg:w-24 xl:w-32">
                $1,567
              </h4>
            </div>
          </div>
        </div>
        <div className=" h-[22vh] md:h-[25vh] lg:h-[28vh] xl:h-[27vh] box-border">
          <div className="bg-white flex justify-between items-center mb-1  p-2 sm:p-3 rounded-lg sm:rounded-xl h-[23%] 2xl:h-[23%] shadow-[2.4px_2.4px_3.2px_rgba(100,132,230,0.20)]">
            <h4 className="text-xs xl:text-sm font-bold">Facility</h4>
            <p className="text-sm md:text-md xl:text-base">300</p>
          </div>
          <div className="bg-white px-2 sm:px-3 py-2 md:py-3 lg:py-1 xl:py-3 rounded-xl h-[75%] shadow-[2.4px_2.4px_3.2px_rgba(100,132,230,0.20)]">
            <>
              <div className="flex justify-between mb-2 lg:mb-0.5 xl:mb-1">
                <h5 className="text-xs xl:text-sm font-medium text-black ">
                  Booked
                </h5>
                <span className="text-xs xl:text-sm font-medium text-black ">
                  80%
                </span>
              </div>
              <div className="w-full bg-[#adbded] rounded-full h-1.5 2xl:h-2.5 mb-1 ">
                <div
                  className="bg-brand h-1.5 2xl:h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </>
            <>
              <div className="flex justify-between mb-2 lg:mb-0.5 xl:mb-1">
                <h5 className="text-xs xl:text-sm font-medium text-black ">
                  Out of service
                </h5>
                <span className="text-xs xl:text-sm font-medium text-black ">
                  10%
                </span>
              </div>
              <div className="w-full bg-[#adbded] rounded-full h-1.5 2xl:h-2.5 mb-1 ">
                <div
                  className="bg-brand h-1.5 2xl:h-2.5 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </>
            <>
              <div className="flex justify-between mb-2 lg:mb-0.5 xl:mb-1">
                <h5 className="text-xs xl:text-sm font-medium text-black ">
                  Pending Request
                </h5>
                <span className="text-xs xl:text-sm font-medium text-black ">
                  10%
                </span>
              </div>
              <div className="w-full bg-[#adbded] rounded-full h-1.5 2xl:h-2.5 mb-1 ">
                <div
                  className="bg-brand h-1.5 2xl:h-2.5 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
