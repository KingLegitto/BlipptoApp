import React from "react";
import { ReactComponent as Envelope } from "../../assets/envelope.svg";
import { ReactComponent as Alarm } from "../../assets/Alarm.svg";
import { Link } from "react-router-dom";

const NotificationIcons: React.FC = () => {
  return (
    <div className="flex">
      <Link to='/notifications'>
        <div className="bg-background md:bg-white relative shadow-none md:shadow-[0px_3px_5px_rgba(0,0,0,0.24)] rounded-full w-8 h-8 xl:w-10 xl:h-10 mr-2 flex items-center justify-center">
          <Alarm className="scale-[0.6] xl:scale-75" />
          <div className="flex items-center justify-center absolute w-5 h-5 rounded-full text-xs bg-accenture -top-3 -right-1.5">
            21
          </div>
        </div>
      </Link>
      <Link to='/alarms'>
        <div className="bg-background md:bg-white relative shadow-none md:shadow-[0px_3px_5px_rgba(0,0,0,0.24)] rounded-full w-8 h-8 xl:w-10 xl:h-10 mr-2 flex items-center justify-center">
          <Envelope className="scale-[0.6] xl:scale-75" />
          <div className="flex items-center justify-center absolute w-5 h-5 rounded-full text-xs bg-accenture -top-3 -right-1.5">
            21
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotificationIcons;
