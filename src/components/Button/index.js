import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Button = ({ children, onClick, width }) => {
  return (
    <button className="button" onClick={onClick} style={{ width }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  width: PropTypes.number,
};

export default Button;
