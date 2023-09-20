import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as Filter } from "../../assets/Filter.svg";
import { ReactComponent as Expand } from "../../assets/expand.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Alarm } from "../../assets/Alarm.svg";
import { ReactComponent as Envelope } from "../../assets/envelope.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import FirstResidentChart from "./components/residentSatisfactoryChart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const tableData = [
  {
    resident: "John Michael",
    phoneNumber: "07066993080",
    apartmentAddress: "23 Lantana road",
    emailAddress: "amdichibuike72@gmail.com",
  },
  {
    resident: "John Michael",
    phoneNumber: "07066993080",
    apartmentAddress: "23 Lantana road",
    emailAddress: "amdichibuike72@gmail.com",
  },
  {
    resident: "John Michael",
    phoneNumber: "07066993080",
    apartmentAddress: "23 Lantana road",
    emailAddress: "amdichibuike72@gmail.com",
  },
  {
    resident: "John Michael",
    phoneNumber: "07066993080",
    apartmentAddress: "23 Lantana road",
    emailAddress: "amdichibuike72@gmail.com",
  },
  {
    resident: "John Michael",
    phoneNumber: "07066993080",
    apartmentAddress: "23 Lantana road",
    emailAddress: "amdichibuike72@gmail.com",
  },
];

export default function Residents() {
  return (
    <div className="h-screen md:overflow-scroll  p-5 pr-5 md:p-6 md:pr-9 bg-background w-full max-w-full md:w-4/5 lg:w-5/6 box-border">
      <div className="flex flex-col md:flex-row justify-between md:items-center h-[15vh] md:h-[6vh] mb-[4vh]">
        <div className="order-1 md:order-none w-full md:w-[60%] flex">
          <div className="w-10 h-10 rounded-md bg-brand mr-3 flex justify-center items-center">
            <Filter className="scale-[0.6] xl:scale-75" />
          </div>
          <div className="relative  rounded-full  w-[90%] h-10 ">
            <div className=" pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3">
              <span className="text-gray-500 sm:text-sm">
                <Search />
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full  rounded-full h-full border-0 pl-10 bg-[#dcdcdf]  text-gray-900   outline-1  focus:outline-1  focus:outline-[#FFD601] sm:text-sm sm:leading-6"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center md:block ">
          <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400 items-center justify-center ">
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
      <button className="flex justify-center gap-x-1 md:gap-x-2 items-center rounded-full text-base bg-accenture h-9 md:h-10 w-28 md:w-32 ">
        <div className=" w-5 h-5  p-0.5 2xl:w-6 2xl:h-6 flex justify-center items-center bg-white rounded-full">
          <AddIcon className="scale-[0.7] lg:scale-75" />
        </div>
        <p className="text-xs md:text-sm ">Add Resident</p>
      </button>

      <div className=" my-3 mb-6 md:my-5 p-2 py-4 md:p-5 bg-white rounded-2xl h-[32vh] md:h-[30vh] lg:h-[42vh] 2xl:h-[40vh] box-border hero shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
        <div className="flex justify-between items-center mb-3">
          <h5 className="text-sm md:text-md xl:text-2xl font-bold">
            Resident Analysis
          </h5>
          <button className="flex justify-center gap-x-2 items-center rounded-md text-base border-[1px] h-7 md:h-10 w-24 md:w-28">
            <p className="text-xs md:text-sm">This week</p>
            <div className=" w-5 h-5  p-0.5 2xl:w-6 2xl:h-6 flex justify-center items-center">
              <KeyboardArrowDownIcon className="scale-[0.7] lg:scale-75" />
            </div>
          </button>
        </div>
        <FirstResidentChart />
      </div>
      <div className=" bg-white  shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)] rounded-2xl">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h5 className="text-sm sm:text-sm xl:text-2xl font-bold">
            Residents
          </h5>
          <div className="flex ">
            <div className="h-9 md:h-10 w-9 md:w-10 rounded-md mr-3 bg-brand flex justify-center items-center">
              <MenuIcon className="scale-[0.7] xl:scale-75" />
            </div>
            <div className="h-9 md:h-10 w-9 md:w-10 border-[1px] border-[#6484E6] rounded-md  flex justify-center items-center">
              <Expand className="scale-[0.7] xl:scale-75" />
            </div>
          </div>
        </div>
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr className="h-9 md:h-12 border-b">
              <th className="text-xs md:text-sm">Select</th>
              <th className="text-xs md:text-sm">Resident</th>
              <th className="text-xs md:text-sm ">Phone Number</th>
              <th className="text-xs md:text-sm hidden md:table-cell">
                Apartment Address
              </th>
              <th className="text-xs md:text-sm hidden lg:table-cell">
                Email Address
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="mt-7">
            {tableData.map(
              (
                { resident, apartmentAddress, emailAddress, phoneNumber },
                i
              ) => {
                return (
                  <tr key={i} className="h-9 md:h-12 border-b">
                    <td>
                      <input type="checkbox" className="select" />
                    </td>
                    <td className="text-xs md:text-sm">{resident}</td>
                    <td className="text-xs md:text-sm">{phoneNumber}</td>
                    <td className="text-xs md:text-sm hidden md:table-cell">
                      {apartmentAddress}
                    </td>
                    <td className="text-xs md:text-sm hidden lg:table-cell">
                      {emailAddress}
                    </td>
                    <td>
                      <MoreHorizIcon />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
