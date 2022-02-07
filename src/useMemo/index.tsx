import React, { ReactElement, useCallback, useState } from "react";

const Example = () => {
  const [n, setN] = useState<number>(0);
  const [m, setM] = useState<number>(10);
  console.log("执行最外层盒子了");

  const addN = useCallback(() => {
    setN(n + 1);
  }, [n]);

  const addM = useCallback(() => {
    setM(m + 1);
  }, [m]);
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      最外层盒子
      <Child1 value={n} onClick={addN} />
      <Child2 value={m} onClick={addM} />
      <button onClick={addN}>n+1</button>
      <button onClick={addM}>m+1</button>
    </div>
  );
};

interface childProp {
  value: number;
  onClick?: () => void;
}

const Child1 = React.memo((props: childProp): ReactElement<childProp> => {
  console.log("执行子组件1了");
  return <div>子组件1上的n：{props.value}</div>;
});

const Child2 = React.memo((props: childProp): ReactElement<childProp> => {
  console.log("执行子组件2了");
  return <div>子组件2上的m：{props.value}</div>;
});

export default Example;
