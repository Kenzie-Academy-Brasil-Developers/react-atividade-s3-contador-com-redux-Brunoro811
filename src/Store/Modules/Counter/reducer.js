import { ADD_ONE, SUB_ONE } from "./actionsType";
const initialState = { number: 0 };
const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return { number: state.number + action.number };
    case SUB_ONE:
      return { number: state.number - action.number };
    default:
      return state;
  }
};
export default reducerCounter;
