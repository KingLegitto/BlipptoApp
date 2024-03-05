import PersonIcon from "@mui/icons-material/Person";
import NotificationIcons from "./notifications/notificationsIcons";
import CodeNotification from "./codeNotification";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Filter } from "../assets/Filter.svg";


type headerProps = {
    headerMssg?: string,
    searchBar?: boolean,
    // codeBar: boolean,
    subMssg?: string,
    code?: number,
}

const Header = ({headerMssg, searchBar, subMssg, code}: headerProps) => {
    return (
        <>
        <div className={`flex flex-col md:flex-row justify-between ${(!headerMssg && !searchBar)? 'md:justify-end h-10': 'h-24 md:h-10'}  md:items-center mb-5`}>

        { searchBar && (<div className="order-1 md:order-none w-full md:w-[60%] flex">
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
            </div>)}


            
            {headerMssg && (<div className="order-1 md:order-none header">
                <h1 className="text-xl font-bold md:text-2xl 2xl:text-4xl">
                    {headerMssg}
                </h1>
                {subMssg && (<p className="text-sm md:text-md">
                    {subMssg}
                </p>)}
            </div>)}

            <div className="flex flex-row justify-between items-center md:block">
                <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400 items-center justify-center">
                    <PersonIcon />
                </div>
                <NotificationIcons />
            </div>
        
        </div>

        {code && <CodeNotification code={code}/>}
        </>
        
     );
}
 
export default Header;