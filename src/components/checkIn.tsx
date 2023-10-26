import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Keypad } from "./keypad";
import NotificationIcons from "./Notifications/notificationsIcons";

export default function CheckIn() {
  return (
    <div className="h-screen overflow-y-auto max-h-screen px-5 py-6 md:p-6 md:pr-9 bg-background w-full max-w-full md:w-4/5 lg:w-5/6 box-border">
      <div className="flex flex-col md:flex-row justify-between md:items-center h-[15vh] md:h-[8vh] mb-[4vh]">
        <div className="order-1 md:order-none">
          <h1 className="text-lg font-bold md:text-xl 2xl:text-3xl">
            Hello Admin
          </h1>
          <p className="text-sm md:text-md">
            Kindly Input the authentication code to invite your users in. Thank
            you
          </p>
        </div>
        <div className="flex flex-row justify-between items-center md:block ">
          <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400 items-center justify-center ">
            <PersonIcon />
          </div>
         <NotificationIcons />
        </div>
      </div>
      <Keypad />
    </div>
  );
}
