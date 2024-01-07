import React from "react";
import { BsLinkedin, BsGithub, BsBriefcaseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Fella = ({ fella }) => {
  return (
    <div className="fella-container">
      <div className="fella-border"></div>

      <div className="fella-portrait">
        <img src={fella.img} alt=""></img>
      </div>

      <div className="fella-info">
        <p>
          <strong>{fella.name}</strong>
        </p>
        <p>
          <strong>{fella.rol}</strong>
        </p>

        <div className="fella-social">
          {fella.linkedIn && (
            <Link to={fella.linkedIn} target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </Link>
          )}
          {fella.gitHub && (
            <Link to={fella.gitHub} target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </Link>
          )}
          {fella.portfolio && (
            <Link to={fella.portfolio} target="_blank" rel="noopener noreferrer">
              <BsBriefcaseFill />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fella;
