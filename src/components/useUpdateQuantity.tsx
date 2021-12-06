import React, { useState, useCallback } from "react";

const initialQuantity = 0;

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(quantity: number, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return quantity + 1;
    case "decrement":
      return quantity - 1;
  }
}

function useUpdateQuantity(
  reducer: Function,
  initQuantity: number
): [number, Function] {
  const [quantity, setQuantity] = useState(initQuantity);

  const dispatch = useCallback(
    (action) => {
      const nextState = reducer(quantity, action);
      setQuantity(nextState);
    },
    [setQuantity, quantity]
  );

  return [quantity, dispatch];
}

const Counter = () => {
  const [quantity, dispatch] = useUpdateQuantity(reducer, initialQuantity);

  return (
    <React.Fragment>
      Count: {quantity}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </React.Fragment>
  );
};

export default Counter;
