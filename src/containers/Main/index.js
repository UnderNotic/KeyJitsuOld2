import React from "react";
import { NavLink } from "react-router-dom";
import katanaSvg from "images/katana.svg";
import vsCode from "images/visual-studio-code.svg";
import vs from "images/visual-studio.svg";

export default ({ dispatch, isToggled }) => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-around text-center align-items-center">
        <img className="col-12 img-fluid" src={katanaSvg} alt="katana" />
        <div className="col-3">
          <img src={vsCode} className="img-fluid" alt="katana" />
        </div>
        <div className="col-3">
          <img src={vs} className="img-fluid" alt="katana" />
        </div>
        <img className="col-12 rotate180 img-fluid" src={katanaSvg} alt="katana" />
      </div>
    </div>
  );
};
