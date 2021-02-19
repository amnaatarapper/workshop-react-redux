import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numberOficecreams: 100,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOficecreams: state.numberOficecreams - action.payload.quantity,
      };

    default:
      return state;
  }
};

export default icecreamReducer;
