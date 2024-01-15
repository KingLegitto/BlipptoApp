import React from "react";
import SecurityIndexChart from "./securityIndexChart";
import { ReactComponent as ExclamationIcon } from "../../assets/exclamation.svg";
import Select from "../utilComponents/select";

const SecurityIndex: React.FC = () => {
  return (
    <div className="bg-white h-52 md:h-[30%] rounded-2xl mr-0 md:mr-5 p-5 sm:pr-7 relative shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-sm 2xl:text-lg">Security Index</h4>
        <div className="flex items-center justify-center w-6 2xl:w-8 h-6 2xl:h-8 rounded-full text-xs bg-accenture font-medium">
          <ExclamationIcon className="scale-[0.6] xl:scale-70" />
        </div>
      </div>
      <div className="w-32 mt-2 mb-7">
        <Select
          data={[{ name: "last 90 days" }]}
          border={true}
          bold={false}
          // onClick={(value: string) => selectedAction(value)}
        />
      </div>
        <SecurityIndexChart />
    </div>
  );
};

export default SecurityIndex;
