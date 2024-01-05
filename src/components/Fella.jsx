import React from "react";

const Fella = ({ name, role, img }) => {
  return (
    <div className="fella-container">
      <div className="fella-border"></div>

      <div className="fella-portrait">
        <img src={img} alt="" />
      </div>

      <div className="fella-info">
        <p>
          <strong>{ name }</strong>
        </p>
        <p>
          <strong>{ role }</strong>
        </p>
      </div>
    </div>
  );
};

export default Fella;


