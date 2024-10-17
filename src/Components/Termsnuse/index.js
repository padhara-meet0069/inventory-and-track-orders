import { useState } from "react";

const Termsnuse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="termsnuse">
      <button
        onClick={showModal}
        className="text-blue-500 underline hover:text-blue-700"
      >
        Terms and Use
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Terms and Use</h2>
            <p className="text-justify">
              By accessing and using the Admins Dashboard, built using React and
              Ant Design, you agree to the following terms: The dashboard is
              provided for informational purposes only and should not be relied
              upon as the sole basis for business decisions. The statistics
              displayed are subject to change and may not be entirely accurate
              or up-to-date. You are responsible for maintaining the
              confidentiality of your account information and for all activities
              that occur under your account. We reserve the right to suspend or
              terminate your access to the dashboard at any time without notice.
              Use of the dashboard is at your own risk, and we disclaim any
              liability for damages arising from its use.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Termsnuse;
