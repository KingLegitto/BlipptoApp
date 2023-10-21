import React from "react";
import { useNavigate } from "react-router-dom";
import NotificationIcons from "../Notifications/notificationsIcons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ReactComponent as MedicalAlarmIcon } from "../../assets/medicalAlarmIcon.svg";
import { ReactComponent as HazardAlarmIcon } from "../../assets/hazardAlarmIcon.svg";
import { ReactComponent as RobberyAlarmIcon } from "../../assets/robberyAlarmIcon.svg";
import { ReactComponent as ThreatAlarmIcon } from "../../assets/threatAlarmIcon.svg";
import { ReactComponent as OtherAlarmIcon } from "../../assets/otherAlarmIcon.svg";
import { ReactComponent as QuestionMarkIcon } from "../../assets/questionMark.svg";

const Alarms = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full md:h-screen md:overflow-scroll p-5 md:px-9 md:pt-6 bg-background w-full max-w-full box-border">
      <div className="flex justify-between items-center h-10 mb-4">
        <div>
          <h1 className="hidden md:flex items-center text-lg font-bold md:text-xl 2xl:text-3xl">
            <div
              className="flex w-10 h-10  items-center justify-center cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <ArrowBackIcon />
            </div>
            {"Alarms"}
          </h1>
        </div>
        <NotificationIcons />
      </div>
      <div className="flex">
        <div className="flex flex-col w-2/5">
          <div className="bg-white h-[55vh] p-5 pr-7 pt-6 mr-5 mb-5 rounded-2xl">
            <div className="flex justify-between mx-2 mb-3">
              <h4 className="font-semibold text-lg">Activate Alarms</h4>
              <div className="flex items-center justify-center w-8 h-8 rounded-full text-xs bg-accenture font-medium">
                <QuestionMarkIcon className="scale-[0.6] xl:scale-75" />
              </div>
            </div>
            <div className="h-[15%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl mt-5">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-full text-xs bg-white mr-4">
                  <MedicalAlarmIcon className="scale-[0.6] xl:scale-75" />
                </div>
                <p className="text-sm">Medical</p>
              </div>
              <KeyboardArrowRightIcon />
            </div>
            <div className="h-[15%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl mt-3">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-full text-xs bg-white mr-4">
                  <HazardAlarmIcon className="scale-[0.6] xl:scale-75" />
                </div>
                <p className="text-sm">Hazard</p>
              </div>
              <KeyboardArrowRightIcon />
            </div>
            <div className="h-[15%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl mt-3">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-full text-xs bg-white mr-4">
                  <ThreatAlarmIcon className="scale-[0.6] xl:scale-75" />
                </div>
                <p className="text-sm">Threat</p>
              </div>
              <KeyboardArrowRightIcon />
            </div>
            <div className="h-[15%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl mt-3">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-full text-xs bg-white mr-4">
                  <RobberyAlarmIcon className="scale-[0.6] xl:scale-100" />
                </div>
                <p className="text-sm">Robbery</p>
              </div>
              <KeyboardArrowRightIcon />
            </div>
            <div className="h-[15%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl mt-3">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-full text-xs bg-white mr-4">
                  <OtherAlarmIcon className="scale-[0.6] xl:scale-75" />
                </div>
                <p className="text-sm">Other</p>
              </div>
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="bg-white h-[30vh] rounded-2xl mr-5"></div>
        </div>
        <div className="flex flex-col w-3/5">
          <div className="bg-white h-[40vh] rounded-2xl mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Alarms;
