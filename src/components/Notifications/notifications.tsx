import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Filter } from "../../assets/Filter.svg";
import { ReactComponent as Issues } from "../../assets/issues.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Star } from "../../assets/star.svg";
import NotificationIcons from "./notificationsIcons";
import Select from "../utils/select";
import { formatCurrentDate, showDynamicDate } from "../utils/helpers";

const Notifications: React.FC = () => {
  // const [hasData] = useState<Boolean>(true);


  const notificationsData = [
    {
      location: "Petraa Homes",
    description: "Seeking clarificatons on utility and maintenance fees - I believe that understanding these fees will help me and other residents manage  our expense better and contribute positively",
    priority: 'high',
    createdAt: '2023-09-26T01:30:00Z'
    },
    {
      location: "Andron homes",
    description: "Requesting information about estate rules and regulations - Could you please Provide a comprehensive list of general rules that apply to residents within our estate?",
    priority: 'medium',
    createdAt: '2023-09-26T00:45:00Z'
    },
    {
      location: "Inn Estate",
    description: "Seeking clarificatons on utility and maintenance fees Seeking clarificatons on utility and maintenance fees - I believe that understanding these fees will help me and other residents manage  our expense better and contribute fhfhfdhe positively",
    priority: 'low',
    createdAt: '2023-09-25T20:30:00Z'
    },
    {
      location: "Petraa Homes",
    description: "Seeking clarificatons on utility and maintenance fees - I believe that understanding these fees will help me and other residents manage  our expense better and contribute positively",
    priority: 'high',
    createdAt: '2023-09-25T17:30:00Z'
    },
    {
      location: "Andron homes",
    description: "Requesting information about estate rules and regulations - Could you please Provide a comprehensive list of general rules that apply to residents within our estate?",
    priority: 'medium',
    createdAt: '2023-09-14T15:30:00Z'
    },
    {
      location: "Inn Estate",
    description: "Seeking clarificatons on utility and maintenance fees Seeking clarificatons on utility and maintenance fees - I believe that understanding these fees will help me and other residents manage  our expense better and contribute fhfhfdhe positively",
    priority: 'low',
    createdAt: '2023-09-14T15:30:00Z'
    },
    {
      location: "Petraa Homes",
    description: "Seeking clarificatons on utility and maintenance fees - I believe that understanding these fees will help me and other residents manage  our expense better and contribute positively",
    priority: 'high',
    createdAt: '2023-09-14T15:30:00Z'
    },
    {
      location: "Andron homes",
    description: "Requesting information about estate rules and regulations - Could you please Provide a comprehensive list of general rules that apply to residents within our estate?",
    priority: 'medium',
    createdAt: '2023-09-14T15:30:00Z'
    },
    {
      location: "Inn Estate",
    description: "Seeking clarificatons on utility and maintenance fees Seeking clarificatons on utility and maintenance fees - I believe that understanding these fees will help me and other residents manage  our expense better and contribute fhfhfdhe positively",
    priority: 'low',
    createdAt: '2023-09-14T15:30:00Z'
    },
  ]

  return (
    <>
    <div className="h-screen overflow-y-auto max-h-screen px-5 py-6 md:p-6 md:pr-9 bg-background w-full max-w-full  box-border">
      <div className="flex justify-between items-center h-[5vh] mb-4">
        <div>
          <h1 className="hidden md:block text-lg font-bold md:text-xl 2xl:text-3xl">
            Notifications
          </h1>
          <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400 items-center justify-center ">
            <PersonIcon />
          </div>
        </div>
        <NotificationIcons />
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center h-[12vh] md:h-[8vh] mb-[4vh] ">
        <div className=" w-full md:w-[55%] xl:w-[40%] flex">
          <button className="hidden md:flex justify-center  items-center rounded-xl text-base bg-accenture h-10 w-48 mr-3">
            Create Notification
          </button>
          <div className="w-10 h-10 rounded-md bg-brand mr-3 flex justify-center items-center">
            <Filter className="scale-[0.6] xl:scale-75" />
          </div>
          <div className="relative  rounded-full  w-[90%] md:w-[70%] h-10 ">
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
        <div className="flex justify-between md:justify-normal items-center w-full md:w-auto gap-x-2">
            <Select
              data={[{ name: "Received" }, { name: "Sent" }]}
              border={false}
              shadow={true}
            />
            <div className="flex items-center">
               <Issues className="scale-[0.6] xl:scale-75" />
                <p className="text-xs xl:text-sm mr-2" >Issues</p>
                <div className="flex items-center justify-center w-5 h-5 rounded-full text-xs bg-accenture">
                   8
                </div>
            </div>
            <div className="flex items-center justify-between p-2 gap-x-2 border-x-2">
            <Delete className="scale-[0.6] xl:scale-75" />
            <p className="text-xs xl:text-sm hidden md:block">Delete</p>
            </div>
        </div>
      </div>
      <div className="p-4  h-14 rounded-xl flex justify-between items-center bg-primary">
        <input type="checkbox"/>
        <p className="text-xs xl:text-sm font-bold">{formatCurrentDate()}</p>
      </div>
      <ul>
        {
          notificationsData.map((notification, idx) => {
            return  <li key={idx} className="flex items-center justify-between border-b-2 p-4">
            <div className="basis-[5%] flex items-center gap-x-2">
            <input type="checkbox"/>
            <Star className="scale-[0.6] xl:scale-75" />
            {showPriorityLevel(notification.priority)}
            </div>
            <div className="basis-[80%] overflow-hidden">
             <p className="text-xs xl:text-sm font-bold">{notification.location}</p>
             <p className="text-xs xl:text-sm truncate">{notification.description}</p>
            </div>
            <div className="basis-[7%] flex justify-end">
            <p className="text-xs xl:text-sm font-bold">{showDynamicDate(notification.createdAt)}</p>
            </div>
           </li>
          })
        }
       
      </ul>
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

function showPriorityLevel(priority: string){
 if(priority === 'low'){
  return <span className="bg-[#4BB543] w-3 h-3 rounded-full"/>
 }
 else if(priority === 'medium'){
  return <span className="bg-[#FFD601] w-3 h-3 rounded-full"/>
 }
 else return <span className="bg-[#CE2029] w-3 h-3 rounded-full"/>
}