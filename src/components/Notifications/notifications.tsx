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
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Selected } from "../../assets/selected.svg";
import { notificationsData } from "../../dummydata/notificationDummyData";
import { ReactComponent as EmptyNotification } from "../../assets/emptyNotification.svg";

const Notifications: React.FC = () => {
  const [hasNotifications] = useState<Boolean>(false);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  const [isSelected, setSelected] = useState<Boolean>(false);
  const navigate = useNavigate();
  const timerId = useRef<number | null>(null);

  const handleTapStart = (idx: number) => {
    //remove previously selected ids
    if (isSelected && selectedValues.includes(idx)) {
      const arrayOfIdsLeft = selectedValues.filter((id) => id !== idx);

      if (arrayOfIdsLeft.length === 0) {
        setSelected(false);
      }

      setSelectedValues(arrayOfIdsLeft);
      return;
    }
    if (isSelected) {
      setSelectedValues((prevState) => [...prevState, idx]);
      return;
    }

    window.innerWidth < 768
      ? (timerId.current = window.setTimeout(() => {
          setSelected(true);
          setSelectedValues((prevState) => [...prevState, idx]);
        }, 500))
      : setSelected(true);
        setSelectedValues((prevState) => [...prevState, idx]);
  };

  const handleTapEnd = () => {
    // Clear the timer when the user releases the tap
    if (timerId !== null) {
      window.clearTimeout(timerId.current!);
    }
  };

  return (
    <>
      {hasNotifications ? (
        <div className="h-screen overflow-y-auto max-h-screen  bg-background w-full max-w-full box-border">
          <div className="px-5 py-6 md:py-0 md:pt-6 md:px-9 border-b-2 md:border-b-0">
            <div className="flex justify-between items-center h-10 mb-4">
              <div>
                <h1 className="hidden md:flex items-center text-lg font-bold md:text-xl 2xl:text-3xl">
                  <div
                    className="flex w-10 h-10  items-center justify-center cursor-pointer"
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
            <div className="flex flex-col md:flex-row justify-between md:items-center h-24 md:h-12 mb-0 md:mb-5">
              <div className=" w-full md:w-[55%] xl:w-[50%] flex">
                <button className="hidden md:flex justify-center  items-center rounded-xl text-xs xl:text-sm bg-accenture h-10 w-auto px-1.5 py-1 mr-3">
                  Create Notification
                </button>
                <div className="w-10 h-10 rounded-md bg-brand mr-1.5 flex justify-center items-center">
                  <Filter className="scale-[0.6] xl:scale-75" />
                </div>
                <div className="relative  w-[95%] md:w-[70%] h-10 ">
                  <div className=" pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <Search />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-xl h-full border border-inherit pl-10 bg-background text-gray-900 outline-0 focus:border-yellow-300  focus:border-2  sm:text-sm sm:leading-6"
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
                {!isSelected && (
                  <div
                    className="flex items-center"
                    onClick={() => navigate("/issues")}
                  >
                    <Issues className="scale-[0.6] xl:scale-75" />
                    <p className="text-xs xl:text-sm mr-2">Issues</p>
                    <div className="flex items-center justify-center w-5 h-5 rounded-full text-xs bg-accenture">
                      8
                    </div>
                  </div>
                )}
                {isSelected && window.innerWidth > 768 && (
                  <div className="hidden md:flex items-center justify-between p-2 gap-x-2 border-x-2">
                    <Delete className="scale-[0.6] xl:scale-75" />
                    <p className="text-xs xl:text-sm hidden lg:block">Delete</p>
                  </div>
                )}
                {isSelected && window.innerWidth < 768 && (
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
          <div className="px-9 hidden md:block">
            <div className="flex p-4 h-14 rounded-xl justify-end items-center bg-primary">
              <p className="text-xs xl:text-sm font-bold">
                {formatCurrentDate()}
              </p>
            </div>
          </div>
          <div className="px-0 md:px-9 py-0">
            <ul>
              {notificationsData.map((notification, idx) => {
                const { sender, priority, createdAt, description, read } = notification;
                return (
                  <li
                    key={idx}
                    className="flex items-center justify-between border-b-2 p-4"
                    onTouchStart={() => handleTapStart(idx)}
                    onTouchEnd={() => handleTapEnd}
                  >
                    <div className="basis-[10%] md:basis-[5%] flex items-center gap-x-2">
                      <input
                        type="checkbox"
                        className="hidden md:block"
                        onChange={() => handleTapStart(idx)}
                      />
                      <Star className="hidden md:block scale-[0.6] xl:scale-75" />
                      {showPriorityLevel(priority, read)}
                      {/* div for mobile view  */}
                      <div className="flex md:hidden w-10 h-10 rounded-full bg-brand justify-center items-center text-white">
                        {selectedValues.includes(idx) ? (
                          <Selected />
                        ) : (
                          sender[0]
                        )}
                      </div>
                    </div>
                    <div className="basis-[80%] md:basis-[80%] overflow-hidden">
                      <p
                        className={`text-xs xl:text-sm flex justify-between font-semibold ${
                          read ? "opacity-60" : "opacity-100"
                        }`}
                      >
                        <span>{sender}</span>
                        <span className="inline-block sm:hidden">
                          {showDynamicDate(createdAt)}
                        </span>
                      </p>
                      <p
                        className={`text-xs xl:text-sm truncate font-medium ${
                          read ? "opacity-60" : "opacity-100"
                        }`}
                      >
                        {description}
                      </p>
                    </div>
                    <div className="basis-0 sm:basis-[7%] hidden sm:flex justify-end">
                      <p className="text-xs xl:text-sm font-bold">
                        {showDynamicDate(createdAt)}
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
        </div>
      ) : (
        <div className="h-screen  bg-background w-full max-w-full box-border p-6 md:pr-9">
          <div className="flex justify-between items-center h-[5vh]">
            <h1 className="flex items-center text-lg font-bold md:text-xl 2xl:text-3xl">
              <div
                className="flex w-10 h-10  items-center justify-center cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon />
              </div>
              {"Notifications"}
            </h1>
            <NotificationIcons />
          </div>
          <div className="flex justify-center items-center h-[80vh]">
            <div className="flex justify-center flex-col items-center h-[60vh] md:h-[80vh] lg:h-[60vh] 2xl:h-[80vh]">
              <EmptyNotification className="scale-[0.6] xl:scale-75 notificationSvg" />
              <h1 className="text-3xl xl:text-5xl font-bold">
                No Notification
              </h1>
              <Link to="/issues">
                {" "}
                <p className="my-5">click here to see issues.</p>
              </Link>
              <button className="flex  mx-auto justify-center items-center rounded-full font-medium text-xs sm:text-sm bg-accenture h-10 w-32 sm:w-48 p-2 ">
                Create Notification
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;

function showPriorityLevel(priority: string, read: boolean) {
  if (priority === "low") {
    return <span className={`bg-[#4BB543] w-3 h-3 rounded-full ${read ? "opacity-50" : "opacity-100" }`} />;
  } else if (priority === "medium") {
    return <span className={`bg-[#FFD601] w-3 h-3 rounded-full ${read ? "opacity-50" : "opacity-100" }`} />;
  } else return <span className={`bg-[#CE2029] w-3 h-3 rounded-full ${read ? "opacity-50" : "opacity-100" }`} />;
}
