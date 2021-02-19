import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer({ buyCakeHandler, numberOfCakes }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={() => buyCakeHandler(quantity)}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { numberOfCakes } = state.cake;
  return {
    numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakeHandler: (quantity) => {
      dispatch(buyCake(quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
