import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Header({ text = "Feedback UI", bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
