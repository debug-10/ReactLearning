import { create } from "zustand";

// 创建一个 Zustand 状态管理 store
const useCounterStore = create((set) => ({
  count: 0, // 初始状态：计数器值为 0
  increment: () => set((state) => ({ count: state.count + 1 })), // 增加计数器值
  decrement: () => set((state) => ({ count: state.count - 1 })), // 减少计数器值
}));

export default useCounterStore;
