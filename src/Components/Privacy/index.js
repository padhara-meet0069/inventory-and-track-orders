import { useState } from "react";

const Privacy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="privacy">
      <button
        onClick={showModal}
        className="text-blue-500 underline hover:text-blue-700"
      >
        Privacy Policy
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
            <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-justify">
              We respect your privacy and are committed to protecting your
              personal information. The Admins Dashboard, built using React and
              Ant Design, allows you to view statistics of the company's
              products. We collect and use limited personal information, such as
              your name and email address, solely for authentication purposes.
              We do not share your information with third parties. We implement
              appropriate security measures to safeguard your data. By using the
              Admins Dashboard, you consent to the collection and use of your
              information as described in this policy. We may update the policy
              periodically, and any changes will be posted here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Privacy;
