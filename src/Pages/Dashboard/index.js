import { DSCards } from "../../Components/DScards";
import RecentOrder from "../../Components/RecentOrder";
import Chart from "../../Components/Chart";

export const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="flex flex-col space-y-2">
        <h3 className="text-2xl font-semibold">DashBoard</h3>
        <DSCards />
        <div className="flex flex-wrap space-x-4">
          <RecentOrder />
          <div className="p-4 border rounded-lg shadow-md">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};
