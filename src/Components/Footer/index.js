import Privacy from "../Privacy";
import Termsnuse from "../Termsnuse";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 text-white">
      <div className="flex flex-col items-center space-y-2">
        <a href="tel:+123456789" className="text-blue-400 hover:underline">
          +91-97230-19703
        </a>
        <Privacy />
        <Termsnuse />
      </div>
      <div className="mt-4 text-center">
        <h5 className="text-lg font-semibold">
          Made with <span className="font-bold">By MEET PADHARA</span>
        </h5>
       
      </div>
    </div>
  );
};

export default Footer;
