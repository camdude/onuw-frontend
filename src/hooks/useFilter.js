import { useReducer, useCallback } from "react";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGED":
      return {
        ...state,
        [action.id]: action.value
      };
    
    default:
      return state;
  }
};

export const useFilter = initialFilterState => {
  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  const inputHandler = useCallback(
    (inputId, inputValue) => {
      dispatch({
        type: "INPUT_CHANGED",
        id: inputId,
        value: inputValue
      });
    },
    [dispatch]
  );

  return [filterState, inputHandler];
};
