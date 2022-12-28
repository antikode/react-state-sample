import React from "react";

//Components
import ChildrenComp from "../components/stateComp";

//Define initialState
const initialState = {
  message: "initial message",
  count: 0,
  users: null,
};

//Define type
export const SET_MESSAGE = "SET_MESSAGE";
export const SET_COUNT_INCREMENT = "SET_COUNT_INCREMENT";
export const SET_COUNT_DECREMENT = "SET_COUNT_DECREMENT";
export const SET_USERS = "SET_USERS";

//CreateContext from react
export const ParentContext = React.createContext();

//Create reducer
const reducer = (state, value) => {
  if (typeof value !== "object") {
    return state;
  }
  return { ...state, ...value };
};

const AboutPage = () => {
  //States ***************************************************************************** //
  const [state, setState] = React.useReducer(reducer, initialState);
  //States ***************************************************************************** //
  return (
    <ParentContext.Provider value={{ state, setState }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChildrenComp />
      </div>
    </ParentContext.Provider>
  );
};

export default AboutPage;
