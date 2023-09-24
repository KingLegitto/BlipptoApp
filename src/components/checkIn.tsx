import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { ReactComponent as Envelope } from "../assets/envelope.svg";
import { ReactComponent as Alarm } from "../assets/Alarm.svg";
import { Keypad } from "./keypad";

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

      <CheckIn />
    </div>
  );
}
