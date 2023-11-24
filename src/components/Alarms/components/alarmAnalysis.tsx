import React from "react";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/arrowLeft.svg";
import AlarmAnalysisChart from "./alarmAnalysisChart";
import Select from "../../utils/select";

interface ActivateAlarmsProps {
  setShowAlarmSection: (value: boolean) => void;
  showAlarmSection: Boolean;
}

const AlarmAnalysis: React.FC<ActivateAlarmsProps> = ({
  setShowAlarmSection,
  showAlarmSection,
}) => {
  return (
    <div className="bg-white h-96 sm:h-[40%] rounded-2xl mb-5 p-3 sm:p-5 shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-sm 2xl:text-lg">Alarm Analysis</h4>
        <Select
          data={[{ name: "All metrics" }]}
          border={true}
          // onClick={(value: string) => selectedAction(value)}
        />
      </div>
      <AlarmAnalysisChart />
      <div
        className="flex items-center md:hidden justify-end mt-2"
        onClick={() => {
          setShowAlarmSection(!showAlarmSection);
        }}
      >
        <ArrowLeftIcon className="scale-[0.9]" />
        <p className="text-xs sm:text-sm ml-2">Go to alarms</p>
      </div>
    </div>
  );
};

export default AlarmAnalysis;
