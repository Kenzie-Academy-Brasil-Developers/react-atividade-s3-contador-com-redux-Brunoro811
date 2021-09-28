import { ADD_ONE, SUB_ONE } from "./actionsType";
export const addNumber = (number) => ({
  type: ADD_ONE,
  number: number,
});
export const subNumber = (number) => ({
  type: SUB_ONE,
  number: number,
});
