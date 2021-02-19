import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamActions";

function CakeContainer({ buyIcecreamHandler, numberOficecreams }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h2>Number of Icecreams - {numberOficecreams}</h2>
      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={() => buyIcecreamHandler(quantity)}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { numberOficecreams } = state.icecream;
  return {
    numberOficecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecreamHandler: (quantity) => {
      dispatch(buyIcecream(quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
