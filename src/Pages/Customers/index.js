import { CustomerTable } from "../../Components/CustomerTable";

export const Customers = () => {
  return (
    <div className="customers">
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl font-semibold">Customers</h3>
        <CustomerTable />
      </div>
    </div>
  );
};
