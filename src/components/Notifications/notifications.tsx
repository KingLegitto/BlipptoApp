import React, { useState, useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Filter } from "../../assets/Filter.svg";
import { ReactComponent as Issues } from "../../assets/issues.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Star } from "../../assets/star.svg";
import NotificationIcons from "./notificationsIcons";
import Select from "../utils/select";
import AddIcon from "@mui/icons-material/Add";
import { formatCurrentDate, showDynamicDate } from "../utils/helpersForDates";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Selected } from "../../assets/selected.svg";
import { notificationsData } from "../../dummydata/notificationDummyData";

const Notifications: React.FC = () => {
  // const [hasData] = useState<Boolean>(true);
  const [tappedValues, setTappedValues] = useState<number[]>([]);
  const [isTappedAndHeld, setTappedAndHeld] = useState<Boolean>(false);
  const navigate = useNavigate();
  const timerId = useRef<number | null>(null);

  const handleTapStart = (idx: number) => {
    if (isTappedAndHeld && tappedValues.includes(idx)) {
      const arrayOfIdsLeft = tappedValues.filter((id) => id !== idx);
      setTappedValues(arrayOfIdsLeft);
      return;
    }
    if (isTappedAndHeld) {
      setTappedValues((prevState) => [...prevState!, idx]);
      return;
    }

    timerId.current = window.setTimeout(() => {
      setTappedAndHeld(true);
      setTappedValues((prevState) => [...prevState!, idx]);
    }, 500);
  };

  const handleTapEnd = () => {
    // Clear the timer when the user releases the tap
    if (timerId.current !== null) {
      window.clearTimeout(timerId.current);
    }
  };

  return (
    <>
      <div className="h-screen overflow-y-auto max-h-screen  bg-background w-full max-w-full  box-border">
        <div className="px-5 py-6 md:py-0 md:pt-6 md:px-5 md:pr-9 border-b-2 md:border-b-0">
          <div className="flex justify-between items-center h-[5vh] mb-4">
            <div>
              <h1 className="hidden md:flex items-center text-lg font-bold md:text-xl 2xl:text-3xl">
                <div
                  className="flex w-10 h-10  items-center justify-center "
                  onClick={() => navigate(-1)}
                >
                  <ArrowBackIcon />
                </div>
                {"Notifications"}
              </h1>
              <div
                className="flex md:hidden w-10 h-10  items-center justify-center"
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon />
              </div>
            </div>
            <NotificationIcons />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center h-[13vh] sm:h-[8vh] mb-0 md:mb-4">
            <div className=" w-full md:w-[55%] xl:w-[50%] flex">
              <button className="hidden md:flex justify-center  items-center rounded-xl text-xs xl:text-sm  bg-accenture h-10 w-auto px-2 py-0.5 mr-3">
                Create Notification
              </button>
              <div className="w-10 h-10 rounded-md bg-brand mr-1.5 flex justify-center items-center">
                <Filter className="scale-[0.6] xl:scale-75" />
              </div>
              <div className="relative  rounded-full  w-[95%] md:w-[70%] h-10 ">
                <div className=" pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3">
                  <span className="text-gray-500 sm:text-sm">
                    <Search />
                  </span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full  rounded-xl h-full border-2 pl-10 bg-background  text-gray-900   outline-1  focus:outline-1  focus:outline-[#FFD601] sm:text-sm sm:leading-6"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="flex justify-between md:justify-normal items-center w-full md:w-auto gap-x-2">
              <Select
                data={[{ name: "Received" }, { name: "Sent" }]}
                border={false}
                shadow={true}
              />
              {!isTappedAndHeld && window.innerWidth < 768 && (
                <div className="flex items-center md:hidden">
                  <Issues className="scale-[0.6] xl:scale-75" />
                  <p className="text-xs xl:text-sm mr-2">Issues</p>
                  <div className="flex items-center justify-center w-5 h-5 rounded-full text-xs bg-accenture">
                    8
                  </div>
                </div>
              )}
              <div className="hidden items-center md:flex">
                <Issues className="scale-[0.6] xl:scale-75" />
                <p className="text-xs xl:text-sm mr-2">Issues</p>
                <div className="flex items-center justify-center w-5 h-5 rounded-full text-xs bg-accenture">
                  8
                </div>
              </div>
              <div className="hidden md:flex items-center justify-between p-2 gap-x-2 border-x-2">
                <Delete className="scale-[0.6] xl:scale-75" />
                <p className="text-xs xl:text-sm hidden lg:block">Delete</p>
              </div>
              {isTappedAndHeld && (
                <div className="flex items-center md:hidden">
                  <div className="border-r-[1px] px-2">
                    <input type="checkbox" />
                  </div>
                  <div className="border-r-[1px] px-2">
                    <Delete className="scale-[0.6] xl:scale-75" />
                  </div>
                  <div className="border-r-[1px] px-2">
                    <Star className="scale-[0.6] xl:scale-75" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-5 md:pr-9 hidden md:block">
          <div className="flex p-4 h-14 rounded-xl justify-between items-center bg-primary">
            <input type="checkbox" />
            <p className="text-xs xl:text-sm font-bold">
              {formatCurrentDate()}
            </p>
          </div>
        </div>
        <div className="px-0 md:px-5 py-0 md:pr-9">
          <ul>
            {notificationsData.map((notification, idx) => {
              return (
                <li
                  key={idx}
                  className="flex items-center justify-between border-b-2 p-4"
                  onTouchStart={() => handleTapStart(idx)}
                  onTouchEnd={() => handleTapEnd}
                >
                  <div className="basis-[10%] md:basis-[5%] flex items-center gap-x-2">
                    <input type="checkbox" className="hidden md:block" />
                    <Star className="hidden md:block scale-[0.6] xl:scale-75" />
                    {showPriorityLevel(notification.priority)}
                    <div className="flex md:hidden w-10 h-10 rounded-full bg-brand justify-center items-center text-white">
                      {tappedValues!.includes(idx) ? (
                        <Selected />
                      ) : (
                        notification.resident[0]
                      )}
                    </div>
                  </div>
                  <div className="basis-[80%] md:basis-[80%] overflow-hidden">
                    <p
                      className={`text-xs xl:text-sm flex justify-between font-semibold ${
                        notification.read ? "opacity-60" : "opacity-100"
                      }`}
                    >
                      <span>{notification.resident}</span>
                      <span className="inline-block sm:hidden">
                        {showDynamicDate(notification.createdAt)}
                      </span>
                    </p>
                    <p
                      className={`text-xs xl:text-sm truncate font-medium ${
                        notification.read ? "opacity-60" : "opacity-100"
                      }`}
                    >
                      {notification.description}
                    </p>
                  </div>
                  <div className="basis-0 sm:basis-[7%] hidden sm:flex justify-end">
                    <p className="text-xs xl:text-sm font-bold">
                      {showDynamicDate(notification.createdAt)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex md:hidden w-16 h-16 absolute rounded-full bg-accenture  justify-center items-center  bottom-10 right-4 drop-shadow-[6px_6px_4px_rgba(105,97,97,0.16)]">
          <AddIcon className="scale-[1.2] " />
        </div>
        {/* {hasData ? (
       
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="text-center">
            <h1 className="text-5xl font-bold">No Facility Available</h1>
            <p className="my-5">click the button below to add one</p>
            <button className="flex  mx-auto justify-center items-center rounded-full text-base bg-accenture h-10 md:h-12 w-32 md:w-48">
              Add Facility
            </button>
          </div>
        </div>
      )} */}
      </div>
    </>
  );
};

export default Notifications;

function showPriorityLevel(priority: string) {
  if (priority === "low") {
    return <span className="bg-[#4BB543] w-3 h-3 rounded-full" />;
  } else if (priority === "medium") {
    return <span className="bg-[#FFD601] w-3 h-3 rounded-full" />;
  } else return <span className="bg-[#CE2029] w-3 h-3 rounded-full" />;
}
