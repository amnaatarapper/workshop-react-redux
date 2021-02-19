import { BUY_ICECREAM } from "./icecreamTypes";

// Action generator
export const buyIcecream = (quantity) => {
  return {
    type: BUY_ICECREAM,
    payload: {
      quantity,
    },
  };
};
