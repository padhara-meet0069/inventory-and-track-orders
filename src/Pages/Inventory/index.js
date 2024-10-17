import { InventoryTable } from "../../Components/InventoryTable";

export const Inventory = () => {
  return (
    <div className="inventory">
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl font-semibold">Inventory</h3>
        <InventoryTable />
      </div>
    </div>
  );
};
