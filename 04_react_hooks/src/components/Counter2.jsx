import { useImperativeHandle, forwardRef, useState } from "react";

// Counter2 组件，使用 forwardRef 和 useImperativeHandle 来暴露 reset 方法给父组件
const Counter2 = forwardRef((props, ref) => {
  const [count, setCount] = useState(10); // 初始化计数为 10

  // 使用 useImperativeHandle 暴露 reset 方法
  useImperativeHandle(ref, () => ({
    reset: () => {
      setCount(0); // 重置计数为 0
    },
  }));

  return (
    <div>
      Count: {count} {/* 显示当前计数 */}
    </div>
  );
});

export default Counter2;
