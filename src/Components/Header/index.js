import "./index.css";
import { HamburgerMenu } from "../HamburgerMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../State/Reducer";
import { Notification } from "../Notification";
import { Mail } from "../Mail";

export const Header = () => {
  const showmenus = useSelector((state) => state.showSideMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    function showmenu() {
      if (window.innerWidth < 700) {
        dispatch(hide());
      }
    }
    showmenu();
  }, [dispatch]);

  return (
    <div className="header flex items-center justify-between py-4 px-6 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        {!showmenus && <HamburgerMenu />}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/674/174/small/pd-logo-design-abstract-letter-pd-logo-modern-and-creative-logo-design-illustration-vector.jpg"
          alt="Admin Profile Icon"
          className="w-10 h-10 rounded-full"
          draggable={false}
        />
      </div>

      <h3 className="text-xl font-semibold pt-2">Admin's DashBoard</h3>

      <div className="flex items-center space-x-4">
        <Mail />
        <Notification />
      </div>
    </div>
  );
};
