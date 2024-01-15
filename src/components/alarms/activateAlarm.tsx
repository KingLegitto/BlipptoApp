import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ReactComponent as MedicalAlarmIcon } from "../../assets/medicalAlarmIcon.svg";
import { ReactComponent as HazardAlarmIcon } from "../../assets/hazardAlarmIcon.svg";
import { ReactComponent as RobberyAlarmIcon } from "../../assets/robberyAlarmIcon.svg";
import { ReactComponent as ThreatAlarmIcon } from "../../assets/threatAlarmIcon.svg";
import { ReactComponent as OtherAlarmIcon } from "../../assets/otherAlarmIcon.svg";
import { ReactComponent as QuestionMarkIcon } from "../../assets/questionMark.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowRight.svg";

interface ActivateAlarmsProps {
  setShowAlarmSection: (value:boolean) => void; 
  showAlarmSection: Boolean 
  }

const ActivateAlarms: React.FC<ActivateAlarmsProps> = ({setShowAlarmSection, showAlarmSection}) => {
  return (
    <div className="bg-white h-[486px] sm:h-[53vh] md:h-[55%] p-3 sm:p-5 sm:pr-7 sm:pt-6 mr-0 md:mr-5 mb-5 rounded-2xl shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
      <div className="flex justify-between mx-2 h-[10%] mb-2 items-center md:items-start">
        <h4 className="font-semibold text-sm 2xl:text-lg">Activate Alarms</h4>
        <div className="flex items-center justify-center w-6 2xl:w-8 h-6 2xl:h-8 rounded-full text-xs bg-accenture font-medium">
          <QuestionMarkIcon className="scale-[0.6] xl:scale-70" />
        </div>
      </div>
      <div className="flex flex-col h-[85%] justify-between">
        <div className="h-14 xl:h-[17%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 2xl:w-11 h-8 2xl:h-11 rounded-full text-xs bg-white mr-3">
              <MedicalAlarmIcon className="scale-[0.55] xl:scale-75" />
            </div>
            <p className="text-xs 2xl:text-sm">Medical</p>
          </div>
          <KeyboardArrowRightIcon />
        </div>
        <div className="h-14 xl:h-[17%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 2xl:w-11 h-8 2xl:h-11 rounded-full text-xs bg-white mr-3">
              <HazardAlarmIcon className="scale-[0.6] xl:scale-75" />
            </div>
            <p className="text-xs 2xl:text-sm">Hazard</p>
          </div>
          <KeyboardArrowRightIcon />
        </div>
        <div className="h-14 xl:h-[17%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 2xl:w-11 h-8 2xl:h-11 rounded-full text-xs bg-white mr-3">
              <ThreatAlarmIcon className="scale-[0.6] xl:scale-75" />
            </div>
            <p className="text-xs 2xl:text-sm">Threat</p>
          </div>
          <KeyboardArrowRightIcon />
        </div>
        <div className="h-14 xl:h-[17%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 2xl:w-11 h-8 2xl:h-11 rounded-full text-xs bg-white mr-3">
              <RobberyAlarmIcon className="scale-[0.6] xl:scale-100" />
            </div>
            <p className="text-xs 2xl:text-sm">Robbery</p>
          </div>
          <KeyboardArrowRightIcon />
        </div>
        <div className="h-14 xl:h-[17%] bg-[rgba(56,57,64,0.04)] p-3 flex justify-between items-center rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 2xl:w-11 h-8 2xl:h-11 rounded-full text-xs bg-white mr-3">
              <OtherAlarmIcon className="scale-[0.6] xl:scale-75" />
            </div>
            <p className="text-xs 2xl:text-sm">Other</p>
          </div>
          <KeyboardArrowRightIcon />
        </div>
        <div className="flex items-center md:hidden" onClick={() => {setShowAlarmSection(!showAlarmSection)}}>
          <p className="text-xs sm:text-sm mr-2">Go to metric</p>
          <ArrowRightIcon className="scale-[0.9]" />
        </div>
      </div>
    </div>
  );
};

export default ActivateAlarms;
