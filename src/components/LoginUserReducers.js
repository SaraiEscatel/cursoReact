import React, { useReducer } from "react";

const FIELD = "FIELD";
const LOGIN = "LOGIN";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";
const LOGOUT = "LOGOUT";
//Initial State
const initialState = {
  username: "",
  password: "",
  isLoading: false,
  isLoggedIn: false,
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        error: "",
        isLoading: true,
        isLoggedIn: false,
      };
    case SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload || "Invalid Username or Password",
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

const LoginUseReducers = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  //Obtain all variables from state
  const { username, password, error, isLoading, isLoggedIn } = state;
  //Submit

  const login = ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin") {
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 2000);
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN });
    try {
      await login({ username, password });

      dispatch({ type: SUCCESS });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p style={{ color: "tomato" }}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            dispatch({
              type: FIELD,
              fieldName: "username",
              payload: e.currentTarget.value,
            })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            dispatch({
              type: FIELD,
              fieldName: "password",
              payload: e.currentTarget.value,
            })
          }
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginUseReducers;
