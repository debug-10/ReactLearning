import { useRef } from "react";
import Counter2 from "./Counter2";

const Parent2 = () => {
  const counterRef = useRef(); // 创建一个 ref，用于引用子组件 Counter2

  return (
    <div>
      <Counter2 ref={counterRef} /> {/* 将 ref 传递给子组件 Counter2 */}
      <button onClick={() => counterRef.current.reset()}>
        {/* 调用子组件暴露的 reset 方法 */}
        Reset Count
      </button>
    </div>
  );
};

export default Parent2;
