import { createContext } from "react";
import { useReducer } from "react";
const INITIAL_STATE = {
  departure: undefined,
  arrival: undefined,
  date: [],
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  return (
    <SearchContext.Provider
      value={{
        departure: state.departure,
        arrival: state.arrival,
        date: state.date,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
