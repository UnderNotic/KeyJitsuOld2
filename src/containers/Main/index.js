import React from "react";
import { connect } from "react-redux";
import { toggle } from "./indexDuck";

export const App = ({ dispatch, isToggled }) => {
  return (
    <div>
      <button onClick={() => dispatch(toggle())} data-test="btn">
        Test Button
      </button>
      {isToggled.toString()}
    </div>
  );
};

function mapStateToProps(state) {
  const { mainReducer } = state;
  const { isToggled } = mainReducer;
  return {
    isToggled
  };
}

export default connect(mapStateToProps)(App);
