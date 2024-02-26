import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as TopRight } from "../assets/Group 5.svg";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { ReactComponent as Expand } from "../assets/expand.svg";
import { ReactComponent as Pending } from "../assets/pending.svg";
import { ReactComponent as Approved } from "../assets/approved.svg";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as Calendar } from "../assets/calendar.svg";
import { ReactComponent as EmptyFacility } from "../assets/emptyFacility.svg";
import BookedFacilitiesChart from "../components/facility/bookedFacilitiesChart";
import Select from "../components/utilComponents/select";
import Menu from "../components/utilComponents/menu";
import NotificationIcons from "../components/notifications/notificationsIcons";
import { facilitiesData } from "../dummydata/facilityDummyData";

const Facility: React.FC = () => {
  const [hasData] = useState<Boolean>(true);
  const [selectAll, setSelectAll] = useState<Boolean>(false);

  const selectedAction = function (value: string) {
    alert(value);
  };

  const selectedMenu = function (value: string) {
    if (value === "Select All") {
      setSelectAll(true);
    }
  };

  return (
    <>
      {hasData ? (
        <div className="h-full md:h-screen md:overflow-scroll p-5 md:p-6 md:pr-9 bg-background w-full md:w-4/5 lg:w-5/6 box-border mb-16 md:mb-0">
          <div className="flex flex-col md:flex-row md:items-center h-24 md:h-10 mb-5 justify-between">
            <div className="order-1 md:order-none w-full md:w-[60%] flex">
              <div className="w-10 h-10 rounded-md bg-brand mr-3 flex justify-center items-center">
                <Filter className="scale-[0.6] xl:scale-75" />
              </div>
              <div className="relative rounded-full w-[90%] h-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3">
                  <span className="text-gray-500 sm:text-sm">
                    <Search />
                  </span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-xl h-full border border-inherit pl-10 bg-background text-gray-900 outline-0 focus:border-yellow-300 focus:border-2 sm:text-sm sm:leading-6"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center md:block">
              <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400 items-center justify-center">
                <PersonIcon />
              </div>
              <NotificationIcons />
            </div>
          </div>
          <button className="flex justify-center gap-x-1 md:gap-x-2 items-center rounded-full text-base bg-accenture h-9 md:h-10 w-28 md:w-32">
            <div className="w-5 h-5 p-0.5 2xl:w-6 2xl:h-6 flex justify-center items-center bg-white rounded-full">
              <AddIcon className="scale-[0.7] lg:scale-75" />
            </div>
            <p className="text-xs md:text-sm">Add Facility</p>
          </button>
          <div className="my-3 mb-6 md:my-5 p-2 py-4 md:p-5 bg-white rounded-2xl h-[32vh] md:h-[30vh] lg:h-[42vh] 2xl:h-[40vh] box-border hero shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
            <div className="flex justify-between items-center mb-3">
              <h5 className="text-sm md:text-md xl:text-2xl font-bold">
                Facility Analysis
              </h5>
              <Select
                data={[
                  { name: "All facilities" },
                  { name: "Swimming pool" },
                  { name: "Gym house" },
                  { name: "Club house" },
                ]}
                border={true}
                onClick={(value: string) => selectedAction(value)}
              />
            </div>
            <BookedFacilitiesChart />
          </div>
          <div className="flex justify-between items-center p-3 mb-4 bg-white shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)] rounded-2xl">
            <Select
              data={[{ name: "Booked facilities" }, { name: "All facilities" }]}
              border={false}
              onClick={(value: string) => selectedAction(value)}
            />
            <div className="flex">
              <Menu
                data={["Select All", "Export CSV"]}
                onSelect={(value: string) => selectedMenu(value)}
              />
              <div className="h-8 md:h-10 w-8 md:w-10 border-[1px] border-[#6484E6] rounded-md flex justify-center items-center">
                <Expand className="scale-[0.7] xl:scale-75" />
              </div>
            </div>
          </div>
          <div className="grid gap-3 2xl:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {facilitiesData.map((facilityData) => {
              const {
                pendingRequest,
                approvedRequest,
                address,
                contact,
                category,
              } = facilityData;

              return (
                <div className="facility bg-white rounded-2xl p-3 2xl:p-5 h-60 md:h-[25vh] lg:h-[35vh] 2xl:h-64 shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)] relative">
                  <div className="flex justify-between items-center h-[10%]">
                    <h6 className="text-xs xl:text-sm font-semibold">
                      {new Date().toDateString()}
                    </h6>
                    <div className="flex relative z-10">
                      {selectAll && <input type="checkbox" className="mr-1" />}
                      <span>
                        <Calendar className="scale-[0.6] lg:scale-75" />
                      </span>
                    </div>
                  </div>
                  <div className="h-[45%] md:h-[50%] lg:h-[45%] flex flex-col justify-evenly">
                    <p className="text-xs xl:text-sm flex">
                      <Pending className="inline-block mr-2" />
                      <span>{`Pending request ${pendingRequest}`}</span>
                    </p>
                    <p className="text-xs xl:text-sm flex">
                      <span className="flex justify-center items-center mr-2 bg-[#4BB543] h-5 w-5 rounded-full">
                        <Approved />
                      </span>
                      <span>{`Bookings ${approvedRequest}`}</span>
                    </p>
                  </div>
                  <div className="h-[45%] bg-primary p-3 rounded-2xl md:h-[40%] lg:h-[45%]">
                    <p className="font-bold text-xs xl:text-sm mb-1 md:mb-2">
                      {category}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex-child overflow-hidden w-[40%]">
                        <p className="text-xs xl:text-sm truncate">{address}</p>
                        <p className="text-xs xl:text-sm">{contact}</p>
                      </div>
                      <button className="flex justify-center gap-x-2 items-center rounded-full text-xs md:text-sm bg-accenture h-8 md:h-10 w-24 md:w-28 lg:w-24 lg:h-8 xl:w-28">
                        Block now
                      </button>
                    </div>
                  </div>
                  <TopRight
                    className="absolute -right-[2.1rem] -top-[2.1rem] scale-[0.6]"
                    style={{ borderRadius: "0px 32px 0px 0px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="h-full md:h-screen md:overflow-scroll p-5 md:p-6 md:pr-9 bg-background w-full md:w-4/5 lg:w-5/6 box-border mb-16 md:mb-0">
          <div className="flex justify-between md:justify-end items-center h-10">
            <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400 items-center justify-center">
              <PersonIcon />
            </div>
            <NotificationIcons />
          </div>
          <div className="flex justify-center items-center h-[80vh]">
            <div className="flex justify-center flex-col items-center h-[60vh] md:h-[80vh] lg:h-[75vh] 2xl:h-[80vh]">
              <EmptyFacility className="scale-[0.6] sm:scale-75 lg:scale-90 notificationSvg" />
              <h1 className="text-2xl sm:text-3xl 2xl:text-5xl font-semibold">
                No Facility Available
              </h1>
              <p className="my-3">click the button below to add one.</p>
              <button className="flex mx-auto justify-center items-center rounded-full font-medium text-xs sm:text-sm lg:text-md bg-accenture h-12 w-28 sm:h-12 sm:w-36">
                Add Facility
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Facility
