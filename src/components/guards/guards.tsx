import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as AddGuard } from "../../assets/addGuard.svg";
import { ReactComponent as ArrowUpRight } from "../../assets/arrowUpRight.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { ReactComponent as SendMailIcon } from "../../assets/sendMail.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import NotificationIcons from "../notifications/notificationsIcons";
import { scheduledGuardsData } from "../../dummydata/scheduledGuardsDummyData";
import { estateGuardsData } from "../../dummydata/estateGuardsDummyData";
import Select from "../utils/select";
import CalendarComponent from "./components/calendar";

const Guards: React.FC = () => {
  return (
    <div className="h-full md:h-screen md:overflow-scroll p-5 md:p-6 md:pr-9 bg-background w-full max-w-full md:w-4/5 lg:w-5/6 box-border mb-16 md:mb-0">
        <div className="flex flex-row justify-between items-center md:justify-end h-10 mb-5 md:mb-10">
          <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400 items-center justify-center">
            <PersonIcon />
          </div>
          <NotificationIcons />
        </div>
      {/* for mobile screens */}
      <button className="flex md:hidden justify-center gap-x-1 md:gap-x-2 items-center rounded-full text-base bg-accenture h-9 md:h-10 w-28 md:w-32 mb-3">
        <div className="w-5 h-5 p-0.5 2xl:w-6 2xl:h-6 flex justify-center items-center bg-white rounded-full">
          <AddIcon className="scale-[0.7] lg:scale-75" />
        </div>
        <p className="text-xs md:text-sm">Add Guard</p>
      </button>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] h-[70vh] sm:h-auto guards box-border">
          <div className="mr-0 lg:mr-5 h-full px-5 pt-5 md:pt-9 pb-5 sm:pb-5 bg-white rounded-2xl box-border shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
            <div className="h-[45%] md:h-1/2 mb-5 onDuty">
              <div className="flex items-center justify-between mb-5 h-[15%]">
                <h4 className="font-normal text-sm xl:text-lg">Guards on duty</h4>
                <div className="h-8 md:h-10 w-8 md:w-10 border-[1px] border-black rounded-md flex justify-center items-center">
                  <AddIcon className="scale-[0.7] xl:scale-75" />
                </div>
              </div>
              <div className="bg-brand h-[75%] overflow-y-auto box-border px-3 md:px-5 pb-3 rounded-2xl">
                <table className="w-full table-fixed text-left text-white">
                  <thead>
                    <tr className="h-9 md:h-14 border-b-[1px] border-b-slate-400 sticky top-0 z-10 bg-brand">
                      <th className="text-xs xl:text-sm w-[46%] md:w-[50%]">
                        Name
                      </th>
                      <th className="text-xs xl:text-sm w-[27%] md:w-[25%]">Start Time</th>
                      <th className="text-xs xl:text-sm w-[27%] md:w-[25%]">
                        Checkin
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduledGuardsData.map(
                      ({ name, startTime, checkinTime }, i) => {
                        return (
                          <tr key={i} className="h-9 md:h-12 border-b-[1px] border-b-slate-400">
                            <td className="text-xs xl:text-sm truncate px-1">
                              {name}
                            </td>
                            <td className="text-xs xl:text-sm px-1">{startTime}</td>
                            <td className="text-xs xl:text-sm px-1">
                              {checkinTime}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="h-[50%] md:h-[45%] calendar">
              <CalendarComponent />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[55%] h-auto mt-5 lg:mt-0">
          <div className="h-[57.5%] rounded-2xl bg-white mb-5 shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
            <div className="p-5 border-b-2 flex items-center justify-between h-[18%]">
              <Select
                data={[{ name: "Estate guards" }, { name: "Top guards" }]}
                border={false}
                bold={true}
              />
              <div className="h-7 md:h-9 w-7 md:w-9 bg-accenture rounded-full flex justify-center items-center">
                <ArrowUpRight className="scale-[0.7] xl:scale-75" />
              </div>
            </div>
            <div className="px-5 pb-5 max-h-[81%] overflow-y-auto activeAlarms box-border">
              <table className="w-full table-fixed text-left">
                <thead>
                  <tr className="h-9 md:h-14 border-b sticky top-0 z-10 bg-white">
                    <th className="text-xs xl:text-sm w-[25%]">Name</th>
                    <th className="text-xs xl:text-sm w-[20%]">Phone No</th>
                    <th className="text-xs xl:text-sm w-[35%] hidden sm:table-cell">
                      Email Address
                    </th>
                    <th className="text-xs xl:text-sm w-[20%]">
                      Quick Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {estateGuardsData.map(
                    ({ name, phoneNumber, emailAddress }, i) => {
                      return (
                        <tr key={i} className="h-9 md:h-12 border-b">
                          <td className="text-xs xl:text-sm truncate px-1">
                            {name}
                          </td>
                          <td className="text-xs xl:text-sm px-1">{phoneNumber}</td>
                          <td className="text-xs xl:text-sm truncate hidden sm:table-cell px-1">
                            {emailAddress}
                          </td>
                          <td>
                            <div className="flex items-center gap-x-1.5 sm:gap-x-2 lg-gap-x-1 2xl:gap-x-4 px-1">
                              <SendMailIcon className="scale-[0.5] lg:scale-[0.7] xl:scale-75" />
                              <DeleteIcon className="opacity-40 scale-[0.5] lg:scale-[0.7] xl:scale-75" />
                              <EditIcon className="scale-[0.5] lg:scale-[0.7] xl:scale-75" />
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="hidden h-[40%] bg-white md:flex rounded-2xl shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
            <AddGuard className="w-1/2 h-full" />
            <div className="w-1/2 py-6 pl-3 pr-12 flex flex-col justify-between">
              <div>
                <p className="text-xl 2xl:text-2xl font-medium text-center leading-8 mb-2">
                  {" "}
                  Hello Admin
                </p>
                <p className="text-sm 2xl:text-lg text-center font-normal leading-6">
                  click here to register a guard
                </p>
              </div>
              <div className="h-8 md:h-10 w-8 md:w-10 border-2 border-black rounded-md flex justify-center items-center self-end">
                <AddIcon className="scale-[0.7] xl:scale-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guards;
