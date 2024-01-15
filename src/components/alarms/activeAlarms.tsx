import React from "react";
import { activeAlarmData } from "../../dummydata/alarmDummyData";
import { ReactComponent as GridView } from "../../assets/gridView.svg";

const ActiveAlarms: React.FC = () => {
  return (
    <div className="bg-white h-[45%] rounded-2xl shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]">
      <div className="p-5 border-b-2 flex items-center justify-between h-[18%]">
        <h4 className="font-semibold text-sm 2xl:text-lg">Active Alarms</h4>
        <div className="h-8 md:h-10 w-8 md:w-10 bg-brand rounded-md flex justify-center items-center">
          <GridView className="scale-[0.7] xl:scale-75" />
        </div>
      </div>
      <div className="px-5 pb-5 max-h-[81%] overflow-y-auto activeAlarms box-border">
        <table className="w-full table-fixed text-left">
          <thead>
            <tr className="h-9 md:h-14 border-b sticky top-0 z-10 bg-white">
              <th className="text-xs xl:text-sm w-[20%] sm:w-[15%]">
                Alarm Type
              </th>
              <th className="text-xs xl:text-sm w-[30%]">Resident</th>
              <th className="text-xs xl:text-sm w-[25%] hidden md:table-cell">
                Apartment Address
              </th>
              <th className="text-xs xl:text-sm w-[25%]">Current Location</th>
            </tr>
          </thead>
          <tbody>
            {activeAlarmData.map(
              (
                { resident, apartmentAddress, currentLocation, alarmType },
                i
              ) => {
                return (
                  <tr key={i} className="h-9 md:h-12 border-b">
                    <td className="text-xs xl:text-sm px-1">{alarmType}</td>
                    <td className="text-xs xl:text-sm truncate px-1">
                      {resident}
                    </td>
                    <td className="text-xs xl:text-sm hidden md:table-cell truncate px-1">
                      {apartmentAddress}
                    </td>
                    <td className="text-xs xl:text-sm truncate px-1">
                      {currentLocation}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveAlarms;
