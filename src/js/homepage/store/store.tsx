import * as React from "react";

const { createContext, useReducer } = React;

export const HomePageContext = createContext([]);

function reducer(state, action) {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return { ...state, data: action.payload };
    default:
      throw Error("reducer error");
  }
}

const Store: React.FC = props => {
  const stateHook = useReducer(reducer, { data: [] });
  return (
    <HomePageContext.Provider value={stateHook}>
      {props.children}
    </HomePageContext.Provider>
  );
};

export { Store };
