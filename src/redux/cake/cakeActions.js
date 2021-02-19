import { BUY_CAKE } from "./cakeTypes";

// Action generator
export const buyCake = (quantity) => {
  return {
    type: BUY_CAKE,
    payload: {
      quantity,
    },
  };
};
