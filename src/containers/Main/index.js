import React from "react";
import { NavLink } from "react-router-dom";

export default ({ dispatch, isToggled }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
      </div>
    </div>
  );
};
