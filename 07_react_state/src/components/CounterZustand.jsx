import useCounterStore from "../store/counterStore";

const CounterZustand = () => {
  // 从 useCounterStore 中获取状态和方法
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h2>Zustand计数器</h2>
      {/* 显示当前计数 */}
      <p>当前计数：{count}</p>
      {/* 点击按钮调用 increment 方法 */}
      <button onClick={increment}>增加</button>
      {/* 点击按钮调用 decrement 方法 */}
      <button onClick={decrement}>减少</button>
    </div>
  );
};

export default CounterZustand;
