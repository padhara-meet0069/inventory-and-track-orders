import { useEffect, useState } from "react";
import { getOrder } from "../../Data";

const RecentOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getOrder().then((res) => {
      setDataSource(res.products);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="recentorder">
      <h5 className="text-lg font-semibold mb-4">Recent Order</h5>
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="text-center py-6">Loading...</div>
        ) : (
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Title</th>
                <th className="border border-gray-300 p-2 text-center">Quantity</th>
                <th className="border border-gray-300 p-2 text-center">Discounted Price</th>
              </tr>
            </thead>
            <tbody>
              {dataSource.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{item.title}</td>
                  <td className="border border-gray-300 p-2 text-center">{item.quantity}</td>
                  <td className="border border-gray-300 p-2 text-center">{item.discountedPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RecentOrder;
