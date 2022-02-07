import { useReducer } from "react";

const initState = {
  num: 0,
};

interface initStateType {
  num: number;
}

interface actionType {
  type: string;
}

const numReducer = (state: initStateType, action: actionType) => {
  switch (action.type) {
    case "add":
      return { ...state, num: state.num + 1 };
    case "reduce":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};

const Example = () => {
  const [state, dispatch] = useReducer(numReducer, initState);
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <div>数量： {state.num}</div>
      <button onClick={() => dispatch({ type: "reduce" })}>减少</button>
      <button onClick={() => dispatch({ type: "add" })}>增加</button>
    </div>
  );
};

export default Example;
