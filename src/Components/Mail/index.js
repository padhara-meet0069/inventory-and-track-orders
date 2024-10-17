import { MailOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getComment } from "../../Data";

export const Mail = () => {
  const [data, setData] = useState([]);
  const [openNoti, setOpenNoti] = useState(false);

  useEffect(() => {
    getComment().then((res) => setData(res.comments));
  }, []);

  return (
    <div className="mails relative">
      <div className="relative cursor-pointer" onClick={() => setOpenNoti(true)}>
        <MailOutlined className="text-2xl" />
        {data.length > 0 && (
          <span
            className="absolute top-0 right-0 inline-flex items-center justify-center w-2.5 h-2.5 bg-red-600 rounded-full"
            title="Mails"
          />
        )}
      </div>

      {openNoti && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-72 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Mails</h3>
              <button
                className="text-red-500 font-semibold"
                onClick={() => setOpenNoti(false)}
              >
                Close
              </button>
            </div>
            {/* Scrollable area */}
            <div className="max-h-64 overflow-y-auto">
              <ul className="space-y-2">
                {data.map((item, index) => (
                  <li key={index} className="p-2 bg-gray-100 rounded-md">
                    {item.body}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
