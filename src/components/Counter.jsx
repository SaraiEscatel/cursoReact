import React, { useContext, useReducer } from "react";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const myContext = React.createContext(null);

const Points = () => {
  const state = useContext(myContext);
  return <p>Points: {state.count}</p>;
};

const Counter = () => {
  //Inicia State for REucer
  const inicialState = {
    count: 0,
  };

  //REducer to change State
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          count: state.count + (action.payload?.quantity || 1),
        };
      case DECREMENT:
        return {
          count: state.count - (action.payload?.quantity || 1),
        };
      case RESET:
        return {
          count: 0,
        };
      default:
        return state;
    }
  };
  //Asign useReducr to state, reducer and dispatch actions
  const [state, dispatch] = useReducer(reducer, inicialState);

  return (
    <myContext.Provider value={state}>
      <div>
        <h1>Use Reducer Examples</h1>
        <Points />
        <button
          onClick={() =>
            dispatch({
              type: INCREMENT,
              payload: {
                quantity: 2,
              },
            })
          }
        >
          INCREMENT
        </button>
        <button
          onClick={() =>
            dispatch({
              type: DECREMENT,
              payload: {
                quantity: 1,
              },
            })
          }
        >
          Decrement Counter
        </button>
        <button
          onClick={() =>
            dispatch({
              type: RESET,
            })
          }
        >
          Reset Count
        </button>
      </div>
    </myContext.Provider>
  );
};

export default Counter;
