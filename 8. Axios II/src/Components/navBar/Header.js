import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import CreateNewPost from "../../Pages/CreateNewPost";

const Header = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <ul className="header">
        <li  className="inline">
          <NavLink  className="inlineFont" to="/home">
            Home
          </NavLink>
        </li>
        <li className="inline">
          <NavLink className="inlineFont" to="/viewposts">
            View Posts
          </NavLink>
        </li>
        <li className="inline">
          <div className="inlineFont buttons">
          <button className="buttonn" onClick={() => setButtonPopup(true)}>
            Create New
          </button>
          </div>
        </li>
      </ul>

      <CreateNewPost setTrigger={setButtonPopup} trigger={buttonPopup} />


    </div> 
  );
};

export default Header;
