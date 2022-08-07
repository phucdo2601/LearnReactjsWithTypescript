import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          Learn Reactjs+ts formula dynamic form
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/home">
              Home{" "}
            </a>
          </div>

          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/formulaDynamicForm2">
              Create-formula-form-2{" "}
            </a>
          </div>
          {/* <div className="navbar-nav">
            <a
              className="nav-item nav-link active"
              href="/demo-react-hock-form-val"
            >
              Demo-Dynamic-form{" "}
            </a>
          </div> */}

          <div className="navbar-nav">
            <a
              className="nav-item nav-link active"
              href="/updateFormula"
            >
              Update-formula-Dynamic-form{" "}
            </a>
          </div>
          <div className="navbar-nav">
            <a
              className="nav-item nav-link active"
              href="/updateFormula2"
            >
              Update-formula-Dynamic-form-2{" "}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
