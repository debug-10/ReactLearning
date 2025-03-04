import { useState } from "react";

const TodoList = () => {
  // 使用 useState 管理待办事项列表
  // todos 是一个数组，每个元素是一个对象，包含 text（事项内容）和 completed（是否完成）两个属性
  const [todos, setTodos] = useState([]);

  // 使用 useState 管理用户输入的待办事项
  const [newTodo, setNewTodo] = useState("");

  // 处理输入框内容变化
  const handleInputChange = (e) => {
    setNewTodo(e.target.value); // 更新 newTodo 的值为用户输入的内容
  };

  // 处理添加待办事项
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      // 如果输入内容不为空，则将新事项添加到 todos 列表中
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // 处理切换待办事项的完成状态
  const handleToggleComplete = (index) => {
    // 遍历 todos 列表，找到对应索引的事项，切换其 completed 状态
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos); // 更新 todos 列表
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange} // 监听输入框内容变化
          placeholder="输入新的待办事项"
        />
        <button onClick={handleAddTodo}>添加</button> {/* 点击按钮添加事项 */}
      </div>
      {/* 待办事项列表 */}
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index} // 每个事项的唯一标识
            style={{
              textDecoration: todo.completed ? "line-through" : "none", // 根据 completed 状态显示划线样式
            }}
            onClick={() => handleToggleComplete(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
