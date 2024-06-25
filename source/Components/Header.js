import { LOGO_URL } from "../Utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-gradient-to-r from-blue-500 to-cyan-300 shadow-xl">
      <div className="logo">
        <img className=" w-40" src={LOGO_URL} />
      </div>

      <div className="flex">
        <ul className="flex justify-center items-center">
          <li className="px-4 text-3xl text-white font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-3xl text-white font-bold ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-3xl text-white font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-3xl text-white font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li
            className="px-4 text-3xl text-white font-bold"
            onClick={() => {btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");}}>
            <Link to = "/login"> {btnText} </Link>
          </li>
          <li className="px-4 text-xl">
          {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
