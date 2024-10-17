import { useState, useEffect } from "react";
import { getOrder } from "../../Data";

export const Orders = () => {
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
    <div className="orders">
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl font-semibold">Orders</h3>

        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Price</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Quantity</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Discounted Price</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {dataSource.map((product, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{product.title}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ${product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ${product.discountedPrice}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
