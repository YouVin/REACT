interface CounterAction {
  type: "UP" | "DOWN" | "RESET";
  value: number;
}

function counterReducer(state: number, action: CounterAction) {
  // (6, { type: 'UP', value: 1 }) => 7
  if (action.type === "DOWN") {
    state -= action.value;
  } else if (action.type === "UP") {
    state += action.value;
  } else {
    state = action.value;
  }
  return state;
}

export default counterReducer;
